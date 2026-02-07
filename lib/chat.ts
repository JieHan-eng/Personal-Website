import { readFileSync } from "fs";
import { join } from "path";

const OPENAI_MODEL = "gpt-4o-mini";
// Optional: set OPENAI_CHAT_MAX_TOKENS (e.g. 256) in .env.local to lower cost per reply (default 500)
const MAX_TOKENS = Math.min(2000, Math.max(100, parseInt(process.env.OPENAI_CHAT_MAX_TOKENS ?? "500", 10) || 500));

function loadKnowledge(): string {
  try {
    const about = readFileSync(join(process.cwd(), "data", "about.md"), "utf-8");
    const projects = readFileSync(
      join(process.cwd(), "data", "projects.md"),
      "utf-8"
    );
    return `## About\n${about}\n\n## Projects\n${projects}`;
  } catch {
    return "No knowledge base found.";
  }
}

// Expand query with synonyms so "age" / "how old" match "22", "nationality" matches "Malaysia", etc.
const QUERY_EXPANSIONS: Record<string, string[]> = {
  age: ["age", "old", "birthday", "22", "years"],
  nationality: ["nationality", "from", "country", "malaysia", "malaysian"],
  where: ["from", "location", "live", "manchester", "malaysia", "penang"],
  contact: ["email", "contact", "reach", "oh.jie.han"],
  skills: ["skills", "tech", "programming", "c", "python", "vhdl", "stack", "tools"],
  education: ["education", "university", "manchester", "degree", "beng", "course"],
  experience: ["experience", "intern", "amd", "lattice", "work", "did", "role", "job"],
  projects: ["projects", "hackathon", "agentverse", "hackabot", "buggy", "line-following", "robot", "quantum", "shor", "algorithms"],
  volunteer: ["volunteer", "selfless", "food bank", "tutoring"],
};

function expandQuery(query: string): string {
  const q = query.toLowerCase().trim();
  let expanded = q;
  for (const [key, words] of Object.entries(QUERY_EXPANSIONS)) {
    if (words.some((w) => q.includes(w))) {
      expanded += " " + words.join(" ");
    }
  }
  return expanded;
}

// Simple text search: score by keyword overlap (case-insensitive).
function scoreRelevance(text: string, query: string): number {
  const expanded = expandQuery(query);
  const q = expanded.toLowerCase().replace(/\s+/g, " ").trim();
  const words = Array.from(new Set(q.split(/\s+/).filter((w) => w.length > 0)));
  if (words.length === 0) return 0;
  const lower = text.toLowerCase();
  let score = 0;
  for (const w of words) {
    if (lower.includes(w)) score += 1;
  }
  return score / words.length;
}

// Chunk by sections (## or ###) and return the best chunks. Always include the intro so general questions get answered.
function getRelevantChunks(knowledge: string, query: string, maxChars = 6000): string {
  const sections = knowledge.split(/(?=^##\s)/m).filter(Boolean);
  const intro = sections[0] ?? "";
  const rest = sections.slice(1);
  const scored = rest.map((s) => ({
    text: s,
    score: scoreRelevance(s, query),
  }));
  scored.sort((a, b) => b.score - a.score);
  // Always include intro (first section) so "who is this", "tell me about" work
  let out = intro.length <= maxChars ? intro : intro.slice(0, maxChars);
  const remaining = maxChars - out.length;
  if (remaining <= 0) return out;
  for (const { text } of scored) {
    if (out.length + text.length <= maxChars) {
      out += "\n\n" + text;
    } else {
      const take = Math.min(text.length, remaining);
      if (take > 200) out += "\n\n" + text.slice(0, take);
      break;
    }
  }
  return out || knowledge.slice(0, maxChars);
}

// Build a retrieval query from the last 2 user messages so follow-ups ("what about the tech?", "tell me more") get the right context.
function buildRetrievalQuery(messages: { role: string; content: string }[]): string {
  const userMessages = messages.filter((m) => m.role === "user").map((m) => m.content.trim()).filter(Boolean);
  const lastTwo = userMessages.slice(-2);
  return lastTwo.join(" ").trim() || "general background";
}

export interface ChatPayload {
  messages: { role: string; content: string }[];
}

export async function answerWithRag(payload: ChatPayload): Promise<string> {
  const knowledge = loadKnowledge();
  const query = buildRetrievalQuery(payload.messages);
  const context = getRelevantChunks(knowledge, query);

  const apiKey = process.env.OPENAI_API_KEY;
  const unableMsg =
    "I'm unable to answer that based on the information on this website. Please email oh.jie.han@gmail.com for more details.";

  if (apiKey) {
    try {
      const { default: OpenAI } = await import("openai");
      const openai = new OpenAI({ apiKey });
      const sys = `You are a helpful assistant that answers questions about the portfolio owner (Jie Han Oh) using ONLY the provided context below.

Rules:
- Base your answer ONLY on the context. Do not invent or assume any facts.
- If the answer is not in the context, reply with exactly: "I'm unable to answer that based on the information on this website. Please email oh.jie.han@gmail.com for more details."
- Keep answers concise and factual. Use a friendly, professional tone. Vary your phrasing naturally—do not repeat the same sentence structures for different questions.`;
      const res = await openai.chat.completions.create({
        model: OPENAI_MODEL,
        messages: [
          { role: "system", content: sys + "\n\n---\nContext:\n" + context },
          ...payload.messages.map((m) => ({
            role: m.role as "user" | "assistant" | "system",
            content: m.content,
          })),
        ],
        max_tokens: MAX_TOKENS,
        temperature: 0.7,
      });
      const content = res.choices[0]?.message?.content?.trim();
      return content || unableMsg;
    } catch (err) {
      console.error("OpenAI error:", err);
      return fallbackAnswer(context, query);
    }
  }

  return fallbackAnswer(context, query);
}

function fallbackAnswer(context: string, query: string): string {
  if (!context || context === "No knowledge base found.") {
    return "I'm unable to answer that based on the information on this website. Please email oh.jie.han@gmail.com for details.";
  }
  // Context is already query-relevant from getRelevantChunks. Return a concise snippet.
  const snippet = context.slice(0, 2200);
  return `Here’s relevant information from this website:\n\n${snippet}${context.length > 2200 ? "\n\n…" : ""}\n\nIf this doesn’t For tailored answers, the site owner can enable the AI chat (OpenAI API). Otherwise, email oh.jie.han@gmail.com for more details.`;
}

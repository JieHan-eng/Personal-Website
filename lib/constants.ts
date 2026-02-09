// ========== PERSONALIZE: Update these with your details ==========
export const SITE = {
  name: "Jie Han Oh",
  headline: "Dynamic Engineer — Silicon validation, AI agents, embedded systems, quantum algorithms.",
  email: "oh.jie.han@gmail.com",
  location: "Manchester, UK",
  linkedin: "https://linkedin.com/in/jie-han-oh-767a172a5/",
  github: "https://github.com/JieHan-eng",
  cvPath: "/cv",
} as const;

/** Intro/personality for the chat (digital twin). Shown when chat opens and used when an AI API is available. */
export const CHAT_SYSTEM_MESSAGE =
  "Hi, I'm Jie Han's digital twin. I'm running on a lightweight setup to keep costs low, but I'm an expert on his 2024–2026 roadmap. Ask me anything about his work, education, or projects.";

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  projects: "projects",
  skills: "skills",
  highlights: "highlights",
  volunteering: "volunteering",
  recommendations: "recommendations",
  contact: "contact",
} as const;

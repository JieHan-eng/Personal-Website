import { answerWithRag } from "@/lib/chat";
import type { ChatPayload } from "@/lib/chat";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const messages = body.messages as ChatPayload["messages"];
    if (!Array.isArray(messages)) {
      return Response.json(
        { error: "Missing or invalid messages" },
        { status: 400 }
      );
    }
    const message = await answerWithRag({ messages });
    return Response.json({ message });
  } catch (e) {
    console.error("Chat API error:", e);
    return Response.json(
      { error: "Something went wrong. Please try again or email directly." },
      { status: 500 }
    );
  }
}

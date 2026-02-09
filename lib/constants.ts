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

/** Intro/personality for the chat (digital twin). Shown when chat opens. */
export const CHAT_SYSTEM_MESSAGE =
  "I'm Jie Han's digital twin. Ask me about his projects, internships at AMD and Lattice, skills, or anything on this portfolio.";

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

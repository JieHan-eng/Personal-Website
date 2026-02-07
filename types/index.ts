export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  links: { label: string; href: string }[];
  impact: string[];
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

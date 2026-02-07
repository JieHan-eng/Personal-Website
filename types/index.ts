export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  role: string;
  links: { label: string; href: string }[];
  impact: string[];
  /** Optional single image path shown at top of card */
  image?: string;
  /** Optional multiple images (e.g. Hackabot 2024/2025) shown as a row */
  images?: string[];
  /** Optional CSS object-position per image (e.g. ["center", "right top"] to show right side of second image) */
  imagePositions?: string[];
  /** Optional short video: YouTube/Vimeo URL or path to file in public/ (e.g. /hackabot-video.mp4) */
  video?: string;
  /** Set true if the video is portrait (vertical) so it displays with correct aspect ratio */
  videoPortrait?: boolean;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

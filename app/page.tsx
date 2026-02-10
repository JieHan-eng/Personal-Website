import { readFileSync } from "fs";
import { join } from "path";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Volunteering from "@/components/Volunteering";
import Recommendations from "@/components/Recommendations";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";
import { SITE } from "@/lib/constants";

function getAboutContent(): string {
  try {
    return readFileSync(
      join(process.cwd(), "data", "about.md"),
      "utf-8"
    );
  } catch {
    return `# About\n\nContent from \`data/about.md\` will appear here.`;
  }
}

export default function Home() {
  const aboutContent = getAboutContent();
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Projects />
      <Recommendations />
      <Volunteering />
      <About content={aboutContent} />
      <Skills />
      <Timeline />
      <Contact />
      <ChatWidget userName={SITE.name} />
    </main>
  );
}

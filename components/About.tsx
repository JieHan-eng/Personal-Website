"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";

interface AboutProps {
  content: string;
}

type Block = { type: "section"; title: string; blocks: ContentBlock[] } | { type: "intro"; lines: string[] };
type ContentBlock = { type: "p"; text: string } | { type: "list"; items: string[] };

function stripBold(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

function parseAbout(raw: string): Block[] {
  const result: Block[] = [];
  const sections = raw.split(/\n##\s+/);

  // Intro (before first ##)
  const introText = sections[0].trim();
  if (introText) {
    const lines = introText.split(/\n/).map((l) => l.trim()).filter(Boolean);
    result.push({ type: "intro", lines });
  }

  for (let i = 1; i < sections.length; i++) {
    const section = sections[i];
    const firstNewline = section.indexOf("\n");
    const title = firstNewline === -1 ? section.trim() : section.slice(0, firstNewline).trim();
    const body = firstNewline === -1 ? "" : section.slice(firstNewline + 1).trim();

    const contentBlocks: ContentBlock[] = [];
    const chunks = body.split(/\n\n+/);

    for (const chunk of chunks) {
      const trimmed = chunk.trim();
      if (!trimmed) continue;

      const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
      const allListItems = lines.length > 0 && lines.every((l) => /^[-*]\s+/.test(l) || l.startsWith("- "));

      if (allListItems && lines.length >= 1) {
        const items = lines.map((l) => stripBold(l.replace(/^[-*]\s+/, "").trim()));
        contentBlocks.push({ type: "list", items });
      } else {
        contentBlocks.push({ type: "p", text: stripBold(trimmed) });
      }
    }

    result.push({ type: "section", title, blocks: contentBlocks });
  }

  return result;
}

export default function About({ content }: AboutProps) {
  const blocks = parseAbout(content);

  return (
    <section
      id={SECTION_IDS.about}
      className="scroll-mt-20 py-16 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-10"
        >
          About
        </motion.h2>

        <div className="space-y-8">
          {blocks.map((block, blockIndex) => {
            if (block.type === "intro") {
              return (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-slate-600 dark:text-slate-400 leading-relaxed space-y-2"
                >
                  {block.lines.map((line, i) => (
                    <p key={i}>{stripBold(line)}</p>
                  ))}
                </motion.div>
              );
            }

            return (
              <motion.article
                key={block.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(blockIndex * 0.05, 0.25) }}
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 p-5 sm:p-6"
              >
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-100 mb-3 pb-2 border-b border-slate-200 dark:border-slate-700">
                  {block.title}
                </h3>
                <div className="space-y-4">
                  {block.blocks.map((b, i) =>
                    b.type === "p" ? (
                      <p
                        key={i}
                        className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed"
                      >
                        {b.text}
                      </p>
                    ) : (
                      <ul key={i} className="list-none space-y-1.5 pl-0">
                        {b.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex gap-2 text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed"
                          >
                            <span className="text-accent dark:text-accent-muted shrink-0">—</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

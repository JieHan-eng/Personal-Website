"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";

const LETTERS = [
  {
    id: "amd",
    title: "AMD — Internship recommendation",
    subtitle: "Loo Chin Shen, Senior Staff Engineer, Product Development Engineering",
    summary:
      "Recommendation letter praising technical skills, dedication, and high-quality work under deadlines; script for PCIe capability extraction and register comparison; strong communication and eagerness to learn.",
    href: "/recommendation-amd.png",
  },
  {
    id: "selfless",
    title: "SelflessTogether — Volunteer tutoring reference",
    subtitle: "Dr. Lim Yew Lyn, Founder (Nov 2022)",
    summary:
      "Reference letter confirming volunteer tutoring in Mathematics & English for refugee kids (ages 7–9) via virtual class, July–Oct 2021; thanks for commitment and willingness to share knowledge.",
    href: "/recommendation-selfless-together.pdf",
  },
];

export default function Recommendations() {
  return (
    <section
      id={SECTION_IDS.recommendations}
      className="scroll-mt-20 py-16 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Recommendations
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 mb-10"
        >
          Recommendation and reference letters. Open the link to view the full letter.
        </motion.p>

        <div className="space-y-6">
          {LETTERS.map((letter, idx) => (
            <motion.article
              key={letter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
            >
              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  {letter.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  {letter.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                  {letter.summary}
                </p>
              </div>
              <a
                href={letter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                View letter
                <span aria-hidden>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";

const HIGHLIGHTS: { period: string; title: string; org?: string; bullets?: string[] }[] = [
  {
    period: "Nov 2025",
    title: "AgentVerse Hackathon",
    org: "UCL London",
    bullets: ["AI onboarding agent", "GitHub & Slack APIs", "Anam AI voice avatar", "Pitch video on YouTube"],
  },
  {
    period: "Jun – Sept 2025",
    title: "Lattice Semiconductor",
    org: "Internship · DDR IP",
    bullets: ["LPDDR4/DDR3 support", "Pin assignment automation", "Critical bug fixes"],
  },
  {
    period: "Mar 2024 – Mar 2025",
    title: "Hackabot",
    org: "Robosoc Society Manchester",
    bullets: ["2024: Two bots, collaborative maze mapping", "2025: CV-based sensor-less navigation", "Vibe coding"],
  },
  {
    period: "Jun – Sept 2024",
    title: "AMD",
    org: "Internship",
    bullets: ["PCIe extraction (Bash)", "Register comparison (Python)", "Workflow integration"],
  },
  {
    period: "Sep 2024 – Jun 2025",
    title: "Line-following buggy",
    org: "University of Manchester",
    bullets: ["Lead coder, team of 5", "PID on MCU", "Design docs, test plans, pitch"],
  },
  {
    period: "Education",
    title: "BEng Electronic Engineering",
    org: "University of Manchester · First-Class track to July 2026",
    bullets: ["Year 1: 88%, Year 2: 81%", "A-Levels: 1A* & 3A's (KYUEM, Malaysia)"],
  },
];

export default function Timeline() {
  return (
    <section
      id={SECTION_IDS.highlights}
      className="scroll-mt-20 py-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Highlights & achievements
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 mb-10"
        >
          Hackathons, internships, and key milestones.
        </motion.p>
        <div className="relative space-y-0">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title + h.period}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative pl-10 pb-8"
            >
              <span className="absolute left-0 w-6 h-6 rounded-full bg-accent/20 dark:bg-accent/30 border-2 border-accent flex items-center justify-center text-xs font-medium text-accent">
                {i + 1}
              </span>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                {h.period}
              </p>
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {h.title}
              </h3>
              {h.org && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {h.org}
                </p>
              )}
              {h.bullets && h.bullets.length > 0 && (
                <ul className="mt-1 text-sm text-slate-500 dark:text-slate-400 list-disc list-inside">
                  {h.bullets.slice(0, 3).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

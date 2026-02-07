"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";

const GROUPS: { title: string; items: string[] }[] = [
  {
    title: "Languages & tools",
    items: ["C", "C++", "VHDL", "Matlab", "Python", "Bash"],
  },
  {
    title: "Platforms & hardware",
    items: ["Altium", "Simulink", "Excel", "Soldering", "Unix / Linux"],
  },
  {
    title: "Domains",
    items: [
      "Digital systems design",
      "Computer architecture",
      "DSP & control systems",
      "PCIe / DDR",
      "Fast prototyping",
      "API integration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="scroll-mt-20 py-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Skills & stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 mb-10"
        >
          Relevant for hackathons: fast prototyping, APIs, integration, and
          end-to-end ownership.
        </motion.p>
        <div className="grid sm:grid-cols-3 gap-6">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

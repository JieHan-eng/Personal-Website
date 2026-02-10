"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE, SECTION_IDS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={item}
          className="text-sm font-mono text-accent dark:text-accent-muted mb-2"
        >
          Electronic Engineer · University of Manchester
        </motion.p>
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
        >
          {SITE.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-6"
        >
          {SITE.headline}
        </motion.p>
        <motion.p
          variants={item}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mb-8"
        >
          Combines rigorous engineering with practical delivery: from silicon
          validation and embedded systems to AI agents and quantum algorithms.
          Experienced in leading teams, authoring design docs, and shipping
          end-to-end. Eager to bring a fast-learning mindset to a 2026 graduate
          engineering role.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-3">
          <Link
            href={`#${SECTION_IDS.projects}`}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </Link>
          <Link
            href={SITE.cvPath}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            View CV
          </Link>
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-slate-600 dark:text-slate-400 font-medium hover:text-accent transition-colors"
          >
            Email me
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SITE, SECTION_IDS } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-20 py-16 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-700"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Get in touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 mb-8"
        >
          Open to 2026 graduate roles, hackathons, and collaborations. Use the
          chat widget to ask about my projects, or reach out directly.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-opacity"
          >
            Email me
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            LinkedIn
          </a>
          {SITE.github && (
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              GitHub
            </a>
          )}
        </motion.div>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
          {SITE.location} · {SITE.email}
        </p>
      </div>
    </section>
  );
}

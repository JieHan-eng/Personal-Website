"use client";

import { motion } from "framer-motion";
import { SECTION_IDS } from "@/lib/constants";

const ENTRIES = [
  {
    role: "Volunteer Tutor",
    organization: "Selfless Together",
    dates: "Jul 2021 – Oct 2021",
    duration: "4 mos",
    cause: "Children",
    description:
      "Selfless Together is a non-governmental organization that helps provide basic necessities for refugees mainly from Myanmar. I volunteered to teach Mathematics and English to refugee kids (ages 7–9) by virtual class, and personally planned out the classes and materials. A reference letter from the founder is in the Recommendations section.",
    link: null as string | null,
  },
  {
    role: "Volunteer",
    organization: "Pandemic Food Bank (sponsored by CLOB86)",
    dates: "Jul 2021 – Aug 2021",
    duration: "2 mos",
    cause: "Poverty Alleviation",
    description:
      "Helped to distribute food to 4,500 recipients over a period of 10 days and raised a total of $30,000 worth of donations.",
    note: "Chung Ling Old Boys reunite after 35 years to help the hungry",
    link: "https://www.freemalaysiatoday.com/category/leisure/2021/07/31/chung-ling-old-boys-reunite-after-35-years-to-help-the-hungry",
  },
];

export default function Volunteering() {
  return (
    <section
      id={SECTION_IDS.volunteering}
      className="scroll-mt-20 py-16 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2"
        >
          Volunteering
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 dark:text-slate-400 mb-10"
        >
          Teaching, community support, and poverty alleviation.
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-6">
          {ENTRIES.map((entry, i) => (
            <motion.article
              key={entry.organization}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 sm:p-6 hover:border-accent/40 dark:hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {entry.dates}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  ·
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {entry.duration}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {entry.role}
              </h3>
              <p className="text-sm font-medium text-accent dark:text-accent-muted mb-1">
                {entry.organization}
              </p>
              <span className="inline-block px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 mb-3">
                {entry.cause}
              </span>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {entry.description}
              </p>
              {entry.note && (
                <p className="mt-2 text-xs italic text-slate-500 dark:text-slate-500">
                  {entry.note}
                </p>
              )}
              {entry.link && (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Read more
                  <span aria-hidden>→</span>
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

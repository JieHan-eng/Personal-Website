"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { SITE, SECTION_IDS } from "@/lib/constants";

const SECTIONS = [
  { id: SECTION_IDS.projects, label: "Projects" },
  { id: SECTION_IDS.recommendations, label: "Recommendations" },
  { id: SECTION_IDS.volunteering, label: "Community" },
  { id: SECTION_IDS.about, label: "About" },
  { id: SECTION_IDS.skills, label: "Skills" },
  { id: SECTION_IDS.highlights, label: "Highlights" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

export default function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean
    ) as Element[];
    els.forEach((el) => observer.observe(el));
    return () => els.forEach((el) => observer.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 dark:border-slate-700/80 bg-[var(--background)]/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-semibold text-slate-800 dark:text-slate-100 hover:text-accent transition-colors"
        >
          {SITE.name}
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`hidden sm:inline-block px-2 py-1 rounded text-sm transition-colors ${
                activeId === s.id
                  ? "text-accent font-medium"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
              }`}
            >
              {s.label}
            </button>
          ))}
          <Link
            href={SITE.cvPath}
            className="hidden sm:inline-block px-2 py-1 rounded text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors"
          >
            CV
          </Link>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    className="inline-block"
                  >
                    ☀️
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    className="inline-block"
                  >
                    🌙
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

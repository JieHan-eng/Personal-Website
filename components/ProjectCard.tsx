"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-5 sm:p-6 hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
    >
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-accent dark:text-accent-muted font-medium mb-2">
          {project.tagline}
        </p>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
        {project.impact.length > 0 && (
          <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4">
            {project.impact.slice(0, 2).map((imp, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-accent">→</span>
                {imp}
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
          {project.role && (
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {project.role}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

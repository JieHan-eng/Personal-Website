"use client";

import { motion } from "framer-motion";
import type { Project } from "@/types";

function getYouTubeEmbedUrl(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : null;
}

function getVimeoEmbedUrl(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? `https://player.vimeo.com/video/${m[1]}` : null;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const youtubeEmbed = project.video ? getYouTubeEmbedUrl(project.video) : null;
  const vimeoEmbed = project.video && !youtubeEmbed ? getVimeoEmbedUrl(project.video) : null;
  const isEmbed = !!(youtubeEmbed || vimeoEmbed);
  const videoSrc = project.video && !isEmbed ? project.video : null;
  const hasMedia = (project.images?.length ? project.images : project.image ? [project.image] : []).length > 0;
  const mediaSources = project.images?.length ? project.images : project.image ? [project.image] : [];
  const isMultiImage = mediaSources.length > 1;

  const videoBlock = project.video ? (
    <div className="shrink-0 w-full md:w-[240px] lg:w-[260px] md:border-l md:border-slate-200 md:dark:border-slate-700 bg-slate-900/40 dark:bg-slate-900/60 p-4 md:pt-5 md:px-4 md:pb-4 flex md:flex-col items-center md:items-start justify-start">
      <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 w-full">
        Short video
      </p>
      {youtubeEmbed ? (
        <div
          className={`rounded-xl overflow-hidden bg-black ${project.videoPortrait ? "aspect-[9/16] w-full max-w-[200px] md:max-w-none" : "aspect-video w-full max-w-[320px]"}`}
        >
          <iframe
            src={youtubeEmbed}
            title={`${project.name} video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : vimeoEmbed ? (
        <div
          className={`rounded-xl overflow-hidden bg-black ${project.videoPortrait ? "aspect-[9/16] w-full max-w-[200px] md:max-w-none" : "aspect-video w-full max-w-[320px]"}`}
        >
          <iframe
            src={vimeoEmbed}
            title={`${project.name} video`}
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      ) : videoSrc ? (
        <div
          className={`rounded-xl overflow-hidden bg-black ${project.videoPortrait ? "aspect-[9/16] w-full max-w-[200px] md:max-w-none" : "aspect-video w-full max-w-[320px]"}`}
        >
          <video src={videoSrc} controls className="w-full h-full object-contain" preload="metadata">
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  ) : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-xl hover:shadow-slate-200/10 dark:hover:shadow-slate-900/20 transition-all duration-300"
    >
      <div className={project.video ? "flex flex-col md:flex-row md:min-h-0" : ""}>
        {/* Left: images + content */}
        <div className={project.video ? "flex-1 min-w-0 flex flex-col" : ""}>
          {/* Media block: one consistent area for images */}
          {hasMedia && (
            <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <div
                className={
                  isMultiImage
                    ? mediaSources.length === 2
                      ? "grid grid-cols-2 gap-3 p-4 min-h-[220px] sm:min-h-[260px]"
                      : "grid grid-cols-2 gap-3 p-4"
                    : "flex items-center justify-center p-5 min-h-[240px] sm:min-h-[280px]"
                }
              >
                {mediaSources.map((src, i) => (
                  <a
                    key={src + i}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block overflow-hidden rounded-lg bg-slate-200/50 dark:bg-slate-700/50 ${isMultiImage ? (mediaSources.length === 2 ? "min-h-[200px] sm:min-h-[240px]" : "min-h-[180px] sm:min-h-[220px]") : "w-full max-w-2xl"}`}
                  >
                <img
                  src={src}
                  alt={`${project.name} — photo ${i + 1}`}
                  className={`w-full h-full object-cover ${isMultiImage ? "min-h-[180px] sm:min-h-[220px]" : "max-h-80 sm:max-h-96 object-contain"}`}
                  style={project.imagePositions?.[i] ? { objectPosition: project.imagePositions[i] } : undefined}
                />
                  </a>
                ))}
              </div>
              {project.links.length > 0 && (
                <div className="px-4 pb-4 flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                    >
                      {link.label}
                      <span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content: same order and spacing for every card */}
          <div className="p-5 sm:p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1.5 group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-accent dark:text-accent-muted mb-3">
              {project.tagline}
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.impact.length > 0 && (
              <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1.5 mb-4">
                {project.impact.slice(0, 2).map((imp, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent shrink-0">→</span>
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap items-center gap-3 mt-auto pt-2 border-t border-slate-100 dark:border-slate-700/80">
              {!hasMedia && project.links.length > 0 && (
                <>
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
                  <span className="text-slate-300 dark:text-slate-600">·</span>
                </>
              )}
              {project.role && (
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {project.role}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right: video sidebar (only when project has video) */}
        {videoBlock}
      </div>
    </motion.article>
  );
}

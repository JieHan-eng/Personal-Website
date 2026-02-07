import Link from "next/link";
import { SITE } from "@/lib/constants";

// CV page is PDF-first: embed resume from public/resume.pdf.
// Replace public/resume.pdf with your final resume to update.
export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-700 bg-[var(--background)]/90 backdrop-blur shrink-0">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent"
          >
            ← Back to portfolio
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              Download PDF
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-accent"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </header>

      <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-4 py-4">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="w-full h-full min-h-[calc(100vh-5rem)] rounded-lg border border-slate-200 dark:border-slate-700 bg-white"
        />
      </div>
    </div>
  );
}

import React from 'react';
import { Download, Printer } from 'lucide-react';
import {
  COMMUNITY_EXPERIENCES,
  FEATURED_RESEARCH,
  PROJECTS,
  SITE_CONFIG,
  UNDERGRADUATE_RESEARCH,
} from '../data/portfolio';

export function CvPage() {
  const handleDownloadMarkdownCv = () => {
    if (SITE_CONFIG.cvPdfPath) {
      const a = document.createElement('a');
      a.href = SITE_CONFIG.cvPdfPath;
      a.download = 'Favour-Falade-CV.pdf';
      a.click();
      return;
    }

    const lines = [
      'FAVOUR FALADE',
      'Microbiology Graduate · Independent Data Science Practitioner · Interdisciplinary Researcher',
      `LinkedIn: ${SITE_CONFIG.socials.linkedin}`,
      `GitHub: ${SITE_CONFIG.socials.github}`,
      '',
      'EDUCATION',
      '- B.Sc. Microbiology, Ekiti State University (EKSU), Nigeria (Started 2021 · Graduated April 2026)',
      `- Undergraduate Research: ${UNDERGRADUATE_RESEARCH.title} (Solvent: ${UNDERGRADUATE_RESEARCH.solvent}; Methods: ${UNDERGRADUATE_RESEARCH.methods.join(', ')})`,
      '',
      'CONFERENCE RESEARCH',
      `- ${FEATURED_RESEARCH.title}`,
      `  ${FEATURED_RESEARCH.conference} · Abstract ID ${FEATURED_RESEARCH.abstractId} · Status: ${FEATURED_RESEARCH.status}`,
      '  Synthetic gene presence/absence profiles (188 profiles, 53 founder clones, 75 near-identical descendants, 0.95 Jaccard, GroupKFold, SMOTE within training folds).',
      '  Cluster-aware AUC: Linear SVM 0.848 | Logistic Regression 0.846 | XGBoost 0.770 | Random Forest 0.761 (Naive overall: 0.818).',
      '',
      'SELECTED PROJECTS',
      ...PROJECTS.map((p) => `- ${p.title} (${p.status}) — ${p.shortDescription}`),
      '',
      'COMMUNITY & LEADERSHIP',
      ...COMMUNITY_EXPERIENCES.map(
        (c) => `- ${c.organisation} — ${c.role} (${c.period})`
      ),
    ];

    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Favour-Falade-CV-Summary.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Action Bar */}
        <div className="no-print mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[var(--bg-recessed)] p-5">
          <div>
            <p className="font-mono text-xs text-[var(--ink-accent)]">
              Curriculum Vitae
            </p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">
              Print-optimized paper layout when exported, styled on screen to
              match the active brown theme
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--ink-primary)] whitespace-nowrap shrink-0 hover:bg-[var(--bg-block-alt)]"
            >
              <Printer className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadMarkdownCv}
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-4 py-2 text-xs font-semibold text-[var(--ink-invert)] whitespace-nowrap shrink-0 hover:opacity-90"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span>
                {SITE_CONFIG.cvPdfPath ? 'Download PDF CV' : 'Download Summary'}
              </span>
            </button>
          </div>
        </div>

        {/* Printable Document Sheet */}
        <article className="cv-print-sheet rounded-2xl bg-[var(--bg-card)] p-7 sm:p-10">
          <header className="border-b border-[var(--border-subtle)] pb-6">
            <h1 className="font-serif text-3xl font-medium text-[var(--ink-primary)] sm:text-4xl">
              Favour Falade
            </h1>
            <p className="mt-2 text-sm text-[var(--ink-body)]">
              Microbiology Graduate · Independent Data Science Practitioner ·
              Interdisciplinary Researcher
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-[var(--ink-accent)]">
              <span>Ekiti State, Nigeria</span>
              <span aria-hidden="true">·</span>
              <span>linkedin.com/in/favour-falade</span>
              <span aria-hidden="true">·</span>
              <span>github.com/FaladeF311</span>
              {SITE_CONFIG.email && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{SITE_CONFIG.email}</span>
                </>
              )}
            </div>
          </header>

          <section className="mt-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
              Education & Undergraduate Research
            </h2>
            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                  B.Sc. Microbiology — Ekiti State University (EKSU)
                </h3>
                <span className="font-mono text-xs text-[var(--ink-muted)] tabular-nums">
                  2021 – April 2026
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-body)]">
                <strong className="text-[var(--ink-primary)]">
                  Undergraduate Research (Unpublished):
                </strong>{' '}
                {UNDERGRADUATE_RESEARCH.title}. Extraction solvent:{' '}
                {UNDERGRADUATE_RESEARCH.solvent}. Methods:{' '}
                {UNDERGRADUATE_RESEARCH.methods.join(', ')}.
              </p>
            </div>
          </section>

          <section className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
              Conference Research
            </h2>
            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                  {FEATURED_RESEARCH.title}
                </h3>
                <span className="font-mono text-xs text-[var(--ink-muted)]">
                  CPHIA 2026 · Abstract #2514 (Accepted)
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-body)]">
                Track: {FEATURED_RESEARCH.track}. Evaluated 188 synthetic gene
                presence/absence profiles from 53 founder clones (75
                near-identical descendants; 0.95 Jaccard threshold) using
                GroupKFold by clone and SMOTE inside training folds. Cluster-aware
                AUC: Linear SVM (0.848), Logistic Regression (0.846), XGBoost
                (0.770), Random Forest (0.761), vs. naive overall AUC (0.818).
              </p>
            </div>
          </section>

          <section className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
              Selected Projects
            </h2>
            <ul className="mt-3 space-y-3 text-sm text-[var(--ink-body)]">
              {PROJECTS.map((project) => (
                <li key={project.slug}>
                  <span className="font-semibold text-[var(--ink-primary)]">
                    {project.title}
                  </span>{' '}
                  <span className="font-mono text-xs text-[var(--ink-accent)]">
                    ({project.status})
                  </span>{' '}
                  — {project.shortDescription}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
              Community & Leadership
            </h2>
            <ul className="mt-3 space-y-2.5 text-sm text-[var(--ink-body)]">
              {COMMUNITY_EXPERIENCES.map((exp) => (
                <li key={exp.id}>
                  <span className="font-semibold text-[var(--ink-primary)]">
                    {exp.organisation}
                  </span>{' '}
                  — {exp.role}{' '}
                  <span className="font-mono text-xs text-[var(--ink-muted)]">
                    ({exp.period})
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-8 border-t border-[var(--border-subtle)] pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-[var(--ink-accent)]">
              Areas of Interest & Current Exploration
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
              Artificial intelligence and machine learning · Computational biology
              and bioinformatics · Antimicrobial resistance · Infectious disease
              research · Genomic surveillance · AI applications in African
              healthcare · Food microbiology and food systems · African language
              technology · Data visualization and analytical storytelling.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

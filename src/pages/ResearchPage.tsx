import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { FEATURED_RESEARCH, UNDERGRADUATE_RESEARCH } from '../data/portfolio';
import { Link } from '../lib/router';
import { ClonalLeakageExplorer } from '../components/ClonalLeakageExplorer';
import { Reveal } from '../components/Reveal';

export function ResearchPage() {
  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pb-12">
          <p className="font-mono text-xs text-[var(--ink-accent)]">
            Research & Scientific Inquiry
          </p>
          <h1 className="mt-3 max-w-4xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
            Methodological rigor at the intersection of microbiology and
            machine learning.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
            My research explores how computational models behave when applied to
            biological and public health questions — with particular emphasis
            on antimicrobial resistance, clonal relatedness, and African genomic
            surveillance.
          </p>
        </header>

        {/* Featured CPHIA 2026 Abstract */}
        <section className="rounded-2xl bg-[var(--bg-recessed)] p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                <span className="font-mono font-medium text-[var(--ink-accent)]">
                  Featured Conference Research
                </span>
                <span aria-hidden="true">·</span>
                <span>{FEATURED_RESEARCH.conference}</span>
                <span aria-hidden="true">·</span>
                <span>Abstract ID {FEATURED_RESEARCH.abstractId}</span>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-[var(--ink-primary)]">
                  {FEATURED_RESEARCH.status}
                </span>
              </div>

              <h2 className="mt-3 font-serif text-2xl font-medium leading-snug text-[var(--ink-primary)] sm:text-3xl">
                {FEATURED_RESEARCH.title}
              </h2>

              <div className="mt-6 grid gap-4 rounded-xl bg-[var(--bg-card)] p-5 text-sm sm:grid-cols-2">
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                    Research Area
                  </div>
                  <div className="mt-1 text-[var(--ink-primary)]">
                    {FEATURED_RESEARCH.area}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                    Conference Track
                  </div>
                  <div className="mt-1 text-[var(--ink-primary)]">
                    {FEATURED_RESEARCH.track}
                  </div>
                </div>
              </div>

              <p className="mt-4 rounded-xl bg-[var(--bg-block-alt)] px-5 py-4 text-xs leading-relaxed text-[var(--ink-primary)]">
                <strong className="text-[var(--ink-accent)]">
                  Methodological Disclosure:
                </strong>{' '}
                {FEATURED_RESEARCH.publicationNote} This investigation evaluates{' '}
                <strong>
                  {FEATURED_RESEARCH.methodology.dataNature.toLowerCase()}
                </strong>
                , not a real-world clinical genomic dataset.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full overflow-hidden rounded-xl bg-[var(--bg-block-alt)] p-2.5">
                <img
                  src={FEATURED_RESEARCH.imageSrc}
                  alt={FEATURED_RESEARCH.imageAlt}
                  className="h-full w-full rounded-lg object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Interactive Leakage Explorer */}
          <Reveal className="mt-10">
            <ClonalLeakageExplorer />
          </Reveal>

          {/* Quantitative Summary & Exact AUC Table */}
          <Reveal className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 lg:col-span-6">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Study Design Parameters
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium text-[var(--ink-primary)]">
                Synthetic Clonal Structure & Validation
              </h3>
              <dl className="mt-5 divide-y divide-[var(--border-subtle)] text-sm">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">Data Basis</dt>
                  <dd className="text-right font-medium text-[var(--ink-primary)]">
                    Synthetic gene presence/absence profiles
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">
                    Sample & Clonal Structure
                  </dt>
                  <dd className="text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                    188 profiles · 53 founder clones
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">
                    Near-Identical Descendants
                  </dt>
                  <dd className="text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                    75 profiles
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">
                    Similarity Threshold
                  </dt>
                  <dd className="text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                    0.95 Jaccard similarity
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">Cross-Validation</dt>
                  <dd className="text-right font-medium text-[var(--ink-primary)]">
                    GroupKFold by clone
                  </dd>
                </div>
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-[var(--ink-muted)]">
                    Class Imbalance Handling
                  </dt>
                  <dd className="text-right font-medium text-[var(--ink-primary)]">
                    SMOTE inside training folds
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 lg:col-span-6">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Verified Model Outcomes
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium text-[var(--ink-primary)]">
                Cluster-Aware vs. Naive AUC Results
              </h3>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-[var(--border-subtle)] text-xs text-[var(--ink-muted)]">
                      <th className="py-2.5 font-medium">Model</th>
                      <th className="py-2.5 font-medium">Model Family</th>
                      <th className="py-2.5 text-right font-medium">
                        Cluster-Aware AUC
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--border-subtle)]">
                    <tr>
                      <td className="py-3 font-medium text-[var(--ink-primary)]">
                        Logistic Regression
                      </td>
                      <td className="py-3 text-[var(--ink-muted)]">Linear</td>
                      <td className="py-3 text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                        0.846
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-[var(--ink-primary)]">
                        Linear SVM
                      </td>
                      <td className="py-3 text-[var(--ink-muted)]">Linear</td>
                      <td className="py-3 text-right font-mono font-semibold text-[var(--ink-accent)] tabular-nums">
                        0.848
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-[var(--ink-primary)]">
                        Random Forest
                      </td>
                      <td className="py-3 text-[var(--ink-muted)]">
                        Tree Ensemble
                      </td>
                      <td className="py-3 text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                        0.761
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-[var(--ink-primary)]">
                        XGBoost
                      </td>
                      <td className="py-3 text-[var(--ink-muted)]">
                        Tree Ensemble
                      </td>
                      <td className="py-3 text-right font-mono font-medium text-[var(--ink-primary)] tabular-nums">
                        0.770
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-lg bg-[var(--bg-block-alt)] px-4 py-3 text-sm">
                <span className="text-[var(--ink-body)]">
                  Naive Overall AUC (without clone grouping)
                </span>
                <span className="font-mono font-semibold text-[var(--ink-primary)] tabular-nums">
                  0.818
                </span>
              </div>
            </div>
          </Reveal>

          {/* 8 Structured Research Sections */}
          <Reveal className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                label: '01 · Research Question',
                text: FEATURED_RESEARCH.sections.researchQuestion,
              },
              {
                label: '02 · Background & Motivation',
                text: FEATURED_RESEARCH.sections.backgroundAndMotivation,
              },
              {
                label: '03 · Methodology',
                text: FEATURED_RESEARCH.sections.methodologyDetail,
              },
              {
                label: '04 · Results Interpretation',
                text: FEATURED_RESEARCH.sections.resultsInterpretation,
              },
              {
                label: '05 · Public Health Relevance',
                text: FEATURED_RESEARCH.sections.publicHealthRelevance,
              },
              {
                label: '06 · Limitations',
                text: FEATURED_RESEARCH.sections.limitations,
              },
              {
                label: '07 · Implications for Genomic Surveillance',
                text: FEATURED_RESEARCH.sections.implicationsForSurveillance,
              },
            ].map((block) => (
              <div
                key={block.label}
                className="rounded-xl bg-[var(--bg-card)] p-6"
              >
                <h3 className="font-mono text-xs font-medium text-[var(--ink-accent)]">
                  {block.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
                  {block.text}
                </p>
              </div>
            ))}

            <div className="flex flex-col justify-between rounded-xl bg-[var(--bg-invert)] p-6 text-[var(--ink-invert)]">
              <div>
                <h3 className="font-mono text-xs font-medium text-[var(--ink-invert-muted)]">
                  08 · Research Materials & Poster
                </h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Conference poster and supporting materials for CPHIA 2026
                  Abstract #2514 will be linked here once finalized and cleared
                  for public sharing.
                </p>
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs font-medium opacity-90">
                <FileText
                  className="h-4 w-4 text-[var(--ink-invert-muted)]"
                  aria-hidden="true"
                />
                <span>Poster & Manuscript Archive · Preparing for CPHIA 2026</span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Future Publications, Preprints & Conference Presentations */}
        <section className="mt-16">
          <Reveal>
            <p className="font-mono text-xs text-[var(--ink-accent)]">
              Record & Dissemination
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
              Conference presentations, undergraduate thesis & archive
            </h2>

            <div className="mt-8 space-y-3">
              <div className="grid gap-4 rounded-xl bg-[var(--bg-card)] p-6 md:grid-cols-12">
                <div className="font-mono text-xs text-[var(--ink-accent)] md:col-span-3">
                  2026 · Accepted Abstract
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                    {FEATURED_RESEARCH.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    CPHIA 2026 · Abstract ID 2514 · Primary Health Care, digital
                    transformation and AI-enabled health systems
                  </p>
                </div>
              </div>

              <div className="grid gap-4 rounded-xl bg-[var(--bg-card)] p-6 md:grid-cols-12">
                <div className="font-mono text-xs text-[var(--ink-accent)] md:col-span-3">
                  2026 · Community Showcase
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                    Afara — Yoruba–English Translation & Ekiti Dialect Inclusion
                  </h3>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    Deep Learning Indaba 2026 Community Showcase · Presented as
                    five-student team lead
                  </p>
                </div>
              </div>

              <div className="grid gap-4 rounded-xl bg-[var(--bg-card)] p-6 md:grid-cols-12">
                <div className="font-mono text-xs text-[var(--ink-muted)] md:col-span-3">
                  Undergraduate Research
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                    {UNDERGRADUATE_RESEARCH.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--ink-muted)]">
                    {UNDERGRADUATE_RESEARCH.institution} · Aqueous extract ·
                    Microtiter Plate, Paper Disk & Agar Well Diffusion
                    (Unpublished undergraduate research)
                  </p>
                </div>
              </div>

              <div className="grid gap-4 rounded-xl bg-[var(--bg-recessed)] p-6 md:grid-cols-12">
                <div className="font-mono text-xs text-[var(--ink-accent)] md:col-span-3">
                  Forthcoming
                </div>
                <div className="md:col-span-9">
                  <p className="text-sm text-[var(--ink-body)]">
                    Dedicated slot reserved for future preprints, peer-reviewed
                    manuscripts, and upcoming conference appearances as my
                    research progresses.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Other Research Interests */}
        <section className="mt-16">
          <Reveal>
            <p className="font-mono text-xs text-[var(--ink-accent)]">
              Developing Horizons
            </p>
            <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
              Ongoing & future research interests
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--ink-body)]">
              A transparent distinction between completed/accepted work,
              active technical prototyping, and developing areas of study.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_RESEARCH.otherResearchInterests.map((interest) => (
                <div
                  key={interest.title}
                  className="rounded-2xl bg-[var(--bg-card)] p-6"
                >
                  <span className="font-mono text-[11px] text-[var(--ink-accent)]">
                    {interest.stage}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-medium text-[var(--ink-primary)]">
                    {interest.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-body)]">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[var(--bg-focal)] p-6 text-[var(--ink-focal)] sm:p-8">
              <p className="text-sm">
                Interested in collaborating on AMR modeling, bioinformatics, or
                African health AI?
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#EFE6DB] px-4 py-2.5 text-sm font-semibold text-[#18110D] hover:bg-[#C9A66B] whitespace-nowrap shrink-0 transition-colors"
              >
                <span>Get in touch</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

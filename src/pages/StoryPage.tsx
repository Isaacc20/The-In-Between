import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  DOCUMENTARY_GALLERY,
  RECOGNITION_GALLERY,
  SITE_CONFIG,
  UNDERGRADUATE_RESEARCH,
} from '../data/portfolio';
import { Link } from '../lib/router';
import {
  DocumentaryGalleryGrid,
  EditorialPhotoSlot,
} from '../components/EditorialPhotoSlot';
import { Reveal } from '../components/Reveal';

const CHAPTERS = [
  {
    code: 'A',
    title: 'Before the intersection',
    paragraphs: [
      'Like many science-inclined students in Nigeria, my earliest academic ambition was Medicine. I wanted to understand disease and contribute meaningfully to human health. When my university admission instead placed me in Microbiology at Ekiti State University in 2021, it felt at first like a detour.',
      'Looking back, that detour gave me my intellectual anchor. Instead of viewing health purely from the bedside, I began seeing the invisible biological ecosystems — bacteria, resistance mechanisms, and host-pathogen interactions — that shape clinical reality long before a symptom appears.',
    ],
  },
  {
    code: 'B',
    title: 'Learning to see the microscopic world',
    paragraphs: [
      'Studying Microbiology at EKSU taught me how to think carefully about organisms you cannot see with the naked eye: culturing, staining, biochemical testing, and reading zones of inhibition with patience.',
      'At the same time, studying inside a resource-constrained academic environment exposed a practical tension. Specialized genomic sequencers, modern bioinformatics workstations, and high-throughput laboratory infrastructure were rarely within easy reach. That constraint planted an enduring question: what alternative tools can help us investigate biological questions rigorously even when physical lab resources are limited?',
    ],
    hasUndergradBox: true,
  },
  {
    code: 'C',
    title: 'Discovering data science',
    paragraphs: [
      'Curiosity led me outside my departmental syllabus into independent technical learning. I began exploring spreadsheets, structured data analysis, Power BI visualization, Python, and eventually statistical modeling and machine learning.',
      'Self-learning was rarely neat or linear. It meant late nights debugging scripts, translating abstract mathematical intuition into code, and building practical projects — such as longitudinal banking analytics — simply to sharpen how I reason with real-world records.',
    ],
  },
  {
    code: 'D',
    title: 'Crossing disciplines',
    paragraphs: [
      'Eventually, the two tracks stopped running separately. Instead of treating Microbiology as my past and data science as an unrelated pivot, I began asking how computational methods illuminate biological and societal systems.',
      'That shift led directly to investigating how clonal relatedness distorts machine learning predictions of carbapenem resistance, exploring computer vision for food spoilage detection, and collaborating on Afara to make language AI more inclusive of Ekiti Yoruba speakers.',
    ],
  },
  {
    code: 'E',
    title: 'Learning through community',
    paragraphs: [
      'Independent study can feel isolating unless you build alongside peers. Becoming involved in TechHUB EKSU as a Data Analytics Tutor, co-leading the Data Science Nigeria EKSU campus network (May 2024 – December 2025), and supporting communities like 3MTT DeepTech Ready, Data Fellows, and Aurora Robotics AEP transformed how I grow.',
      'Teaching foundational concepts forced me to clarify my own understanding, while watching peers win hackathons, attend international conferences, and begin their first research papers showed me what shared curiosity can unlock.',
    ],
  },
  {
    code: 'F',
    title: 'Still becoming',
    paragraphs: [
      'Graduating from Ekiti State University in April 2026 marks a beginning rather than an arrival. I have not mastered every field I write about — bioinformatics, computational biology, and AI research each demand years of disciplined study.',
      'What I do bring is an honest habit of crossing borders carefully, asking grounded questions, and staying open to what emerges when biology, computation, faith, and human community meet.',
    ],
  },
];

export function StoryPage() {
  const storyGalleryItems = [
    ...RECOGNITION_GALLERY,
    DOCUMENTARY_GALLERY[1], // WTM Ado-Ekiti profile
    DOCUMENTARY_GALLERY[3], // Pitching Our Solution slide
  ];

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="grid items-end gap-10 pb-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs text-[var(--ink-accent)]">
              My Story
            </p>
            <h1 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
              From the microbiology bench to the questions in between.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
              An honest account of how an undergraduate education at Ekiti State
              University, constrained resources, self-taught data science, and
              campus community shaped my evolving research path.
            </p>
          </div>
          <div className="lg:col-span-5">
            <EditorialPhotoSlot
              src={SITE_CONFIG.storyPhotoSrc}
              alt="Favour Falade speaking with a microphone at an interdisciplinary workshop"
              plateLabel="Plate 03 · Field & Dialogue"
              caption="Speaking during a multi-stakeholder policy and food systems dialogue."
              aspectClass="aspect-[4/3]"
              variant="documentary"
              objectPosition="top"
            />
          </div>
        </header>

        {/* Chapters + Solid Sidebar */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            {CHAPTERS.map((chapter) => (
              <Reveal key={chapter.code}>
                <section className="rounded-2xl bg-[var(--bg-card)] p-7 sm:p-9">
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className="font-mono text-xs font-medium text-[var(--ink-accent)]">
                      Chapter {chapter.code}
                    </span>
                    <span aria-hidden="true" className="text-[var(--ink-muted)]">
                      ·
                    </span>
                    <h2 className="font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                      {chapter.title}
                    </h2>
                  </div>

                  <div className="mt-5 space-y-4 text-base leading-[1.78] text-[var(--ink-body)]">
                    {chapter.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>

                  {chapter.hasUndergradBox && (
                    <div className="mt-7 rounded-xl bg-[var(--bg-block-alt)] p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                        <span className="font-mono font-medium text-[var(--ink-accent)]">
                          Undergraduate Research Project
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{UNDERGRADUATE_RESEARCH.status}</span>
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-[var(--ink-primary)]">
                        {UNDERGRADUATE_RESEARCH.title}
                      </h3>
                      <div className="mt-4 grid gap-4 rounded-lg bg-[var(--bg-recessed)] p-4 text-sm sm:grid-cols-2">
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)]">
                            Extraction Solvent
                          </div>
                          <div className="mt-1 font-medium text-[var(--ink-primary)]">
                            {UNDERGRADUATE_RESEARCH.solvent}
                          </div>
                        </div>
                        <div>
                          <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-muted)]">
                            Assay Methods
                          </div>
                          <ul className="mt-1 space-y-1 text-[var(--ink-primary)]">
                            {UNDERGRADUATE_RESEARCH.methods.map((method) => (
                              <li key={method}>· {method}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="mt-4 text-xs leading-relaxed text-[var(--ink-body)]">
                        {UNDERGRADUATE_RESEARCH.note}
                      </p>
                    </div>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          {/* Right Personal Dimension Sidebar */}
          <aside className="space-y-6 lg:col-span-4">
            <div className="rounded-2xl bg-[var(--bg-card)] p-6">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Currently Exploring
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium text-[var(--ink-primary)]">
                An evolving curiosity list
              </h3>
              <ul className="mt-4 space-y-3 rounded-xl bg-[var(--bg-recessed)] p-4 text-sm text-[var(--ink-body)]">
                {SITE_CONFIG.currentlyExploring.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-accent)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[var(--bg-recessed)] p-6">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Thinking & Approach
              </p>
              <h3 className="mt-2 font-serif text-xl font-medium text-[var(--ink-primary)]">
                How I learn independently
              </h3>
              <div className="mt-4 space-y-4">
                {SITE_CONFIG.influencesAndThinking.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-[var(--bg-card)] p-4"
                  >
                    <h4 className="text-sm font-semibold text-[var(--ink-primary)]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--ink-muted)]">
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--bg-invert)] p-6 text-[var(--ink-invert)]">
              <h3 className="font-serif text-xl font-medium text-[var(--ink-invert)]">
                See the work in practice
              </h3>
              <p className="mt-2 text-sm opacity-90">
                Explore the CPHIA 2026 antimicrobial resistance study or browse
                interdisciplinary projects.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <Link
                  to="/research"
                  className="inline-flex items-center justify-between rounded-lg bg-[var(--bg-canvas)] px-4 py-2.5 text-xs font-semibold text-[var(--ink-primary)] hover:opacity-90"
                >
                  <span>Go to Research</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-between rounded-lg bg-[var(--bg-block-alt)] px-4 py-2.5 text-xs font-semibold text-[var(--ink-primary)] hover:opacity-90"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* Recognition, Awards & Field Moments */}
        <section className="mt-20 border-t border-[var(--border-subtle)] pt-14">
          <Reveal>
            <div className="mb-8 max-w-2xl">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                Archival Plates · Recognition & Stages
              </p>
              <h2 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                Milestones in photographs & campus awards
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
                Selected moments from Ekiti HealthTech Summit 2025, JCI Nigeria
                EKSU TOPA Awards (Most Outstanding Personality in Technology and
                Innovation), and community dialogues.
              </p>
            </div>

            <DocumentaryGalleryGrid
              items={storyGalleryItems}
              aspectClass="aspect-[4/3]"
              cardTone="recessed"
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
}

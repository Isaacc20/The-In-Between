import React from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import {
  DOCUMENTARY_GALLERY,
  FEATURED_RESEARCH,
  PROJECTS,
  RECOGNITION_GALLERY,
  SITE_CONFIG,
} from '../data/portfolio';
import { Link } from '../lib/router';
import {
  DocumentaryGalleryGrid,
  EditorialPhotoSlot,
  HeroCutoutStage,
  ProjectVisual,
} from '../components/EditorialPhotoSlot';
import { InBetweenMatrix } from '../components/InBetweenMatrix';
import { Reveal } from '../components/Reveal';
import { TimelineSection } from '../components/TimelineSection';

export function HomePage() {
  const afara = PROJECTS.find((p) => p.slug === 'afara')!;
  const godsDataset = PROJECTS.find((p) => p.slug === 'gods-dataset')!;
  const foodSpoilage = PROJECTS.find(
    (p) => p.slug === 'food-spoilage-detection'
  )!;

  const homeSpotlightMoments = [
    DOCUMENTARY_GALLERY[0], // WTM Ado-Ekiti front speaking (23.45.17)
    RECOGNITION_GALLERY[0], // Ekiti HealthTech Summit 2025 ₦100k cheque (00.57.50)
    DOCUMENTARY_GALLERY[2], // Health AI Pitch Social Impact slide (23.45.18)
    RECOGNITION_GALLERY[2], // TOPA Plaque Technology & Innovation (00.58.40)
    DOCUMENTARY_GALLERY[5], // DSN EKSU Group Banner (00.58.24)
    DOCUMENTARY_GALLERY[6], // DSN Teaching Session (00.58.54)
  ];

  return (
    <div className="bg-[var(--bg-canvas)] text-[var(--ink-primary)] transition-colors duration-200">
      {/* SECTION 1: HERO WITH EXTRA-LARGE BOLD TYPOGRAPHY & OVERLAPPING CUTOUT STAGE */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Typographic Anchor */}
          <div className="flex flex-col justify-between lg:col-span-6">
            <div className="pt-2 lg:pt-4">
              <h1 className="font-serif text-5xl font-extrabold leading-[0.95] tracking-tight text-[var(--ink-primary)] sm:text-7xl lg:text-[5.25rem] xl:text-[5.75rem]">
                Favour Falade
              </h1>
              <p className="mt-4 font-serif text-2xl font-medium italic text-[var(--ink-accent)] sm:text-3xl lg:text-[2.1rem]">
                The In-Between
              </p>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
                I’m Favour Falade, a Microbiology graduate from Ekiti State
                University, independent data science practitioner, and
                interdisciplinary researcher interested in applying artificial
                intelligence to biological and public health challenges.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-5 py-3.5 text-sm font-semibold text-[var(--ink-invert)] whitespace-nowrap shrink-0 transition-opacity duration-150 hover:opacity-90"
                >
                  <span>Explore My Journey</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-card)] px-5 py-3.5 text-sm font-medium text-[var(--ink-primary)] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[var(--bg-block-alt)]"
                >
                  <span>Explore My Work</span>
                </Link>
              </div>
            </div>

            <div className="mt-12 flex items-center justify-between rounded-xl bg-[var(--bg-recessed)] px-5 py-4">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-xs text-[var(--ink-muted)]">
                <span>Microbiology</span>
                <span aria-hidden="true">·</span>
                <span>Machine Learning</span>
                <span aria-hidden="true">·</span>
                <span>Genomic Surveillance</span>
                <span aria-hidden="true">·</span>
                <span>Language Tech</span>
              </div>
              <a
                href="#introduction-world"
                className="hidden items-center gap-1.5 font-mono text-xs text-[var(--ink-accent)] hover:text-[var(--ink-primary)] sm:inline-flex whitespace-nowrap shrink-0"
              >
                <span>Scroll</span>
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Overlapping Solid-Block & Transparent Cutout Stage */}
          <div className="lg:col-span-6">
            <HeroCutoutStage
              src={SITE_CONFIG.heroPortraitSrc}
              alt="Portrait cutout photograph of Favour Falade"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: AN INTRODUCTION TO MY WORLD */}
      <section
        id="introduction-world"
        className="bg-[var(--bg-recessed)] py-20 lg:py-24 transition-colors duration-200"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-12 max-w-2xl">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                01. The In-Between
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                Six disciplines in conversation
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--ink-body)]">
                My work lives between fields that rarely sit at the same table —
                microbial wet-lab reasoning, statistical validation, African
                language inclusion, community building, and reflective data
                storytelling. Select any node below to trace how they connect.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <InBetweenMatrix />
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: THE STORY BEHIND THE WORK */}
      <section className="bg-[var(--bg-canvas)] py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 rounded-2xl bg-[var(--bg-card)] p-7 sm:p-10 lg:grid-cols-12 lg:p-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs text-[var(--ink-accent)]">
                  02. Origin & Trajectory
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium leading-tight tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                  Some journeys are not linear. Mine has been one of discovery.
                </h2>
                <div className="mt-6 rounded-xl bg-[var(--bg-block-alt)] p-5">
                  <p className="font-serif text-base italic text-[var(--ink-primary)]">
                    “Where biology meets data, and curiosity becomes discovery.”
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-[var(--ink-body)] lg:col-span-7">
                <p>
                  I initially wanted to study Medicine, but my academic path led
                  me into Microbiology at Ekiti State University. Inside the
                  department, studying bacteria, antimicrobial resistance, and
                  infectious diseases awakened a deep curiosity about how the
                  microscopic world shapes human health.
                </p>
                <p>
                  Learning within a resource-constrained environment — where
                  access to specialized laboratory and bioinformatics tools was
                  often limited — pushed me to look for alternative ways to
                  investigate scientific questions. That search drew me toward
                  self-taught data science, Python, and machine learning.
                </p>
                <p>
                  Over time, those independent technical skills began looping
                  back to the biological questions I cared about most:
                  antimicrobial resistance prediction, genomic surveillance,
                  bioinformatics, and AI systems built thoughtfully for African
                  contexts. I do not claim mastery across every field I touch;
                  rather, I am learning openly at their borders.
                </p>

                <div className="pt-3">
                  <Link
                    to="/story"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-5 py-2.5 text-sm font-semibold text-[var(--ink-invert)] hover:opacity-90 transition-opacity"
                  >
                    <span>Read the full story</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4: SELECTED RESEARCH AND PROJECTS */}
      <section className="bg-[var(--bg-recessed)] py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="font-mono text-xs text-[var(--ink-accent)]">
                  03. Selected Research & Projects
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                  Work across science, language, food, and meaning
                </h2>
              </div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-card)] px-4 py-2.5 text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--bg-block-alt)] whitespace-nowrap shrink-0 transition-colors"
              >
                <span>View all 5 projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          {/* 1. Prominent Featured Research Spotlight */}
          <Reveal delay={0.05}>
            <article className="grid items-stretch gap-8 rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="h-full overflow-hidden rounded-xl bg-[var(--bg-block-alt)] p-2.5">
                  <img
                    src={FEATURED_RESEARCH.imageSrc}
                    alt={FEATURED_RESEARCH.imageAlt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                    <span className="font-mono text-[var(--ink-accent)]">
                      Featured Research
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>CPHIA 2026 Abstract #2514</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[var(--ink-primary)]">
                      {FEATURED_RESEARCH.status}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-2xl font-medium leading-snug text-[var(--ink-primary)] sm:text-3xl">
                    Machine Learning & Carbapenem Resistance Prediction
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-body)]">
                    Investigating whether ignoring near-identical clonal genomes
                    inflates machine learning performance estimates on synthetic
                    gene presence/absence profiles (188 profiles across 53
                    founder clones, evaluated with 0.95 Jaccard clustering and
                    GroupKFold).
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    <div className="rounded-lg bg-[var(--bg-recessed)] p-3.5">
                      <div className="font-mono text-[11px] text-[var(--ink-muted)]">
                        Linear SVM AUC
                      </div>
                      <div className="mt-0.5 font-serif text-xl font-medium text-[var(--ink-primary)] tabular-nums">
                        0.848
                      </div>
                    </div>
                    <div className="rounded-lg bg-[var(--bg-recessed)] p-3.5">
                      <div className="font-mono text-[11px] text-[var(--ink-muted)]">
                        LogReg AUC
                      </div>
                      <div className="mt-0.5 font-serif text-xl font-medium text-[var(--ink-primary)] tabular-nums">
                        0.846
                      </div>
                    </div>
                    <div className="col-span-2 rounded-lg bg-[var(--bg-invert)] p-3.5 text-[var(--ink-invert)] sm:col-span-1">
                      <div className="font-mono text-[11px] text-[var(--ink-invert-muted)]">
                        Naive Overall
                      </div>
                      <div className="mt-0.5 font-serif text-xl font-medium tabular-nums">
                        0.818
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-[var(--ink-muted)]">
                    Synthetic data methodology
                  </span>
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-invert)] px-4 py-2 text-xs font-semibold text-[var(--ink-invert)] hover:opacity-90 transition-opacity"
                  >
                    <span>Explore full study</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 2. Asymmetric Featured Trio */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            {/* Afara Wide Block */}
            <Reveal delay={0.08} className="lg:col-span-7">
              <article className="flex h-full flex-col justify-between rounded-2xl bg-[var(--bg-card)] p-6 sm:p-7">
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl">
                    <ProjectVisual project={afara} className="h-full" />
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
                    <span>{afara.field}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[var(--ink-accent)]">
                      {afara.status}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)]">
                    {afara.title} — Ekiti Yoruba–English Language Technology
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-body)]">
                    {afara.shortDescription} Led a five-student team exploring
                    NLLB, Whisper speech recognition, and Ekiti dialect data
                    collection; presented at Deep Learning Indaba 2026.
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to={`/projects/${afara.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink-accent)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Right Stacked Pair */}
            <div className="flex flex-col gap-8 lg:col-span-5">
              <Reveal delay={0.12}>
                <article className="rounded-2xl bg-[var(--bg-card)] p-6">
                  <div className="grid gap-5 sm:grid-cols-5 sm:items-center">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg sm:col-span-2">
                      <ProjectVisual project={foodSpoilage} className="h-full" />
                    </div>
                    <div className="sm:col-span-3">
                      <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                        <span>Computer Vision</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[var(--ink-accent)]">
                          {foodSpoilage.status}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-xl font-medium text-[var(--ink-primary)]">
                        {foodSpoilage.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--ink-body)]">
                        Distinguishing fresh and spoiled food via computer
                        vision, with future exploration into spoilage staging.
                      </p>
                      <Link
                        to={`/projects/${foodSpoilage.slug}`}
                        className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-accent)] hover:text-[var(--ink-primary)]"
                      >
                        <span>Explore prototype</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.16}>
                <article className="rounded-2xl bg-[var(--bg-focal)] p-6 text-[var(--ink-focal)]">
                  <div className="grid gap-5 sm:grid-cols-5 sm:items-center">
                    <div className="aspect-[4/3] overflow-hidden rounded-lg sm:col-span-2">
                      <ProjectVisual project={godsDataset} className="h-full" />
                    </div>
                    <div className="sm:col-span-3">
                      <div className="flex items-center gap-2 text-xs text-[var(--ink-focal-body)] opacity-85">
                        <span>Faith & Data</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono text-[var(--ink-focal-accent)]">
                          {godsDataset.status}
                        </span>
                      </div>
                      <h3 className="mt-1.5 font-serif text-xl font-medium text-[var(--ink-focal)]">
                        {godsDataset.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--ink-focal-body)]">
                        “Observing, not redefining. Revealing, not replacing.”
                        Scripture visualizations, word studies, and network
                        graphs.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <Link
                          to={`/projects/${godsDataset.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-focal-accent)] hover:text-[var(--ink-focal)]"
                        >
                          <span>Case study</span>
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                        <Link
                          to="https://godsdataset.com"
                          className="inline-flex items-center gap-1 text-xs font-medium text-[var(--ink-focal-body)] hover:text-[var(--ink-focal)]"
                        >
                          <span>godsdataset.com</span>
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: RESEARCH AND SCIENTIFIC CURIOSITY */}
      <section className="bg-[var(--bg-canvas)] py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-mono text-xs text-[var(--ink-accent)]">
                  04. Scientific Curiosity
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                  Questions that motivate my research direction
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-body)]">
                  I am drawn to problems where biological realism and careful
                  machine learning evaluation must work together — especially in
                  African healthcare and surveillance contexts.
                </p>
                <div className="mt-7">
                  <Link
                    to="/research"
                    className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-5 py-3 text-sm font-semibold text-[var(--ink-invert)] hover:opacity-90 transition-opacity"
                  >
                    <span>Visit Research Page</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                {[
                  {
                    title: 'Antimicrobial Resistance',
                    desc: 'Understanding resistance mechanisms and evaluating predictive ML models without clonal data leakage.',
                  },
                  {
                    title: 'Genomic Surveillance',
                    desc: 'How relatedness structure across bacterial isolates changes validation estimates in surveillance pipelines.',
                  },
                  {
                    title: 'Infectious Disease & AI',
                    desc: 'Applying machine learning to support Primary Health Care and early pathogen signal detection.',
                  },
                  {
                    title: 'Computational Biology & Bioinformatics',
                    desc: 'Developing deeper computational fluency to examine biological systems and microbiome questions.',
                  },
                ].map((topic, idx) => (
                  <div
                    key={topic.title}
                    className={`rounded-2xl p-6 ${
                      idx === 0
                        ? 'bg-[var(--bg-block-alt)]'
                        : 'bg-[var(--bg-card)]'
                    }`}
                  >
                    <h3 className="font-serif text-lg font-medium text-[var(--ink-primary)]">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-body)]">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: COMMUNITY AND IMPACT */}
      <section className="bg-[var(--bg-recessed)] py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="font-mono text-xs text-[var(--ink-accent)]">
                  05. Community & Leadership
                </p>
                <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                  Growing alongside a campus and continental community
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[var(--ink-body)]">
                  From May 2024 to December 2025, I led and co-led the Data
                  Science Nigeria EKSU campus network before handing over
                  leadership in 2026. Alongside roles with DSN Ado-Ekiti, 3MTT
                  DeepTech Ready, TechHUB EKSU, Data Fellows, and Aurora
                  Robotics AEP, community teaching has remained central to how I
                  learn.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="rounded-xl bg-[var(--bg-card)] p-4">
                    <div className="font-serif text-2xl font-medium text-[var(--ink-primary)] tabular-nums">
                      ~400
                    </div>
                    <div className="mt-1 text-xs text-[var(--ink-muted)]">
                      DSN EKSU members
                    </div>
                  </div>
                  <div className="rounded-xl bg-[var(--bg-card)] p-4">
                    <div className="font-serif text-2xl font-medium text-[var(--ink-primary)] tabular-nums">
                      150+
                    </div>
                    <div className="mt-1 text-xs text-[var(--ink-muted)]">
                      Learners trained
                    </div>
                  </div>
                  <div className="col-span-2 rounded-xl bg-[var(--bg-invert)] p-4 text-[var(--ink-invert)] sm:col-span-1">
                    <div className="font-serif text-2xl font-semibold tabular-nums">
                      3 / 2 / 5
                    </div>
                    <div className="mt-1 text-xs text-[var(--ink-invert-muted)]">
                      Conferences · Hackathons · Roles
                    </div>
                  </div>
                </div>
                <p className="mt-3 font-mono text-[11px] text-[var(--ink-muted)]">
                  Reported achievements belong collectively to the DSN EKSU
                  campus community.
                </p>

                <div className="mt-6">
                  <Link
                    to="/community"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-accent)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    <span>Explore Community & Leadership</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <EditorialPhotoSlot
                  src="/src/assets/images/WhatsApp Image 2026-11-19 at 00.58.24.jpeg"
                  alt="Data Science Nigeria EKSU campus network group gathering holding the DSN EKSU banner"
                  plateLabel="Plate 02 · DSN EKSU Community"
                  caption="Data Science Nigeria (DSN) EKSU campus members gathering for Training, Research & Innovation."
                  aspectClass="aspect-[4/3]"
                  variant="documentary"
                />
              </div>
            </div>
          </Reveal>

          {/* Documentary Field & Award Spotlight Strip */}
          <Reveal delay={0.1}>
            <div className="mt-16 border-t border-[var(--border-subtle)] pt-14">
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs text-[var(--ink-accent)]">
                    In Photographs · Speaking, Pitching & Recognition
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
                    Moments across stages, workshops & campus recognition
                  </h3>
                </div>
                <Link
                  to="/community"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-card)] px-4 py-2 text-xs font-medium text-[var(--ink-primary)] hover:bg-[var(--bg-block-alt)] whitespace-nowrap shrink-0 transition-colors"
                >
                  <span>View all sessions & flyers</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>

              <DocumentaryGalleryGrid
                items={homeSpotlightMoments}
                aspectClass="aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 7: A JOURNEY IN PROGRESS (INTERACTIVE TIMELINE) */}
      <section className="bg-[var(--bg-canvas)] py-20 lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="font-mono text-xs text-[var(--ink-accent)]">
                06. A Journey in Progress
              </p>
              <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight text-[var(--ink-primary)] sm:text-4xl">
                Milestones along the intersection
              </h2>
              <p className="mt-3 text-base text-[var(--ink-body)]">
                Select any period to inspect how academic training, community
                stewardship, and research questions evolved from 2021 onward.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <TimelineSection />
          </Reveal>
        </div>
      </section>

      {/* SECTION 8: CLOSING STATEMENT */}
      <section className="bg-[var(--bg-focal)] py-20 text-[var(--ink-focal)] lg:py-24 transition-colors duration-200">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs tracking-wider text-[var(--ink-focal-accent)]">
              The In-Between · Open to Collaboration
            </p>
            <blockquote className="mt-5 font-serif text-2xl font-normal leading-relaxed text-[var(--ink-focal)] sm:text-3xl lg:text-4xl">
              “I’m interested in the questions we haven’t answered yet, the
              problems we haven’t solved, and the possibilities that emerge when
              different fields meet.”
            </blockquote>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#EFE6DB] px-5 py-3 text-sm font-semibold text-[#18110D] whitespace-nowrap shrink-0 transition-colors hover:bg-[#C9A66B]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={SITE_CONFIG.socials.linkedin}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2B1F19] px-5 py-3 text-sm font-medium text-[#EFE6DB] whitespace-nowrap shrink-0 transition-colors hover:bg-[#18110D]"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to={SITE_CONFIG.socials.github}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#2B1F19] px-5 py-3 text-sm font-medium text-[#EFE6DB] whitespace-nowrap shrink-0 transition-colors hover:bg-[#18110D]"
              >
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Link } from '../lib/router';
import { ProjectVisual } from '../components/EditorialPhotoSlot';
import { Reveal } from '../components/Reveal';

interface ProjectCaseStudyPageProps {
  slug: string;
}

export function ProjectCaseStudyPage({ slug }: ProjectCaseStudyPageProps) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  const project = index >= 0 ? PROJECTS[index] : null;

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-24 text-center text-[var(--ink-primary)] sm:px-6">
        <h1 className="font-serif text-3xl font-medium">Project not found</h1>
        <p className="mt-3 text-sm text-[var(--ink-muted)]">
          The requested case study could not be located in the archive.
        </p>
        <Link
          to="/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-4 py-2.5 text-sm font-semibold text-[var(--ink-invert)]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Return to Projects</span>
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const isGold = project.accentTone === 'gold';

  const narrativeSections = [
    { num: '01', title: 'Project Introduction', body: project.caseStudy.introduction },
    { num: '02', title: 'The Problem', body: project.caseStudy.problem },
    { num: '03', title: 'Why the Problem Matters', body: project.caseStudy.whyItMatters },
    { num: '04', title: 'The Idea & Motivation', body: project.caseStudy.ideaAndMotivation },
    { num: '05', title: 'My Role & Contributions', body: project.caseStudy.roleAndContributions },
    { num: '06', title: 'Technical Approach', body: project.caseStudy.technicalApproach },
  ];

  const reflectionSections = [
    { num: '08', title: 'Challenges', body: project.caseStudy.challenges },
    { num: '09', title: 'Results & Outcomes', body: project.caseStudy.resultsAndOutcomes },
    { num: '10', title: 'What I Learned', body: project.caseStudy.whatILearned },
    { num: '11', title: 'What Comes Next', body: project.caseStudy.whatComesNext },
  ];

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-10 text-[var(--ink-primary)] sm:pt-14 transition-colors duration-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[var(--bg-card)] px-3.5 py-2 text-xs font-medium text-[var(--ink-body)] hover:bg-[var(--bg-block-alt)] hover:text-[var(--ink-primary)] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          <span>All Projects</span>
        </Link>

        {/* Case Study Header */}
        <header className="mt-8 pb-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--ink-muted)]">
            <span>{project.field}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono font-medium text-[var(--ink-accent)]">
              Status: {project.status}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-mono tabular-nums">{project.year}</span>
          </div>

          <h1 className="mt-3 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 font-serif text-xl italic text-[var(--ink-muted)]">
            {project.subtitle}
          </p>

          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {project.metrics.map((metric, idx) => (
                <div
                  key={metric.label}
                  className={`rounded-xl p-4 ${
                    idx === 0 && isGold
                      ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)]'
                      : 'bg-[var(--bg-card)] text-[var(--ink-primary)]'
                  }`}
                >
                  <div
                    className={`font-mono text-[11px] ${
                      idx === 0 && isGold
                        ? 'text-[var(--ink-invert-muted)]'
                        : 'text-[var(--ink-muted)]'
                    }`}
                  >
                    {metric.label}
                  </div>
                  <div className="mt-1 text-base font-semibold tabular-nums">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Visual Showcase */}
        <Reveal>
          <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <ProjectVisual project={project} className="h-full" />
          </div>
        </Reveal>

        {/* Existing vs Planned Breakdown */}
        {project.caseStudy.existingVsPlanned && (
          <Reveal className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8">
              <p className="font-mono text-xs font-medium text-[var(--ink-primary)]">
                Existing Prototype Functionality
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--ink-body)]">
                {project.caseStudy.existingVsPlanned.existing.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-primary)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--bg-focal)] p-6 text-[var(--ink-focal)] sm:p-8">
              <p className="font-mono text-xs font-medium text-[var(--ink-focal-accent)]">
                Planned Future Directions
              </p>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--ink-focal-body)]">
                {project.caseStudy.existingVsPlanned.planned.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-focal-accent)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}

        {/* 12-Section Storytelling Template */}
        <div className="mt-12 space-y-5">
          {narrativeSections.map((sec) => (
            <Reveal key={sec.num}>
              <section className="grid gap-4 rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-[var(--ink-accent)]">
                    {sec.num}
                  </span>
                  <h2 className="mt-1 font-serif text-xl font-medium text-[var(--ink-primary)]">
                    {sec.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-[1.78] text-[var(--ink-body)]">
                    {sec.body}
                  </p>
                </div>
              </section>
            </Reveal>
          ))}

          {/* 07. Tools and Technologies */}
          <Reveal>
            <section className="grid gap-4 rounded-2xl bg-[var(--bg-recessed)] p-6 sm:p-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-[var(--ink-accent)]">
                  07
                </span>
                <h2 className="mt-1 font-serif text-xl font-medium text-[var(--ink-primary)]">
                  Tools & Technologies
                </h2>
              </div>
              <div className="md:col-span-8">
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {project.caseStudy.toolsAndTechnologies.map((tool) => (
                    <div
                      key={tool}
                      className="rounded-lg bg-[var(--bg-card)] px-4 py-3 text-sm font-medium text-[var(--ink-primary)]"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          {reflectionSections.map((sec) => (
            <Reveal key={sec.num}>
              <section className="grid gap-4 rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-[var(--ink-accent)]">
                    {sec.num}
                  </span>
                  <h2 className="mt-1 font-serif text-xl font-medium text-[var(--ink-primary)]">
                    {sec.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-[1.78] text-[var(--ink-body)]">
                    {sec.body}
                  </p>
                </div>
              </section>
            </Reveal>
          ))}

          {/* 12. Links & Resources */}
          <Reveal>
            <section className="grid gap-4 rounded-2xl bg-[var(--bg-focal)] p-6 text-[var(--ink-focal)] sm:p-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="font-mono text-xs text-[var(--ink-focal-accent)]">
                  12
                </span>
                <h2 className="mt-1 font-serif text-xl font-medium text-[var(--ink-focal)]">
                  Links & Resources
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 md:col-span-8">
                {project.links.map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#EFE6DB] px-4 py-2.5 text-sm font-semibold text-[#18110D] hover:bg-[#C9A66B] transition-colors"
                  >
                    <span>{link.label}</span>
                    {link.external ? (
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    )}
                  </Link>
                ))}
              </div>
            </section>
          </Reveal>
        </div>

        {/* Next Project Navigation */}
        <div className="mt-12 flex flex-col justify-between gap-4 rounded-2xl bg-[var(--bg-recessed)] p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <span className="font-mono text-xs text-[var(--ink-accent)]">
              Next in Archive
            </span>
            <h3 className="mt-1 font-serif text-xl font-medium text-[var(--ink-primary)]">
              {nextProject.title}
            </h3>
          </div>
          <Link
            to={`/projects/${nextProject.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-4 py-2.5 text-xs font-semibold text-[var(--ink-invert)] whitespace-nowrap shrink-0 hover:opacity-90"
          >
            <span>Open Case Study</span>
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

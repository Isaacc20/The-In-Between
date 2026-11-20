import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PROJECTS, ProjectStatus } from '../data/portfolio';
import { Link } from '../lib/router';
import { ProjectVisual } from '../components/EditorialPhotoSlot';
import { Reveal } from '../components/Reveal';

const STATUS_FILTERS: Array<'All' | ProjectStatus> = [
  'All',
  'Ongoing',
  'Prototype',
  'Completed',
  'Exploring',
];

export function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | ProjectStatus>('All');

  const visibleProjects =
    filter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === filter);

  return (
    <div className="bg-[var(--bg-canvas)] pb-24 pt-12 text-[var(--ink-primary)] sm:pt-16 transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="pb-10">
          <p className="font-mono text-xs text-[var(--ink-accent)]">
            Project Archive
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-medium leading-[1.08] tracking-tight text-[var(--ink-primary)] sm:text-5xl">
            Experiments, tools, and case studies across disciplines.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-body)] sm:text-lg">
            Each project documents a real question — from Yoruba dialect
            inclusion and Scripture network visualization to computer vision for
            food safety, banking analytics, and biological AI safety.
          </p>

          {/* Interactive Status Filter Controls */}
          <div
            role="group"
            aria-label="Filter projects by status"
            className="mt-8 flex flex-wrap items-center gap-2"
          >
            {STATUS_FILTERS.map((status) => {
              const active = filter === status;
              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilter(status)}
                  aria-pressed={active}
                  className={`rounded-lg px-4 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    active
                      ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)] font-semibold'
                      : 'bg-[var(--bg-card)] text-[var(--ink-body)] hover:bg-[var(--bg-block-alt)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {status}
                </button>
              );
            })}
          </div>
        </header>

        {/* Asymmetric Solid-Block Editorial Project List */}
        <div className="mt-4 space-y-8">
          {visibleProjects.map((project, index) => {
            const isGold = project.accentTone === 'gold';
            const reverse = index % 2 === 1;

            return (
              <Reveal key={project.slug} delay={index * 0.04}>
                <article
                  className={`grid items-stretch gap-8 rounded-2xl p-6 sm:p-8 lg:grid-cols-12 ${
                    isGold
                      ? 'bg-[var(--bg-focal)] text-[var(--ink-focal)]'
                      : 'bg-[var(--bg-card)] text-[var(--ink-primary)]'
                  }`}
                >
                  <div
                    className={`lg:col-span-6 ${
                      reverse ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="aspect-[4/3] h-full w-full overflow-hidden rounded-xl">
                      <ProjectVisual project={project} className="h-full" />
                    </div>
                  </div>

                  <div
                    className={`flex flex-col justify-between lg:col-span-6 ${
                      reverse ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <div
                        className={`flex flex-wrap items-center gap-2 text-xs ${
                          isGold
                            ? 'text-[var(--ink-focal-body)] opacity-85'
                            : 'text-[var(--ink-muted)]'
                        }`}
                      >
                        <span>{project.field}</span>
                        <span aria-hidden="true">·</span>
                        <span
                          className={`font-mono font-medium ${
                            isGold
                              ? 'text-[var(--ink-focal-accent)]'
                              : 'text-[var(--ink-accent)]'
                          }`}
                        >
                          {project.status}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono tabular-nums">
                          {project.year}
                        </span>
                      </div>

                      <h2 className="mt-3 font-serif text-2xl font-medium sm:text-3xl">
                        {project.title}
                      </h2>
                      <p
                        className={`mt-1 font-serif text-base italic ${
                          isGold
                            ? 'text-[var(--ink-focal-body)] opacity-90'
                            : 'text-[var(--ink-muted)]'
                        }`}
                      >
                        {project.subtitle}
                      </p>

                      <p
                        className={`mt-4 text-sm leading-relaxed sm:text-base ${
                          isGold
                            ? 'text-[var(--ink-focal-body)]'
                            : 'text-[var(--ink-body)]'
                        }`}
                      >
                        {project.shortDescription}
                      </p>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {project.metrics.slice(0, 3).map((m) => (
                            <div
                              key={m.label}
                              className={`rounded-lg p-3.5 ${
                                isGold
                                  ? 'bg-[#2B1F19] text-[#EFE6DB]'
                                  : 'bg-[var(--bg-recessed)] text-[var(--ink-primary)]'
                              }`}
                            >
                              <div
                                className={`font-mono text-[11px] ${
                                  isGold
                                    ? 'text-[#C9A66B]'
                                    : 'text-[var(--ink-muted)]'
                                }`}
                              >
                                {m.label}
                              </div>
                              <div className="mt-0.5 text-sm font-semibold tabular-nums">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-2">
                      <Link
                        to={`/projects/${project.slug}`}
                        className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                          isGold
                            ? 'bg-[#EFE6DB] text-[#18110D] hover:bg-[#C9A66B]'
                            : 'bg-[var(--bg-invert)] text-[var(--ink-invert)] hover:opacity-90'
                        }`}
                      >
                        <span>Read Full Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>

                      <div className="flex flex-wrap items-center gap-4">
                        {project.links
                          .filter((l) => l.external)
                          .map((ext) => (
                            <Link
                              key={ext.url}
                              to={ext.url}
                              className={`inline-flex items-center gap-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
                                isGold
                                  ? 'text-[var(--ink-focal-accent)] hover:text-[var(--ink-focal)]'
                                  : 'text-[var(--ink-accent)] hover:text-[var(--ink-primary)]'
                              }`}
                            >
                              <span>{ext.label}</span>
                              <ArrowUpRight
                                className="h-3.5 w-3.5"
                                aria-hidden="true"
                              />
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

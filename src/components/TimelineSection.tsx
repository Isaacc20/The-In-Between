import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../data/portfolio';
import { Link } from '../lib/router';

export function TimelineSection() {
  const [selectedId, setSelectedId] = useState<string>('2026');
  const active =
    TIMELINE_MILESTONES.find((m) => m.id === selectedId) ??
    TIMELINE_MILESTONES[0];

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Left: Solid Year Selector Rail */}
      <div className="lg:col-span-5">
        <div
          role="tablist"
          aria-label="Journey timeline milestones"
          className="space-y-2.5"
        >
          {TIMELINE_MILESTONES.map((milestone) => {
            const isSelected = milestone.id === selectedId;
            return (
              <button
                key={milestone.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedId(milestone.id)}
                className={`group flex w-full items-start justify-between gap-4 rounded-xl px-5 py-4 text-left transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)]'
                    : 'bg-[var(--bg-card)] text-[var(--ink-primary)] hover:bg-[var(--bg-block-alt)]'
                }`}
              >
                <div>
                  <span
                    className={`font-mono text-xs tabular-nums ${
                      isSelected
                        ? 'font-semibold text-[var(--ink-invert-muted)]'
                        : 'text-[var(--ink-accent)]'
                    }`}
                  >
                    {milestone.period}
                  </span>
                  <div className="mt-1 font-serif text-lg font-medium">
                    {milestone.title}
                  </div>
                </div>
                <ArrowRight
                  aria-hidden="true"
                  className={`mt-1 h-4 w-4 shrink-0 transition-transform duration-150 ${
                    isSelected
                      ? 'translate-x-0 text-[var(--ink-invert)]'
                      : '-translate-x-1 text-[var(--ink-muted)] group-hover:translate-x-0'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Right: Expanded Solid Detail Block */}
      <div className="lg:col-span-7">
        <div className="flex h-full flex-col justify-between rounded-2xl bg-[var(--bg-card)] p-7 sm:p-9 transition-colors duration-200">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 rounded-lg bg-[var(--bg-recessed)] px-4 py-2.5">
              <span className="font-mono text-sm font-medium text-[var(--ink-accent)] tabular-nums">
                {active.period}
              </span>
              {active.location && (
                <span className="font-mono text-xs text-[var(--ink-muted)]">
                  {active.location}
                </span>
              )}
            </div>

            <h3 className="mt-6 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
              {active.title}
            </h3>

            <p className="mt-3 text-base leading-relaxed text-[var(--ink-body)]">
              {active.summary}
            </p>

            <ul className="mt-6 space-y-3 rounded-xl bg-[var(--bg-recessed)] p-5">
              {active.details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm leading-relaxed text-[var(--ink-body)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-accent)]"
                  />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {active.relatedRoute && active.relatedLabel && (
            <div className="mt-6 pt-2">
              <Link
                to={active.relatedRoute}
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-block-alt)] px-4 py-2.5 text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--bg-invert)] hover:text-[var(--ink-invert)] transition-colors"
              >
                <span>{active.relatedLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

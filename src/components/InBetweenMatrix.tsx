import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DOMAIN_INTERSECTIONS } from '../data/portfolio';
import { Link } from '../lib/router';

const NODE_POSITIONS: Record<string, { x: number; y: number }> = {
  biology: { x: 180, y: 74 },
  ai: { x: 356, y: 120 },
  research: { x: 344, y: 274 },
  data: { x: 180, y: 318 },
  community: { x: 46, y: 248 },
  creativity: { x: 56, y: 112 },
};

export function InBetweenMatrix() {
  const [activeId, setActiveId] = useState<string>('biology');
  const activeDomain =
    DOMAIN_INTERSECTIONS.find((d) => d.id === activeId) ?? DOMAIN_INTERSECTIONS[0];

  const edges: [string, string][] = [];
  const seen = new Set<string>();
  DOMAIN_INTERSECTIONS.forEach((d) => {
    d.connectedTo.forEach((target) => {
      const key = [d.id, target].sort().join('--');
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([d.id, target]);
      }
    });
  });

  return (
    <div className="grid items-center gap-8 lg:grid-cols-12">
      {/* Interactive SVG Constellation on Solid Block */}
      <div className="lg:col-span-6">
        <div className="relative rounded-2xl bg-[var(--bg-card)] p-5 sm:p-7 transition-colors duration-200">
          <div className="mb-3 flex items-center justify-between font-mono text-[11px] text-[var(--ink-muted)]">
            <span>Interactive Map · Select a discipline</span>
            <span className="text-[var(--ink-accent)]">6 Intersections</span>
          </div>

          <svg
            viewBox="0 0 410 380"
            className="w-full select-none"
            role="img"
            aria-label="Interactive network diagram showing how biology, artificial intelligence, research, data science, community, and creativity intersect"
          >
            <circle
              cx="200"
              cy="194"
              r="146"
              fill="none"
              stroke="var(--ink-primary)"
              strokeOpacity="0.14"
              strokeDasharray="3 5"
            />
            <circle cx="200" cy="194" r="58" fill="var(--bg-block-alt)" />
            <text
              x="200"
              y="190"
              textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontSize="12"
              fill="var(--ink-primary)"
            >
              The
            </text>
            <text
              x="200"
              y="206"
              textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontStyle="italic"
              fontSize="12"
              fill="var(--ink-accent)"
            >
              In-Between
            </text>

            {/* Edges */}
            {edges.map(([a, b]) => {
              const p1 = NODE_POSITIONS[a];
              const p2 = NODE_POSITIONS[b];
              const isHighlighted = a === activeId || b === activeId;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={p1.x}
                  y1={p1.y}
                  x2={p2.x}
                  y2={p2.y}
                  stroke={
                    isHighlighted ? 'var(--ink-accent)' : 'var(--ink-muted)'
                  }
                  strokeWidth={isHighlighted ? 2 : 0.9}
                  strokeOpacity={isHighlighted ? 0.92 : 0.25}
                  className="transition-all duration-200"
                />
              );
            })}

            {/* Spokes to center */}
            {DOMAIN_INTERSECTIONS.map((d) => {
              const p = NODE_POSITIONS[d.id];
              const isActive = d.id === activeId;
              return (
                <line
                  key={`center-${d.id}`}
                  x1={200}
                  y1={194}
                  x2={p.x}
                  y2={p.y}
                  stroke={isActive ? 'var(--ink-primary)' : 'var(--ink-muted)'}
                  strokeWidth={isActive ? 1.6 : 0.7}
                  strokeOpacity={isActive ? 0.85 : 0.18}
                  strokeDasharray={isActive ? undefined : '2 4'}
                />
              );
            })}

            {/* Clickable Nodes */}
            {DOMAIN_INTERSECTIONS.map((domain) => {
              const pos = NODE_POSITIONS[domain.id];
              const isActive = domain.id === activeId;
              const isConnected = activeDomain.connectedTo.includes(domain.id);
              return (
                <g
                  key={domain.id}
                  className="cursor-pointer"
                  onClick={() => setActiveId(domain.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveId(domain.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`Inspect ${domain.title}`}
                >
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={isActive ? 34 : 29}
                    fill={
                      isActive
                        ? 'var(--bg-invert)'
                        : isConnected
                        ? 'var(--bg-block-alt)'
                        : 'var(--bg-recessed)'
                    }
                    className="transition-all duration-200"
                  />
                  <text
                    x={pos.x}
                    y={pos.y + 4}
                    textAnchor="middle"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontSize="11"
                    fontWeight={isActive ? '600' : '500'}
                    fill={
                      isActive
                        ? 'var(--ink-invert)'
                        : isConnected
                        ? 'var(--ink-primary)'
                        : 'var(--ink-body)'
                    }
                  >
                    {domain.shortLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Discipline Solid Block Reader */}
      <div className="lg:col-span-6">
        <div
          role="tablist"
          aria-label="Explore interdisciplinary domains"
          className="mb-5 flex flex-wrap gap-2"
        >
          {DOMAIN_INTERSECTIONS.map((domain) => {
            const active = domain.id === activeId;
            return (
              <button
                key={domain.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setActiveId(domain.id)}
                className={`rounded-lg px-3.5 py-2 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active
                    ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)] font-semibold'
                    : 'bg-[var(--bg-card)] text-[var(--ink-body)] hover:bg-[var(--bg-block-alt)] hover:text-[var(--ink-primary)]'
                }`}
              >
                {domain.shortLabel}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl bg-[var(--bg-card)] p-7 sm:p-9 transition-colors duration-200">
          <p className="font-mono text-xs text-[var(--ink-accent)]">
            Active Intersection ·{' '}
            {activeDomain.connectedTo
              .map(
                (id) =>
                  DOMAIN_INTERSECTIONS.find((d) => d.id === id)?.shortLabel ?? id
              )
              .join(' / ')}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-medium text-[var(--ink-primary)] sm:text-3xl">
            {activeDomain.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-body)]">
            {activeDomain.description}
          </p>

          <div className="mt-6 rounded-xl bg-[var(--bg-block-alt)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
              Driving Question
            </p>
            <p className="mt-1.5 font-serif text-lg italic text-[var(--ink-primary)]">
              “{activeDomain.bridgingQuestion}”
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between pt-1">
            <span className="text-xs text-[var(--ink-muted)]">
              Related work in archive
            </span>
            <Link
              to={activeDomain.exampleWork.route}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--ink-primary)] hover:text-[var(--ink-accent)] transition-colors"
            >
              <span>{activeDomain.exampleWork.title}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

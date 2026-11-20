import React, { useState } from 'react';
import { FEATURED_RESEARCH } from '../data/portfolio';

export function ClonalLeakageExplorer() {
  const [validationMode, setValidationMode] = useState<'cluster-aware' | 'naive'>(
    'cluster-aware'
  );

  return (
    <div className="rounded-2xl bg-[var(--bg-card)] p-6 sm:p-8 transition-colors duration-200">
      <div className="flex flex-col justify-between gap-4 pb-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs text-[var(--ink-accent)]">
            Interactive Validation Comparison · CPHIA 2026 (#2514)
          </p>
          <h3 className="mt-1 font-serif text-xl font-medium text-[var(--ink-primary)]">
            Naive Split vs. Clone-Grouped Cross-Validation
          </h3>
        </div>

        <div
          role="group"
          aria-label="Toggle cross-validation view"
          className="inline-flex rounded-lg bg-[var(--bg-canvas)] p-1 self-start"
        >
          <button
            type="button"
            onClick={() => setValidationMode('cluster-aware')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              validationMode === 'cluster-aware'
                ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)] font-semibold'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
            }`}
          >
            GroupKFold (Cluster-Aware)
          </button>
          <button
            type="button"
            onClick={() => setValidationMode('naive')}
            className={`rounded-md px-3.5 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors ${
              validationMode === 'naive'
                ? 'bg-[var(--bg-invert)] text-[var(--ink-invert)] font-semibold'
                : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
            }`}
          >
            Naive Split Reference
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-xl bg-[var(--bg-recessed)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
              {validationMode === 'cluster-aware'
                ? 'Clone-Grouped Partitioning (0.95 Jaccard)'
                : 'Random Partitioning (Clonal Leakage Risk)'}
            </p>
            <svg viewBox="0 0 300 170" className="mt-3 w-full" aria-hidden="true">
              <rect
                x="10"
                y="14"
                width="130"
                height="136"
                rx="8"
                fill="var(--bg-card)"
              />
              <rect
                x="160"
                y="14"
                width="130"
                height="136"
                rx="8"
                fill="var(--bg-block-alt)"
              />
              <text
                x="75"
                y="32"
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="10"
                fill="var(--ink-muted)"
              >
                Training Folds
              </text>
              <text
                x="225"
                y="32"
                textAnchor="middle"
                fontFamily="IBM Plex Mono, monospace"
                fontSize="10"
                fill="var(--ink-primary)"
              >
                Validation Fold
              </text>

              {validationMode === 'cluster-aware' ? (
                <>
                  <circle cx="52" cy="74" r="10" fill="var(--ink-primary)" />
                  <circle cx="80" cy="66" r="6" fill="var(--ink-accent)" />
                  <circle cx="76" cy="92" r="6" fill="var(--ink-accent)" />
                  <line
                    x1="52"
                    y1="74"
                    x2="80"
                    y2="66"
                    stroke="var(--ink-accent)"
                    strokeWidth="1"
                  />
                  <line
                    x1="52"
                    y1="74"
                    x2="76"
                    y2="92"
                    stroke="var(--ink-accent)"
                    strokeWidth="1"
                  />
                  <text
                    x="68"
                    y="122"
                    textAnchor="middle"
                    fontSize="9"
                    fill="var(--ink-muted)"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    Clones A, B kept intact
                  </text>

                  <circle cx="212" cy="78" r="10" fill="var(--ink-accent)" />
                  <circle
                    cx="242"
                    cy="68"
                    r="6"
                    fill="var(--ink-primary)"
                    fillOpacity="0.85"
                  />
                  <circle
                    cx="238"
                    cy="94"
                    r="6"
                    fill="var(--ink-primary)"
                    fillOpacity="0.85"
                  />
                  <line
                    x1="212"
                    y1="78"
                    x2="242"
                    y2="68"
                    stroke="var(--ink-primary)"
                    strokeWidth="1"
                  />
                  <line
                    x1="212"
                    y1="78"
                    x2="238"
                    y2="94"
                    stroke="var(--ink-primary)"
                    strokeWidth="1"
                  />
                  <text
                    x="225"
                    y="122"
                    textAnchor="middle"
                    fontSize="9"
                    fill="var(--ink-primary)"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    Unseen Clonal Lineage
                  </text>
                </>
              ) : (
                <>
                  <circle cx="58" cy="76" r="10" fill="var(--ink-primary)" />
                  <circle cx="88" cy="90" r="6" fill="var(--ink-accent)" />
                  <circle cx="212" cy="74" r="6" fill="var(--ink-accent)" />
                  <circle cx="242" cy="88" r="6" fill="var(--ink-accent)" />
                  <line
                    x1="58"
                    y1="76"
                    x2="212"
                    y2="74"
                    stroke="var(--ink-accent)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <line
                    x1="88"
                    y1="90"
                    x2="242"
                    y2="88"
                    stroke="var(--ink-accent)"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <text
                    x="150"
                    y="126"
                    textAnchor="middle"
                    fontSize="9"
                    fill="var(--ink-primary)"
                    fontFamily="IBM Plex Mono, monospace"
                  >
                    Near-identical descendants cross boundary
                  </text>
                </>
              )}
            </svg>
            <p className="mt-3 text-xs leading-relaxed text-[var(--ink-body)]">
              {validationMode === 'cluster-aware'
                ? 'Grouping all 75 near-identical descendants with their 53 founder clones (0.95 Jaccard threshold) prevents memorization across folds and exposes model differences.'
                : 'When synthetic gene profiles are split randomly without clonal grouping, near-identical descendants appear in both folds, yielding a naive overall AUC of 0.818.'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          {validationMode === 'cluster-aware' ? (
            <div className="space-y-3.5">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium text-[var(--ink-primary)]">
                  Verified Cluster-Aware AUC (GroupKFold)
                </span>
                <span className="font-mono text-xs text-[var(--ink-muted)]">
                  Synthetic profiles (n = 188)
                </span>
              </div>

              <div className="space-y-3">
                {FEATURED_RESEARCH.clusterAwareResults.map((row) => {
                  const widthPct = Math.round(row.auc * 100);
                  const isLinear = row.family === 'Linear';
                  return (
                    <div
                      key={row.model}
                      className="rounded-xl bg-[var(--bg-recessed)] p-4"
                    >
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-medium text-[var(--ink-primary)]">
                            {row.model}
                          </span>
                          <span className="font-mono text-[11px] text-[var(--ink-muted)]">
                            {row.family}
                          </span>
                        </div>
                        <span className="font-mono text-sm font-semibold text-[var(--ink-primary)] tabular-nums">
                          {row.auc.toFixed(3)}
                        </span>
                      </div>
                      <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-[var(--bg-block-alt)]">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${widthPct}%`,
                            backgroundColor: isLinear
                              ? 'var(--ink-primary)'
                              : 'var(--ink-accent)',
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="text-xs leading-relaxed text-[var(--ink-muted)]">
                Notice the divergence once clonal leakage is controlled: Linear SVM (0.848) and Logistic Regression (0.846) retain stronger discrimination than Random Forest (0.761) and XGBoost (0.770).
              </p>
            </div>
          ) : (
            <div className="flex h-full flex-col justify-between rounded-xl bg-[var(--bg-invert)] p-6 text-[var(--ink-invert)]">
              <div>
                <span className="font-mono text-xs font-medium text-[var(--ink-invert-muted)]">
                  Baseline Leakage Benchmark
                </span>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="font-serif text-5xl font-semibold text-[var(--ink-invert)] tabular-nums">
                    {FEATURED_RESEARCH.naiveOverallAuc.toFixed(3)}
                  </span>
                  <span className="text-sm text-[var(--ink-invert)] opacity-85">
                    Naive Overall AUC
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--ink-invert)] opacity-90">
                  Without grouping by founder clone, near-identical descendants (Jaccard ≥ 0.95) sit on both sides of the evaluation split. That hides how sharply tree-based ensembles drop when tested on genuinely distinct lineages.
                </p>
              </div>
              <div className="mt-6 rounded-lg bg-black/15 dark:bg-[#18110D]/15 px-4 py-2.5 font-mono text-xs text-[var(--ink-invert)]">
                Switch back to GroupKFold to inspect per-model cluster-aware AUC.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

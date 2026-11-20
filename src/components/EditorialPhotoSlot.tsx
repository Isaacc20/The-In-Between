import React, { useState } from 'react';
import { GalleryPhotoItem, ProjectItem } from '../data/portfolio';

function resolveAssetUrl(src: string | null | undefined): string | undefined {
  if (!src) return undefined;
  return encodeURI(src);
}

interface HeroCutoutStageProps {
  src: string | null;
  alt: string;
}

/**
 * Cinematic overlapping solid-block stage for a transparent-background
 * portrait PNG on the right side of the Hero section.
 */
export function HeroCutoutStage({ src, alt }: HeroCutoutStageProps) {
  const [hasError, setHasError] = useState(false);
  const safeSrc = resolveAssetUrl(src);

  return (
    <div className="relative flex min-h-[440px] w-full items-end justify-center sm:min-h-[520px] lg:min-h-[570px]">
      {/* Base solid mocha / warm latte vertical block */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-3 h-[88%] w-[86%] rounded-2xl bg-[var(--bg-card)] transition-colors duration-200"
      />

      {/* Overlapping solid chestnut / warm taupe middle block */}
      <div
        aria-hidden="true"
        className="absolute bottom-7 left-2 h-[64%] w-[74%] rounded-2xl bg-[var(--bg-block-alt)] transition-colors duration-200"
      />

      {/* Solid high-contrast accent slab anchored bottom-left */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 z-30 rounded-xl bg-[var(--bg-invert)] px-5 py-4 text-[var(--ink-invert)] shadow-xl transition-colors duration-200"
      >
        <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-invert-muted)]">
          B.Sc. Microbiology · EKSU
        </p>
        <p className="mt-0.5 font-serif text-base font-semibold text-[var(--ink-invert)]">
          Data Science & AI Research
        </p>
      </div>

      {/* Overlapping Transparent Cutout Portrait Layer */}
      {safeSrc && !hasError ? (
        <div className="relative z-20 flex h-full w-full items-end justify-end pr-1 sm:pr-4">
          <img
            src={safeSrc}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="max-h-[510px] w-auto object-contain object-bottom drop-shadow-[0_24px_36px_rgba(29,19,14,0.32)] dark:drop-shadow-[0_24px_40px_rgba(12,8,6,0.68)] sm:max-h-[560px]"
          />
        </div>
      ) : (
        <div className="relative z-20 mb-10 mr-3 flex w-[78%] flex-col items-center justify-end self-end rounded-2xl bg-[var(--bg-recessed)]/90 px-6 pb-8 pt-10 text-center backdrop-blur-xs sm:mr-6 sm:w-[72%]">
          <svg
            aria-hidden="true"
            viewBox="0 0 220 260"
            className="h-52 w-44 sm:h-60 sm:w-48"
          >
            <circle
              cx="110"
              cy="76"
              r="38"
              fill="var(--bg-block-alt)"
              stroke="var(--ink-accent)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path
              d="M36 244 C36 172, 68 136, 110 136 C152 136, 184 172, 184 244 Z"
              fill="var(--bg-block-alt)"
              stroke="var(--ink-accent)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <text
              x="110"
              y="83"
              textAnchor="middle"
              fontFamily="Fraunces, Georgia, serif"
              fontStyle="italic"
              fontSize="22"
              fill="var(--ink-primary)"
            >
              FF
            </text>
          </svg>

          <p className="mt-2 font-serif text-lg font-medium text-[var(--ink-primary)]">
            Transparent Cutout Portrait Slot
          </p>
          <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-[var(--ink-muted)]">
            Designed for a transparent-background PNG overlapping these solid
            brown and cream blocks.
          </p>
        </div>
      )}
    </div>
  );
}

interface EditorialPhotoSlotProps {
  src: string | null;
  alt: string;
  plateLabel: string;
  caption: string;
  aspectClass?: string;
  variant?: 'portrait' | 'documentary';
  objectPosition?: 'center' | 'top';
  fit?: 'cover' | 'contain';
  className?: string;
}

export function EditorialPhotoSlot({
  src,
  alt,
  plateLabel,
  caption,
  aspectClass = 'aspect-[3/4]',
  variant = 'portrait',
  objectPosition = 'center',
  fit = 'cover',
  className = '',
}: EditorialPhotoSlotProps) {
  const [hasError, setHasError] = useState(false);
  const safeSrc = resolveAssetUrl(src);

  if (safeSrc && !hasError) {
    return (
      <figure className={`flex flex-col ${className}`}>
        <div
          className={`relative w-full overflow-hidden rounded-xl bg-[var(--bg-recessed)] ${
            fit === 'contain' ? 'p-3' : ''
          } ${aspectClass}`}
        >
          <img
            src={safeSrc}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className={`h-full w-full rounded-lg ${
              fit === 'contain'
                ? 'object-contain'
                : objectPosition === 'top'
                ? 'object-cover object-top'
                : 'object-cover object-center'
            }`}
          />
        </div>
        <figcaption className="mt-3 flex flex-col gap-1 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)] shrink-0">
            {plateLabel}
          </span>
          <span className="sm:text-right text-[var(--ink-body)]">{caption}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={`relative flex w-full flex-col justify-between overflow-hidden rounded-xl bg-[var(--bg-card)] p-6 sm:p-8 ${aspectClass}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 400 500"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="200"
            cy={variant === 'portrait' ? '220' : '250'}
            r="128"
            fill="var(--bg-block-alt)"
            fillOpacity="0.45"
          />
          <circle
            cx="200"
            cy={variant === 'portrait' ? '220' : '250'}
            r="84"
            fill="none"
            stroke="var(--ink-accent)"
            strokeWidth="0.9"
          />
          <line
            x1="200"
            y1="52"
            x2="200"
            y2="448"
            stroke="var(--ink-primary)"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
          <line
            x1="40"
            y1={variant === 'portrait' ? '220' : '250'}
            x2="360"
            y2={variant === 'portrait' ? '220' : '250'}
            stroke="var(--ink-primary)"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        </svg>

        <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-[var(--ink-accent)]">
          <span>{plateLabel}</span>
          <span className="tabular-nums text-[var(--ink-muted)]">EKSU · NG</span>
        </div>

        <div className="relative z-10 my-auto flex flex-col items-center text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bg-block-alt)] font-serif text-xl italic text-[var(--ink-primary)]">
            FF
          </div>
          <p className="font-serif text-lg text-[var(--ink-primary)] sm:text-xl">
            {variant === 'portrait'
              ? 'Authentic Portrait Frame'
              : 'Community & Showcase Archive'}
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-[var(--ink-body)]">
            {caption}
          </p>
        </div>

        <div className="relative z-10 flex items-center justify-between rounded-lg bg-[var(--bg-recessed)] px-3.5 py-2 font-mono text-[11px] text-[var(--ink-muted)]">
          <span>The In-Between Archive</span>
          <span>Documentation slot</span>
        </div>
      </div>
    </figure>
  );
}

interface GalleryGridProps {
  items: GalleryPhotoItem[];
  aspectClass?: string;
  columnsClass?: string;
  cardTone?: 'card' | 'recessed';
}

export function DocumentaryGalleryGrid({
  items,
  aspectClass = 'aspect-[4/3]',
  columnsClass = 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  cardTone = 'card',
}: GalleryGridProps) {
  return (
    <div className={columnsClass}>
      {items.map((item) => {
        const isContain = item.fit === 'contain';
        const safeSrc = resolveAssetUrl(item.src);
        return (
          <figure
            key={item.id}
            className={`flex flex-col justify-between rounded-2xl p-4 sm:p-5 transition-colors duration-200 ${
              cardTone === 'recessed'
                ? 'bg-[var(--bg-recessed)]'
                : 'bg-[var(--bg-card)]'
            }`}
          >
            <div>
              <div
                className={`relative w-full overflow-hidden rounded-xl bg-[var(--bg-canvas)] ${
                  isContain ? 'p-2.5' : ''
                } ${aspectClass}`}
              >
                <img
                  src={safeSrc}
                  alt={item.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={`h-full w-full rounded-lg ${
                    isContain
                      ? 'object-contain'
                      : item.objectPosition === 'top'
                      ? 'object-cover object-top'
                      : 'object-cover object-center'
                  }`}
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink-accent)]">
                  {item.label}
                </p>
                <h3 className="mt-1 font-serif text-lg font-medium leading-snug text-[var(--ink-primary)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-body)]">
                  {item.caption}
                </p>
              </figcaption>
            </div>
          </figure>
        );
      })}
    </div>
  );
}

interface ProjectVisualProps {
  project: ProjectItem;
  className?: string;
}

export function ProjectVisual({ project, className = '' }: ProjectVisualProps) {
  const [imgError, setImgError] = useState(false);
  const safeSrc = resolveAssetUrl(project.imageSrc);

  if (project.visualType === 'banking-plate') {
    return (
      <div
        className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[var(--bg-recessed)] p-6 sm:p-8 ${className}`}
      >
        <div className="flex items-center justify-between rounded-lg bg-[var(--bg-card)] px-4 py-2.5">
          <span className="font-mono text-xs text-[var(--ink-accent)]">
            Power BI Analytical Summary
          </span>
          <span className="font-mono text-xs text-[var(--ink-muted)] tabular-nums">
            1955 – 2023
          </span>
        </div>

        <div className="my-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-[var(--bg-card)] p-4">
            <div className="font-mono text-[11px] text-[var(--ink-muted)]">
              Customers
            </div>
            <div className="mt-1 font-serif text-2xl font-medium text-[var(--ink-primary)] tabular-nums">
              3,011
            </div>
          </div>
          <div className="rounded-lg bg-[var(--bg-card)] p-4">
            <div className="font-mono text-[11px] text-[var(--ink-muted)]">
              Cities
            </div>
            <div className="mt-1 font-serif text-2xl font-medium text-[var(--ink-primary)] tabular-nums">
              22
            </div>
          </div>
          <div className="col-span-2 rounded-lg bg-[var(--bg-invert)] p-4 sm:col-span-1">
            <div className="font-mono text-[11px] text-[var(--ink-invert-muted)]">
              Loans
            </div>
            <div className="mt-1 font-serif text-2xl font-semibold text-[var(--ink-invert)] tabular-nums">
              ₦984B
            </div>
          </div>
        </div>

        <div className="space-y-3 rounded-lg bg-[var(--bg-card)] p-4">
          <div className="flex items-center justify-between text-xs text-[var(--ink-muted)]">
            <span>Transaction Volume Tracked</span>
            <span className="font-mono font-medium text-[var(--ink-primary)] tabular-nums">
              ₦76.59M
            </span>
          </div>
          <div className="flex h-10 items-end gap-1.5">
            {[28, 42, 35, 58, 49, 72, 64, 88, 76, 94, 82, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-opacity"
                style={{
                  height: `${h}%`,
                  backgroundColor:
                    i >= 9 ? 'var(--ink-primary)' : 'var(--ink-accent)',
                  opacity: i >= 9 ? 0.95 : 0.42 + i * 0.04,
                }}
              />
            ))}
          </div>
          <p className="font-mono text-[11px] text-[var(--ink-muted)]">
            Structured KPI overview · Nigerian banking dataset
          </p>
        </div>
      </div>
    );
  }

  if (project.visualType === 'safety-plate') {
    return (
      <div
        className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-[var(--bg-recessed)] p-6 sm:p-8 ${className}`}
      >
        <div className="flex items-center justify-between rounded-lg bg-[var(--bg-card)] px-4 py-2.5">
          <span className="font-mono text-xs text-[var(--ink-accent)]">
            Bio-AI Safety Inquiry Framework
          </span>
          <span className="font-mono text-xs text-[var(--ink-muted)]">
            GitHub Exploration
          </span>
        </div>

        <svg aria-hidden="true" viewBox="0 0 420 220" className="my-4 w-full">
          <g fill="none" strokeWidth="1.2">
            <rect
              x="24"
              y="32"
              width="112"
              height="62"
              rx="8"
              fill="var(--bg-card)"
            />
            <rect
              x="154"
              y="32"
              width="112"
              height="62"
              rx="8"
              fill="var(--bg-block-alt)"
            />
            <rect
              x="284"
              y="32"
              width="112"
              height="62"
              rx="8"
              fill="var(--bg-invert)"
            />
            <path d="M136 63 H154 M266 63 H284" stroke="var(--ink-accent)" />
            <rect
              x="86"
              y="128"
              width="248"
              height="64"
              rx="8"
              fill="var(--bg-card)"
            />
            <path d="M210 94 V128" stroke="var(--ink-accent)" />
          </g>
          <g
            fontFamily="IBM Plex Mono, monospace"
            fontSize="10"
            fill="var(--ink-primary)"
            textAnchor="middle"
          >
            <text x="80" y="59">
              Biological
            </text>
            <text x="80" y="75" fill="var(--ink-muted)">
              Context
            </text>
            <text x="210" y="59">
              Model Risk
            </text>
            <text x="210" y="75" fill="var(--ink-accent)">
              Evaluation
            </text>
            <text x="340" y="59" fill="var(--ink-invert)">
              Governance
            </text>
            <text x="340" y="75" fill="var(--ink-invert-muted)">
              Audit Lens
            </text>
            <text x="210" y="157">
              Responsible Open Science
            </text>
            <text x="210" y="173" fill="var(--ink-muted)">
              Microbiology + AI Safety Checkpoints
            </text>
          </g>
        </svg>

        <div className="flex items-center justify-between rounded-lg bg-[var(--bg-card)] px-4 py-2.5 font-mono text-[11px] text-[var(--ink-muted)]">
          <span>github.com/FaladeF311</span>
          <span className="text-[var(--ink-accent)]">Scope: Exploratory</span>
        </div>
      </div>
    );
  }

  if (safeSrc && !imgError) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl bg-[var(--bg-block-alt)] p-2.5 ${className}`}
      >
        <img
          src={safeSrc}
          alt={project.imageAlt}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col justify-between rounded-xl bg-[var(--bg-card)] p-6 ${className}`}
    >
      <span className="font-mono text-xs text-[var(--ink-accent)]">
        {project.field}
      </span>
      <p className="font-serif text-xl text-[var(--ink-primary)]">
        {project.title}
      </p>
      <span className="font-mono text-xs text-[var(--ink-muted)]">
        {project.status}
      </span>
    </div>
  );
}

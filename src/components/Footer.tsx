import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../data/portfolio';
import { Link } from '../lib/router';
import { InlineThemeToggle } from './ThemeToggle';

export function Footer() {
  return (
    <footer className="bg-[var(--bg-recessed)] text-[var(--ink-primary)] transition-colors duration-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link
              to="/"
              className="font-serif text-2xl font-medium text-[var(--ink-primary)]"
            >
              Favour Falade
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--ink-muted)]">
              {SITE_CONFIG.conceptMotto} Exploring the intersections of
              microbiology, artificial intelligence, research, and African
              public health.
            </p>
            <div className="mt-5">
              <InlineThemeToggle />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7">
            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--ink-accent)]">
                Pages
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/story"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    My Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/research"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--ink-accent)]">
                Connect
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/community"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cv"
                    className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    Curriculum Vitae
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--ink-accent)]">
                Elsewhere
              </h3>
              <ul className="mt-3.5 space-y-2.5 text-sm">
                <li>
                  <Link
                    to={SITE_CONFIG.socials.linkedin}
                    className="inline-flex items-center gap-1 text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <Link
                    to={SITE_CONFIG.socials.github}
                    className="inline-flex items-center gap-1 text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                  >
                    <span>GitHub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </li>
                {SITE_CONFIG.email && (
                  <li>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[var(--ink-body)] hover:text-[var(--ink-primary)] transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-xl bg-[var(--bg-canvas)] px-5 py-4 text-xs text-[var(--ink-muted)] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Favour Falade. Ekiti State, Nigeria.</p>
          <p className="font-mono text-[11px] text-[var(--ink-accent)]">
            The In-Between · Microbiology · Data Science · AI Research
          </p>
        </div>
      </div>
    </footer>
  );
}

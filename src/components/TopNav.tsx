import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useRouter } from '../lib/router';

const NAV_ITEMS = [
  { label: 'My Story', to: '/story' },
  { label: 'Research', to: '/research' },
  { label: 'Projects', to: '/projects' },
  { label: 'Community', to: '/community' },
  { label: 'Contact', to: '/contact' },
];

export function TopNav() {
  const { path } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (to: string) => {
    if (to === '/projects') {
      return path === '/projects' || path.startsWith('/projects/');
    }
    return path === to;
  };

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-nav)] backdrop-blur-sm transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="font-serif text-lg font-medium tracking-tight text-[var(--ink-primary)] whitespace-nowrap shrink-0 transition-colors hover:text-[var(--ink-accent)]"
        >
          Favour Falade
        </Link>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--ink-muted)]"
        >
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  active
                    ? 'text-[var(--ink-primary)] font-semibold'
                    : 'text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
                }`}
              >
                {item.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-[var(--ink-accent)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action (CV) + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cv"
            onClick={() => setMobileOpen(false)}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[var(--bg-invert)] px-4 py-2 text-xs font-semibold text-[var(--ink-invert)] whitespace-nowrap shrink-0 transition-opacity duration-150 hover:opacity-90"
          >
            View CV
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--ink-primary)] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="bg-[var(--bg-recessed)] px-4 py-6 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className={`rounded-lg px-3.5 py-3 text-base font-medium transition-colors ${
                path === '/'
                  ? 'bg-[var(--bg-block-alt)] text-[var(--ink-primary)] font-semibold'
                  : 'text-[var(--ink-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--ink-primary)]'
              }`}
            >
              Home
            </Link>
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3.5 py-3 text-base font-medium transition-colors ${
                    active
                      ? 'bg-[var(--bg-block-alt)] text-[var(--ink-primary)] font-semibold'
                      : 'text-[var(--ink-muted)] hover:bg-[var(--bg-card)] hover:text-[var(--ink-primary)]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-4 pt-2">
              <Link
                to="/cv"
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-lg bg-[var(--bg-invert)] px-4 py-3 text-sm font-semibold text-[var(--ink-invert)]"
              >
                View & Download CV
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

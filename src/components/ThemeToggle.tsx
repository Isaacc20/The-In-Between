import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/theme';

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="no-print fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          isDark
            ? 'Switch to Warm Cream light mode'
            : 'Switch to Deep Espresso dark mode'
        }
        className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-invert)] px-3.5 py-2.5 text-xs font-semibold text-[var(--ink-invert)] shadow-lg whitespace-nowrap shrink-0 transition-colors hover:opacity-90"
      >
        {isDark ? (
          <>
            <Sun className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Cream Light</span>
          </>
        ) : (
          <>
            <Moon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Espresso Dark</span>
          </>
        )}
      </button>
    </div>
  );
}

export function InlineThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-lg bg-[var(--bg-card)] px-3.5 py-2 text-xs font-medium text-[var(--ink-primary)] whitespace-nowrap shrink-0 transition-colors hover:bg-[var(--bg-block-alt)]"
    >
      {isDark ? (
        <>
          <Sun className="h-3.5 w-3.5 text-[var(--ink-accent)]" aria-hidden="true" />
          <span>Switch to Cream Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-3.5 w-3.5 text-[var(--ink-accent)]" aria-hidden="true" />
          <span>Switch to Espresso Dark Mode</span>
        </>
      )}
    </button>
  );
}

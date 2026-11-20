import React from 'react';
import { MotionConfig } from 'motion/react';
import { RouterProvider, useRouter } from './lib/router';
import { ThemeProvider } from './lib/theme';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';
import { FloatingThemeToggle } from './components/ThemeToggle';
import { HomePage } from './pages/HomePage';
import { StoryPage } from './pages/StoryPage';
import { ResearchPage } from './pages/ResearchPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectCaseStudyPage } from './pages/ProjectCaseStudyPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';
import { CvPage } from './pages/CvPage';

function PageView() {
  const { path } = useRouter();

  if (path === '/') return <HomePage />;
  if (path === '/story') return <StoryPage />;
  if (path === '/research') return <ResearchPage />;
  if (path === '/projects') return <ProjectsPage />;
  if (path.startsWith('/projects/')) {
    const slug = path.replace('/projects/', '').trim();
    return <ProjectCaseStudyPage slug={slug} />;
  }
  if (path === '/community') return <CommunityPage />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/cv') return <CvPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider>
        <RouterProvider>
          <div className="flex min-h-screen flex-col bg-[var(--bg-canvas)] text-[var(--ink-primary)] transition-colors duration-200">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--bg-invert)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--ink-invert)]"
            >
              Skip to main content
            </a>
            <TopNav />
            <main id="main-content" className="flex-1">
              <PageView />
            </main>
            <Footer />
            <FloatingThemeToggle />
          </div>
        </RouterProvider>
      </ThemeProvider>
    </MotionConfig>
  );
}

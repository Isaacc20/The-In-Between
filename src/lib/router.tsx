import React, { createContext, useContext, useEffect, useState } from 'react';

interface RouterContextValue {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue>({
  path: '/',
  navigate: () => {},
});

const ROUTE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Favour Falade — The In-Between | Microbiology, Data Science & AI Research',
    description:
      'Where biology meets data, and curiosity becomes discovery. Portfolio, research, and interdisciplinary journey of Favour Falade.',
  },
  '/story': {
    title: 'My Story — Favour Falade | From Microbiology to Interdisciplinary AI',
    description:
      'How a Microbiology graduate from Ekiti State University explored data science, machine learning, community leadership, and bioinformatics.',
  },
  '/research': {
    title: 'Research — Favour Falade | AMR, Genomic Surveillance & CPHIA 2026',
    description:
      'CPHIA 2026 accepted abstract (#2514) on genomic relatedness and machine learning estimates of carbapenem resistance prediction, plus ongoing research directions.',
  },
  '/projects': {
    title: 'Projects — Favour Falade | Afara, God’s Dataset, Food Spoilage & Analytics',
    description:
      'Case studies across African language technology, Scripture data visualization, computer vision for food spoilage, banking analytics, and biological AI safety.',
  },
  '/community': {
    title: 'Community & Leadership — Favour Falade | DSN EKSU, 3MTT & Mentorship',
    description:
      'Community leadership and teaching experiences across DSN EKSU, Deep Learning Indaba, 3MTT DeepTech Ready, TechHUB EKSU, Data Fellows, and Aurora Robotics.',
  },
  '/contact': {
    title: 'Contact — Favour Falade | Research & Technical Collaborations',
    description:
      'Connect with Favour Falade for research collaborations, postgraduate opportunities, speaking invitations, and technical partnerships.',
  },
  '/cv': {
    title: 'Curriculum Vitae — Favour Falade',
    description:
      'Academic background, research abstract, interdisciplinary projects, and community leadership summary of Favour Falade.',
  },
};

function normalizePath(rawPath: string): string {
  const clean = rawPath.split('?')[0].split('#')[0];
  if (clean.length > 1 && clean.endsWith('/')) {
    return clean.slice(0, -1);
  }
  return clean || '/';
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState<string>(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => {
      setPath(normalizePath(window.location.pathname));
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const baseKey = path.startsWith('/projects/') ? '/projects' : path;
    const meta = ROUTE_META[baseKey] ?? ROUTE_META['/'];
    document.title = meta.title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute('content', meta.description);
    }
  }, [path]);

  const navigate = (to: string) => {
    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:')) {
      window.open(to, '_blank', 'noopener,noreferrer');
      return;
    }

    const [pathname, hash] = to.split('#');
    const target = normalizePath(pathname || '/');
    if (target !== path) {
      window.history.pushState({}, '', hash ? `${target}#${hash}` : target);
      setPath(target);
    }

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const { navigate } = useRouter();
  const isExternal =
    to.startsWith('http://') ||
    to.startsWith('https://') ||
    to.startsWith('mailto:');

  if (isExternal) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={to}
      onClick={(e) => {
        if (
          e.metaKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.altKey ||
          e.button !== 0
        ) {
          return;
        }
        e.preventDefault();
        onClick?.(e);
        navigate(to);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

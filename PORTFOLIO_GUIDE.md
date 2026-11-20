# Updating & Maintaining Favour Falade's Portfolio ("The In-Between")

All structured content — biography details, portraits, research records, project case studies, timeline milestones, community roles, and CV links — lives in one central file:

- `src/data/portfolio.ts`

You do not need to redesign components when adding new achievements.

---

## 1. Adding Your Photographs

1. Create a folder at `public/images/` and place your image files there (for example: `favour-hero-cutout.png` with a transparent background for the hero, `dsn-eksu.jpg`, `indaba-afara.jpg`, `banking-dashboard.png`).
2. Open `src/data/portfolio.ts` and update the image paths:
   - Hero cutout portrait: set `SITE_CONFIG.heroPortraitSrc` to `'/images/favour-hero-cutout.png'`.
   - Story page photograph: set `SITE_CONFIG.storyPhotoSrc` to `'/images/favour-story.jpg'`.
   - Community photographs: set `photoSrc` on any item in `COMMUNITY_EXPERIENCES` (currently `null`, which displays a clean archival plate).
   - Banking Power BI screenshot: update the `banking-analytics-dashboard` entry's `visualType` to `'image'` and set `imageSrc: '/images/banking-dashboard.png'`.

---

## 2. Configuring Email & PDF CV

1. **Email address**: In `src/data/portfolio.ts`, replace `email: null` in `SITE_CONFIG` with your address (for example `'hello@favourfalade.com'`). The Contact page, Footer, and CV page will automatically display it with copy and `mailto:` links.
2. **Downloadable CV PDF**: Place your PDF at `public/cv/Favour-Falade-CV.pdf` and set `SITE_CONFIG.cvPdfPath` to `'/cv/Favour-Falade-CV.pdf'`.

---

## 3. Adding New Milestones, Projects, or Research

- **Timeline Milestones**: Append a new object to `TIMELINE_MILESTONES` in `src/data/portfolio.ts`.
- **Currently Exploring**: Update the string list in `SITE_CONFIG.currentlyExploring`.
- **Projects**: Add a new `ProjectItem` object to `PROJECTS` using the 12-part `caseStudy` structure; a new `/projects/<slug>` route is generated automatically.
- **Research & Publications**: Update `FEATURED_RESEARCH` or append entries in `src/pages/ResearchPage.tsx` under the dissemination archive.

---

## 4. Deploying to Vercel & Connecting a Custom Domain

1. Push this repository to a GitHub repository under your own GitHub account (`FaladeF311`).
2. Log into [Vercel](https://vercel.com) using your own email and import the GitHub repository.
3. Vercel automatically detects Vite (`npm run build` -> `dist`) and uses `vercel.json` to route `/story`, `/research`, `/projects/*`, `/community`, `/contact`, and `/cv` cleanly.
4. In your Vercel project settings under **Domains**, add your chosen domain (`favourfalade.com`, `favourfalade.dev`, or `favourfalade.me`) after verifying registrar availability and update DNS records as prompted.
5. Update the domain URLs inside `index.html` (JSON-LD `url`), `public/robots.txt`, and `public/sitemap.xml` once your live domain is active.

# Personal portfolio

A local, static portfolio built with React, Vite, strict TypeScript, Tailwind CSS, Motion for React, and Lucide. It uses self-hosted Inter and JetBrains Mono. There is no backend, database, analytics, or contact form service.

## Run locally

Use Node.js 22.12+ (or a newer supported LTS version). Dependencies are already installed in this workspace.

```powershell
cd C:\Users\Javie\Documents\my-portfolio
npm run dev
```

Open the Local URL printed by Vite, normally http://localhost:5173. Stop the server with Ctrl+C. On a fresh checkout, run `npm ci` first.

```sh
npm run build        # TypeScript checks, then production output in dist/
npm run preview      # Serve the production build locally
npm run lint         # Check source with the Vite starter's Oxlint
npm run format       # Format source and documentation
npm run format:check # Verify formatting
```

## Folder structure

```text
public/                 Static assets: favicon, your PDF, project screenshots
src/
  components/           Page sections and small shared UI components
  data/portfolio.ts     Personal content, skills, projects, links, resume
  hooks/                Active-section tracking
  types/portfolio.ts    TypeScript contracts for the content
  App.tsx               Page composition and shared motion setup
  index.css             Tailwind theme, component styles, responsive rules
  main.tsx              React entry point
index.html              SEO metadata and initial document
vite.config.ts          React and Tailwind Vite plugins
```

## Make it yours

Start with `src/data/portfolio.ts`. Replace your name and initials, edit the draft introduction, add your about paragraphs, and fill in education, location, and contact links. Keep optional values as `null` when you are not ready to add them. Empty arrays and nulls produce explicit placeholders; no credentials, statistics, projects, or URLs are invented.

**Skills:** Add only skills you actually use to each category's `skills` array. Rename, add, or remove categories as needed. Category descriptions are editable draft copy.

**Projects:** Replace the empty `projects` array with your real work. This is a schema example only; substitute your actual content:

```ts
projects: [
  {
    id: 'unique-project-id',
    title: '[Your real project title]',
    category: '[Your project category]',
    description: '[The problem, what you built, and an important decision or lesson.]',
    technologies: [], // Your actual technologies
    // githubUrl: your actual repository URL,
    // demoUrl: your actual deployed demo URL,
    // image: { src: '/projects/your-screenshot.webp', alt: 'Describe the real interface' },
  },
],
```

Missing links display as unavailable. The decorative empty-state illustrations disappear once there are real projects. Multiple distinct categories automatically enable filtering. Optional project screenshots belong in `public/projects/`; use compressed WebP/AVIF images with meaningful alt text. The CSS crops images to the card's preview area.

**Resume:** Add your actual PDF as `public/resume.pdf`. Then set:

```ts
resume: {
  url: '/resume.pdf',
  fileName: 'Your-Name-Resume.pdf',
},
```

This enables the inline PDF preview, the open-in-tab fallback, and the download link. The PDF iframe mounts only after someone requests a preview. Keep the PDF on the same origin for reliable `download` behavior. Mobile browsers may open PDFs in their native viewer instead of embedding them. The paper illustration is decorative, not a preview of the actual file. No sample resume is included.

**Contact:** Set your real `email`, `githubUrl`, and `linkedinUrl`. Email uses `mailto:` and opens the visitor's email app. Social and project links open in a new tab with `noopener noreferrer`. There is no form that implies a message was sent.

**SEO:** Update the document title, description, and Open Graph text in `index.html`. After choosing a domain, add a canonical URL, `og:url`, and a real share image with an absolute `og:image` URL. They are intentionally omitted until you have real URLs. The static HTML metadata works for social crawlers without executing React.

## How the implementation works

- `App.tsx` composes sections. Each section reads the typed data; TypeScript helps catch missing required fields before publishing.
- Tailwind v4 is integrated with `@tailwindcss/vite` and `@import 'tailwindcss'`. The `@theme` block defines reusable colors and fonts. Utilities handle simple layouts; named CSS classes keep detailed visual styles readable. No legacy Tailwind configuration or PostCSS setup is needed.
- `Reveal` is the one reusable scroll animation. `LazyMotion` and the lightweight `m` component use the DOM animation feature set. CSS handles hover and press feedback. Both Motion and CSS respect reduced-motion preferences.
- Active navigation uses a passive scroll listener and one scheduled update per frame, with cleanup on unmount. It reads the six section positions and handles the end of the page explicitly. Native hash links preserve browser history and keyboard navigation.
- The mobile navigation is a disclosure rather than a modal: normal Tab navigation works, Escape closes it and returns focus, and selecting a section closes it. It also closes when crossing the desktop breakpoint.
- One main landmark, labeled sections, an ordered heading hierarchy, a skip link, real buttons/links, and visible focus outlines provide an accessible baseline. The hero diagram and resume illustration avoid implying credentials.
- Fonts are bundled locally; no external runtime calls are required. React state is limited to navigation, project filtering, and the PDF disclosure.

## Change the visual direction later

Edit the colors and fonts in `src/index.css` first. Section layouts and responsive rules live there too, while the components control structure. Your personal data can stay intact as the design changes. The accent is **soft emerald #6EE7B7**, with navy #0F172A as the background. On desktop, a compact identity and navigation rail sits beside the complete scrolling portfolio; below 1024px it becomes a mobile navigation disclosure.

## Deployment

Vercel deploys the portfolio when changes are pushed to `main`. Run `npm run build` locally before pushing website changes to check that the production build succeeds.

To update the resume preview and download, replace `public/resume.pdf`. Keep the filename the same so the existing links continue to work.

Setup references: [Vite](https://vite.dev/guide/), [Tailwind with Vite](https://tailwindcss.com/docs/installation/using-vite), [Motion for React](https://motion.dev/docs/react-installation), and [Lucide React](https://lucide.dev/guide/react).

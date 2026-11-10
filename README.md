# Javie Alfaro | Developer Portfolio

A single-page portfolio for my software development and data work. It brings together selected projects, internship experience, education, certifications, and a downloadable resume.

[View the live portfolio](https://javiealfaro.vercel.app/) · [Browse selected projects](https://javiealfaro.vercel.app/#projects) · [View my resume](https://javiealfaro.vercel.app/#resume)

## Portfolio preview

**Desktop**

![Desktop portfolio with a navigation sidebar and a two-column layout](docs/screenshots/desktop.png)

**Mobile**

<img src="docs/screenshots/mobile.png" width="360" alt="Mobile portfolio with a compact header and a single-column layout" />

## Selected projects

### Chami

I co-developed this Android app for my undergraduate thesis. It classifies ripeness for three fruit varieties and gives shelf-life guidance. I led data preparation and model training using 1,725 images. The model achieved a 97.67% F1 score on the test data and runs offline through TensorFlow Lite.

### AlfaFocus

I built a productivity dashboard that brings tasks, nested projects, calendar planning, and habit tracking together. It includes a focus timer with three modes and automatic session logging. The React frontend uses an Express API backed by PostgreSQL, with JWT authentication for personal workspaces.

### OnlyFunds

I built an Android budgeting app in Flutter to track income, expenses, and savings goals. It uses linear regression to generate forecasts from up to six months of transaction history. Firebase Authentication handles sign-in, and Cloud Firestore syncs balances and transaction records.

## How I built the portfolio

| Technology                  | Role in this site                                                                             |
| --------------------------- | --------------------------------------------------------------------------------------------- |
| React and TypeScript        | Reusable page sections and a typed model for projects, experience, skills, and certifications |
| Tailwind CSS                | Shared color and typography tokens, responsive layouts, and component styles                  |
| Motion for React and Lucide | Scroll reveals and interface icons                                                            |
| Vite and Vercel             | Local development, production builds, and hosting from GitHub                                 |

- **Content and layout.** The sections read from [one typed content file](src/data/portfolio.ts), so project and experience updates stay separate from presentation. The project filters come from the categories in that data.
- **Responsive navigation.** A desktop sidebar becomes a collapsible menu on smaller screens. Native anchor links let visitors share section URLs, and the active link follows their scroll position. The site includes keyboard navigation, a skip link, and reduced-motion support.
- **Browser interactions.** Light and dark themes and optional sound effects use local storage to remember preferences. The resume PDF loads in an embedded viewer only when a visitor requests a preview, with options to open or download it directly.
- **Static delivery.** Vite builds the site to `dist/`, with fonts bundled locally and the resume served as a static asset. The portfolio runs without a backend, database, or environment variables.

## A closer look at the implementation

- **Scroll tracking.** The navigation checks which section has crossed a reading line in the viewport. Scroll events are grouped into at most one position check per animation frame. The final section is selected when the visitor reaches the bottom of the page. [Scroll tracking hook](src/hooks/useActiveSection.ts)
- **Keyboard navigation.** The mobile menu reports whether it is open or closed to assistive technology. Pressing Escape closes it and returns focus to the menu button. [Navigation component](src/components/Navbar.tsx)
- **Theme on first load.** The HTML reads the saved theme before React starts. On a first visit, it uses the device’s color preference to avoid a flash of the wrong theme. The page title and share description also live in the HTML so they are available before JavaScript runs. [HTML entry point](index.html)

## Explore the code

- [`src/App.tsx`](src/App.tsx) assembles the page and configures shared motion behavior.
- [`src/components/`](src/components/) contains the page sections and interactive controls.
- [`src/data/portfolio.ts`](src/data/portfolio.ts) holds the content, with its shape defined in [`src/types/portfolio.ts`](src/types/portfolio.ts).
- [`src/index.css`](src/index.css) defines theme tokens, component styles, and breakpoints.

## Run locally

Use Node.js 22.12 or a newer supported LTS release. From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command                | What it does                                              |
| ---------------------- | --------------------------------------------------------- |
| `npm run build`        | Checks TypeScript and builds the static site into `dist/` |
| `npm run preview`      | Serves the production output locally after a build        |
| `npm run lint`         | Runs Oxlint                                               |
| `npm run format:check` | Checks formatting with Prettier                           |

## Updating and deploying

Edit the project descriptions, skills, and experience in the portfolio content file. Add screenshots or other static assets under `public/`. To update the resume preview and download, replace the PDF using the same filename. [Portfolio content](src/data/portfolio.ts) · [Resume PDF](public/resume.pdf)

Vercel deploys pushes to `main`. Run `npm run build` locally before pushing site changes to catch TypeScript or build errors.

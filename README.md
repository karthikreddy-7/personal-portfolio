# Karthik Reddy — Personal Portfolio

Editorial portfolio for Basupally Karthik Reddy: backend systems at Nomura Global Markets IT, enterprise AI on Chinou, and selected projects.

**Live:** [karthikredddyy.vercel.app](https://karthikredddyy.vercel.app/)

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (`@tailwindcss/postcss`) for layout utilities
- Editorial design tokens are **hand-rolled** in CSS — no component library, no animation library. Per-component `<style>` blocks plus a small `app/globals.css`.
- Fonts: Google Sans + Google Sans Code (self-hosted under `public/fonts/`)
- Deployed on **Vercel**

## Structure

```
app/
  layout.tsx              root layout — metadata, viewport, fonts
  page.tsx                landing page — collapsible-accordion sections
  TocNav.tsx              sticky scroll nav
  globals.css             Tailwind import + theme tokens
  projects/
    [slug]/page.tsx       routable project case-study modal (SSG)
    projects-data.ts      project detail content, keyed by slug
    ProjectModal.tsx      the modal card UI
    ArchitectureDiagram.tsx   optional inline SVG diagrams, per slug
  error.tsx / not-found.tsx / global-error.tsx
public/                   images, fonts, resumes, web manifest
```

Content source of truth for bio facts: `C:\karthik\projects\profile\MASTER.md` (kept outside this repo).

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build (type-checks; fails on TS errors)
pnpm start      # serve the production build
```

## Personal photo

Replace `public/images/design-mode/personal_photo.svg` with your portrait (PNG recommended, ~3:4). Update the `src` in `app/page.tsx` if the filename changes.

## Resume

- `/Karthik_Reddy_Resume_AI.pdf`

## License

MIT.

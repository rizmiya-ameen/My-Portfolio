# Project notes

Personal portfolio for **Fathima Rizmiya** (Melbourne; MSc in Artificial Intelligence, previously a science teacher/lecturer and React developer). Live at https://rizmiya.com (custom domain; also https://rizmiya-portfolio.vercel.app), hosted on Vercel. Not a git repo locally.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — `next lint` (extends `next/core-web-vitals`)

No tests.

## Stack (installed versions, pinned by `package-lock.json`)

Next.js 13.5 (App Router), React 18.2, TypeScript 5, **Tailwind CSS 3.3** (`tailwind.config.ts` + `postcss.config.js`), Framer Motion 10, react-icons 4, react-hot-toast, react-simple-typewriter, react-intersection-observer, clsx, nodemailer.

`package.json` lists many deps as `"latest"`. Always install with `npm ci` / the lockfile. A lockfile-less install would pull Next 15+/React 19/Tailwind 4 and break the build (Tailwind 4 ignores `tailwind.config.ts` and `@tailwind` directives).
`@react-email/*`, `resend`, `emailjs`, `cors` and `react-vertical-timeline-component` are installed but unused.

## Layout

- `app/layout.tsx` — fonts (Inter body; Plus Jakarta Sans for headings as `--font-display` / `font-display`, applied to h1–h4 in `globals.css`; Nunito, Croissant One, Dancing Script exposed as CSS vars → `font-nunito`, `font-croissant`, `font-dancing`), metadata, providers, `<Toaster>`, and the pre-paint theme script.
- `app/page.tsx` — single page: `Header`, `Intro`, `About`, `Projects`, `Skills`, `Education` (the "Resume" section), `Contact`, `Footer`.
- `components/` — one file per section; `Project.tsx` is a single card (fades in once on scroll; top-cropped screenshot from `sm`, or a placeholder icon when `imageUrl` is missing; text-only on mobile; left-aligned category label, title, description, tag chips, links. `Projects.tsx` grid: 1 col → 2 at `sm` → 3 at `lg`, followed by a dashed "More on GitHub" banner that also links the `earlierProjects` (other projects and small early React apps, kept out of the grid on purpose) — keep the card count a multiple of 6 so the last row is full), `SectionHeading.tsx` (title centred over a faint `watermark` word shown from `sm`, no underline; pass `onDark` on gradient sections), `Submit-btn.tsx`, `ThemeSwitch.tsx`. Type scale is deliberately modest: body copy `text-sm`/`text-[0.95rem]`, section titles `text-2xl sm:text-3xl`, no decorative fonts, watermark words kept faint (~6% opacity). Owner wants the hero typewriter, the script-font `<Rizmiya />` logo and the light-mode indigo/cyan/sky scheme kept. Hero (`Intro.tsx`): 4:5 portrait crop of `me.jpg` (original styling, two rounded corners), badge, name as the large `h1`, typewriter cycling role titles (fixed height so it doesn’t shift the layout), one-line pitch, icon facts row (MSc, location), "View projects" (solid) and "Download CV" (outlined) pills, then borderless icon-only LinkedIn and GitHub links (no other socials). No stats strip: the owner removed it and doesn’t want it back. `Header.tsx`: logo left; nav links inline from `sm`, in a hamburger dropdown below `sm`. `Intro.tsx` has the "Open to AI / ML Engineer roles" badge (pulsing green dot).
- `lib/data.ts` — **content lives here**: nav `links`, `experiencesData` / `educationsData` (typed `ResumeItem`: title, org, location, optional `date` — missing means "Present" — and optional `url`; rendered by `Education.tsx`), `certificationsData` (typed `Certification`; shown as cards under the Education column, optional `date` / `url`), `earlierProjects`, `projectsData` (typed `ProjectData` in `lib/types.ts`; `category` drives the badge; images imported statically from `public/imageN.png`; optional `githubUrl` / `liveUrl` render as "Code" / "Live demo" links on the card; AI projects are listed first. Source repos: https://github.com/rizmiya-ameen), `skillCategories` (5 groups, rendered in `Skills.tsx` as rows of small chips: category label left, chips right; every skill has a react-icons `icon` so all render in one grey tone; the logo PNGs in `public/` are no longer used). Some copy is still hard-coded in components (About bio/contact details, Intro headline + social links, Footer).
- `app/opengraph-image.tsx` — generated 1200×630 link-preview image; Open Graph/Twitter metadata and `metadataBase` are in `app/layout.tsx`.
- `lib/types.ts` — `SectionName` derived from `links`; `lib/hooks.ts` — `useSectionInView(name, threshold)` sets the active nav item (ignored for 1s after a nav click).
- `context/active-section.context.tsx` — active nav section; `context/theme-context.tsx` — theme state + `useTheme()`.
- `pages/api/contact.js` — the contact form's `POST /api/contact` (Pages Router API route; Gmail SMTP via nodemailer). Needs `EMAIL` and `EMAIL_PASS` (Gmail App Password) in `.env.local` and in Vercel env vars.
- `public/` — `me.jpg`, `CV.pdf`, project screenshots, skill icons. `notes.txt` is the owner's scratch notes.
- Path alias `@/*` → project root.

## Dark mode

- Tailwind `darkMode: 'class'`: `dark:` utilities apply when `<html>` has `.dark`.
- The inline script in `app/layout.tsx` sets `.dark` before first paint, using `localStorage.theme`, or the OS preference if nothing is saved. `<html>` has `suppressHydrationWarning` for this reason.
- `ThemeContextProvider` syncs its state from the class on mount; `toggleTheme` flips the class and saves to `localStorage`.
- Every coloured element needs an explicit `dark:` counterpart (body colours are set on `<body>` in `layout.tsx`).
- Dark palette is deliberately plain and not too black (owner found `slate-950` too dark): `slate-800` page and header, `slate-900` bands (hero, Contact, footer), `slate-700/40` cards and chips, `white/10` borders, and `sky-400` as the only accent. No gradients in dark mode (the hero/Contact gradients are light-mode only; the logo gradient is the one exception). `globals.css` holds `.borderBlack` and a `--line-color` var.
- **If `dark:` styles follow the OS instead of the toggle, the `.next` cache is stale** (e.g. CSS compiled before `darkMode: 'class'` was added). Stop the dev server, delete `.next`, restart. Check: in the served CSS the dark rules should look like `:is(.dark .dark\:…)`, not `@media (prefers-color-scheme: dark)`.
- **If the `<Rizmiya />` logo (or another `next/font` font) renders in plain Inter, the `.next` cache is stale too**: the `__variable_xxxx` classes on `<html>` no longer match the ones defined in the served CSS, so `--font-Dancing_Script` is undefined. Same fix: stop the dev server, delete `.next`, restart.

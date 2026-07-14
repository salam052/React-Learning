# Shahnawaz Alam — Portfolio

A personal portfolio site built from your resume, themed around your actual
work: the hero reads like an executed SQL query, work experience is framed
as a `migration_log`, and the contact section is styled as a database
connection string.

## Stack
React + Vite + Tailwind CSS + `lucide-react` icons (JavaScript, no TypeScript).

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # production build
npm run preview    # preview the production build locally
```

## Project structure

```
src/
  App.jsx                    # composes the page + holds all resume content as data
  index.css                  # Tailwind directives, focus-ring & skip-link utilities
  hooks/
    useReveal.js              # IntersectionObserver hook for scroll-triggered fade-in
  components/
    Nav.jsx                    # sticky nav, inline links (tablet+), disclosure menu (mobile)
    Hero.jsx                    # <header>, name/role/location, email + LinkedIn buttons
    SectionLabel.jsx            # shared <h2> heading used by every section
    Summary.jsx                  # bio paragraphs + stat callouts
    SkillsMatrix.jsx              # skills grouped as "schema tables" + certification badges
    ExperienceLog.jsx              # work history as an ordered, timestamped log
    Education.jsx                   # degree + institution
    ContactPanel.jsx                 # connection-string display + contact links
    ContactForm.jsx                   # validated form with loading/success/error states
```

## How the requirements were addressed

- **Component structure**: the page is never one large component — `App.jsx`
  only composes eight independent components and passes them data as props.
  Each file owns exactly one section.
- **Lucide icons**: used where they add scannability rather than decoration —
  `Mail`/`Phone`/`Linkedin` on contact methods, `Database` on each skill
  table, `Award` on certifications, `Briefcase`/`GraduationCap` on
  experience/education, `Menu`/`X` on the mobile nav toggle, and
  `Send`/`Loader2`/`CheckCircle2`/`AlertCircle` on the contact form.
- **Absolute positioning**: used in exactly one place — the timeline dot in
  `ExperienceLog.jsx`, needed to center the marker on the connecting vertical
  line. Everything else (sticky nav, layout, grids) uses normal flow, flexbox,
  or CSS grid.
- **Responsive behavior**: three explicit breakpoints throughout
  (mobile-first, `sm:` for larger phones/small tablets, `md:` for
  tablet/desktop) — e.g. the nav collapses to a disclosure menu below `md:`,
  the skills grid goes 1 → 2 columns, and the summary stats go 3-across on
  mobile → a single sidebar column on tablet+.
- **Interactive states**: every interactive element has explicit `hover:`,
  `focus-visible` (via the shared `.focus-ring` utility), and `active:`
  styles. The contact form additionally has real `loading` (spinner +
  disabled fields), `disabled` (submit button disabled until the form is
  valid), and success/error feedback states — the clearest place to see all
  five states together.
- **Semantic & accessible HTML**: real landmarks (`<header>`, `<nav>`,
  `<main>`, `<footer>`), a real heading hierarchy (`h1` for your name, `h2`
  per section, `h3` for sub-labels), a skip-to-content link, `aria-label`/
  `aria-expanded` on the mobile menu button, `aria-labelledby` tying each
  `<section>` to its heading, `aria-live="polite"` on the form status
  message, and `aria-hidden="true"` on every purely decorative icon so
  screen readers don't announce them.

## Wiring up the contact form

The form in `ContactForm.jsx` currently simulates a network request with
`setTimeout` so you can see the loading/success/error states without a
backend. To make it functional, swap the simulated block in `handleSubmit`
for a real request — a good low-effort option is
[Formspree](https://formspree.io) (POST the form data to your Formspree
endpoint) or a small serverless function if you're hosting on Vercel/Netlify.

## Make it yours

All resume content — name, bio, skills, certifications, experience,
education, contact details — lives in one place: the data objects at the
top of `src/App.jsx`. Update those and the whole site follows.

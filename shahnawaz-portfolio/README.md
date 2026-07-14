# Shahnawaz Alam — Personal Portfolio

A responsive single-page portfolio built with React, Vite and Tailwind CSS.

## Important

Do not double-click `index.html`. This is a Vite React project and must run through the development server.

## Run locally

```bash
cd shahnawaz-portfolio
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

If you are using WSL and the normal command does not expose the site, run:

```bash
npm run dev -- --host 0.0.0.0
```

## Production test

```bash
npm run build
npm run preview -- --host 0.0.0.0
```

Open the URL displayed in the terminal.

## Customize

- Main content: `src/App.jsx`
- Global styling: `src/index.css`
- Page metadata: `index.html`

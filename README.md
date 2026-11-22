# Nikesh Raikar — Personal Engineering Portfolio (Astro + TypeScript)

A fast, modular, dark-mode personal portfolio built with **Astro**, **TypeScript**, **Tailwind CSS**, and **MDX**.

## Features

- **Multi-Page Architecture:** Dedicated routes for Overview (`/`), Filterable Projects (`/projects` & `/projects/[slug]`), Work & Protocol Matrix (`/work`), Engineering Notes (`/notes` & `/notes/[slug]`), Print-Ready CV (`/cv`), Contact (`/contact`), and German Legal pages (`/impressum`, `/datenschutz`).
- **Content Collections (MDX):** Add new project case studies or technical articles simply by dropping `.mdx` files into `src/content/projects/` or `src/content/notes/`.
- **Command Palette (`Cmd + K` / `Ctrl + K`):** Instant keyboard navigation and quick actions across the entire site.
- **Smooth View Transitions:** Native Astro View Transitions for seamless dark-mode navigation.
- **Zero-Bloat Performance:** Static HTML output with automatic `sitemap.xml` generation and no tracking cookies.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start local dev server (http://localhost:4321)
npm run dev

# 3. Type-check and build for production
npm run build
```

## Customization Checklist Before Publishing

1. **Profile & Links:** Edit `src/data/site.ts` to update your real email, GitHub URL, LinkedIn URL, and domain.
2. **Portrait Photo:** Place your headshot in `public/images/avatar.jpg` and update `avatarSrc` in `src/data/site.ts`.
3. **Contact Form:** Insert your free Web3Forms access key (or Formspree endpoint) in `src/pages/contact.astro`.
4. **Legal Notice:** Fill in your address details in `src/pages/impressum.astro`.
5. **Domain Config:** Update the `site` URL in `astro.config.mjs`.

## Deploy to Cloudflare Pages (Free)

1. Push this repository to GitHub.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the **Astro** framework preset (`npm run build`, output directory `dist`).
4. Click **Save and Deploy**.

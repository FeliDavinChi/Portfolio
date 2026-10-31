# Manas Gupta’s portfolio

A personal website for my work as an Applied AI Engineer, with project and experience details, writing, and a reusable component registry.

[Visit manasgupta.me](https://manasgupta.me)

## Overview

### Stack

- Next.js 16 App Router and TypeScript
- Tailwind CSS v4 and shadcn/ui
- pnpm for dependencies and project scripts

### Site features

- Light and dark themes, a [vCard download](src/app/vcard/route.ts), and spam-protected email.
- An [installable web app manifest](src/app/manifest.webmanifest) and [OpenPanel integration](src/lib/openpanel.ts).
- Search and sharing metadata, including [JSON-LD](src/config/json-ld.ts), the [sitemap](src/app/sitemap.ts), [robots directives](src/app/robots.ts), and [Open Graph images](src/app/opengraph-image.tsx).

## Local development

Use the Node.js version in [`.nvmrc`](.nvmrc) and pnpm 9 or later. From the repository root:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. To override the portfolio’s public URL in a local environment, set `NEXT_PUBLIC_APP_URL` in `.env.local`. Site metadata otherwise uses the website URL in the profile data.

### Build and checks

| Command | Purpose |
| --- | --- |
| `pnpm lint` | Run ESLint. |
| `pnpm format:check` | Check formatting with Prettier. |
| `pnpm check-types` | Run the TypeScript check. |
| `pnpm test:run` | Run the Vitest suite once. |
| `pnpm build` | Generate the registry and build the Next.js app. |
| `pnpm start` | Serve the production build. |

## Portfolio data

- Edit the profile in [`user.ts`](src/features/portfolio/data/user.ts), the project list in [`projects.tsx`](src/features/portfolio/data/projects.tsx), and work history in [`experiences.tsx`](src/features/portfolio/data/experiences.tsx).
- Update social profiles in [`social-links.ts`](src/features/portfolio/data/social-links.ts) and site metadata in [`site.ts`](src/config/site.ts).
- Replace the published [avatar](public/avatar.jpg) and [résumé](public/resume.pdf) in `public/` when updating those assets.

## Content

The MDX content layer handles documents by category. Component documentation lives in [`src/features/doc/content/components/`](src/features/doc/content/components), and the [document loader](src/features/doc/data/documents.ts) is the entry point for reading those files. The rendered documentation includes syntax-highlighted code blocks.

Machine-readable content is available through `/llms.txt`, `/about.md`, `/projects.md`, `/blog.md`, and `/components.md`. The registry also exposes RSS feeds at `/blocks/rss` and `/components/rss`.

### Registry

Easily build and distribute reusable components, hooks, and pages using a custom registry powered by the [shadcn CLI](https://ui.shadcn.com/docs/cli).

Each entry is well-documented and includes:

- Live preview & code snippets
- Beautiful, readable code blocks
- One-click command blocks (pnpm, npm, yarn, bun)

## Contributors

<p>
  <a href="https://github.com/FeliDavinChi/portfolio/graphs/contributors"><picture><source media="(prefers-color-scheme: dark)" srcset="https://shieldcn.dev/contributors/FeliDavinChi/portfolio.svg?title=false&amp;size=48&amp;align=left&amp;mode=dark&amp;font=geist&amp;watermark=true" /><img alt="contributors" src="https://shieldcn.dev/contributors/FeliDavinChi/portfolio.svg?title=false&amp;size=48&amp;align=left&amp;mode=light&amp;font=geist&amp;watermark=true" /></picture></a>
</p>

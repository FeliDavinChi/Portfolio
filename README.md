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

### Content

Centralized document system powered by MDX:

- Unified content layer for blog posts and component docs
- Category-based content organization
- Raw `.md` endpoints for AI readability
- Syntax highlighting with code blocks
- Dynamic OG images for rich link previews
- RSS feed for content distribution

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

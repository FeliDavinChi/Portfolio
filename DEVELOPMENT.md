# Development

## Set up the local site

Use the Node.js version pinned in [`.nvmrc`](.nvmrc) and pnpm 9 or later. The package requirements and script definitions live in [`package.json`](package.json).

```sh
git clone https://github.com/FeliDavinChi/Portfolio.git portfolio
cd portfolio
pnpm install
pnpm dev
```

Open the URL printed by Next.js. To use a different origin in site metadata, optionally add `NEXT_PUBLIC_APP_URL` to `.env.local` and restart the server. The setting overrides the profile website through [`SITE_INFO`](src/config/site.ts). The address to open for local development still comes from the server output.

## Run checks from the repository root

```sh
pnpm lint
pnpm format:check
pnpm check-types
pnpm test:run
```

Use `pnpm test` for Vitest's interactive runner. To check a single Markdown file with the repository's formatting rules, pass its path to `pnpm exec prettier --check`.

## Preview the production build

```sh
pnpm build
pnpm registry:validate
pnpm start
```

`pnpm build` generates the shadcn registry before building Next.js. Run registry validation after generation because it reads `public/r/registry.json`. `pnpm preview` runs registry generation, the Next.js build, and the production server in one command. Run validation separately when using that shortcut.

## Choose preview checks for a change

- For profile or project edits, compare the homepage and the corresponding public Markdown route. Use the [portfolio content guide](docs/portfolio-content.md) to find the data file and any related assets.
- For MDX edits, review the rendered examples where available and inspect the slug's exported Markdown. Follow the [MDX editing guide](docs/mdx-content.md).
- For registry edits, build and validate the artifacts, then review the changed item using the [registry guide](docs/component-registry.md).
- For route or site-origin edits, open the affected resource in the production preview and inspect the response body and links. See the [public route guide](docs/public-exports.md) for local requests.

# Component documentation in MDX

Edit component pages under [`src/features/doc/content/components/`](../src/features/doc/content/components). The [document loader](../src/features/doc/data/documents.ts) and [document types](../src/features/doc/types/document.ts) describe how that content enters the document system.

## Update a component page

1. Start with an existing page such as [`copy-button.mdx`](../src/features/doc/content/components/copy-button.mdx). Follow its frontmatter and code-block conventions when adjusting the title, description, or examples.
2. When editing a preview or source snippet, compare the [demo source](../src/registry/examples/copy-button-demo.tsx) and [component implementation](../src/registry/components/copy-button/copy-button.tsx). Keep sample imports and props aligned with what the example actually runs.
3. Use a language identifier on code fences so syntax highlighting can pick the intended language. Check any code that readers are expected to copy from the rendered content.
4. Check the Markdown output for the affected slug through the [`/doc.md/[slug]` route](../src/app/%28llms%29/doc.md/%5Bslug%5D/route.ts). A filename change can affect existing references, so search for the old slug before renaming it.

Before submitting the edit, run `pnpm format:check` and `pnpm build`. Review the affected rendered content where it is exposed by the site and check the exported Markdown for its examples and links.

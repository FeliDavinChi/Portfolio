# Public content routes

The App Router route handlers under [`(llms)`](../src/app/%28llms%29) serve the site’s machine-readable text. Open [`/llms.txt`](../src/app/%28llms%29/llms.txt/route.ts) to check the public entry point. The Markdown routes can also be requested directly.

- Profile and work use `/about.md`, `/projects.md`, and `/experience.md`.
- Qualifications and recognition use `/education.md`, `/certifications.md`, `/awards.md`, and `/intellectual-property.md`.
- Writing and bookmarks use `/blog.md` and `/bookmarks.md`.
- Registry-related content uses `/blocks.md`, `/components.md`, and the slug-based `/doc.md/<slug>` route.
- RSS readers can request `/blocks/rss` and `/components/rss`. The handlers live under [`(rss)`](../src/app/%28rss%29).

## Check a change locally

Start the site using the [development guide](../DEVELOPMENT.md) and substitute its printed address for the example origin. Request the affected route directly, then read the body and inspect the links to the changed item. Check the matching RSS output for changes that affect a feed.

```sh
base=http://localhost:3000
curl -fsS "$base/llms.txt"
curl -fsS "$base/projects.md"
curl -fsS "$base/components/rss"
```

When reviewing a metadata or host change, check exported links for the intended origin. For a component documentation edit, check that the exported slug still identifies the document and that its Markdown contains the revised text.

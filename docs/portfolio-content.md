# Maintaining portfolio content

## Edit the source for each section

- Update personal details in [`user.ts`](../src/features/portfolio/data/user.ts). Keep the public name, website, and summary consistent with the visitor-facing profile.
- Update project entries in [`projects.tsx`](../src/features/portfolio/data/projects.tsx) and employment history in [`experiences.tsx`](../src/features/portfolio/data/experiences.tsx). Follow the existing entries and their [project](../src/features/portfolio/types/projects.ts) and [experience](../src/features/portfolio/types/experiences.ts) types.
- Edit academic details in [`education.ts`](../src/features/portfolio/data/education.ts), credentials in [`certifications.ts`](../src/features/portfolio/data/certifications.ts), and published profiles in [`social-links.ts`](../src/features/portfolio/data/social-links.ts).

## Review a content change

1. Check that dates, titles, and role descriptions agree with the published [résumé](../public/resume.pdf) where they cover the same work.
2. Start the site using the [development guide](../DEVELOPMENT.md). Review the edited homepage sections, including any collapsed entries, and open any links you added or changed.
3. For updates to typed data, run `pnpm check-types`. Check the public Markdown routes for the sections you edited, such as `/projects.md` or `/experience.md`.

## Update site identity and navigation

[`SITE_INFO`](../src/config/site.ts) reads the display name, biography, keywords, and Open Graph image from the [profile data](../src/features/portfolio/data/user.ts). The URL comes from `NEXT_PUBLIC_APP_URL` when set and otherwise uses the profile website. The same configuration file reads the X and GitHub handles from [the social links data](../src/features/portfolio/data/social-links.ts) and declares source repository, sponsorship, and UTM settings.

- When changing the canonical origin or profile summary, review the page metadata, [JSON-LD configuration](../src/config/json-ld.ts), and [sitemap](../src/app/sitemap.ts). Verify the resulting URLs in the production preview for the intended origin.
- When editing navigation, update `MAIN_NAV` for shared destinations and `MOBILE_NAV` for mobile-specific entries. `MOBILE_NAV` adds Home before the entries in `MAIN_NAV`. Confirm the Projects link reaches the homepage section and Blog opens `/blog` from desktop and mobile navigation.

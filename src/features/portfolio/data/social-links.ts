import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@FeliDavinChi",
    href: "https://x.com/FeliDavinChi",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "FeliDavinChi",
    href: "https://github.com/FeliDavinChi",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "lakshmi-manas",
    href: "https://www.linkedin.com/in/lakshmi-manas",
    sameAs: true,
  },
  dailydotdev: {
    title: "daily.dev",
    handle: "@manasgupta09",
    href: "https://app.daily.dev/manasgupta09",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "mr.felix0750",
    href: "https://discord.com/users/mr.felix0750",
  },
  youtube: {
    title: "YouTube",
    handle: "@kaxuto.9_",
    href: "https://www.youtube.com/@kaxuto.9_",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))

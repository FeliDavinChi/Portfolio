import { GlobeIcon, HeadphonesIcon } from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "onda",
    title: "Onda",
    period: {
      start: "10.2025",
    },
    link: "https://github.com/FeliDavinChi/Onda",
    skills: [
      "Kotlin",
      "Android",
      "Supabase",
      "Edge Functions",
      "Audio Engine",
      "Gradle",
      "Social Graph",
      "REST API",
    ],
    description: `A native Android music app featuring **Onda Circle** — follow friends, see shared live listening activity, and blend friends' musical taste into personalized recommendations.

- **Social Listening:** Friends feed, real-time shared playback visibility, follow graph, and customizable privacy/listening controls.
- **Taste Influence Engine:** Supabase Edge Function ranker blending consented listening history with explainable social attribution.
- **Native Audio Player:** Built with native audio engine integration, catalogue browsing, local caching, and background playback.`,
    icon: <HeadphonesIcon className="size-4" />,
    isExpanded: true,
  },
  {
    id: "portfolio",
    title: "Portfolio",
    period: {
      start: "09.2025",
    },
    link: "https://github.com/FeliDavinChi/Portfolio",
    skills: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "OpenGraph",
      "Vercel",
    ],
    description: `Personal developer portfolio and interactive showcase deployed at [manasgupta.me](https://manasgupta.me).

- **Awwwards-Inspired Liquid Motion:** Signature curved SVG Bézier preloader reveal (\`motion/react\`) with fluid surface-tension deformation.
- **Modern Component Architecture:** Light/dark theme toggle, sound effects, command menu, CAD footer, and responsive design.
- **Dynamic Social Previews:** Automated OpenGraph card generation with safe-zone social previews and custom tech badges.`,
    icon: <GlobeIcon className="size-4" />,
    isExpanded: true,
  },
]

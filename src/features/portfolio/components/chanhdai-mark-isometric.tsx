"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

/**
 * Designed by ncdai on Figma with [Fast Isometric Plugin](https://www.figma.com/community/plugin/1249759048471403961).
 * Inspired by tailwindcss.com.
 */
export function ChanhDaiMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `ncdai-face-pattern-${id}`,
    faceFill: `ncdai-face-fill-${id}`,
    stroke: `ncdai-stroke-${id}`,
    radialGradient: `ncdai-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              transform: "translate(0px, 0px)",
            },
            pressed: {
              transform: "translate(0px, 16px)",
            },
          }}
          transition={transition}
        >
          {/* M Left Pillar */}
          <path d="M111.35 128.58L166.78 160.58L111.35 192.58L55.93 160.58Z" />
          {/* M Right Pillar */}
          <path d="M222.20 192.58L277.63 224.58L222.20 256.58L166.78 224.58Z" />
          {/* M Top Connector */}
          <path d="M166.78 96.58L222.20 128.58L166.78 160.58L111.35 128.58Z" />
          {/* M V-center */}
          <path d="M166.78 160.58L222.20 192.58L166.78 224.58L111.35 192.58Z" />
          {/* G Top Bar */}
          <path d="M432.82 58.18L543.67 122.18L488.24 154.18L377.39 90.18Z" />
          {/* G Left Pillar */}
          <path d="M377.39 90.18L432.82 122.18L321.97 186.18L266.54 154.18Z" />
          {/* G Bottom Bar */}
          <path d="M432.82 250.18L543.67 186.18L488.24 154.18L377.39 218.18Z" />
          {/* G Inner Bar */}
          <path d="M488.24 154.18L543.67 186.18L488.24 218.18L432.82 186.18Z" />
        </motion.g>

        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: [
                // M
                "M55.93 160.58 L111.35 128.58 L166.78 160.58 L111.35 192.58 Z ",
                "M55.93 160.58 V192.58 L111.35 224.58 L166.78 192.58 V160.58 ",
                "M111.35 192.58 V224.58 ",
                "M166.78 224.58 L222.20 192.58 L277.63 224.58 L222.20 256.58 Z ",
                "M166.78 224.58 V256.58 L222.20 288.58 L277.63 256.58 V224.58 ",
                "M222.20 256.58 V288.58 ",
                "M111.35 128.58 L166.78 96.58 L222.20 128.58 L166.78 160.58 Z ",
                "M111.35 192.58 L166.78 160.58 L222.20 192.58 L166.78 224.58 Z ",
                // G
                "M377.39 90.18 L432.82 58.18 L543.67 122.18 L488.24 154.18 Z ",
                "M377.39 90.18 L266.54 154.18 L321.97 186.18 L432.82 122.18 Z ",
                "M377.39 218.18 L432.82 250.18 L543.67 186.18 L488.24 154.18 Z ",
                "M432.82 186.18 L488.24 154.18 L543.67 186.18 L488.24 218.18 Z",
              ].join(""),
            },
            pressed: {
              d: [
                // M
                "M55.93 176.58 L111.35 144.58 L166.78 176.58 L111.35 208.58 Z ",
                "M55.93 176.58 V192.58 L111.35 224.58 L166.78 192.58 V176.58 ",
                "M111.35 208.58 V224.58 ",
                "M166.78 240.58 L222.20 208.58 L277.63 240.58 L222.20 272.58 Z ",
                "M166.78 240.58 V256.58 L222.20 288.58 L277.63 256.58 V240.58 ",
                "M222.20 272.58 V288.58 ",
                "M111.35 144.58 L166.78 112.58 L222.20 144.58 L166.78 176.58 Z ",
                "M111.35 208.58 L166.78 176.58 L222.20 208.58 L166.78 240.58 Z ",
                // G
                "M377.39 106.18 L432.82 74.18 L543.67 138.18 L488.24 170.18 Z ",
                "M377.39 106.18 L266.54 170.18 L321.97 202.18 L432.82 138.18 Z ",
                "M377.39 234.18 L432.82 266.18 L543.67 202.18 L488.24 170.18 Z ",
                "M432.82 202.18 L488.24 170.18 L543.67 202.18 L488.24 234.18 Z",
              ].join(""),
            },
          }}
          transition={transition}
        />

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
        {/* M Left Wall 1 */}
        <motion.path
          variants={{
            normal: { d: "M55.93 160.58L111.35 192.58V224.58L55.93 192.58Z" },
            pressed: { d: "M55.93 176.58L111.35 208.58V224.58L55.93 192.58Z" },
          }}
          transition={transition}
        />
        {/* M Left Wall 2 */}
        <motion.path
          variants={{
            normal: { d: "M111.35 192.58L166.78 160.58V192.58L111.35 224.58Z" },
            pressed: {
              d: "M111.35 208.58L166.78 176.58V192.58L111.35 224.58Z",
            },
          }}
          transition={transition}
        />
        {/* M Right Wall 1 */}
        <motion.path
          variants={{
            normal: { d: "M166.78 224.58L222.20 256.58V288.58L166.78 256.58Z" },
            pressed: {
              d: "M166.78 240.58L222.20 272.58V288.58L166.78 256.58Z",
            },
          }}
          transition={transition}
        />
        {/* M Right Wall 2 */}
        <motion.path
          variants={{
            normal: { d: "M222.20 256.58L277.63 224.58V256.58L222.20 288.58Z" },
            pressed: {
              d: "M222.20 272.58L277.63 240.58V256.58L222.20 288.58Z",
            },
          }}
          transition={transition}
        />
        {/* G Bottom Wall 1 */}
        <motion.path
          variants={{
            normal: { d: "M377.39 218.18L488.24 282.18V314.18L377.39 250.18Z" },
            pressed: {
              d: "M377.39 234.18L488.24 298.18V314.18L377.39 250.18Z",
            },
          }}
          transition={transition}
        />
        {/* G Bottom Wall 2 */}
        <motion.path
          variants={{
            normal: { d: "M488.24 282.18L543.67 250.18V282.18L488.24 314.18Z" },
            pressed: {
              d: "M488.24 298.18L543.67 266.18V282.18L488.24 314.18Z",
            },
          }}
          transition={transition}
        />
      </g>

      <use href={`#${ids.faceFill}`} className="fill-background" />
      <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />

      <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
      <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
    </motion.svg>
  )
}

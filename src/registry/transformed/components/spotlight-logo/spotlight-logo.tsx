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

export function SpotlightLogo() {
  const id = useId()
  const ids = {
    facePattern: `spotlight-logo-face-pattern-${id}`,
    radialGradient: `spotlight-logo-radial-gradient-${id}`,
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
    if (shouldReduceMotion || !isInView) return
    if (window.matchMedia("(hover: none)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
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

      <g fillRule="evenodd" clipRule="evenodd">
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M431.83 33.80L315.44 101.00L315.44 133.00L431.83 65.80Z",
              },
              pressed: {
                d: "M431.83 49.80L315.44 117.00L315.44 133.00L431.83 65.80Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M431.83 33.80L431.83 65.80L315.44 133.00L315.44 101.00",
              },
              pressed: {
                d: "M431.83 49.80L431.83 65.80L315.44 133.00L315.44 117.00",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M431.83 33.80L431.83 65.80L315.44 133.00L315.44 101.00",
              },
              pressed: {
                d: "M431.83 49.80L431.83 65.80L315.44 133.00L315.44 117.00",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M448.46 101.00L415.20 81.80L415.20 113.80L448.46 133.00Z",
              },
              pressed: {
                d: "M448.46 117.00L415.20 97.80L415.20 113.80L448.46 133.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M448.46 101.00L448.46 133.00L415.20 113.80L415.20 81.80",
              },
              pressed: {
                d: "M448.46 117.00L448.46 133.00L415.20 113.80L415.20 97.80",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M448.46 101.00L448.46 133.00L415.20 113.80L415.20 81.80",
              },
              pressed: {
                d: "M448.46 117.00L448.46 133.00L415.20 113.80L415.20 97.80",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M548.22 101.00L381.95 197.00L381.95 229.00L548.22 133.00Z",
              },
              pressed: {
                d: "M548.22 117.00L381.95 213.00L381.95 229.00L548.22 133.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M548.22 101.00L548.22 133.00L381.95 229.00L381.95 197.00",
              },
              pressed: {
                d: "M548.22 117.00L548.22 133.00L381.95 229.00L381.95 213.00",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M548.22 101.00L548.22 133.00L381.95 229.00L381.95 197.00",
              },
              pressed: {
                d: "M548.22 117.00L548.22 133.00L381.95 229.00L381.95 213.00",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M381.95 197.00L215.67 101.00L215.67 133.00L381.95 229.00Z",
              },
              pressed: {
                d: "M381.95 213.00L215.67 117.00L215.67 133.00L381.95 229.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M381.95 197.00L381.95 229.00L215.67 133.00L215.67 101.00",
              },
              pressed: {
                d: "M381.95 213.00L381.95 229.00L215.67 133.00L215.67 117.00",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M381.95 197.00L381.95 229.00L215.67 133.00L215.67 101.00",
              },
              pressed: {
                d: "M381.95 213.00L381.95 229.00L215.67 133.00L215.67 117.00",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M140.84 201.80L124.22 153.80L124.22 185.80L140.84 233.80Z",
              },
              pressed: {
                d: "M140.84 217.80L124.22 169.80L124.22 185.80L140.84 233.80Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M140.84 201.80L140.84 233.80L124.22 185.80L124.22 153.80",
              },
              pressed: {
                d: "M140.84 217.80L140.84 233.80L124.22 185.80L124.22 169.80",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M140.84 201.80L140.84 233.80L124.22 185.80L124.22 153.80",
              },
              pressed: {
                d: "M140.84 217.80L140.84 233.80L124.22 185.80L124.22 169.80",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M290.49 249.80L207.36 201.80L207.36 233.80L290.49 281.80Z",
              },
              pressed: {
                d: "M290.49 265.80L207.36 217.80L207.36 233.80L290.49 281.80Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M290.49 249.80L290.49 281.80L207.36 233.80L207.36 201.80",
              },
              pressed: {
                d: "M290.49 265.80L290.49 281.80L207.36 233.80L207.36 217.80",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M290.49 249.80L290.49 281.80L207.36 233.80L207.36 201.80",
              },
              pressed: {
                d: "M290.49 265.80L290.49 281.80L207.36 233.80L207.36 217.80",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M340.38 221.00L290.49 249.80L290.49 281.80L340.38 253.00Z",
              },
              pressed: {
                d: "M340.38 237.00L290.49 265.80L290.49 281.80L340.38 253.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M340.38 221.00L340.38 253.00L290.49 281.80L290.49 249.80",
              },
              pressed: {
                d: "M340.38 237.00L340.38 253.00L290.49 281.80L290.49 265.80",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M340.38 221.00L340.38 253.00L290.49 281.80L290.49 249.80",
              },
              pressed: {
                d: "M340.38 237.00L340.38 253.00L290.49 281.80L290.49 265.80",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M223.98 249.80L140.84 240.20L140.84 272.20L223.98 281.80Z",
              },
              pressed: {
                d: "M223.98 265.80L140.84 256.20L140.84 272.20L223.98 281.80Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M223.98 249.80L223.98 281.80L140.84 272.20L140.84 240.20",
              },
              pressed: {
                d: "M223.98 265.80L223.98 281.80L140.84 272.20L140.84 256.20",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M223.98 249.80L223.98 281.80L140.84 272.20L140.84 240.20",
              },
              pressed: {
                d: "M223.98 265.80L223.98 281.80L140.84 272.20L140.84 256.20",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M174.10 317.00L7.82 221.00L7.82 253.00L174.10 349.00Z",
              },
              pressed: {
                d: "M174.10 333.00L7.82 237.00L7.82 253.00L174.10 349.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M174.10 317.00L174.10 349.00L7.82 253.00L7.82 221.00",
              },
              pressed: {
                d: "M174.10 333.00L174.10 349.00L7.82 253.00L7.82 237.00",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M174.10 317.00L174.10 349.00L7.82 253.00L7.82 221.00",
              },
              pressed: {
                d: "M174.10 333.00L174.10 349.00L7.82 253.00L7.82 237.00",
              },
            }}
            transition={transition}
          />
        </g>
        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M223.98 288.20L174.10 317.00L174.10 349.00L223.98 320.20Z",
              },
              pressed: {
                d: "M223.98 304.20L174.10 333.00L174.10 349.00L223.98 320.20Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M223.98 288.20L223.98 320.20L174.10 349.00L174.10 317.00",
              },
              pressed: {
                d: "M223.98 304.20L223.98 320.20L174.10 349.00L174.10 333.00",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M223.98 288.20L223.98 320.20L174.10 349.00L174.10 317.00",
              },
              pressed: {
                d: "M223.98 304.20L223.98 320.20L174.10 349.00L174.10 333.00",
              },
            }}
            transition={transition}
          />
        </g>

        <g>
          <motion.path
            className="fill-background"
            variants={{
              normal: {
                d: "M7.82 221.00L57.71 192.20L140.84 201.80L124.22 153.80L174.10 125.00L340.38 221.00L290.49 249.80L207.36 201.80L223.98 249.80L140.84 240.20L223.98 288.20L174.10 317.00Z M215.67 101.00L381.95 5.00L431.83 33.80L315.44 101.00L381.95 139.40L448.46 101.00L415.20 81.80L465.08 53.00L548.22 101.00L381.95 197.00Z",
              },
              pressed: {
                d: "M7.82 237.00L57.71 208.20L140.84 217.80L124.22 169.80L174.10 141.00L340.38 237.00L290.49 265.80L207.36 217.80L223.98 265.80L140.84 256.20L223.98 304.20L174.10 333.00Z M215.67 117.00L381.95 21.00L431.83 49.80L315.44 117.00L381.95 155.40L448.46 117.00L415.20 97.80L465.08 69.00L548.22 117.00L381.95 213.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill={`url(#${ids.facePattern})`}
            variants={{
              normal: {
                d: "M7.82 221.00L57.71 192.20L140.84 201.80L124.22 153.80L174.10 125.00L340.38 221.00L290.49 249.80L207.36 201.80L223.98 249.80L140.84 240.20L223.98 288.20L174.10 317.00Z M215.67 101.00L381.95 5.00L431.83 33.80L315.44 101.00L381.95 139.40L448.46 101.00L415.20 81.80L465.08 53.00L548.22 101.00L381.95 197.00Z",
              },
              pressed: {
                d: "M7.82 237.00L57.71 208.20L140.84 217.80L124.22 169.80L174.10 141.00L340.38 237.00L290.49 265.80L207.36 217.80L223.98 265.80L140.84 256.20L223.98 304.20L174.10 333.00Z M215.67 117.00L381.95 21.00L431.83 49.80L315.44 117.00L381.95 155.40L448.46 117.00L415.20 97.80L465.08 69.00L548.22 117.00L381.95 213.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke="var(--stroke)"
            variants={{
              normal: {
                d: "M7.82 221.00L57.71 192.20L140.84 201.80L124.22 153.80L174.10 125.00L340.38 221.00L290.49 249.80L207.36 201.80L223.98 249.80L140.84 240.20L223.98 288.20L174.10 317.00Z M215.67 101.00L381.95 5.00L431.83 33.80L315.44 101.00L381.95 139.40L448.46 101.00L415.20 81.80L465.08 53.00L548.22 101.00L381.95 197.00Z",
              },
              pressed: {
                d: "M7.82 237.00L57.71 208.20L140.84 217.80L124.22 169.80L174.10 141.00L340.38 237.00L290.49 265.80L207.36 217.80L223.98 265.80L140.84 256.20L223.98 304.20L174.10 333.00Z M215.67 117.00L381.95 21.00L431.83 49.80L315.44 117.00L381.95 155.40L448.46 117.00L415.20 97.80L465.08 69.00L548.22 117.00L381.95 213.00Z",
              },
            }}
            transition={transition}
          />
          <motion.path
            fill="none"
            stroke={`url(#${ids.radialGradient})`}
            variants={{
              normal: {
                d: "M7.82 221.00L57.71 192.20L140.84 201.80L124.22 153.80L174.10 125.00L340.38 221.00L290.49 249.80L207.36 201.80L223.98 249.80L140.84 240.20L223.98 288.20L174.10 317.00Z M215.67 101.00L381.95 5.00L431.83 33.80L315.44 101.00L381.95 139.40L448.46 101.00L415.20 81.80L465.08 53.00L548.22 101.00L381.95 197.00Z",
              },
              pressed: {
                d: "M7.82 237.00L57.71 208.20L140.84 217.80L124.22 169.80L174.10 141.00L340.38 237.00L290.49 265.80L207.36 217.80L223.98 265.80L140.84 256.20L223.98 304.20L174.10 333.00Z M215.67 117.00L381.95 21.00L431.83 49.80L315.44 117.00L381.95 155.40L448.46 117.00L415.20 97.80L465.08 69.00L548.22 117.00L381.95 213.00Z",
              },
            }}
            transition={transition}
          />
        </g>
      </g>
    </motion.svg>
  )
}

export { SpotlightLogo as ChanhDaiMarkIsometric }

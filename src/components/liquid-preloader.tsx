"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { ManasGuptaMark } from "@/components/manasgupta-mark"

// Grégory Lallé / Olivier Larose signature liquid surface tension Bézier curves:
// Normalized viewBox (0 to 1000) with preserveAspectRatio="none" ensures fluid stretching across all screen sizes
const INITIAL_CURVE = "M0 0 Q500 320 1000 0 L1000 0 L0 0 Z"
const FLAT_CURVE = "M0 0 Q500 0 1000 0 L1000 0 L0 0 Z"

export function LiquidPreloader() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExited, setIsExited] = useState(false)

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden"

    let current = 0
    const interval = setInterval(() => {
      // Natural organic deceleration curve inspired by Grégory Lallé
      const step = Math.max(1, Math.floor((100 - current) * 0.14))
      current += step

      if (current >= 100) {
        current = 100
        setProgress(100)
        clearInterval(interval)
        setTimeout(() => {
          setIsLoaded(true)
        }, 220)
      } else {
        setProgress(current)
      }
    }, 28)

    return () => {
      clearInterval(interval)
      document.body.style.overflow = ""
    }
  }, [])

  const handleExitComplete = () => {
    document.body.style.overflow = ""
    setIsExited(true)
  }

  if (isExited) return null

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-99999 flex flex-col justify-between overflow-visible bg-background text-foreground select-none"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.1,
            },
          }}
          onClick={() => setIsLoaded(true)}
        >
          {/* Top Liquid Progress Timing Line (Grégory Lallé standard) */}
          <div className="absolute inset-x-0 top-0 z-20 h-1 overflow-hidden bg-border/40">
            <motion.div
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
              transition={{ ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Top Bar - Editorial Header */}
          <div className="relative z-10 flex items-center justify-between px-6 pt-8 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="flex items-center gap-2 font-medium text-foreground"
            >
              <span className="size-2 animate-pulse rounded-full bg-primary" />
              <span>MANAS GUPTA</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="hidden sm:block"
            >
              PORTFOLIO © 2025
            </motion.div>
          </div>

          {/* Center Stage: Organic Liquid Emblem & Editorial Number Counter */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6">
            {/* Liquid Mark Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{
                scale: 0.9,
                opacity: 0,
                filter: "blur(8px)",
                transition: { duration: 0.3 },
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex size-24 items-center justify-center rounded-3xl border border-border/80 bg-muted/20 p-5 shadow-2xl backdrop-blur-md sm:size-28"
            >
              {/* Background watermark */}
              <ManasGuptaMark className="size-full text-muted-foreground/15" />

              {/* Rising Liquid Fill inside the monogram */}
              <div
                className="absolute inset-0 overflow-hidden rounded-3xl transition-[clip-path] duration-75"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                }}
              >
                <div className="flex size-full items-center justify-center bg-primary/10 p-5">
                  <ManasGuptaMark className="size-full text-primary drop-shadow-[0_0_16px_rgba(var(--primary),0.6)]" />
                </div>

                {/* Flowing liquid wave crest across the fluid surface */}
                <div
                  className="absolute inset-x-0 h-4 -translate-y-2 opacity-80"
                  style={{
                    top: `${100 - progress}%`,
                  }}
                >
                  <motion.div
                    className="flex h-full w-[200%]"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      ease: "linear",
                      duration: 1.8,
                    }}
                  >
                    <svg
                      viewBox="0 0 200 20"
                      preserveAspectRatio="none"
                      className="size-full fill-current text-primary/50"
                    >
                      <path d="M 0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 L 200 20 L 0 20 Z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Liquid ripple aura */}
              <div className="pointer-events-none absolute -inset-1.5 animate-pulse rounded-[1.6rem] border border-primary/20" />
            </motion.div>

            {/* Grégory Lallé Signature Oversized Editorial Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{
                opacity: 0,
                y: -30,
                filter: "blur(6px)",
                transition: { duration: 0.35 },
              }}
              className="flex flex-col items-center gap-2"
            >
              <div className="flex items-baseline font-mono tracking-tighter">
                <span className="text-7xl leading-none font-light text-foreground tabular-nums sm:text-9xl">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="ml-2 text-xl font-light text-muted-foreground sm:text-3xl">
                  %
                </span>
              </div>
              <span className="font-mono text-[0.6875rem] tracking-widest text-muted-foreground uppercase">
                Crafting Experience
              </span>
            </motion.div>
          </div>

          {/* Bottom Bar - Status & Fast Dismiss Option */}
          <div className="relative z-10 flex items-center justify-between px-6 pb-8 font-mono text-xs tracking-widest text-muted-foreground uppercase sm:px-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
              className="flex items-center gap-2"
            >
              <span className="font-bold text-primary">●</span>
              <span>FULL STACK DEVELOPER</span>
            </motion.div>
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
              className="cursor-pointer transition-colors hover:text-foreground"
            >
              [CLICK TO SKIP]
            </motion.button>
          </div>

          {/* Grégory Lallé / Awwwards Dynamic Curved Liquid SVG Bottom Meniscus */}
          {/* As the panel slides up (-100%), this SVG curve creates the fluid surface-tension deformation */}
          <div className="pointer-events-none absolute inset-x-0 top-full h-48 w-full overflow-visible fill-background text-background sm:h-72">
            <svg
              viewBox="0 0 1000 320"
              preserveAspectRatio="none"
              className="size-full overflow-visible"
            >
              <motion.path
                initial={{ d: INITIAL_CURVE }}
                exit={{
                  d: FLAT_CURVE,
                  transition: {
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1],
                    delay: 0.1,
                  },
                }}
              />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

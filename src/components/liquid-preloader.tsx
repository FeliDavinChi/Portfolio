"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { ManasGuptaMark } from "@/components/manasgupta-mark"

export function LiquidPreloader() {
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExited, setIsExited] = useState(false)

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden"

    let current = 0
    const interval = setInterval(() => {
      // Natural organic easing speed curve
      const step = Math.max(1, Math.floor((100 - current) * 0.12))
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
    }, 25)

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
          className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-background text-foreground select-none"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          onClick={() => setIsLoaded(true)}
        >
          {/* Subtle ambient liquid glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 size-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 size-96 rounded-full bg-primary/10 blur-3xl" />

          {/* Center Liquid Vessel */}
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative flex size-28 items-center justify-center rounded-3xl border border-border/60 bg-muted/20 p-5 shadow-2xl backdrop-blur-md">
              {/* Background watermark logo */}
              <ManasGuptaMark className="size-full text-muted-foreground/20" />

              {/* Liquid rising fill inside the logo */}
              <div
                className="absolute inset-0 overflow-hidden rounded-3xl transition-[clip-path] duration-75"
                style={{
                  clipPath: `inset(${100 - progress}% 0 0 0)`,
                }}
              >
                <div className="flex size-full items-center justify-center bg-primary/10 p-5">
                  <ManasGuptaMark className="size-full text-primary drop-shadow-[0_0_12px_rgba(var(--primary),0.5)]" />
                </div>

                {/* Animated wave crest across the liquid surface */}
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
                      className="size-full fill-current text-primary/40"
                    >
                      <path d="M 0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 L 200 20 L 0 20 Z" />
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Pulsing liquid ripple ring */}
              <div className="pointer-events-none absolute -inset-1.5 animate-pulse rounded-[1.6rem] border border-primary/20" />
            </div>

            {/* Minimal Progress & Brand Details */}
            <div className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[0.6875rem] tracking-widest text-muted-foreground uppercase">
                Loading Experience
              </span>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-foreground tabular-nums">
                  {progress}%
                </span>
              </div>
            </div>
          </div>

          {/* Organic Liquid Bottom Wave Mask on Exit */}
          <div className="pointer-events-none absolute inset-x-0 top-full h-32 w-full text-background">
            <svg
              viewBox="0 0 1440 200"
              preserveAspectRatio="none"
              className="size-full fill-current"
            >
              <path d="M0,0 Q720,160 1440,0 L1440,0 L0,0 Z" />
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

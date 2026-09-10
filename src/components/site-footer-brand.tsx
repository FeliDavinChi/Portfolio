"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1666

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1666 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 1H33V257H1Z M129 1H161V257H129Z M33 1H129V33H33Z M65 33H97V161H65Z M33 65H65V97H33Z M97 65H129V97H97Z M193 1H321V33H193Z M193 33H225V257H193Z M289 33H321V257H289Z M225 97H289V129H225Z M353 1H385V257H353Z M449 1H481V257H449Z M385 33H417V97H385Z M417 97H449V161H417Z M513 1H641V33H513Z M513 33H545V257H513Z M609 33H641V257H609Z M545 97H609V129H545Z M673 1H801V33H673Z M673 33H705V129H673Z M673 97H801V129H673Z M769 129H801V225H769Z M673 225H801V257H673Z M897 1H1025V33H897Z M897 33H929V257H897Z M897 225H1025V257H897Z M993 129H1025V225H993Z M961 129H993V161H961Z M1057 1H1089V225H1057Z M1153 1H1185V225H1153Z M1057 225H1185V257H1057Z M1217 1H1345V33H1217Z M1217 33H1249V257H1217Z M1313 33H1345V129H1313Z M1249 97H1345V129H1249Z M1377 1H1505V33H1377Z M1425 33H1457V257H1425Z M1537 1H1665V33H1537Z M1537 33H1569V257H1537Z M1633 33H1665V257H1633Z M1569 97H1633V129H1569Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d="M1 1H33V257H1Z M129 1H161V257H129Z M33 1H129V33H33Z M65 33H97V161H65Z M33 65H65V97H33Z M97 65H129V97H97Z M193 1H321V33H193Z M193 33H225V257H193Z M289 33H321V257H289Z M225 97H289V129H225Z M353 1H385V257H353Z M449 1H481V257H449Z M385 33H417V97H385Z M417 97H449V161H417Z M513 1H641V33H513Z M513 33H545V257H513Z M609 33H641V257H609Z M545 97H609V129H545Z M673 1H801V33H673Z M673 33H705V129H673Z M673 97H801V129H673Z M769 129H801V225H769Z M673 225H801V257H673Z M897 1H1025V33H897Z M897 33H929V257H897Z M897 225H1025V257H897Z M993 129H1025V225H993Z M961 129H993V161H961Z M1057 1H1089V225H1057Z M1153 1H1185V225H1153Z M1057 225H1185V257H1057Z M1217 1H1345V33H1217Z M1217 33H1249V257H1217Z M1313 33H1345V129H1313Z M1249 97H1345V129H1249Z M1377 1H1505V33H1377Z M1425 33H1457V257H1425Z M1537 1H1665V33H1537Z M1537 33H1569V257H1537Z M1633 33H1665V257H1633Z M1569 97H1633V129H1569Z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="833"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}

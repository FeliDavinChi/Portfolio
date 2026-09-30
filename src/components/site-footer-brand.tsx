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
              d="M1 1H33V257H1Z M129 1H161V257H129Z M33 1H129V33H33Z M65 33H97V129H65Z M193 1H321V33H193Z M193 33H225V257H193Z M289 33H321V257H289Z M225 113H289V145H225Z M353 1H385V257H353Z M449 1H481V257H449Z M385 65H417V129H385Z M417 129H449V193H417Z M513 1H641V33H513Z M513 33H545V257H513Z M609 33H641V257H609Z M545 113H609V145H545Z M673 1H801V33H673Z M673 33H705V113H673Z M673 113H801V145H673Z M769 145H801V225H769Z M673 225H801V257H673Z M865 1H993V33H865Z M865 33H897V225H865Z M897 225H993V257H897Z M961 129H993V225H961Z M929 129H961V161H929Z M1025 1H1057V225H1025Z M1121 1H1153V225H1121Z M1057 225H1121V257H1057Z M1185 1H1313V33H1185Z M1185 33H1217V257H1185Z M1281 33H1313V113H1281Z M1217 113H1313V145H1217Z M1345 1H1473V33H1345Z M1393 33H1425V257H1393Z M1505 1H1633V33H1505Z M1505 33H1537V257H1505Z M1601 33H1633V257H1601Z M1537 113H1601V145H1537Z"
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d="M1 1H33V257H1Z M129 1H161V257H129Z M33 1H129V33H33Z M65 33H97V129H65Z M193 1H321V33H193Z M193 33H225V257H193Z M289 33H321V257H289Z M225 113H289V145H225Z M353 1H385V257H353Z M449 1H481V257H449Z M385 65H417V129H385Z M417 129H449V193H417Z M513 1H641V33H513Z M513 33H545V257H513Z M609 33H641V257H609Z M545 113H609V145H545Z M673 1H801V33H673Z M673 33H705V113H673Z M673 113H801V145H673Z M769 145H801V225H769Z M673 225H801V257H673Z M865 1H993V33H865Z M865 33H897V225H865Z M897 225H993V257H897Z M961 129H993V225H961Z M929 129H961V161H929Z M1025 1H1057V225H1025Z M1121 1H1153V225H1121Z M1057 225H1121V257H1057Z M1185 1H1313V33H1185Z M1185 33H1217V257H1185Z M1281 33H1313V113H1281Z M1217 113H1313V145H1217Z M1345 1H1473V33H1345Z M1393 33H1425V257H1393Z M1505 1H1633V33H1505Z M1505 33H1537V257H1505Z M1601 33H1633V257H1601Z M1537 113H1601V145H1537Z"
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

import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Manas Gupta – Applied AI Engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const geistSemiBold = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-SemiBold.ttf")
)

const geistMedium = readFileSync(
  join(process.cwd(), "src/assets/fonts/Geist-Medium.ttf")
)

const geistMonoRegular = readFileSync(
  join(process.cwd(), "src/assets/fonts/GeistMono-Regular.ttf")
)

let avatarBase64 = ""
try {
  avatarBase64 = readFileSync(
    join(process.cwd(), "public/avatar.jpg")
  ).toString("base64")
} catch {
  avatarBase64 = ""
}

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        backgroundColor: "#09090b",
        color: "#ffffff",
        fontFamily: "GeistSans",
        padding: "36px",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Subtle ambient radial gradient glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 50% 25%, rgba(59, 130, 246, 0.16) 0%, rgba(9, 9, 11, 0) 70%)",
          display: "flex",
        }}
      />

      {/* Center Card with Safe Margins for all social platforms */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(18, 18, 23, 0.9)",
          border: "1.5px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "28px",
          padding: "42px 48px",
          boxShadow: "0 30px 60px rgba(0, 0, 0, 0.8)",
          position: "relative",
        }}
      >
        {/* Top Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(34, 197, 94, 0.12)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              padding: "8px 18px",
              borderRadius: "9999px",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: "#22c55e",
              }}
            />
            <span
              style={{
                fontFamily: "GeistMono",
                fontSize: "14px",
                color: "#4ade80",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Available for Roles & Projects
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "8px 18px",
              borderRadius: "9999px",
              fontFamily: "GeistMono",
              fontSize: "15px",
              color: "#d4d4d8",
            }}
          >
            manasgupta.me
          </div>
        </div>

        {/* Center Identity Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
            margin: "auto 0",
            width: "100%",
          }}
        >
          {avatarBase64 ? (
            <img
              src={`data:image/jpeg;base64,${avatarBase64}`}
              alt="Manas Gupta"
              width="140"
              height="140"
              style={{
                borderRadius: "70px",
                border: "3px solid rgba(96, 165, 250, 0.8)",
                boxShadow: "0 0 35px rgba(59, 130, 246, 0.35)",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              style={{
                width: "140px",
                height: "140px",
                borderRadius: "70px",
                backgroundColor: "#27272a",
                border: "3px solid #3b82f6",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              MG
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              flex: 1,
            }}
          >
            <div
              style={{
                fontFamily: "GeistSans",
                fontWeight: 600,
                fontSize: "54px",
                lineHeight: "1.15",
                color: "#ffffff",
                letterSpacing: "-0.025em",
              }}
            >
              Manas Gupta
            </div>

            <div
              style={{
                fontFamily: "GeistSans",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "1.25",
                color: "#60a5fa",
                letterSpacing: "-0.01em",
              }}
            >
              Applied AI Engineer & CS / Data Science Student
            </div>

            <div
              style={{
                fontFamily: "GeistSans",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.45",
                color: "#9ca3af",
                maxWidth: "780px",
              }}
            >
              Dual-degree student in CS & Data Science (NGIT & IIT Madras) ·
              IIIT Hyderabad AI/ML Graduate · Building intelligent systems with
              ML & modern web tech.
            </div>
          </div>
        </div>

        {/* Bottom Bar with Tech Badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "22px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {[
              "AI & ML",
              "Next.js",
              "PyTorch",
              "TypeScript",
              "Python",
              "React",
              "Deep Learning",
            ].map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "8px",
                  padding: "6px 14px",
                  fontFamily: "GeistMono",
                  fontSize: "13px",
                  color: "#d4d4d8",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "GeistMono",
              fontSize: "13px",
              color: "#71717a",
              letterSpacing: "0.05em",
            }}
          >
            PORTFOLIO © 2025
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "GeistSans",
          data: geistSemiBold,
          weight: 600,
        },
        {
          name: "GeistSans",
          data: geistMedium,
          weight: 500,
        },
        {
          name: "GeistMono",
          data: geistMonoRegular,
          weight: 400,
        },
      ],
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=31536000, immutable",
      },
    }
  )
}

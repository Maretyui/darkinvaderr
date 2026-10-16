import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

// iOS "Add to Home Screen" looks for this file-convention route (or a
// static apple-touch-icon) rather than favicon.ico or manifest.ts's icon
// list — without it, pinning the site fell back to a screenshot thumbnail
// instead of a mark.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0a08",
          color: "#f97316",
          fontFamily: "sans-serif",
          fontSize: 78,
          fontWeight: 900,
          letterSpacing: -2,
        }}
      >
        DI
      </div>
    ),
    { ...size }
  )
}

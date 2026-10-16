import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 512, height: 512 }
export const contentType = "image/png"

// manifest.ts has no icon entries at all — Chrome's install-prompt criteria
// want a real PNG icon (192x192 minimum) before it'll treat the site as
// installable, which favicon.ico alone doesn't satisfy.
export default function Icon() {
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
          fontSize: 220,
          fontWeight: 900,
          letterSpacing: -8,
        }}
      >
        DI
      </div>
    ),
    { ...size }
  )
}

import type { MetadataRoute } from "next"

// No applicationName/appleWebApp metadata exists in layout.tsx yet, so this
// manifest is the only source these fields have — Next.js auto-serves it at
// /manifest.webmanifest and links it in <head>, no changes needed elsewhere.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Darkinvaderr Gaming",
    short_name: "Darkinvaderr",
    description:
      "Elite GTA V modded heists community on Discord. Join Darkinvaderr's crew for the ultimate heist experience.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d0a08",
    theme_color: "#f97316",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      // Backs icon.tsx's generated PNG — Chrome's install-prompt criteria
      // need a real raster icon at 192x192 or larger, which the .ico above
      // alone doesn't satisfy.
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      // Separate entry (not combined into the one above - this manifest
      // type only accepts a single purpose value per icon) so Android's
      // adaptive-icon system can mask it into a circle/squircle/rounded
      // square per device instead of letterboxing it.
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  }
}

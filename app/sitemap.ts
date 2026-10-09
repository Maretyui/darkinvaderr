import type { MetadataRoute } from "next"

// Bump these only when the matching page's content actually changes - using
// new Date() here would falsely signal "changed" to crawlers on every
// deploy, even ones with zero content changes.
const HOME_LAST_MODIFIED = new Date("2025-12-01")
// Matches the "Last updated: Dezember 2025" footer on both legal pages.
const LEGAL_LAST_MODIFIED = new Date("2025-12-01")

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://darkinvaderr.com"

  return [
    {
      url: base,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/impressum`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}

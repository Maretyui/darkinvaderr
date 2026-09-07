import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thehub", "/error"],
    },
    sitemap: "https://darkinvaderr.com/sitemap.xml",
  }
}

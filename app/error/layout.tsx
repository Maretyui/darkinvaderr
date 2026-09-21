import type React from "react"
import type { Metadata } from "next"

// app/error/page.tsx is a client component (it uses useReducedMotion), and
// Next.js only reads metadata exports from server components/layouts - so
// this sibling layout carries the metadata for that route instead. Without
// it the page silently inherited the homepage's generic title and was left
// indexable, unlike the equivalent not-found.tsx page.
export const metadata: Metadata = {
  title: "Error | Darkinvaderr Gaming",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ErrorLayout({ children }: { children: React.ReactNode }) {
  return children
}

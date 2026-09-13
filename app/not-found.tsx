import { Button } from "@/components/ui/button"
import { FaDiscord } from "react-icons/fa"
import Link from "next/link"

// Next.js falls back to its own generic 404 UI without this file — this
// keeps a mismatched/old link at least visually consistent with the rest
// of the site instead of a blank default.
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-accent/5 px-4">
      <div className="max-w-md w-full text-center">
        <p className="font-[family-name:var(--font-heading)] text-7xl font-bold text-primary glow-text mb-4">
          404
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Page Not Found</h1>

        <p className="text-lg text-muted-foreground mb-8 text-balance">
          This page doesn&apos;t exist (anymore). Head back to the homepage or reach out to us on Discord.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8 w-full sm:w-auto">
            <Link href="/">Back to Homepage</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            aria-label="Contact us on Discord (opens in a new tab)"
            className="px-8 w-full sm:w-auto bg-transparent"
          >
            <a href="https://discord.gg/p8aTkwz3vz" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="mr-2 size-5" aria-hidden="true" />
              Contact us on Discord
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

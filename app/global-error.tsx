"use client"

import { useEffect, useRef } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Orbitron, Inter } from "next/font/google"
import { XCircle, RefreshCw } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

// error.tsx only wraps page.tsx and nested layouts, not the RootLayout
// itself — a failure while rendering app/layout.tsx (e.g. the font loader
// or the JSON-LD script) falls through to Next's bare default error screen
// instead. This is the dedicated boundary for that case, so it has to
// recreate the <html>/<body> shell layout.tsx normally provides.
export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const shouldReduceMotion = useReducedMotion()
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Mirrors error.tsx: this boundary swaps in the whole document without a
  // route change or title update, so there's no normal cue for assistive
  // tech that something happened — move focus to the heading so it gets
  // announced.
  useEffect(() => {
    headingRef.current?.focus()
  }, [])

  return (
    <html lang="en">
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-accent/5 px-4">
          <motion.div
            role="alert"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="max-w-md w-full text-center"
          >
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 0 }}
              animate={{ scale: 1 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { delay: 0.2, type: "spring", stiffness: 200 }
              }
              className="flex justify-center mb-6"
            >
              <XCircle className="w-24 h-24 text-destructive" aria-hidden="true" />
            </motion.div>

            <h1
              ref={headingRef}
              tabIndex={-1}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance outline-none"
            >
              Something Went Wrong
            </h1>

            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Unfortunately your request could not be processed. Please try again or reach out to us directly on
              Discord.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 w-full sm:w-auto" onClick={() => reset()}>
                <RefreshCw className="mr-2 size-4" aria-hidden="true" />
                Try Again
              </Button>
              {/* A plain <a>, not next/link's Link — the app router state Link
                  depends on is exactly what may have failed to initialize here,
                  since this boundary only fires when app/layout.tsx itself
                  throws. */}
              <Button asChild size="lg" variant="outline" className="px-8 w-full sm:w-auto bg-transparent">
                <a href="/">Back to Homepage</a>
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
          </motion.div>
        </div>
      </body>
    </html>
  )
}

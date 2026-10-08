"use client"

import { useEffect } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { XCircle, RefreshCw } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// app/error/ is a manually-linked route (e.g. for the Stripe donation
// flow to redirect to), but it's not the special error.tsx boundary file
// — without this file, a thrown runtime error anywhere else on the site
// fell through to Next's generic default error screen instead of
// something that looks like the rest of the site.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-accent/5 px-4">
      <motion.div
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Something Went Wrong</h1>

        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Unfortunately your request could not be processed. Please try again or reach out to us directly on
          Discord.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 w-full sm:w-auto" onClick={() => reset()}>
            <RefreshCw className="mr-2 size-4" aria-hidden="true" />
            Try Again
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 w-full sm:w-auto bg-transparent">
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
      </motion.div>
    </div>
  )
}

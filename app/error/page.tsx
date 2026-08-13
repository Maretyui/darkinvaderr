"use client"

import { motion } from "framer-motion"
import { XCircle } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-accent/5 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <XCircle className="w-24 h-24 text-destructive" aria-hidden="true" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Something Went Wrong</h1>

        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Unfortunately your request could not be processed. Please try again later or reach out to us directly on
          Discord.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="px-8 w-full sm:w-auto">
              Back to Homepage
            </Button>
          </Link>
          <a href="https://discord.gg/p8aTkwz3vz" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              aria-label="Contact us on Discord (opens in a new tab)"
              className="px-8 w-full sm:w-auto bg-transparent"
            >
              <FaDiscord className="mr-2 size-5" aria-hidden="true" />
              Contact us on Discord
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

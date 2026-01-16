"use client"

import { motion } from "framer-motion"
import { XCircle } from "lucide-react"
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
          <XCircle className="w-24 h-24 text-destructive" />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ein Fehler ist aufgetreten</h1>

        <p className="text-lg text-muted-foreground mb-8 text-balance">
          Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es später erneut oder kontaktieren Sie
          uns direkt per E-Mail.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="px-8 w-full sm:w-auto">
              Zurück zur Startseite
            </Button>
          </Link>
          <Link href="/#contact">
            <Button size="lg" variant="outline" className="px-8 w-full sm:w-auto bg-transparent">
              Erneut versuchen
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

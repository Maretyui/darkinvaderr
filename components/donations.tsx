"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Checkout from "@/components/checkout"

export default function Donations() {
  const [customAmount, setCustomAmount] = useState<string>("")
  const [showCheckout, setShowCheckout] = useState(false)

  const handleDonateClick = () => {
    const amount = Number.parseFloat(customAmount)
    if (amount && amount > 0) {
      setShowCheckout(true)
    }
  }

  if (showCheckout && customAmount) {
    return (
      <section id="donations" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" onClick={() => setShowCheckout(false)} className="mb-8">
              ← Back
            </Button>
            <Checkout amount={Number.parseFloat(customAmount)} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="donations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Support <span className="text-primary">Darkinvaderr</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Your donation or purchase is helping keep the Darkinvaderr Gaming Community alive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <Card className="p-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="amount" className="text-lg font-semibold mb-2 block">
                  Amount (€)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  placeholder="50.00"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="text-lg h-14"
                />
              </div>
              <Button
                className="w-full"
                size="lg"
                onClick={handleDonateClick}
                disabled={!customAmount || Number.parseFloat(customAmount) <= 0}
              >
                Pay Now
              </Button>
            </div>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
        >
          All payments are processed securely via Stripe. Learn more on{" "}
          <a
            href="https://stripe.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stripe (opens in a new tab)"
            className="underline hover:text-foreground"
          >
            their website
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}

"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Checkout({ amount }: { amount: number }) {
  const startCheckoutSessionForAmount = useCallback(async () => {
    const clientSecret = await startCheckoutSession(amount)
    if (!clientSecret) {
      throw new Error("Failed to get Stripe client secret")
    }
    return clientSecret
  }, [amount])

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={{ fetchClientSecret: startCheckoutSessionForAmount }}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

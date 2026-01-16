"use server"

import { stripe } from "@/lib/stripe"

export async function startCheckoutSession(amountInEuros: number) {
  if (!amountInEuros || amountInEuros <= 0) {
    throw new Error("Invalid donation amount")
  }

  const amountInCents = Math.round(amountInEuros * 100)

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    mode: "payment",

    // ✅ REQUIRED FULL NAME FIELD
    custom_fields: [
      {
        key: "full_name",
        label: {
          type: "custom",
          custom: "Full Name",
        },
        type: "text",
        text: {
          minimum_length: 2,
        },
        optional: false,
      },
    ],

    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Darkinvaderr Gaming",
            description: "Support Us Forever",
          },
          unit_amount: amountInCents,
        },
        quantity: 1,
      },
    ],
  })

  return session.client_secret
}

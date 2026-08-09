import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
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

export const metadata: Metadata = {
  metadataBase: new URL("https://darkinvaderr.com"),

  title: "Darkinvaderr Gaming",
  description:
    "Elite GTA V modded heists community on Discord. Join Darkinvader's crew for the ultimate heist experience.",

  openGraph: {
    title: "Darkinvaderr Gaming",
    description:
      "Elite GTA V modded heists community on Discord.",
    images: [
      {
        url: "https://darkinvaderr.com/image-new.png",
        width: 1200,
        height: 630,
        alt: "Darkinvaderr Gaming Logo",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

"use client" 

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa"
import { IconBrandPatreon } from '@tabler/icons-react';
import Image from "next/image"
import ImageCarousel from "@/components/carousel";
import Info from "@/components/info"
import Donations from "@/components/donations";

export default function Home() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="relative size-10">
              <Image src="/image-new-nobg.png" alt="Darkinvaderr Banner" fill className="object-contain" />
            </div>
            <span className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider text-primary glow-text">
              Darkinvaderr
            </span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
          </div>
            <div className="flex items-center gap-3">
              <a href="https://discord.gg/p8aTkwz3vz" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border">
                  <FaDiscord className="mr-2 size-4" />
                  Discord
                </Button>
              </a>

              <a href="https://www.twitch.tv/darkinvaderrgaming" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Twitch" className="text-muted-foreground hover:text-foreground hover:bg-card/50 transition-transform hover:scale-105">
                  <FaTwitch className="size-5" />
                </Button>
              </a>

              <a href="https://www.patreon.com/DarkInvaderr/shop" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="Patreon Shop" className="text-muted-foreground hover:text-foreground hover:bg-card/50 transition-transform hover:scale-105">
                  <IconBrandPatreon className="size-5" />
                </Button>
              </a>

              <a href="https://www.youtube.com/channel/UC9M76EqbgeOYbJlEK_wPx_w" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" aria-label="YouTube" className="text-muted-foreground hover:text-foreground hover:bg-card/50 transition-transform hover:scale-105">
                  <FaYoutube className="size-5" />
                </Button>
              </a>
            </div>
        </div>
      </nav>

      <section className="relative overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="neon-line absolute left-0 top-40 w-full" />

        <div className="container relative mx-auto px-4 py-20 text-center lg:py-32">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="inline-block py-1.5">
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="glow-text">DARKINVADERR</span>
              <br />
              <span className="text-primary glow-text">Gaming</span>
            </h1>

            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              {
                "Join the most elite GTA V Online modded heists and car meet community. Experience the feeling of being rich, drive through Los Santos with the Crew and win prizes."
              }
            </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="https://discord.gg/p8aTkwz3vz" target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 glow-border transition-transform hover:scale-105">
                    <FaDiscord className="mr-2 size-5" />
                    Join Discord Server
                  </Button>
                </a>
                <a
                  href="https://patreon.com/DarkInvaderr/shop"
                  target="_blank"
                  rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/50 transition-transform hover:scale-105">
                    <IconBrandPatreon className="mr-2 size-5" />
                    Support on Patreon
                  </Button>
                </a>
              </div>
            <ImageCarousel />
          </div>
        </div>
        <div className="absolute -left-20 top-1/2 size-64 rounded-full bg-primary/20 blur-[100px]" />
        <div className="absolute -right-20 top-1/4 size-96 rounded-full bg-accent/20 blur-[120px]" />
      </section>
            <Info />
            <Donations />
      <footer className="border-t border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="relative size-8">
                <Image src="/image-new-nobg.png" alt="Darkinvaderr Banner" fill className="object-contain" />
              </div>
              <span className="font-[family-name:var(--font-heading)] font-bold tracking-wider text-primary">
                Gaming
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              2026 &copy; <a href="https://maretyui.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground
              ">Maretyui</a>. All rights reserved.
            </div>
            <div className="text-sm text-muted-foreground">
              <a href="/impressum" target="_blank" rel="noopener noreferrer" className="hover:text-foreground
              ">Impressum</a> |               <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground
              ">Datenschutz</a>
            </div>
            <div className="flex gap-4">
              <a href="https://discord.gg/p8aTkwz3vz" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary hover:bg-transparent" aria-label="Join our Discord">
                  <FaDiscord className="size-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
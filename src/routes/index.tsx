import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Polaroid } from "@/components/Polaroid";
import { StatRow } from "@/components/StatRow";
import { JourneyTeaser } from "@/components/JourneyTeaser";
import { StoryFeature } from "@/components/StoryBlock";
import { images, journeys, stories } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HeraXopun - Memories from Northeast India" },
      {
        name: "description",
        content:
          "Not tourists. Just people chasing stories together. A memory archive of trips across Northeast India.",
      },
      { property: "og:title", content: "HeraXopun" },
      {
        property: "og:description",
        content: "Some trips become memories for life.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden pt-24 md:pt-0 grain">
        <div className="mx-auto max-w-7xl px-5 md:px-10 grid md:grid-cols-12 gap-8 md:gap-10 items-center min-h-[100svh] py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-7 relative z-10"
          >
            <p className="font-hand text-2xl text-brown">since 2026 · Northeast India</p>
            <h1 className="mt-4 font-display text-[44px] leading-[1.02] sm:text-6xl md:text-[88px] md:leading-[0.98] tracking-tight text-foreground">
              Some trips become{" "}
              <em className="not-italic font-display text-forest">memories</em>{" "}
              for life.
            </h1>
            <p className="mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed">
              Not tourists. Just people chasing stories together — across cloud
              roads, monasteries, and 3am chai stops.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/memories"
                className="group inline-flex items-center gap-3 font-display text-lg text-foreground"
              >
                <span className="underline-hand">See memories</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="font-hand text-base text-brown hidden sm:inline">
                no booking, just stories ↓
              </span>
            </div>
            
          </motion.div>

          {/* Floating polaroid collage */}
          <div className="md:col-span-5 relative h-[420px] md:h-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -12 }}
              animate={{ opacity: 1, y: 0, rotate: -8 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-2 md:left-0 w-[55%] max-w-[260px]"
            >
              <Polaroid
                src={images.heroMountain}
                alt="Mountain road"
                caption="km 47, fog kingdom"
                width={1600}
                height={1024}
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: 8 }}
              animate={{ opacity: 1, y: 0, rotate: 5 }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-12 right-0 md:top-20 w-[55%] max-w-[260px]"
            >
              <Polaroid
                src={images.campfire}
                alt="Campfire night"
                caption="2am stories"
                width={1024}
                height={1280}
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              animate={{ opacity: 1, y: 0, rotate: -3 }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-0 left-10 md:left-16 w-[60%] max-w-[280px]"
            >
              <Polaroid
                src={images.snow}
                alt="First snowfall"
                caption="first snowfall"
                width={1024}
                height={1280}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border/60 bg-beige/40">
        <div className="mx-auto max-w-7xl px-5 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0">
            What this is
          </p>
          <p className="font-display text-2xl md:text-3xl leading-snug text-foreground">
            HeraXopun is a travel community keeping a quiet archive of
            <em className="not-italic"> small lifetimes </em>
            spent in Northeast India.
          </p>
        </div>
      </section>

      {/* MEMORY WALL TEASER */}
      <section className="relative py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <div>
              <p className="font-hand text-2xl text-brown">a wall of</p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground -mt-1">
                memories
              </h2>
            </div>
            <Link
              to="/memories"
              className="hidden sm:inline-flex items-center gap-2 text-sm text-foreground/75 hover:text-forest transition-colors"
            >
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            <div className="md:col-span-2 md:row-span-2">
              <Polaroid src={images.heroMountain} alt="Mountain" caption="lost but happy" rotate={-2} />
            </div>
            <Polaroid src={images.chai} alt="Chai" caption="3AM tea stop" rotate={2} />
            <Polaroid src={images.campfire} alt="Campfire" caption="core memory" rotate={-1} />
            <Polaroid src={images.roadtrip} alt="Roadtrip" caption="lost on purpose" rotate={3} />
            <Polaroid src={images.food} alt="Food" caption="seconds, please" rotate={-2} />
          </div>

          <div className="mt-10 sm:hidden">
            <Link to="/memories" className="font-display text-lg underline-hand">
              See all memories →
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="relative py-20 md:py-32 bg-beige/30">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-10">
            Travelers · in their own words
          </p>
          <StoryFeature story={stories[0]} />
          <div className="mt-12 text-right">
            <Link to="/stories" className="font-display text-lg underline-hand">
              read more stories →
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      {/* <section className="mx-auto max-w-7xl px-5 md:px-10 py-20 md:py-28">
        <StatRow stats={stats} />
      </section> */}

      {/* JOURNEYS */}
      <section className="relative py-20 md:py-32 bg-paper">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl mb-14 md:mb-20">
            <p className="font-hand text-2xl text-brown">what's next</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground -mt-1">
              Upcoming journeys
            </h2>
            <p className="mt-5 text-muted-foreground">
              Small groups. Slow days. Long drives. The kind of trips that turn
              into the stories you tell for years.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {journeys.map((j) => (
              <JourneyTeaser key={j.destination} {...j} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

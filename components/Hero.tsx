"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-ink-0">
      {/* Background video with graceful gradient fallback */}
      <div className="absolute inset-0">
        <div className="hero-fallback absolute inset-0" />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
          poster={site.hero.videoPoster}
        >
          <source src={site.hero.videoSrc} type="video/mp4" />
        </video>

        {/* Overlays: top-to-bottom ink, radial spot, noise, grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-0/40 via-ink-0/50 to-ink-0" />
        <div className="absolute inset-0 bg-radial-ice opacity-70" />
        <div className="noise-overlay absolute inset-0 opacity-[0.15] mix-blend-overlay" />
        <div className="absolute inset-0 grid-bg opacity-[0.25]" />
      </div>

      {/* Content */}
      <div className="container-xl relative z-10 flex min-h-[100svh] flex-col justify-end pb-10 pt-32 sm:pb-16">
        {/* Top eyebrow row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-auto flex items-center justify-between pt-4"
        >
          <span className="eyebrow flex items-center gap-3">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-ice shadow-glow-sm" />
            {site.hero.eyebrow}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-ultra-wide text-bone-dim sm:inline">
            {site.brand.established}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl"
          >
            <span className="block text-bone">{site.hero.headline[0]}</span>
            <span className="block chrome-text">{site.hero.headline[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg"
          >
            {site.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href={site.hero.primaryCta.href} className="btn btn-primary">
              {site.hero.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a href={site.hero.secondaryCta.href} className="btn btn-ghost">
              {site.hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        {/* Metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-md sm:grid-cols-4"
        >
          {site.hero.metrics.map((m) => (
            <div key={m.label} className="bg-ink-50/30 px-5 py-5 sm:px-6 sm:py-6">
              <div className="font-display text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
                {m.value}
              </div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom hairline glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ice/50 to-transparent" />
    </section>
  );
}

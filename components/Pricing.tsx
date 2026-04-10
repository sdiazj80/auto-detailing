"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function Pricing() {
  return (
    <section id="pricing" className="relative border-y border-white/[0.06] bg-ink-100 py-24 sm:py-32">
      <div className="container-xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-label mb-5">Pricing · Simple & Fixed</p>
          <h2 className="display-lg">
            Straight prices.
            <br />
            <span className="ice-text">No hidden add-ons.</span>
          </h2>
          <p className="mt-5 text-base text-bone-muted leading-relaxed">
            What you see is what you pay. Larger vehicles and heavy-soil jobs are quoted during booking — you'll always know the full price before we start.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {site.packages.map((pkg, i) => {
            const featured = pkg.featured;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl border p-8 backdrop-blur-sm transition-all ${
                  featured
                    ? "border-ice/50 bg-gradient-to-b from-ice/[0.06] to-white/[0.02] shadow-glow-sm lg:-translate-y-4"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.16]"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-ice px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-0">
                    Most Booked
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <h3 className="font-display text-2xl font-semibold text-bone">
                    {pkg.name}
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
                    0{i + 1}
                  </span>
                </div>

                <p className="mt-2 text-sm text-bone-muted">{pkg.blurb}</p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
                    From
                  </span>
                  <span className="font-display text-5xl font-semibold tracking-tight text-bone">
                    ${pkg.priceFrom}
                  </span>
                </div>

                <div className="my-8 h-px w-full bg-white/[0.06]" />

                <ul className="flex-1 space-y-3">
                  {pkg.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-bone-muted">
                      <span className={`mt-1 inline-block h-1.5 w-1.5 rounded-full ${featured ? "bg-ice" : "bg-chrome-dark"}`} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={site.contact.bookingUrl}
                  className={`mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${
                    featured
                      ? "bg-ice text-ink-0 hover:bg-ice-bright shadow-glow-sm"
                      : "border border-white/15 bg-white/[0.02] text-bone hover:border-ice/50 hover:text-ice"
                  }`}
                >
                  {pkg.cta} <span aria-hidden>→</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
          Sedan pricing shown · SUV & Truck +$40 · Oversize quoted at booking
        </p>
      </div>
    </section>
  );
}

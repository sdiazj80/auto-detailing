"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/[0.04] blur-3xl" />
      </div>

      <div className="container-xl relative">
        {/* Header */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Services · Premium Detail Packages</p>
            <h2 className="display-lg">
              Every surface,
              <br />
              <span className="chrome-text">restored with intent.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-bone-muted leading-relaxed">
            Five tiers, zero corners cut. Pick what your vehicle needs today and we'll build a plan around it — from quick weekly maintenance to multi-year ceramic protection.
          </p>
        </div>

        {/* Service rows — editorial list, not cards */}
        <div className="border-t border-white/[0.08]">
          {site.services.map((s, i) => (
            <motion.a
              key={s.num}
              href={site.contact.bookingUrl}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative grid grid-cols-12 gap-4 border-b border-white/[0.08] py-10 transition-colors hover:bg-white/[0.02] sm:py-12"
            >
              {/* Number */}
              <div className="col-span-2 sm:col-span-1">
                <span className="font-mono text-[11px] text-ice">{s.num}</span>
              </div>

              {/* Title + tag */}
              <div className="col-span-10 sm:col-span-4">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone-dim">
                    {s.tag}
                  </span>
                </div>
                <h3 className="display-md text-bone transition-colors group-hover:text-ice">
                  {s.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 sm:col-span-4">
                <p className="text-sm leading-relaxed text-bone-muted">{s.copy}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="font-mono text-[10px] uppercase tracking-[0.14em] text-bone-dim">
                      · {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + arrow */}
              <div className="col-span-12 flex items-end justify-between sm:col-span-3 sm:flex-col sm:items-end sm:justify-end">
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
                    Starting at
                  </div>
                  <div className="font-display text-3xl font-semibold text-bone sm:text-4xl">
                    ${s.priceFrom}
                  </div>
                </div>
                <span className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-bone-muted transition-all group-hover:border-ice group-hover:bg-ice group-hover:text-ink-0 sm:ml-0 sm:mt-4">
                  →
                </span>
              </div>

              {/* Accent line on hover */}
              <span className="pointer-events-none absolute bottom-[-1px] left-0 h-px w-0 bg-ice transition-all duration-500 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-50 py-24 sm:py-32">
      <div className="container-xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-label mb-5">Reviews · Verified Clients</p>
            <h2 className="display-lg">
              4.9 stars
              <br />
              <span className="chrome-text">across 180+ reviews.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-muted">
              Google · Yelp · Nextdoor
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal scroll — feels modern, avoids old-school testimonial grids */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-50 to-transparent" />

        <div className="scrollbar-none flex gap-5 overflow-x-auto px-5 py-4 sm:px-8 lg:px-12" style={{ scrollSnapType: "x mandatory" }}>
          {site.reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative flex w-[320px] shrink-0 flex-col rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 backdrop-blur-sm sm:w-[380px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(r.stars)].map((_, j) => (
                    <Star key={j} small />
                  ))}
                </div>
                <span className="font-mono text-[26px] leading-none text-ice/60">"</span>
              </div>

              <p className="flex-1 text-[15px] leading-relaxed text-bone">
                {r.quote}
              </p>

              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <div className="font-display text-sm font-semibold text-bone">
                  {r.name}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-dim">
                  {r.vehicle}
                </div>
              </div>
            </motion.article>
          ))}

          {/* Trailing spacer so last card can snap */}
          <div className="w-1 shrink-0" />
        </div>
      </div>
    </section>
  );
}

function Star({ small = false }: { small?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`${small ? "h-3 w-3" : "h-4 w-4"} text-ice`}
    >
      <path d="M12 .587l3.668 7.425 8.2 1.192-5.934 5.786 1.402 8.172L12 18.896l-7.336 3.866 1.402-8.172L.132 9.204l8.2-1.192z" />
    </svg>
  );
}

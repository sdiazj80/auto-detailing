"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

const spanClass: Record<string, string> = {
  tall: "row-span-2 aspect-[3/5]",
  wide: "col-span-2 aspect-[16/9]",
  square: "aspect-square",
};

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ink-50 py-24 sm:py-32">
      <div className="container-xl">
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-label mb-5">Gallery · Field Work</p>
            <h2 className="display-lg max-w-3xl">
              Details you can see
              <br />
              <span className="chrome-text">from across the lot.</span>
            </h2>
          </div>
          <a
            href={site.contact.bookingUrl}
            className="btn btn-ghost self-start md:self-end"
          >
            Book Your Detail →
          </a>
        </div>

        <div className="grid grid-cols-2 auto-rows-[180px] gap-3 sm:grid-cols-4 sm:auto-rows-[220px] sm:gap-4">
          {site.gallery.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] ${
                spanClass[g.span] ?? "aspect-square"
              }`}
            >
              <div className="placeholder-gloss absolute inset-0" />
              <img
                src={g.src}
                alt={g.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-0/70 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {g.alt}
                </span>
                <span className="font-mono text-[10px] text-ice opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

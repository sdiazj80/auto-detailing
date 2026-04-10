"use client";

import { motion } from "framer-motion";
import { site } from "@/config/site";

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-ink-0 py-24 sm:py-32">
      {/* Background vehicle silhouette via gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-ice/[0.035] blur-3xl" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-ice/[0.04] blur-3xl" />
      </div>

      <div className="container-xl relative">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr] md:gap-20">
          {/* Left — story */}
          <div>
            <p className="section-label mb-6">Experience · Why Lustre</p>
            <h2 className="display-lg">
              We don't "wash cars."
              <br />
              <span className="chrome-text">We rebuild the finish.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-bone-muted max-w-xl">
              <p>
                Most mobile washes show up with a pressure wand and a hope. We show up with a fully self-contained rig — reverse osmosis water, onboard power, steam, extraction, and pro-grade chemistry from the same brands working on concours-level builds.
              </p>
              <p>
                Every vehicle gets the same methodical approach. Decontamination first. Correction second. Protection last. Nothing rushed. Nothing skipped. When we leave, we walk every panel with you.
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] sm:grid-cols-3">
              {[
                { k: "Hand finished", v: "Every panel" },
                { k: "Pro chemistry", v: "Koch · Gyeon · CarPro" },
                { k: "Insured", v: "Bonded up to $2M" },
                { k: "Ceramic IDA", v: "Certified installer" },
                { k: "7 days / week", v: "Evening availability" },
                { k: "Fixed pricing", v: "No upsell games" },
              ].map((p) => (
                <div key={p.k} className="bg-ink-100/60 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
                    {p.k}
                  </div>
                  <div className="mt-1 text-sm text-bone">{p.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — process timeline */}
          <div className="relative">
            <div className="sticky top-24">
              <p className="section-label mb-6">The Process</p>
              <ol className="space-y-0">
                {site.process.map((p, i) => (
                  <motion.li
                    key={p.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative border-l border-white/[0.08] pl-8 pb-10 last:pb-0"
                  >
                    <span className="absolute -left-[7px] top-1 flex h-[13px] w-[13px] items-center justify-center rounded-full border border-ice bg-ink-0">
                      <span className="h-[5px] w-[5px] rounded-full bg-ice shadow-glow-sm" />
                    </span>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-ice">
                      {p.step}
                    </div>
                    <h3 className="mt-2 font-display text-xl font-semibold text-bone">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-bone-muted max-w-xs">
                      {p.copy}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

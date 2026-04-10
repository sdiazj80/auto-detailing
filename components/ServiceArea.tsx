"use client";

import { site } from "@/config/site";

export default function ServiceArea() {
  return (
    <section id="area" className="relative overflow-hidden bg-ink-0 py-24 sm:py-32">
      {/* Radar-style radial background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div className="relative">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-ice/10"
              style={{
                width: `${i * 260}px`,
                height: `${i * 260}px`,
                left: `-${i * 130}px`,
                top: `-${i * 130}px`,
              }}
            />
          ))}
          <div className="absolute -left-[260px] -top-[260px] h-[520px] w-[520px] rounded-full bg-ice/[0.04] blur-3xl" />
        </div>
      </div>

      <div className="container-xl relative">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="section-label mb-5">Service Area</p>
            <h2 className="display-lg">
              We come to you.
              <br />
              <span className="chrome-text">Across {site.serviceArea.region}.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-bone-muted">
              Fully mobile, self-contained rig. {site.serviceArea.radiusMiles}-mile radius from {site.serviceArea.primary}. Home, office, or hotel — it doesn't matter. Book it and we're there.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 max-w-md sm:grid-cols-3">
              {site.serviceArea.cities.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 border-b border-white/[0.06] pb-2"
                >
                  <span className="h-1 w-1 rounded-full bg-ice shadow-glow-sm" />
                  <span className="text-sm text-bone">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact card */}
          <div className="relative">
            <div className="card-glass p-8 sm:p-10">
              <p className="eyebrow mb-5">Contact</p>
              <h3 className="display-md text-bone">
                Ready when you are.
              </h3>
              <p className="mt-4 text-sm text-bone-muted leading-relaxed">
                Text us with your vehicle, address, and preferred day. We'll confirm a time within the hour during business hours.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={site.contact.phoneHref}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-ice/50 hover:bg-ice/[0.04]"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">Call</div>
                    <div className="mt-1 font-display text-lg text-bone group-hover:text-ice">
                      {site.contact.phone}
                    </div>
                  </div>
                  <span className="text-bone-muted transition-colors group-hover:text-ice">→</span>
                </a>

                <a
                  href={site.contact.sms}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-ice/50 hover:bg-ice/[0.04]"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">Text</div>
                    <div className="mt-1 font-display text-lg text-bone group-hover:text-ice">
                      Send a message
                    </div>
                  </div>
                  <span className="text-bone-muted transition-colors group-hover:text-ice">→</span>
                </a>

                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-ice/50 hover:bg-ice/[0.04]"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">Email</div>
                    <div className="mt-1 font-display text-lg text-bone group-hover:text-ice">
                      {site.contact.email}
                    </div>
                  </div>
                  <span className="text-bone-muted transition-colors group-hover:text-ice">→</span>
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-ice shadow-glow-sm" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-muted">
                  Accepting bookings — next available: Tomorrow
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-ink-0">
      <div className="container-xl pt-20 pb-10">
        {/* Giant brand lockup */}
        <div className="relative mb-16 overflow-hidden">
          <h2 className="chrome-text font-display font-semibold leading-[0.85] tracking-tightest"
              style={{ fontSize: "clamp(3rem, 13vw, 13rem)" }}>
            {site.brand.name}
          </h2>
          <div className="absolute inset-0 bg-gradient-to-t from-ink-0 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="eyebrow mb-3">Studio</p>
            <p className="text-sm text-bone-muted leading-relaxed max-w-xs">
              {site.brand.fullName}. A fully mobile premium detail studio serving {site.serviceArea.region}.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
              {site.brand.established} · {site.serviceArea.primary}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3">Services</p>
            <ul className="space-y-2 text-sm text-bone-muted">
              {site.services.map((s) => (
                <li key={s.num}>
                  <a href="#services" className="hover:text-ice transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Service Area</p>
            <ul className="space-y-2 text-sm text-bone-muted">
              {site.serviceArea.cities.slice(0, 6).map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3">Contact</p>
            <ul className="space-y-2 text-sm text-bone-muted">
              <li>
                <a href={site.contact.phoneHref} className="hover:text-ice transition-colors">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="hover:text-ice transition-colors">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={site.contact.bookingUrl} className="hover:text-ice transition-colors">
                  Book online
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 md:flex-row md:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
            © {new Date().getFullYear()} {site.brand.fullName}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
            Fully insured · Bonded · Ceramic certified
          </p>
        </div>
      </div>
    </footer>
  );
}

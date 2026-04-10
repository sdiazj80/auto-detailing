import { site } from "@/config/site";

export default function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-ink-100">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/[0.08] blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="noise-overlay absolute inset-0 opacity-[0.12] mix-blend-overlay" />
      </div>

      <div className="container-xl relative py-28 sm:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <p className="section-label mb-6 justify-center !flex">Final Call</p>

          <h2 className="display-xl">
            <span className="block text-bone">Let's make it</span>
            <span className="block chrome-text">look new again.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-bone-muted sm:text-lg">
            Book online, or call and speak with us directly. We'll confirm a time, show up with the rig, and leave you with a vehicle that looks better than the day you bought it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href={site.contact.bookingUrl} className="btn btn-primary text-[13px] !py-4 !px-7">
              Book a Detail
              <span aria-hidden>→</span>
            </a>
            <a href={site.contact.phoneHref} className="btn btn-ghost text-[13px] !py-4 !px-7">
              Call {site.contact.phone}
            </a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8">
            {[
              "No deposit required",
              "Satisfaction guaranteed",
              "Fully insured",
              "Same-week availability",
            ].map((t) => (
              <span
                key={t}
                className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-muted"
              >
                <span className="h-1 w-1 rounded-full bg-ice" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

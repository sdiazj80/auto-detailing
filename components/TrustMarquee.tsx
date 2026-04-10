import { site } from "@/config/site";

export default function TrustMarquee() {
  // Duplicate content for seamless marquee loop
  const items = [...site.trustStrip, ...site.trustStrip];

  return (
    <section className="relative border-y border-white/[0.06] bg-ink-100">
      <div className="relative overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-100 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-100 to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-12">
          {items.map((item, i) => (
            <div key={`${item}-${i}`} className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <span className="h-1 w-1 rounded-full bg-ice" />
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone-muted">
                  {item}
                </span>
              </div>
              <span className="font-mono text-[11px] text-bone-dim">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

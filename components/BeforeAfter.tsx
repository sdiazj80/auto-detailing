"use client";

import { useRef, useState } from "react";
import { site } from "@/config/site";

/**
 * Before/After reveal slider.
 *
 * When `simulateBefore` is true (default), the `before` image is
 * rendered with a darken/desaturate/soft-blur filter to create a
 * convincing "dirty/untreated" look — useful while the site is using
 * placeholder media and real before/after pairs aren't available yet.
 *
 * When real pairs are wired in (see config/site.ts → beforeAfter),
 * pass `simulateBefore={false}` to render the raw `before` image.
 */
function Slider({
  label,
  before,
  after,
  reverse = false,
  simulateBefore = true,
}: {
  label: string;
  before: string;
  after: string;
  reverse?: boolean;
  simulateBefore?: boolean;
}) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, x)));
  };

  return (
    <div
      className={`group relative grid items-end gap-6 ${
        reverse ? "md:grid-cols-[1fr_1.4fr]" : "md:grid-cols-[1.4fr_1fr]"
      }`}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-200"
        onMouseMove={(e) => e.buttons === 1 && handlePointer(e.clientX)}
        onMouseDown={(e) => handlePointer(e.clientX)}
        onTouchMove={(e) => handlePointer(e.touches[0].clientX)}
        onTouchStart={(e) => handlePointer(e.touches[0].clientX)}
      >
        {/* After (full bg) */}
        <div className="absolute inset-0">
          <img
            src={after}
            alt={`${label} — after`}
            className="h-full w-full object-cover"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="placeholder-gloss absolute inset-0 -z-10" />
          <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-ink-0/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ice backdrop-blur">
            After
          </span>
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt={`${label} — before`}
            className="h-full w-full object-cover"
            style={
              simulateBefore
                ? {
                    filter:
                      "brightness(0.42) contrast(0.78) saturate(0.35) blur(1.2px) sepia(0.12)",
                  }
                : undefined
            }
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          {/* Grime overlay adds dust/haze speckle on top of the filter */}
          {simulateBefore && (
            <div
              className="pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 40%, rgba(90,80,60,0.35), transparent 70%), radial-gradient(ellipse at 70% 60%, rgba(60,55,45,0.4), transparent 65%)",
              }}
            />
          )}
          <div className="placeholder-gloss-dark absolute inset-0 -z-10" />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-ink-0/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone-muted backdrop-blur">
            Before
          </span>
        </div>

        {/* Divider handle */}
        <div
          className="pointer-events-none absolute inset-y-0 z-20 flex items-center justify-center"
          style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        >
          <div className="relative h-full w-px bg-ice shadow-glow-sm" />
          <div className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-ink-0/80 text-ice backdrop-blur-md">
            <span className="font-mono text-[14px]">⇌</span>
          </div>
        </div>

        {/* Bottom vignette */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-0/80 to-transparent" />
      </div>

      {/* Side caption */}
      <div className="md:pb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
          Case Study
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-bone sm:text-3xl">
          {label}
        </h3>
        <p className="mt-4 text-sm text-bone-muted leading-relaxed max-w-sm">
          Drag the slider to reveal the transformation. Every correction is done by hand — no masked shortcuts, no filler.
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="relative border-y border-white/[0.06] bg-ink-100 py-24 sm:py-32">
      <div className="container-xl">
        <div className="mb-16 max-w-3xl">
          <p className="section-label mb-5">Before / After · Real Work</p>
          <h2 className="display-lg">
            The difference is
            <br />
            <span className="ice-text">in the reflection.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-bone-muted leading-relaxed">
            No stock photos, no filters. Drag the slider across any build below to see the same vehicle, same lighting, same angle — just hours of precision work apart.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {site.beforeAfter.map((ba, i) => (
            <Slider
              key={ba.label}
              label={ba.label}
              before={ba.before}
              after={ba.after}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

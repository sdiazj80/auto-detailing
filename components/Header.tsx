"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink-50/70 border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl flex h-16 items-center justify-between sm:h-20">
        {/* Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative h-8 w-8 overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-white/[0.12] to-transparent">
            <div className="absolute inset-0 flex items-center justify-center font-display text-[13px] font-bold text-ice">
              L
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-ice/0 via-ice/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-[15px] font-semibold tracking-tight text-bone">
              {site.brand.name}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-bone-dim">
              Mobile Detail Co.
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-muted transition-colors hover:text-ice"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={site.contact.phoneHref}
            className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-bone-muted transition-colors hover:text-ice md:inline"
          >
            {site.contact.phone}
          </a>
          <a href={site.contact.bookingUrl} className="btn btn-primary !py-2 !px-4 text-[11px]">
            Book Now
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]"
          >
            <div className="flex flex-col gap-[4px]">
              <span className={`h-[1.5px] w-4 bg-bone transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] w-4 bg-bone transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-[1.5px] w-4 bg-bone transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-white/[0.06] bg-ink-50/95 backdrop-blur-xl transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="container-xl flex flex-col gap-1 py-4">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/[0.04] py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-muted"
            >
              {n.label}
              <span className="text-ice">→</span>
            </a>
          ))}
          <a
            href={site.contact.phoneHref}
            className="mt-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ice"
          >
            Call {site.contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}

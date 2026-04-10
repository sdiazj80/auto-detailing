/**
 * SITE CONFIG
 * ------------------------------------------------------------------
 * This file is the single source of truth for business content.
 * To launch a new detailing client, edit this file only — the
 * rest of the site reads from here.
 *
 * Swap:
 *   - brand (name, tagline, logo)
 *   - contact (phone, email, book link)
 *   - serviceArea (cities, region)
 *   - services (name, copy, features, starting price)
 *   - pricing packages
 *   - reviews
 *   - gallery / before-after media paths
 */

export const site = {
  brand: {
    name: "LUSTRE",
    fullName: "Lustre Mobile Detailing",
    tagline: "Showroom Finish. Delivered.",
    // Drop your logo at /public/brand/logo.svg (or change path)
    logoSrc: "/brand/logo.svg",
    established: "EST. 2019",
  },

  contact: {
    phone: "(555) 214-9930",
    phoneHref: "tel:+15552149930",
    sms: "sms:+15552149930",
    email: "hello@lustredetail.co",
    bookingUrl: "#book",
  },

  serviceArea: {
    primary: "Scottsdale, AZ",
    region: "Phoenix Metro",
    cities: [
      "Scottsdale",
      "Paradise Valley",
      "Phoenix",
      "Tempe",
      "Mesa",
      "Chandler",
      "Gilbert",
      "Fountain Hills",
    ],
    radiusMiles: 35,
  },

  hero: {
    eyebrow: "MOBILE AUTO DETAILING · PHOENIX METRO",
    headline: ["Showroom finish.", "At your doorstep."],
    sub: "Fully mobile, fully insured. We bring a pro-grade detail studio to your driveway — so your car looks better than the day you drove it home.",
    primaryCta: { label: "Book a Detail", href: "#book" },
    secondaryCta: { label: "See the Results", href: "#results" },
    // Drop hero media at the paths below. The site auto-falls-back
    // to a cinematic CSS gradient if the files don't exist.
    videoSrc: "/media/hero/hero.mp4",
    videoPoster: "/media/hero/hero-poster.jpg",
    metrics: [
      { value: "600+", label: "Vehicles detailed" },
      { value: "4.9★", label: "Across 180+ reviews" },
      { value: "35mi", label: "Mobile radius" },
      { value: "7dy", label: "Open every day" },
    ],
  },

  trustStrip: [
    "FULLY MOBILE",
    "INSURED & BONDED",
    "CERAMIC CERTIFIED",
    "PRO-GRADE CHEMICALS",
    "INTERIOR STEAM",
    "PAINT CORRECTION",
    "OPEN 7 DAYS",
  ],

  services: [
    {
      num: "01",
      title: "Express Refresh",
      tag: "60–90 MIN",
      copy: "Hand wash, wheels, tires, trim, windows in & out, quick interior vacuum and wipe-down. Perfect between full details.",
      features: ["Foam hand wash", "Wheel & tire dressing", "Interior vacuum", "Glass inside & out"],
      priceFrom: 99,
      image: "/media/services/express.jpg",
    },
    {
      num: "02",
      title: "Interior Deep Clean",
      tag: "3–4 HR",
      copy: "Full interior restoration. Steam extraction on carpets and upholstery, leather condition, vents, crevices, headliner.",
      features: ["Hot steam extraction", "Leather clean & condition", "Full shampoo", "Odor neutralization"],
      priceFrom: 189,
      image: "/media/services/interior.jpg",
    },
    {
      num: "03",
      title: "Exterior Correction",
      tag: "4–6 HR",
      copy: "Decontamination wash, clay, single-stage polish to cut swirls and haze, hydrophobic sealant finish.",
      features: ["Decon wash & clay", "Machine polish", "Paint sealant", "Trim & tire gloss"],
      priceFrom: 249,
      image: "/media/services/exterior.jpg",
    },
    {
      num: "04",
      title: "Full Detail",
      tag: "6–8 HR",
      copy: "The complete package — interior deep clean and exterior correction in one visit. Edge-to-edge restoration.",
      features: ["Everything in Interior + Exterior", "Engine bay wipe", "Glass polish", "Premium scent"],
      priceFrom: 389,
      image: "/media/services/full.jpg",
    },
    {
      num: "05",
      title: "Ceramic Coating",
      tag: "1–2 DAYS",
      copy: "Multi-year ceramic protection. Paint prep, IPA wipe, application, and cure. Hydrophobic gloss that lasts.",
      features: ["2-, 5-, or 7-year options", "Paint prep & polish", "Hydrophobic finish", "Warranty backed"],
      priceFrom: 799,
      image: "/media/services/ceramic.jpg",
    },
  ],

  packages: [
    {
      name: "Express",
      priceFrom: 99,
      blurb: "Weekly shine, maintained.",
      highlights: [
        "Foam hand wash",
        "Wheels, tires, trim",
        "Interior vacuum",
        "Windows in & out",
      ],
      cta: "Book Express",
    },
    {
      name: "Full Detail",
      priceFrom: 389,
      blurb: "Our most-booked package.",
      highlights: [
        "Everything in Express",
        "Interior steam extraction",
        "Leather clean & condition",
        "Single-stage machine polish",
        "Paint sealant finish",
      ],
      cta: "Book Full Detail",
      featured: true,
    },
    {
      name: "Ceramic",
      priceFrom: 799,
      blurb: "Years of hydrophobic gloss.",
      highlights: [
        "Full exterior correction",
        "Paint decon & polish",
        "Pro ceramic coating",
        "2 / 5 / 7 year options",
        "Written warranty",
      ],
      cta: "Book Ceramic",
    },
  ],

  process: [
    {
      step: "01",
      title: "Book in 60 seconds",
      copy: "Tell us your vehicle, location, and preferred date. We confirm by text.",
    },
    {
      step: "02",
      title: "We come to you",
      copy: "Fully self-contained rig — water, power, everything. Home or office.",
    },
    {
      step: "03",
      title: "Detailed, not rushed",
      copy: "Hand finishing, controlled product use, no rotary burns, no cut corners.",
    },
    {
      step: "04",
      title: "Final walk-around",
      copy: "We show you every surface before we leave. If it isn't right, we fix it.",
    },
  ],

  beforeAfter: [
    {
      label: "2018 Range Rover — Interior Revival",
      before: "/media/before-after/01-before.jpg",
      after: "/media/before-after/01-after.jpg",
    },
    {
      label: "2021 M4 — Single-Stage Correction",
      before: "/media/before-after/02-before.jpg",
      after: "/media/before-after/02-after.jpg",
    },
    {
      label: "2015 F-150 — Full Exterior Decon",
      before: "/media/before-after/03-before.jpg",
      after: "/media/before-after/03-after.jpg",
    },
  ],

  gallery: [
    { src: "/media/gallery/01.jpg", alt: "Glossy black paint reflection", span: "tall" },
    { src: "/media/gallery/02.jpg", alt: "Detailed leather interior", span: "wide" },
    { src: "/media/gallery/03.jpg", alt: "Wheel and caliper detail", span: "square" },
    { src: "/media/gallery/04.jpg", alt: "Foam wash closeup", span: "square" },
    { src: "/media/gallery/05.jpg", alt: "Polished headlight", span: "tall" },
    { src: "/media/gallery/06.jpg", alt: "Dashboard after detail", span: "wide" },
    { src: "/media/gallery/07.jpg", alt: "Water beading on hood", span: "square" },
    { src: "/media/gallery/08.jpg", alt: "Mobile rig on location", span: "square" },
  ],

  reviews: [
    {
      quote:
        "Picked up my SUV the next morning and it looked better than when I bought it. They found seat stains I'd written off months ago.",
      name: "Jordan R.",
      vehicle: "Audi Q7",
      stars: 5,
    },
    {
      quote:
        "Came to my office, worked around my schedule, left the garage spotless. This is the only place I'll trust with the M4 now.",
      name: "Priya S.",
      vehicle: "BMW M4 Competition",
      stars: 5,
    },
    {
      quote:
        "The ceramic finish still beads water a year later. Worth every dollar. You can tell they actually care about the work.",
      name: "Marcus T.",
      vehicle: "Tesla Model S Plaid",
      stars: 5,
    },
    {
      quote:
        "Best detail I've ever paid for — and I've paid for a lot. The interior steam made the carpets look brand new.",
      name: "Elena K.",
      vehicle: "Toyota 4Runner",
      stars: 5,
    },
    {
      quote:
        "They treat a Tacoma the same as a Porsche. No upsell games, straight pricing, incredible finish. Booked the whole family in.",
      name: "Derek M.",
      vehicle: "Toyota Tacoma TRD",
      stars: 5,
    },
  ],

  faq: [
    {
      q: "Do I need to provide water or power?",
      a: "No. Our rig is fully self-contained — onboard water tank, generator, and all chemicals.",
    },
    {
      q: "How long does a full detail take?",
      a: "6–8 hours on average, depending on vehicle size and condition. We'll give you an exact window at booking.",
    },
    {
      q: "Can you detail at my office?",
      a: "Yes. Most of our weekday jobs are at offices or homes. We just need a parking spot and a few hours.",
    },
  ],
};

export type Site = typeof site;

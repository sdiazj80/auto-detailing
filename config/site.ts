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
    // Hero media. Multiple video sources are tried in order — the
    // browser falls through to the next if the first fails. The
    // cinematic CSS gradient in Hero.tsx is the final fallback if
    // all videos fail to load.
    //
    // To use your own hero video, either:
    //   (a) drop an mp4 at /public/media/hero/hero.mp4 and put
    //       "/media/hero/hero.mp4" as the first entry below, or
    //   (b) replace the URLs with your own remote sources.
    videoSources: [
      // Primary: closeup of a detailer polishing a black car (Mixkit, free license)
      "https://assets.mixkit.co/videos/47833/47833-720.mp4",
      // Fallback: foam wash (Mixkit, free license)
      "https://assets.mixkit.co/videos/47586/47586-720.mp4",
    ],
    // Poster shown while video loads / if autoplay is blocked
    videoPoster:
      "https://images.pexels.com/photos/20042055/pexels-photo-20042055.jpeg?auto=compress&cs=tinysrgb&w=1920",
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

  // Before / After pairs.
  //
  // ⚠ TEMPORARY PLACEHOLDER APPROACH:
  // Until the client provides real dirty→clean pairs, we use a single
  // "after" image for each case and the BeforeAfter component applies
  // a CSS filter (darken + desaturate + soft blur) to simulate the
  // "before" state on the left side of the slider. The slider still
  // works perfectly — dragging reveals the "corrected" layer.
  //
  // To use REAL before/after pairs:
  //   1. Drop paired images at /public/media/before-after/01-before.jpg
  //      and /public/media/before-after/01-after.jpg
  //   2. Replace both URLs below with the local paths
  //   3. In components/BeforeAfter.tsx, set `simulateBefore={false}`
  //      on the <Slider> call (or remove the prop entirely)
  beforeAfter: [
    {
      label: "911 Carrera — Single-Stage Correction",
      before: "https://images.pexels.com/photos/20042055/pexels-photo-20042055.jpeg?auto=compress&cs=tinysrgb&w=1600",
      after: "https://images.pexels.com/photos/20042055/pexels-photo-20042055.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      label: "Bentley Continental — Full Exterior Decon",
      before: "https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&w=1600",
      after: "https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      label: "BMW M4 — Gloss & Ceramic Prep",
      before: "https://images.pexels.com/photos/14231672/pexels-photo-14231672.jpeg?auto=compress&cs=tinysrgb&w=1600",
      after: "https://images.pexels.com/photos/14231672/pexels-photo-14231672.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],

  // Gallery images — currently sourced from Pexels CDN (free license).
  // To swap: drop your own images at /public/media/gallery/*.jpg and
  // replace the `src` values with "/media/gallery/01.jpg" etc.
  // The `span` controls layout — "tall", "wide", or "square".
  gallery: [
    {
      src: "https://images.pexels.com/photos/20042055/pexels-photo-20042055.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Detailer machine polishing a black Porsche in studio",
      span: "wide",
    },
    {
      src: "https://images.pexels.com/photos/11139244/pexels-photo-11139244.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Dual-action polisher cutting a blue paint panel",
      span: "tall",
    },
    {
      src: "https://images.pexels.com/photos/13333481/pexels-photo-13333481.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Mercedes grille closeup with glossy chrome detail",
      span: "square",
    },
    {
      src: "https://images.pexels.com/photos/6872149/pexels-photo-6872149.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Foam cannon bubbles on a black headlight assembly",
      span: "square",
    },
    {
      src: "https://images.pexels.com/photos/14231684/pexels-photo-14231684.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Machine polish on a black headlight housing",
      span: "tall",
    },
    {
      src: "https://images.pexels.com/photos/10182885/pexels-photo-10182885.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Cleaned wheel with bronze finish and red calipers",
      span: "square",
    },
    {
      src: "https://images.pexels.com/photos/6873174/pexels-photo-6873174.jpeg?auto=compress&cs=tinysrgb&w=1600",
      alt: "Bentley fully coated in foam ready for rinse",
      span: "wide",
    },
    {
      src: "https://images.pexels.com/photos/17356572/pexels-photo-17356572.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Foam wash cascading over a red sports car exhaust",
      span: "square",
    },
    {
      src: "https://images.pexels.com/photos/14231672/pexels-photo-14231672.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Blue microfiber wiping down a glossy black fender",
      span: "tall",
    },
    {
      src: "https://images.pexels.com/photos/5233262/pexels-photo-5233262.jpeg?auto=compress&cs=tinysrgb&w=1200",
      alt: "Hand polishing a red door panel with foam pad",
      span: "square",
    },
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

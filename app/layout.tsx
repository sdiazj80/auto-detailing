import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.brand.fullName} — ${site.brand.tagline}`,
  description: site.hero.sub,
  metadataBase: new URL("https://lustredetail.co"),
  openGraph: {
    title: `${site.brand.fullName} — ${site.brand.tagline}`,
    description: site.hero.sub,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070809",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-ink-50 text-bone antialiased">
        {children}
      </body>
    </html>
  );
}

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Experience from "@/components/Experience";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <TrustMarquee />
      <Services />
      <BeforeAfter />
      <Gallery />
      <Experience />
      <Pricing />
      <Reviews />
      <ServiceArea />
      <FinalCTA />
      <Footer />
    </main>
  );
}

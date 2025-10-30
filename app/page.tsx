import CTA from "@/components/sections/cta";
import Faq from "@/components/sections/Faq";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Step from "@/components/sections/Step";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Step />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}

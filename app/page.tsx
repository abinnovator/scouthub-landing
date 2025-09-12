import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Step from "@/components/sections/Step";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Step />
      <Faq />
      <Footer />
    </div>
  );
}

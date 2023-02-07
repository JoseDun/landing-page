import About from "@/components/UI/About";
import Download from "@/components/UI/Download";
import Hero from "@/components/UI/Hero";
import Pricing from "@/components/UI/Pricing";
import Services from "@/components/UI/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      <Pricing />
      <Download />
      {/* <Testimonials />
           <Services />
       */}
    </>
  );
}

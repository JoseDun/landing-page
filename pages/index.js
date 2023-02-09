import About from "@/components/UI/About";
import Download from "@/components/UI/Download";
import Hero from "@/components/UI/Hero";
import Pricing from "@/components/UI/Pricing";
import Services from "@/components/UI/Services";
import Testimonials from "@/components/UI/Testimonials";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy wallet</title>
        <meta name="description" content="Easy wallet ..." />
      </Head>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <Download />
    </>
  );
}

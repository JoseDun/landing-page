import Head from "next/head";
import {
  About,
  Download,
  Hero,
  Services,
  Testimonials,
  Pricing,
} from "@/components/Views/";


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

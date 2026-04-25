import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Process from "@/components/Process";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollDepth from "@/components/ScrollDepth";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <ScrollDepth />
      <StickyCTA />
      <header>
        <Nav />
      </header>
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Solution />
        <Process />
        <Offer />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

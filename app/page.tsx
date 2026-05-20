import { AnimatedBackground } from "@/components/landing/animated-background";
import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { Identity } from "@/components/landing/identity";
import { Journal } from "@/components/landing/journal";
import { Newsletter } from "@/components/landing/newsletter";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Identity />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

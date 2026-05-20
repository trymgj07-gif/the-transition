import { AnimatedBackground } from "@/components/landing/animated-background";
import { Hero } from "@/components/landing/hero";
import { Philosophy } from "@/components/landing/philosophy";
import { PhasesFramework } from "@/components/phases/phases-framework";
import { Newsletter } from "@/components/landing/newsletter";
import { Footer } from "@/components/landing/footer";
import { CinematicNav } from "@/components/journal/cinematic-nav";
import { BreathingRoom } from "@/components/journal/breathing-room";
import { LatestPublished } from "@/components/journal/latest-published";
import { getLatestPublished } from "@/lib/articles";

export default function Home() {
  const latest = getLatestPublished();

  return (
    <>
      <AnimatedBackground />
      <CinematicNav />
      <main className="relative z-10">
        <Hero />
        <PhasesFramework />
        <Philosophy />
        <BreathingRoom />
        <LatestPublished articles={latest} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

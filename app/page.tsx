import { AnimatedBackground } from "@/components/landing/animated-background";
import { CinematicNav } from "@/components/journal/cinematic-nav";
import { HomeHero } from "@/components/journal/home-hero";
import { HomeIntro } from "@/components/journal/home-intro";
import { HomeSections } from "@/components/journal/home-sections";
import { SiteFooter } from "@/components/journal/site-footer";
import {
  getArticlesByType,
  getPrimaryFeatured,
  getRecentNotes,
} from "@/lib/articles";

export default function Home() {
  const featured = getPrimaryFeatured();
  const recentNotes = getRecentNotes(4).filter(
    (n) => n.slug !== featured?.slug
  );
  const essays = getArticlesByType("essay");
  const fragments = getArticlesByType("fragment");

  if (!featured) {
    return null;
  }

  return (
    <>
      <AnimatedBackground />
      <CinematicNav />
      <main className="relative z-10">
        <HomeHero />
        <HomeIntro />
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <HomeSections
            featured={featured}
            notes={recentNotes}
            essays={essays}
            fragments={fragments}
          />
        </div>
      </main>
      <SiteFooter className="relative z-10 mt-0" />
    </>
  );
}

import { SiteShell } from "@/components/journal/site-shell";
import { ArticleCard } from "@/components/journal/article-card";
import { SectionHeader } from "@/components/journal/section-header";
import { getFeaturedArticles, getRecentNotes } from "@/lib/articles";

export default function Home() {
  const featured = getFeaturedArticles();
  const recentNotes = getRecentNotes(3);

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 md:px-8">
        <header className="py-16 md:py-20">
          <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8a8780]">
            Anonymous journal
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#f2f0eb]">
            The Transition
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[#8a8780]">
            Writing on ambition, identity, and life after structure — for men
            in the middle of becoming someone else.
          </p>
        </header>

        <section className="pb-16">
          <SectionHeader title="Featured" />
          <div className="mt-6 space-y-4">
            {featured.map((article) => (
              <ArticleCard key={article.slug} article={article} featured />
            ))}
          </div>
        </section>

        <section className="pb-20">
          <SectionHeader title="Recent Notes" href="/notes" />
          <div className="mt-6 space-y-3">
            {recentNotes.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

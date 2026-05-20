import { SiteShell } from "@/components/journal/site-shell";
import { ArticleCard } from "@/components/journal/article-card";
import { getArticlesByType } from "@/lib/articles";

export const metadata = {
  title: "Essays — The Transition",
  description: "Longer writing when an idea needs room.",
};

export default function EssaysPage() {
  const essays = getArticlesByType("essay");

  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-14 md:px-8 md:py-20">
        <header className="border-b border-white/[0.06] pb-10">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.02em] text-[#f2f0eb]">
            Essays
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-[#8a8780]">
            Longer pieces — slow, specific, usually revised many times.
          </p>
        </header>

        <div className="mt-10 space-y-3">
          {essays.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </main>
    </SiteShell>
  );
}

"use client";

import type { Article } from "@/lib/articles";
import { ArticleCard } from "./article-card";
import { FeaturedArticle } from "./featured-article";
import { SectionHeader } from "./section-header";

type HomeSectionsProps = {
  featured: Article;
  notes: Article[];
  essays: Article[];
  fragments: Article[];
};

export function HomeSections({
  featured,
  notes,
  essays,
  fragments,
}: HomeSectionsProps) {
  return (
    <div id="writing" className="space-y-20 pb-28 md:space-y-28 md:pb-36">
      <section id="featured">
        <SectionHeader title="Featured" />
        <div className="mt-8">
          <FeaturedArticle article={featured} />
        </div>
      </section>

      {notes.length > 0 && (
        <section>
          <SectionHeader title="Recent Notes" href="/notes" />
          <div className="mt-6 space-y-3">
            {notes.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {essays.length > 0 && (
        <section>
          <SectionHeader title="Essays" href="/essays" />
          <div className="mt-6 space-y-3">
            {essays.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {fragments.length > 0 && (
        <section>
          <SectionHeader title="Fragments" href="/fragments" />
          <div className="mt-6 space-y-3">
            {fragments.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

"use client";

import { SectionReveal, MotionLabel } from "@/components/landing/motion";
import type { Article } from "@/lib/articles";
import { ArticleCard } from "./article-card";

type LatestPublishedProps = {
  articles: Article[];
};

export function LatestPublished({ articles }: LatestPublishedProps) {
  return (
    <section id="published" className="relative px-6 pb-28 md:px-10 md:pb-36">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Published</MotionLabel>
          <h2 className="mt-5 font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.02em] text-[#f2f0eb] md:text-3xl">
            Latest published
          </h2>
          <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-[#8a8780]/80">
            Notes, essays, and fragments — written slowly, released when ready.
          </p>
        </SectionReveal>

        <div className="mt-10 space-y-3">
          {articles.map((article, i) => (
            <SectionReveal key={`${article.type}-${article.slug}`} delay={i * 0.06}>
              <ArticleCard article={article} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

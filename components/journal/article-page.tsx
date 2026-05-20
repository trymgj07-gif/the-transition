import { notFound } from "next/navigation";
import type { ArticleType } from "@/lib/articles";
import { getArticle } from "@/lib/articles";
import { SiteShell } from "./site-shell";
import { ArticleLayout } from "./article-layout";

type ArticlePageProps = {
  type: ArticleType;
  slug: string;
};

export function ArticlePage({ type, slug }: ArticlePageProps) {
  const article = getArticle(type, slug);
  if (!article) notFound();

  return (
    <SiteShell>
      <ArticleLayout article={article} />
    </SiteShell>
  );
}

import type { Metadata } from "next";
import type { ArticleType } from "./articles";
import { getArticle } from "./articles";

export function articleMetadata(
  type: ArticleType,
  slug: string
): Metadata {
  const article = getArticle(type, slug);
  if (!article) return { title: "Not found" };

  return {
    title: `${article.title} — The Transition`,
    description: article.excerpt,
  };
}

import { articles } from "@/lib/articles";
import { articleMetadata } from "@/lib/article-metadata";
import { ArticlePage } from "@/components/journal/article-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return articleMetadata("essay", slug);
}

export async function generateStaticParams() {
  return articles
    .filter((a) => a.type === "essay")
    .map((a) => ({ slug: a.slug }));
}

export default async function EssayArticlePage({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage type="essay" slug={slug} />;
}

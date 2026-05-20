import { articles } from "@/lib/articles";
import { articleMetadata } from "@/lib/article-metadata";
import { ArticlePage } from "@/components/journal/article-page";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return articleMetadata("fragment", slug);
}

export async function generateStaticParams() {
  return articles
    .filter((a) => a.type === "fragment")
    .map((a) => ({ slug: a.slug }));
}

export default async function FragmentArticlePage({ params }: Props) {
  const { slug } = await params;
  return <ArticlePage type="fragment" slug={slug} />;
}

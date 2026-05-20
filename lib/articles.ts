import { mostMenDontMissTheSportBody } from "./content/most-men-dont-miss-the-sport";

export type ArticleType = "note" | "essay" | "fragment";

export type Article = {
  slug: string;
  type: ArticleType;
  title: string;
  subtitle?: string;
  excerpt: string;
  date: string;
  featured?: boolean;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "most-men-dont-miss-the-sport",
    type: "essay",
    title: "Most men don't miss the sport.",
    subtitle: "They miss who they were when they played.",
    excerpt:
      "What athletes often mourn isn't competition — it's the structure, identity, and certainty the game gave them.",
    date: "2026-05-12",
    featured: true,
    body: mostMenDontMissTheSportBody,
  },
  {
    slug: "waking-up-without-a-schedule",
    type: "note",
    title: "Waking up without a schedule",
    excerpt:
      "The first month after structure ends feels like freedom until it doesn't.",
    date: "2026-04-28",
    body: [
      "You wake up and nothing asks anything of you before noon.",
      "For a while that feels like relief. Then it starts to feel like drift.",
      "Without a schedule, you don't lose discipline overnight — you lose the reason discipline had a container.",
      "The hard part isn't laziness. It's not knowing what counts as a good day anymore.",
    ],
  },
  {
    slug: "competence-as-a-personality",
    type: "essay",
    title: "Competence as a personality",
    excerpt:
      "On being good at things that never ask who you are underneath.",
    date: "2026-04-15",
    featured: true,
    body: [
      "Some men build an entire self out of being capable.",
      "Good grades. Clean reps. Reliable at work. Useful in a crisis.",
      "Capability is real. It matters. But it can also become a way of never having to answer a harder question: who are you when you're not performing well?",
      "When competence is your personality, failure doesn't feel like a bad week. It feels like a identity collapse.",
      "That's worth writing about slowly — not to fix it in an essay, but to see it clearly.",
    ],
  },
  {
    slug: "you-perform-discipline-before-you-feel-it",
    type: "fragment",
    title: "You perform discipline before you feel it.",
    excerpt: "A line that kept returning after college.",
    date: "2026-05-01",
    body: [
      "You perform discipline before you feel it.",
      "The gym at 6am isn't always virtue. Sometimes it's costume.",
      "Sometimes the routine is the only proof you still know how to be a person.",
    ],
  },
];

export function getArticle(type: ArticleType, slug: string): Article | undefined {
  return articles.find((a) => a.type === type && a.slug === slug);
}

export function getArticlesByType(type: ArticleType): Article[] {
  return articles
    .filter((a) => a.type === type)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getRecentNotes(limit = 4): Article[] {
  return getArticlesByType("note").slice(0, limit);
}

export function getPrimaryFeatured(): Article | undefined {
  return articles
    .filter((a) => a.featured)
    .sort((a, b) => b.date.localeCompare(a.date))[0];
}

export function getLatestPublished(limit = 6): Article[] {
  return [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function articlePath(article: Article): string {
  const base = { note: "notes", essay: "essays", fragment: "fragments" }[article.type];
  return `/${base}/${article.slug}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export const typeLabels: Record<ArticleType, string> = {
  note: "Note",
  essay: "Essay",
  fragment: "Fragment",
};

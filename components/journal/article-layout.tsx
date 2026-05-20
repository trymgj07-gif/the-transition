import Link from "next/link";
import type { Article, ArticleType } from "@/lib/articles";
import { formatDate, typeLabels } from "@/lib/articles";

const sectionPaths: Record<ArticleType, { href: string; label: string }> = {
  note: { href: "/notes", label: "Notes" },
  essay: { href: "/essays", label: "Essays" },
  fragment: { href: "/fragments", label: "Fragments" },
};

type ArticleLayoutProps = {
  article: Article;
  children?: React.ReactNode;
};

export function ArticleLayout({ article, children }: ArticleLayoutProps) {
  const back = sectionPaths[article.type];

  return (
    <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
      <Link
        href={back.href}
        className="inline-flex items-center gap-2 text-[13px] text-[#8a8780] transition-colors hover:text-[#f2f0eb]"
      >
        <span aria-hidden>←</span>
        Back to {back.label}
      </Link>

      <header className="mt-10 border-b border-white/[0.06] pb-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] tracking-[0.2em] uppercase text-[#8a8780]">
          <span>{typeLabels[article.type]}</span>
          <span className="text-[#8a8780]/30">·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </div>

        <h1 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,5vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#f2f0eb]">
          {article.title}
          {article.subtitle && (
            <>
              <br />
              <span className="text-[#8a8780]">{article.subtitle}</span>
            </>
          )}
        </h1>
      </header>

      <div className="article-body mt-10">
        {children ??
          article.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
      </div>
    </article>
  );
}

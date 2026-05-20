import Link from "next/link";
import type { Article } from "@/lib/articles";
import { articlePath, formatDate, typeLabels } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const href = articlePath(article);

  return (
    <Link
      href={href}
      className={`group block border border-white/[0.08] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] ${
        featured ? "p-8 md:p-10" : "p-6 md:p-7"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-[#8a8780] transition-colors group-hover:text-[#c4a574]">
          {typeLabels[article.type]}
        </span>
        <time
          dateTime={article.date}
          className="text-[12px] text-[#8a8780]/60"
        >
          {formatDate(article.date)}
        </time>
      </div>

      <h3
        className={`mt-4 font-[family-name:var(--font-syne)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#f2f0eb] transition-colors group-hover:text-[#f2f0eb] ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {article.title}
        {article.subtitle && (
          <>
            <br />
            <span className="text-[#8a8780] font-medium">{article.subtitle}</span>
          </>
        )}
      </h3>

      <p
        className={`mt-3 leading-relaxed text-[#8a8780] transition-colors group-hover:text-[#8a8780]/90 ${
          featured ? "text-[15px] md:text-base" : "text-[14px]"
        }`}
      >
        {article.excerpt}
      </p>

      <span className="mt-5 inline-block text-[13px] text-[#c4a574]/70 transition-colors group-hover:text-[#c4a574]">
        Read →
      </span>
    </Link>
  );
}

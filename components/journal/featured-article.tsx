"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Article } from "@/lib/articles";
import { articlePath, formatDate, typeLabels } from "@/lib/articles";

type FeaturedArticleProps = {
  article: Article;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const href = articlePath(article);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden glass-panel-strong p-8 transition-all duration-500 hover:border-white/15 md:p-12"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(135deg, rgba(196,165,116,0.08) 0%, transparent 55%, rgba(91,122,157,0.05) 100%)",
          }}
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#c4a574]">
              Featured {typeLabels[article.type]}
            </span>
            <span className="text-[#8a8780]/30">·</span>
            <time
              dateTime={article.date}
              className="text-[12px] text-[#8a8780]/60"
            >
              {formatDate(article.date)}
            </time>
          </div>

          <h2 className="mt-8 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#f2f0eb]">
            {article.title}
            {article.subtitle && (
              <>
                <br />
                <span className="text-[#8a8780]">{article.subtitle}</span>
              </>
            )}
          </h2>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#8a8780] md:text-base">
            {article.excerpt}
          </p>

          <span className="mt-8 inline-flex items-center gap-2 text-[13px] text-[#c4a574]/80 transition-colors group-hover:text-[#c4a574]">
            Read reflection
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

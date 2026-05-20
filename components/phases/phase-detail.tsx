"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Phase } from "@/lib/phases";
import { getRelatedArticles, getPhasePath, phases } from "@/lib/phases";
import { ArticleCard } from "@/components/journal/article-card";
import { SectionReveal } from "@/components/landing/motion";

type PhaseDetailProps = {
  phase: Phase;
};

function ContentBlock({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <SectionReveal delay={delay}>
      <div className="border-t border-white/[0.06] pt-10">
        <h2 className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.14em] uppercase text-[#c4a574]/90">
          {title}
        </h2>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li
              key={item}
              className="text-[15px] leading-relaxed text-[#8a8780] md:text-base md:leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </SectionReveal>
  );
}

export function PhaseDetail({ phase }: PhaseDetailProps) {
  const related = getRelatedArticles(phase);
  const isReconstruction = phase.id === "reconstruction";

  return (
    <article className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
      <Link
        href="/#phases"
        className="inline-flex items-center gap-2 text-[13px] text-[#8a8780] transition-colors hover:text-[#f2f0eb]"
      >
        <span aria-hidden>←</span>
        Back to framework
      </Link>

      <motion.header
        className="mt-10 border-b border-white/[0.06] pb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-[11px] tracking-[0.22em] uppercase text-[#5b7a9d]">
            Phase {phase.number} · {phase.signal}
          </span>
        </div>
        <h1 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#f2f0eb]">
          {phase.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-[#8a8780]">
          {phase.tagline}
        </p>
      </motion.header>

      <div className="mt-12 space-y-10">
        <ContentBlock title="Philosophy" items={phase.philosophy} />

        <ContentBlock
          title="What it often feels like"
          items={phase.patterns}
          delay={0.05}
        />

        <ContentBlock
          title="What people get wrong here"
          items={phase.mistakes}
          delay={0.1}
        />

        {phase.focus && (
          <SectionReveal delay={0.15}>
            <div
              className={`border-t border-white/[0.06] pt-10 ${
                isReconstruction ? "glass-panel-strong p-8 md:p-10" : ""
              }`}
            >
              <h2 className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.14em] uppercase text-[#c4a574]">
                What reconstruction actually asks of you
              </h2>
              <ul className="mt-6 space-y-5">
                {phase.focus.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-relaxed text-[#8a8780] md:text-base md:leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        )}
      </div>

      {related.length > 0 && (
        <SectionReveal className="mt-20">
          <div className="border-t border-white/[0.06] pt-10">
            <h2 className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.14em] uppercase text-[#f2f0eb]">
              Reading for this phase
            </h2>
            <p className="mt-3 text-[14px] text-[#8a8780]/80">
              Essays, notes, and fragments that circle this stretch of the
              transition.
            </p>
            <div className="mt-8 space-y-3">
              {related.map((article) => (
                <ArticleCard key={`${article.type}-${article.slug}`} article={article} />
              ))}
            </div>
          </div>
        </SectionReveal>
      )}

      <SectionReveal className="mt-16">
        <div className="flex flex-wrap gap-6 border-t border-white/[0.06] pt-10">
          {phases
            .filter((p) => p.id !== phase.id)
            .map((p) => (
              <Link
                key={p.id}
                href={getPhasePath(p.id)}
                className="text-[13px] text-[#8a8780] transition-colors hover:text-[#c4a574]"
              >
                {p.name} →
              </Link>
            ))}
        </div>
      </SectionReveal>
    </article>
  );
}

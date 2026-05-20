"use client";

import { SectionReveal } from "@/components/landing/motion";

export function HomeIntro() {
  return (
    <section id="intro" className="relative px-6 py-28 md:px-8 md:py-36">
      <div className="section-divider mx-auto mb-20 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-[#8a8780]">
            On the work
          </p>
          <p className="mt-8 font-[family-name:var(--font-syne)] text-[clamp(1.5rem,3.5vw,2.25rem)] font-medium leading-[1.25] tracking-[-0.02em] text-[#f2f0eb]/90">
            Most men aren&apos;t lost. They&apos;re between structures — and
            nobody writes about that interval with any honesty.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.1}>
          <p className="max-w-2xl text-[15px] leading-relaxed text-[#8a8780] md:text-base md:leading-relaxed">
            The Transition is an anonymous publication: notes, essays, and
            fragments on modern masculinity, ambition, and emotional life after
            performance. No face on the work. No advice brand. Just writing
            that tries to name what you&apos;re already living through.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

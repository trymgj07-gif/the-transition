"use client";

import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";

const types = [
  {
    title: "Notes",
    body: "Short observations — something you noticed on a train, in a gym, in your own head at 2am.",
  },
  {
    title: "Reflections",
    body: "A few paragraphs on a feeling you can't quite shake. No conclusion required.",
  },
  {
    title: "Essays",
    body: "Longer pieces when an idea needs room. Slow, specific, probably revised many times.",
  },
  {
    title: "Fragments",
    body: "One line, one image, one thought. Incomplete on purpose.",
  },
  {
    title: "Journal entries",
    body: "Dated, plain, close to how you'd actually write if no one was going to read it.",
  },
];

const inProgress = [
  {
    type: "Reflection",
    title: "Waking up without a schedule",
    line: "The first month after structure ends feels like freedom until it doesn't.",
  },
  {
    type: "Note",
    title: "Competence as a personality",
    line: "Being good at things that never ask who you are underneath.",
  },
  {
    type: "Fragment",
    title: null,
    line: "You perform discipline before you feel it.",
  },
  {
    type: "Essay",
    title: "What men call confidence after college",
    line: "Still drafting. Might stay that way for a while.",
  },
];

export function Journal() {
  return (
    <section id="journal" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="section-divider mx-auto mb-20 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Journal</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            What gets written here.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#8a8780]">
            Nothing is on a release schedule. Pieces appear when they&apos;re
            ready — or when they&apos;re honest enough to share half-finished.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <div className="space-y-3">
            {types.map((item, i) => (
              <motion.div
                key={item.title}
                className="flex gap-6 border-b border-white/[0.04] py-4 last:border-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <span className="w-28 shrink-0 text-[13px] font-medium text-[#c4a574]/80">
                  {item.title}
                </span>
                <p className="text-[14px] leading-relaxed text-[#8a8780]">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-[#8a8780]">
            Working on
          </p>
          <div className="mt-6 space-y-5">
            {inProgress.map((item, i) => (
              <motion.div
                key={item.line}
                className="glass-panel p-6 transition-colors hover:bg-white/[0.03]"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                <span className="text-[11px] tracking-[0.15em] uppercase text-[#5b7a9d]">
                  {item.type}
                </span>
                {item.title && (
                  <p className="mt-2 font-[family-name:var(--font-syne)] text-[15px] font-medium text-[#f2f0eb]">
                    {item.title}
                  </p>
                )}
                <p className="mt-2 text-[14px] leading-relaxed text-[#8a8780]">
                  {item.line}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <p className="text-[14px] text-[#8a8780]/70">
            Built slowly, by one person, under a name that stays off the page.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

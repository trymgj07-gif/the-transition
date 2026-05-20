"use client";

import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";

const pillars = [
  {
    title: "Pressure, not platitudes",
    body: "Comparison, burnout, and the quiet panic of not knowing who you are without the role — named plainly, without a lesson stapled on.",
  },
  {
    title: "Anonymous by design",
    body: "No face on the work. No guru arc. You read yourself into it, not someone else's redemption story.",
  },
  {
    title: "Restraint over noise",
    body: "Language that doesn't perform depth. Most pieces stay small. Most stay unfinished. That's fine.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="section-divider mx-auto mb-28 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Philosophy</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#f2f0eb]">
            Writing for men
            <br />
            <span className="text-[#8a8780]">between versions of themselves.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-[#8a8780] md:text-base">
            Not advice. Not a movement. Careful attention to ambition,
            masculinity, and the strange quiet after you stop performing the
            role that used to define you.
          </p>
        </SectionReveal>

        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.1}>
              <motion.article
                className="glass-panel group h-full p-7 md:p-8 transition-all duration-500 hover:border-white/15 hover:bg-white/[0.05]"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span className="font-[family-name:var(--font-syne)] text-sm text-[#c4a574]/70">
                  0{i + 1}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-syne)] text-lg font-semibold text-[#f2f0eb]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#8a8780]">
                  {pillar.body}
                </p>
              </motion.article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-24">
          <p className="max-w-2xl text-xl leading-relaxed text-[#f2f0eb]/85 md:text-2xl md:leading-relaxed">
            Most men don&apos;t need another voice telling them to improve.
            They need something that names what they&apos;re already living —
            the gap between who they performed as and who they might actually
            be.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

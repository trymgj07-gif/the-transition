"use client";

import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";

const pillars = [
  {
    title: "Emotional realism",
    body: "Write about what men actually feel — comparison, numbness, pride, boredom — without turning it into a lesson.",
  },
  {
    title: "Anonymous",
    body: "No face, no personal brand arc. The writing should stand on its own so you can read yourself into it.",
  },
  {
    title: "Small and precise",
    body: "A good note beats a long essay. Most of this will stay unfinished. That's fine.",
  },
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="section-divider mx-auto mb-20 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Philosophy</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-[#f2f0eb]">
            A journal for men between versions of themselves.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#8a8780]">
            Not advice. Not a movement. Just careful writing about ambition,
            masculinity, and the strange quiet after you stop performing the
            role that used to define you.
          </p>
        </SectionReveal>

        <div className="mt-16 space-y-4">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.08}>
              <motion.article
                className="glass-panel group p-6 md:p-8 transition-colors duration-300 hover:bg-white/[0.04]"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-[#f2f0eb]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8a8780]">
                  {pillar.body}
                </p>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

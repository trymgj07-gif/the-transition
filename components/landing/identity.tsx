"use client";

import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";

const phases = [
  {
    phase: "Departure",
    signal: "When the script ends",
    description:
      "Graduation. Leaving the team. The breakup. The job that gave your week a shape. Suddenly the morning is empty and you don't know what you're supposed to be.",
  },
  {
    phase: "Exposure",
    signal: "When pressure shows",
    description:
      "Comparison. Performance. The feeling that everyone else has a direction and you're still improvising. Masculinity as something you're meant to already understand.",
  },
  {
    phase: "Reconstruction",
    signal: "When you choose structure",
    description:
      "Not punishment — habit, honesty, a few people you trust. Building a self that isn't borrowed from who you were when someone was watching.",
  },
];

export function Identity() {
  return (
    <section id="identity" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="section-divider mx-auto mb-20 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Transition</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Three phases. Most men live all three at once.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#8a8780]">
            Most of what gets written here circles this — the stretch between
            who you were under pressure and who you might become when the
            audience leaves.
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-3">
          {phases.map((item, i) => (
            <SectionReveal key={item.phase} delay={i * 0.08}>
              <motion.div
                className="glass-panel group p-6 md:p-8 transition-colors hover:bg-white/[0.04]"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 35 }}
              >
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#5b7a9d]">
                  {item.signal}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#f2f0eb]">
                  {item.phase}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#8a8780]">
                  {item.description}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";

const phases = [
  {
    phase: "Departure",
    signal: "When the script ends",
    description:
      "You graduate. You leave the team. The relationship that organized your days is over. The morning has no shape anymore.",
  },
  {
    phase: "Exposure",
    signal: "When pressure shows",
    description:
      "You compare yourself constantly. You perform competence you don't feel. Masculinity becomes something you're supposed to know, not something you do.",
  },
  {
    phase: "Reconstruction",
    signal: "When discipline returns",
    description:
      "Not as punishment — as structure you choose. Small habits. Honest friendships. A self that isn't borrowed from someone else's highlight reel.",
  },
];

export function Identity() {
  return (
    <section id="identity" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="section-divider mx-auto mb-28 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <SectionReveal>
            <MotionLabel>Identity & Transition</MotionLabel>
            <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              Three phases most men
              <br />
              <span className="text-gradient-cool">won&apos;t name out loud.</span>
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-[#8a8780]">
              Everything published here circles this — the stretch between who
              you were under pressure and who you&apos;re trying to become
              without an audience.
            </p>
          </SectionReveal>

          <div className="space-y-4">
            {phases.map((item, i) => (
              <SectionReveal key={item.phase} delay={i * 0.1}>
                <motion.div
                  className="glass-panel-strong group relative overflow-hidden p-7 md:p-9"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(196,165,116,0.06) 0%, transparent 50%)",
                    }}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] tracking-[0.2em] uppercase text-[#5b7a9d]">
                        {item.signal}
                      </span>
                      <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-semibold text-[#f2f0eb]">
                        {item.phase}
                      </h3>
                    </div>
                    <span className="font-[family-name:var(--font-syne)] text-3xl font-light text-white/[0.06]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="relative mt-4 text-[14px] leading-relaxed text-[#8a8780]">
                    {item.description}
                  </p>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

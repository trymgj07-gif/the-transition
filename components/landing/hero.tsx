"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./motion";
import { PremiumButton } from "./button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-20 md:px-10">
      <motion.div
        className="mx-auto w-full max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
          <span className="h-px w-12 bg-[#c4a574]/60" />
          <span className="text-[11px] font-medium tracking-[0.32em] uppercase text-[#8a8780]">
            Anonymous journal
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-syne)] text-[clamp(2.5rem,7vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[#f2f0eb]"
        >
          The Transition
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 text-lg leading-relaxed text-[#8a8780] md:text-xl"
        >
          Writing for ambitious young men in the middle of becoming someone
          else — identity, pressure, discipline, and what happens when the
          structure you lived inside suddenly ends.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-[15px] leading-relaxed text-[#8a8780]/70"
        >
          Early-stage. Anonymous. Mostly notes and short essays for now.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <PremiumButton href="#newsletter">Subscribe</PremiumButton>
          <PremiumButton href="#journal" variant="outline">
            What gets written
          </PremiumButton>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/[0.06] pt-8"
        >
          {["Notes", "Reflections", "Essays", "Fragments"].map((label) => (
            <span
              key={label}
              className="text-[13px] text-[#8a8780]/80"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#8a8780]/60">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-[#8a8780]/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

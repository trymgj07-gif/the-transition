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
        <motion.div variants={fadeUp} className="mb-10 flex items-center gap-4">
          <span className="h-px w-14 bg-[#c4a574]/50" />
          <span className="text-[11px] font-medium tracking-[0.32em] uppercase text-[#8a8780]">
            Anonymous
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-syne)] text-[clamp(2.75rem,8vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.03em]"
        >
          <span className="text-[#f2f0eb]">For ambitious young men</span>
          <br />
          <span className="text-gradient-warm">after the structure ends.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-10 max-w-xl text-lg leading-relaxed text-[#8a8780] md:text-xl"
        >
          Identity. Pressure. Discipline. The quiet stretch between who you
          performed as and who you might become when nobody is watching.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-12">
          <PremiumButton href="#newsletter">Subscribe</PremiumButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#philosophy"
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <motion.span
          className="text-[10px] tracking-[0.25em] uppercase text-[#8a8780]/50"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll
        </motion.span>
        <div className="h-10 w-px bg-gradient-to-b from-[#8a8780]/30 to-transparent" />
      </motion.a>
    </section>
  );
}

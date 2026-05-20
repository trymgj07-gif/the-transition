"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Phase } from "@/lib/phases";
import { getPhasePath } from "@/lib/phases";

type PhaseCardProps = {
  phase: Phase;
  index: number;
  featured?: boolean;
};

export function PhaseCard({ phase, index, featured = false }: PhaseCardProps) {
  const href = getPhasePath(phase.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={href} className="group relative block">
        <motion.div
          className={`relative overflow-hidden border transition-colors duration-500 ${
            featured
              ? "glass-panel-strong border-white/[0.1] p-9 md:p-11"
              : "glass-panel border-white/[0.08] p-7 md:p-9"
          }`}
          whileHover={{ y: -6, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                phase.id === "reconstruction"
                  ? "linear-gradient(135deg, rgba(196,165,116,0.1) 0%, transparent 50%, rgba(91,122,157,0.04) 100%)"
                  : "linear-gradient(135deg, rgba(91,122,157,0.08) 0%, transparent 55%, rgba(196,165,116,0.05) 100%)",
            }}
          />

          <motion.div
            className="pointer-events-none absolute inset-0 rounded-sm opacity-0 ring-1 ring-[#c4a574]/0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-[#c4a574]/25"
            aria-hidden
          />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] tracking-[0.22em] uppercase text-[#5b7a9d]">
                  {phase.signal}
                </span>
                <h3
                  className={`mt-3 font-[family-name:var(--font-syne)] font-semibold tracking-[-0.02em] text-[#f2f0eb] ${
                    featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                  }`}
                >
                  {phase.name}
                </h3>
              </div>
              <span className="font-[family-name:var(--font-syne)] text-4xl font-light text-white/[0.06] transition-colors duration-500 group-hover:text-[#c4a574]/20">
                {phase.number}
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-[#8a8780] md:text-[15px]">
              {phase.teaser}
            </p>

            <p className="mt-5 text-[13px] text-[#c4a574]/60 transition-colors duration-300 group-hover:text-[#c4a574]">
              Explore this phase →
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

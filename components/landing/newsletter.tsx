"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal, MotionLabel } from "./motion";
import { PremiumButton } from "./button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <section id="newsletter" className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="section-divider mx-auto mb-20 max-w-3xl" />

      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <MotionLabel>Newsletter</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
            Get new writing in your inbox.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-[#8a8780]">
            A short email when something is published — a note, a reflection,
            an essay. Infrequent by design.
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.1}>
          <motion.form
            onSubmit={handleSubmit}
            className="glass-panel-strong flex flex-col gap-4 p-2 sm:flex-row sm:items-center"
          >
            {submitted ? (
              <p className="w-full py-4 text-center text-[15px] text-[#c4a574]">
                You&apos;re subscribed.
              </p>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-5 py-3.5 text-[15px] text-[#f2f0eb] placeholder:text-[#8a8780]/50 outline-none"
                  aria-label="Email address"
                />
                <PremiumButton type="submit" className="shrink-0 sm:px-8">
                  Subscribe
                </PremiumButton>
              </>
            )}
          </motion.form>
          <p className="mt-4 text-[12px] text-[#8a8780]/60">
            Unsubscribe anytime.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

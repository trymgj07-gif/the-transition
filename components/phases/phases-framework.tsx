"use client";

import { SectionReveal, MotionLabel } from "@/components/landing/motion";
import { phases } from "@/lib/phases";
import { PhaseCard } from "./phase-card";

export function PhasesFramework() {
  const [departure, exposure, reconstruction] = phases;

  return (
    <section
      id="phases"
      className="relative px-6 py-32 md:px-10 md:py-44"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-[50%] w-[80%] -translate-x-1/2 opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(91,122,157,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="section-divider relative mx-auto mb-16 max-w-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <SectionReveal>
          <p className="text-center font-[family-name:var(--font-syne)] text-lg font-medium leading-relaxed text-[#f2f0eb]/80 md:text-xl">
            Most people think they are lost.
            <br />
            <span className="text-[#8a8780]">
              Usually, they are just between identities.
            </span>
          </p>
        </SectionReveal>

        <SectionReveal className="mt-20 text-center">
          <MotionLabel>The framework</MotionLabel>
          <h2 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.03em]">
            <span className="text-[#f2f0eb]">Three phases</span>
            <br />
            <span className="text-gradient-cool">most men won&apos;t name out loud.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-[#8a8780] md:text-base">
            The Transition is organized around where you might be — not to
            diagnose you, but to give language to a transition most men
            experience in silence. Select the phase that feels closest.
          </p>
        </SectionReveal>

        <div className="relative mt-16 space-y-4">
          <PhaseCard phase={departure} index={0} />
          <PhaseCard phase={exposure} index={1} />
          <PhaseCard phase={reconstruction} index={2} featured />
        </div>

        <SectionReveal className="mt-16 text-center">
          <p className="text-[13px] leading-relaxed text-[#8a8780]/70">
            You may move between phases. Most men live more than one at once.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

import { notFound } from "next/navigation";
import { SiteShell } from "@/components/journal/site-shell";
import { PhaseDetail } from "@/components/phases/phase-detail";
import { getPhase, phaseIds, type PhaseId } from "@/lib/phases";

type Props = { params: Promise<{ phase: string }> };

export async function generateStaticParams() {
  return phaseIds.map((phase) => ({ phase }));
}

export async function generateMetadata({ params }: Props) {
  const { phase: id } = await params;
  const phase = getPhase(id as PhaseId);
  if (!phase) return { title: "Not found" };
  return {
    title: `${phase.name} — The Transition`,
    description: phase.tagline,
  };
}

export default async function PhasePage({ params }: Props) {
  const { phase: id } = await params;
  const phase = getPhase(id as PhaseId);
  if (!phase) notFound();

  return (
    <SiteShell>
      <PhaseDetail phase={phase} />
    </SiteShell>
  );
}

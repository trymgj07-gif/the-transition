import type { Article, ArticleType } from "./articles";
import { articles } from "./articles";

export type PhaseId = "departure" | "exposure" | "reconstruction";

export type PhaseRelated = {
  type: ArticleType;
  slug: string;
};

export type Phase = {
  id: PhaseId;
  name: string;
  number: string;
  signal: string;
  tagline: string;
  teaser: string;
  philosophy: string[];
  patterns: string[];
  mistakes: string[];
  focus?: string[];
  related: PhaseRelated[];
};

export const phases: Phase[] = [
  {
    id: "departure",
    name: "Departure",
    number: "01",
    signal: "When the script ends",
    tagline: "The structure disappears before the self catches up.",
    teaser:
      "Graduation, retirement, breakup, contract end — the morning loses its shape and nobody tells you what comes next.",
    philosophy: [
      "Departure is not always dramatic. Often it is quiet — the slow realization that the version of you built inside a system no longer has anywhere to go.",
      "What ends is rarely just an activity. It is an entire architecture: routine, hierarchy, belonging, language, and a clear answer to who you are supposed to be today.",
      "The disorientation people call \"lost\" is frequently misnamed. You are not nowhere. You are between identities, and the old map no longer applies.",
    ],
    patterns: [
      "Mornings feel open in a way that becomes unsettling, not freeing.",
      "You replay the past structure — training schedules, teams, roles — as if memory could substitute for direction.",
      "Small decisions feel heavier than they should: what to do before noon, who to text, whether a day \"counts.\"",
      "You say you're fine because there is no language for \"the script ended and I don't have a new one yet.\"",
    ],
    mistakes: [
      "Treating the emptiness as laziness instead of grief for a former self.",
      "Rushing into the next label — new job, new city, new obsession — to avoid sitting in the gap.",
      "Assuming you should already know who you are without the structure that used to tell you.",
      "Isolating because you don't want to explain a transition you can't fully articulate yet.",
    ],
    related: [
      { type: "essay", slug: "most-men-dont-miss-the-sport" },
      { type: "note", slug: "waking-up-without-a-schedule" },
    ],
  },
  {
    id: "exposure",
    name: "Exposure",
    number: "02",
    signal: "When pressure shows",
    tagline: "Without a scoreboard, comparison becomes the default compass.",
    teaser:
      "Performance anxiety, competence as identity, masculinity as something you were meant to already understand.",
    philosophy: [
      "Exposure is the phase where the absence of external structure stops being novel and starts being visible — to you.",
      "Much of what looked like confidence was situational: competence inside a system that measured you constantly. Remove the system and the self becomes harder to locate.",
      "This is not weakness. It is what happens when a person becomes extremely disciplined without ever needing to ask who they are when nobody is measuring.",
    ],
    patterns: [
      "Constant comparison — peers, strangers online, a younger version of yourself.",
      "Performing stability you don't feel: fine at dinner, unraveling alone.",
      "Discipline that looks healthy from the outside but functions as avoidance of harder questions.",
      "Shame around confusion, as if not knowing should be embarrassing for a capable man.",
    ],
    mistakes: [
      "Replacing one performance system with another before understanding what collapsed.",
      "Using grind, optimization, or self-improvement content as anesthesia for ambiguity.",
      "Equating rest with failure, or slowness with moral decline.",
      "Building an entire personality out of being useful, productive, or impressive.",
    ],
    related: [
      { type: "essay", slug: "competence-as-a-personality" },
      { type: "essay", slug: "most-men-dont-miss-the-sport" },
      { type: "fragment", slug: "you-perform-discipline-before-you-feel-it" },
    ],
  },
  {
    id: "reconstruction",
    name: "Reconstruction",
    number: "03",
    signal: "When structure is chosen",
    tagline: "Not reinvention — slow, honest rebuilding.",
    teaser:
      "Discipline without performance obsession. Friendships that require initiative. Meaning after external validation disappears.",
    philosophy: [
      "Reconstruction is not a motivational peak. It is the unglamorous work of building structure you actually chose — slower, less validated, more honest than anything performance culture offered.",
      "Confidence here is not the return of old certainty. It is tolerance for ambiguity while you assemble a self that is not borrowed from a highlight reel or a former role.",
      "The goal is not to become impressive again as quickly as possible. It is to become legible to yourself without an audience.",
    ],
    patterns: [
      "Experimenting with routine not to optimize, but to see what still feels true.",
      "Friendships that require emotional initiative instead of locker-room proximity.",
      "Grief softening once you understand you miss the structure, not necessarily the life you left.",
      "Quiet pride in small consistency — not because it looks good, but because it is yours.",
    ],
    mistakes: [
      "Demanding certainty before you've lived through enough of the in-between.",
      "Using discipline as punishment for having felt lost, confused, or slow.",
      "Confusing visibility online with having actually rebuilt something internal.",
      "Avoiding intimacy or honesty because vulnerability doesn't fit the old performer identity.",
    ],
    focus: [
      "Rebuild structure intentionally — habits, hours, boundaries — without treating your life like a permanent audition.",
      "Separate confidence from competence: you can be capable and still not know who you are yet.",
      "Let discipline serve clarity, not avoidance. The gym, the job, the routine — ask what they are for now.",
      "Invest in friendships that survive without shared systems. Proximity used to carry connection; now initiative does.",
      "Find meaning that does not require applause. Work, craft, care, attention — things that matter when nobody is scoring you.",
    ],
    related: [
      { type: "essay", slug: "most-men-dont-miss-the-sport" },
      { type: "fragment", slug: "you-perform-discipline-before-you-feel-it" },
      { type: "note", slug: "waking-up-without-a-schedule" },
    ],
  },
];

export function getPhase(id: PhaseId): Phase | undefined {
  return phases.find((p) => p.id === id);
}

export function getPhasePath(id: PhaseId): string {
  return `/phases/${id}`;
}

export function getRelatedArticles(phase: Phase): Article[] {
  return phase.related
    .map((ref) => articles.find((a) => a.type === ref.type && a.slug === ref.slug))
    .filter((a): a is Article => a !== undefined);
}

export const phaseIds: PhaseId[] = ["departure", "exposure", "reconstruction"];

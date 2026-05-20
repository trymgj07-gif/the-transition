import Link from "next/link";
import { SiteShell } from "@/components/journal/site-shell";

export const metadata = {
  title: "About — The Transition",
  description: "An anonymous journal for ambitious young men in transition.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-2xl px-6 py-14 md:px-8 md:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-[#8a8780] transition-colors hover:text-[#f2f0eb]"
        >
          <span aria-hidden>←</span>
          Home
        </Link>

        <header className="mt-10 border-b border-white/[0.06] pb-10">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-[-0.02em] text-[#f2f0eb]">
            About
          </h1>
        </header>

        <div className="article-body mt-10">
          <p>
            The Transition is an anonymous journal — writing about ambition,
            identity, pressure, and what happens when the structure you lived
            inside suddenly ends.
          </p>
          <p>
            It&apos;s built slowly by one person, without a face attached to
            the work. No advice brand. No productivity angle. Just notes,
            essays, and fragments that try to name what many men are already
            living through.
          </p>
          <p>
            Most pieces are early. Some stay drafts. That&apos;s intentional.
          </p>
        </div>

        <nav className="mt-16 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/[0.06] pt-10 text-[13px] text-[#8a8780]">
          <Link href="/notes" className="transition-colors hover:text-[#f2f0eb]">
            Notes
          </Link>
          <Link href="/essays" className="transition-colors hover:text-[#f2f0eb]">
            Essays
          </Link>
          <Link href="/fragments" className="transition-colors hover:text-[#f2f0eb]">
            Fragments
          </Link>
        </nav>
      </main>
    </SiteShell>
  );
}

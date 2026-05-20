import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/[0.06] px-6 py-12 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-[13px] leading-relaxed text-[#8a8780]">
          An anonymous journal. Written slowly.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[#8a8780]/60">
          <Link href="/notes" className="transition-colors hover:text-[#8a8780]">
            Notes
          </Link>
          <Link href="/essays" className="transition-colors hover:text-[#8a8780]">
            Essays
          </Link>
          <Link href="/fragments" className="transition-colors hover:text-[#8a8780]">
            Fragments
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#8a8780]">
            About
          </Link>
        </div>
        <p className="mt-8 text-[12px] text-[#8a8780]/40">
          © {new Date().getFullYear()} The Transition
        </p>
      </div>
    </footer>
  );
}

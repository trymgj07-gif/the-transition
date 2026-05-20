import Link from "next/link";

type SiteFooterProps = {
  className?: string;
};

export function SiteFooter({ className = "" }: SiteFooterProps) {
  return (
    <footer
      className={`relative border-t border-white/[0.06] px-6 py-16 md:px-8 ${className}`}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-[family-name:var(--font-syne)] text-xl font-semibold tracking-[-0.02em] text-[#f2f0eb]">
              The Transition
            </p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-[#8a8780]">
              An anonymous journal on ambition, identity, and life after
              structure — written slowly, published when ready.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-[#8a8780]">
              <li>
                <Link href="/notes" className="transition-colors hover:text-[#f2f0eb]">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="/essays" className="transition-colors hover:text-[#f2f0eb]">
                  Essays
                </Link>
              </li>
              <li>
                <Link href="/fragments" className="transition-colors hover:text-[#f2f0eb]">
                  Fragments
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-[#f2f0eb]">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <p className="mt-14 text-[12px] text-[#8a8780]/40">
          © {new Date().getFullYear()} The Transition
        </p>
      </div>
    </footer>
  );
}

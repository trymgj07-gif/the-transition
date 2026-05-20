import Link from "next/link";

const links = [
  { label: "Notes", href: "/notes" },
  { label: "Essays", href: "/essays" },
  { label: "Fragments", href: "/fragments" },
  { label: "About", href: "/about" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#030303]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-[13px] font-semibold tracking-[0.18em] uppercase text-[#f2f0eb] transition-opacity hover:opacity-70"
        >
          The Transition
        </Link>

        <ul className="flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] text-[#8a8780] transition-colors hover:text-[#f2f0eb]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

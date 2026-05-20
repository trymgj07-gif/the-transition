import Link from "next/link";

type SectionHeaderProps = {
  title: string;
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({ title, href, linkLabel = "View all" }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-4">
      <h2 className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.12em] uppercase text-[#f2f0eb]">
        {title}
      </h2>
      {href && (
        <Link
          href={href}
          className="text-[12px] text-[#8a8780] transition-colors hover:text-[#c4a574]"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}

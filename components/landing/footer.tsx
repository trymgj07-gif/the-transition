"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const anchorLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Transition", href: "#identity" },
  { label: "Published", href: "#published" },
  { label: "Newsletter", href: "#newsletter" },
];

const journalLinks = [
  { label: "Notes", href: "/notes" },
  { label: "Essays", href: "/essays" },
  { label: "Fragments", href: "/fragments" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p
              className="font-[family-name:var(--font-syne)] text-2xl font-semibold tracking-[-0.02em] text-[#f2f0eb]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Transition
            </motion.p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-[#8a8780]">
              An anonymous journal on ambition, identity, and life after
              structure.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-14">
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {anchorLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[13px] text-[#8a8780] transition-colors hover:text-[#f2f0eb]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {journalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-[#8a8780]/70 transition-colors hover:text-[#f2f0eb]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-14 text-[12px] text-[#8a8780]/40">
          © {new Date().getFullYear()} The Transition
        </p>
      </div>
    </footer>
  );
}

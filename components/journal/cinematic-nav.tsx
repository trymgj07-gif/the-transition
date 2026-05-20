"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Phases", href: "/#phases" },
  { label: "Notes", href: "/notes" },
  { label: "Essays", href: "/essays" },
  { label: "Fragments", href: "/fragments" },
  { label: "About", href: "/about" },
];

export function CinematicNav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 glass-panel-strong"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />

      <nav className="relative mx-auto flex max-w-3xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-[13px] font-semibold tracking-[0.18em] uppercase text-[#f2f0eb]"
        >
          The Transition
        </Link>

        <ul className="flex items-center gap-6 md:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[13px] text-[#8a8780] transition-colors duration-300 hover:text-[#f2f0eb]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Transition", href: "#identity" },
  { label: "Journal", href: "#journal" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 120], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 glass-panel-strong"
        style={{ opacity: bgOpacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />

      <nav className="relative mx-auto flex max-w-3xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-[family-name:var(--font-syne)] text-sm font-semibold tracking-[0.2em] uppercase text-[#f2f0eb]"
        >
          The Transition
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] text-[#8a8780] transition-colors duration-300 hover:text-[#f2f0eb]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#newsletter"
          className="text-[13px] font-medium text-[#c4a574] transition-opacity hover:opacity-70"
        >
          Subscribe
        </a>
      </nav>
    </motion.header>
  );
}

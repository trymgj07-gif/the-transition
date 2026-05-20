"use client";

import { motion } from "framer-motion";

const footerLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Transition", href: "#identity" },
  { label: "Journal", href: "#journal" },
  { label: "Newsletter", href: "#newsletter" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] px-6 py-14 md:px-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <motion.p
              className="font-[family-name:var(--font-syne)] text-xl font-semibold text-[#f2f0eb]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              The Transition
            </motion.p>
            <p className="mt-3 max-w-sm text-[13px] leading-relaxed text-[#8a8780]">
              An anonymous journal about ambition, identity, and life after
              structure — written slowly, published when ready.
            </p>
          </div>

          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
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
        </div>

        <p className="mt-12 text-[12px] text-[#8a8780]/50">
          © {new Date().getFullYear()} The Transition
        </p>
      </div>
    </footer>
  );
}

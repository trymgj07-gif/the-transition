"use client";

import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  href?: string;
  type?: "button" | "submit";
  className?: string;
};

export function PremiumButton({
  children,
  variant = "primary",
  href,
  type = "button",
  className = "",
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300";

  const variants = {
    primary:
      "bg-[#f2f0eb] text-[#030303] hover:bg-[#e8e4dc] shadow-[0_0_40px_rgba(196,165,116,0.15)]",
    ghost:
      "text-[#f2f0eb]/80 hover:text-[#f2f0eb] bg-transparent",
    outline:
      "glass-panel text-[#f2f0eb] hover:bg-white/[0.06] border border-white/10",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-[#c4a574]/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {inner}
    </motion.button>
  );
}

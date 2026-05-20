"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#030303]" />

      <motion.div
        className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(196,165,116,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 60, 20, 0],
          y: [0, 40, 80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-[30%] -right-[15%] h-[60vh] w-[60vh] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(91,122,157,0.2) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -50, -20, 0],
          y: [0, 60, 30, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10%] left-[20%] h-[50vh] w-[80vw] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 80, 40, 0],
          opacity: [0.15, 0.25, 0.18, 0.15],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_75%)]" />
    </div>
  );
}

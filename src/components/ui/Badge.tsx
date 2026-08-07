"use client";

import React from "react";
import { motion } from "framer-motion";

interface BadgeProps {
  className?: string;
  tag?: string;
  count?: string;
  title?: string;
  note?: string;
  size?: "normal" | "large";
}

export const CuratedBadge: React.FC<BadgeProps> = ({
  className = "",
  tag = "ONE CURATED CIRCLE",
  count = "15",
  title = "PRACTITIONERS SELECTED",
  note = "Every application personally reviewed.",
  size = "normal",
}) => {
  const isLarge = size === "large";

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative inline-flex flex-col items-center justify-center rounded-full border-2 border-gold-500/80 bg-forest-950/95 p-6 text-center shadow-goldGlow backdrop-blur-md ${
        isLarge ? "w-64 h-64 md:w-72 md:h-72" : "w-52 h-52 md:w-60 md:h-60"
      } ${className}`}
    >
      {/* Outer concentric decorative gold circle */}
      <div className="absolute inset-1.5 rounded-full border border-gold-500/40 pointer-events-none" />
      <div className="absolute inset-3 rounded-full border border-gold-500/20 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-1">
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-gold-400 font-medium">
          {tag}
        </span>
        <div className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gold-gradient tracking-tight leading-none my-0.5">
          {count}
        </div>
        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-warmWhite max-w-[140px] leading-tight">
          {title}
        </span>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-gold-500/60 to-transparent my-1" />
        <span className="text-[9px] md:text-[10px] italic text-ivory/80 max-w-[130px] leading-tight">
          {note}
        </span>
      </div>
    </motion.div>
  );
};

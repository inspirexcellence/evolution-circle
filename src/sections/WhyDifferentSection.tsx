"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/constants/content";
import {
  Flower2,
  Calendar,
  Sparkles,
  Star,
  Zap,
  Compass,
  Users2
} from "lucide-react";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string, strokeWidth?: number }>> = {
  Star,
  Zap,
  Compass,
  Users2,
  Flower2,
};

export const WhyDifferentSection: React.FC = () => {
  const { whyDifferent } = SITE_CONTENT;

  return (
    <section id="why-different" className="relative py-3 md:py-5 bg-[#0E2823] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 space-y-4">
        
        {/* 1. HEADER WITH LINES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          <div className="h-[1px] flex-grow bg-[#C5A44E]/30 max-w-[200px]" />
          <h2 className="font-serif text-[18px] sm:text-[20px] font-bold uppercase tracking-[0.25em] text-[#C5A44E] text-center">
            {whyDifferent.title}
          </h2>
          <div className="h-[1px] flex-grow bg-[#C5A44E]/30 max-w-[200px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center -mt-2 mb-4"
        >
          <p className="text-[14px] sm:text-[15px] text-[#E8E2D4]/90 font-serif italic tracking-wide">
            The results you will experience with time
          </p>
        </motion.div>

        {/* 2. GRID LAYOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col w-full"
        >
          {/* Top Row: 5 Items */}
          <div className="flex flex-wrap justify-center w-full border-b border-[#C5A44E]/30 pb-4">
            {whyDifferent.problems.map((item, idx) => {
              const IconComponent = ICON_MAP[item.icon] || Sparkles;
              return (
                <div 
                  key={item.id} 
                  className="flex flex-col items-center text-center px-2 mb-6"
                  style={{
                    flex: "1 1 150px",
                    maxWidth: "100%",
                    borderRight: idx !== whyDifferent.problems.length - 1 ? "1px solid rgba(197, 164, 78, 0.3)" : "none",
                  }}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A44E] mb-2" strokeWidth={1.2} />
                  <p className="text-[12px] sm:text-[13px] text-[#E8E2D4] leading-tight max-w-[150px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] pt-4 gap-y-6 md:gap-y-0 w-full items-center">
            
            {/* LEFT: Event Date */}
            <div className="flex items-center justify-center md:justify-center gap-4 md:pr-6 lg:pr-10 md:border-r border-[#C5A44E]/30 w-full">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 mt-2"
                   style={{ backgroundColor: "#C5A44E" }}>
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: "#0E2823" }} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <div className="h-[1px] w-[80%] bg-[#C5A44E]/30 mb-4 hidden md:block" />
                <div className="flex items-start mb-2 whitespace-nowrap">
                  <div className="font-serif text-[#E8E2D4] font-semibold leading-none flex items-start">
                    <span className="text-[24px] sm:text-[28px]">12</span>
                    <span className="text-[11px] sm:text-[13px] font-sans mt-[3px] ml-[2px] tracking-widest">TH</span>
                  </div>
                  <div className="font-serif text-[17px] sm:text-[19px] text-[#E8E2D4] uppercase tracking-wider font-semibold leading-none mt-[7px] sm:mt-[9px] ml-2">
                    SEPTEMBER 2026
                  </div>
                </div>
                <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#C5A44E] font-semibold mb-2 whitespace-nowrap">
                  {whyDifferent.eventMeta.dayTime}
                </div>
                <div className="text-[10px] uppercase tracking-[0.15em] text-[#E8E2D4]/90 leading-relaxed max-w-[90%]">
                  ONE DAY. ONE DECISION.<br />A LIFETIME OF IMPACT.
                </div>
              </div>
            </div>

            {/* CENTER: Quote Box */}
            <div className="w-full md:w-[500px] lg:w-[620px] md:px-4 lg:px-6 md:border-r border-[#C5A44E]/30 flex flex-col justify-center items-center">
              <div 
                className="relative rounded-xl border border-[#C5A44E]/30 py-2 px-3 sm:py-3 sm:px-5 lg:py-4 lg:px-8 flex flex-col items-center justify-center text-center w-full overflow-hidden shadow-2xl"
                style={{ backgroundColor: "#040b08" }}
              >
                {/* Premium Subtle Gold Grid Pattern Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    backgroundImage: "linear-gradient(rgba(197,164,78,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(197,164,78,0.15) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    backgroundPosition: "center center"
                  }}
                />
                
                {/* Radial Gradient to fade the grid smoothly at the edges */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at center, transparent 20%, #040b08 95%)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center w-full">
                  <p className="font-quote text-[20px] sm:text-[24px] lg:text-[26px] text-[#C5A44E] leading-tight max-w-[100%] drop-shadow-md mb-1.5">
                    {whyDifferent.quoteBox.quote}
                  </p>
                  <div className="h-[1px] w-full max-w-[70%] bg-[#C5A44E]/20 my-1.5" />
                  <div className="space-y-1 w-full mt-1">
                    <p className="text-[13px] sm:text-[14px] font-medium uppercase tracking-[0.15em] text-[#C5A44E]">
                      {whyDifferent.quoteBox.subquoteBold}
                    </p>
                    <p className="font-serif text-[15px] sm:text-[16px] font-bold uppercase tracking-[0.15em] text-[#C5A44E] drop-shadow-sm">
                      {whyDifferent.quoteBox.subquoteHighlight}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Facilitator */}
            <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:pl-6 lg:pl-10 w-full">
              <div className="h-[1px] w-[60%] bg-[#C5A44E]/30 mb-4 hidden md:block" />
              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] text-[#E8E2D4]/80 mb-2 font-semibold">
                {whyDifferent.facilitatorMeta.label}
              </span>
              <h3 className="font-serif text-[24px] sm:text-[26px] text-[#E8E2D4] tracking-wider mb-2">
                {whyDifferent.facilitatorMeta.name}
              </h3>
              <p className="text-[13px] sm:text-[14px] italic text-[#C5A44E] mb-1 font-serif leading-snug">
                {whyDifferent.facilitatorMeta.title}
              </p>
              <p className="text-[12px] sm:text-[13px] text-[#C5A44E] italic font-serif">
                {whyDifferent.facilitatorMeta.subtitle}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyDifferentSection;

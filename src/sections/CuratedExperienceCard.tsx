"use client";

import React from "react";
import { Flower2, Diamond } from "lucide-react";

export const CuratedExperienceCard: React.FC = () => {
  return (
    <div className="relative rounded-2xl bg-[#0E2823] border border-[#C5A44E]/15 p-8 lg:p-10 flex flex-col items-center text-center shadow-xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:z-10 transition-all duration-400 mb-6">
      
      {/* Title */}
      <h3 className="font-serif text-[14px] sm:text-[15px] font-bold uppercase tracking-wider text-[#C5A44E] mb-3">
        A CURATED EXPERIENCE BY DESIGN
      </h3>
      
      <p className="text-[13px] sm:text-[14px] text-[#E8E2D4] font-serif italic leading-relaxed mb-6 max-w-[95%]">
        This circle is intentionally limited to ensure depth, safety and personal attention.
      </p>

      {/* Horizontal Divider */}
      <div className="flex items-center w-full max-w-[75%] mb-6">
        <div className="h-[1px] flex-grow bg-[#C5A44E]/30" />
        <Diamond className="w-3 h-3 text-[#C5A44E] mx-4 fill-[#C5A44E]" />
        <div className="h-[1px] flex-grow bg-[#C5A44E]/30" />
      </div>

      {/* Circle Info */}
      <h4 className="font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#C5A44E] mb-2">
        ONE CURATED CIRCLE
      </h4>
      
      <div className="font-serif text-[64px] sm:text-[76px] leading-none text-[#C5A44E] font-medium mb-2 drop-shadow-sm">
        15
      </div>
      
      <p className="font-serif text-[13px] sm:text-[14px] uppercase tracking-widest text-[#E8E2D4] mb-5">
        PRACTITIONERS SELECTED
      </p>
      
      <p className="text-[13px] sm:text-[14px] font-serif text-[#E8E2D4] mb-6">
        Every application personally reviewed.
      </p>

      {/* Lotus icon */}
      <Flower2 className="w-8 h-8 text-[#C5A44E]" strokeWidth={1.2} />

    </div>
  );
};

"use client";

import React from "react";
import { Check } from "lucide-react";
import { SITE_CONTENT } from "@/constants/content";

export const PromiseSection: React.FC = () => {
  const { promise } = SITE_CONTENT;

  return (
    <div className="relative rounded-2xl py-6 px-6 lg:py-6 lg:px-8 bg-white/40 backdrop-blur-sm border border-[#1A3B2F]/10 flex flex-col justify-center mb-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:z-10 transition-all duration-400 mt-4 lg:mt-6">
      
      {/* Header */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] flex-grow bg-[#1A3B2F]/15" />
        <h3 className="font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-[0.2em] text-[#8A6B32]">
          THE PROMISE
        </h3>
        <div className="h-[1px] flex-grow bg-[#1A3B2F]/15" />
      </div>

      {/* 5 Items wrapped to prevent text overlap in narrow columns */}
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-6 sm:gap-x-3 mt-6 mb-0 px-1">
        {promise.items.map((point, idx) => (
          <div key={idx} className="flex flex-col items-center w-[45%]">
            <div className="w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full border border-[#1A3B2F]/30 flex items-center justify-center mb-3.5 text-[#8A6B32]">
              <Check className="w-[18px] h-[18px]" strokeWidth={2} />
            </div>
            <p className="text-[12px] sm:text-[13px] text-[#2D3D35] text-center font-medium leading-relaxed px-1">
              {point}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

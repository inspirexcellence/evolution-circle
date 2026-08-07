"use client";

import React from "react";

import { Star, Users, Target } from "lucide-react";

export const FacilitatorSection: React.FC = () => {
  const credentials = [
    { text: "20+ years of corporate leadership experience across India and global markets", Icon: Star },
    { text: "Trusted by professionals, entrepreneurs and leadership teams", Icon: Users },
    { text: "A unique blend of strategy, psychology and transformational coaching", Icon: Target },
  ];

  return (
    <div className="relative rounded-2xl bg-white/40 backdrop-blur-sm border border-[#1A3B2F]/10 mt-4 overflow-hidden flex flex-col sm:flex-row shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:z-10 transition-all duration-400">
      
      {/* Left: Full-height Image */}
      <div className="relative w-full sm:w-[180px] md:w-[200px] h-[220px] sm:h-auto flex-shrink-0">
        <img
          src="/images/about.jpeg"
          alt="Prerona Roy"
          className="w-full h-full scale-90  object-cover"
        />
      </div>

      {/* Right: Content Area */}
      <div className="flex flex-col p-5 sm:p-6 sm:pl-7 w-full bg-transparent">
        
        {/* Title & Bio */}
        <div className="mb-6">
          <h3 className="font-serif text-[16px] sm:text-[18px] font-bold uppercase tracking-wider mb-2 text-[#1A3B2F]">
            ABOUT PRERONA ROY
          </h3>
          <p className="text-[13px] sm:text-[14px] text-[#2D3D35] font-medium leading-relaxed max-w-[95%]">
            Prerona works with coaches, consultants, trainers and healers to unlock the next level of their identity, leadership and impact through deep inner transformation.
          </p>
        </div>

        {/* Credentials Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mt-auto pt-2 gap-4 sm:gap-0">
          {credentials.map((cred, idx) => (
            <div 
              key={idx} 
              className={`flex items-center gap-2.5 sm:gap-3 flex-1 w-full ${
                idx < 2 ? 'sm:border-r border-[#8A6B32]/30 sm:pr-3 md:pr-4' : ''
              } ${
                idx > 0 ? 'sm:pl-3 md:pl-4' : ''
              }`}
            >
              <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] flex-shrink-0 rounded-full border border-[#8A6B32] flex items-center justify-center text-[#8A6B32]">
                <cred.Icon className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" strokeWidth={1.5} />
              </div>
              <p className="text-[11px] sm:text-[12px] md:text-[12.5px] leading-snug text-[#2D3D35] font-medium">
                {cred.text}
              </p>
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
};

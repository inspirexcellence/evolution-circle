"use client";

import React from "react";

export const TrustedBySection: React.FC = () => {
  return (
    <section className="bg-[#EDE7DB] relative z-10 pb-2">
      {/* Decorative Dotted Separation */}
      <div className="w-full flex items-center justify-center pt-16 pb-16">
        <div className="w-full max-w-5xl flex items-center justify-center gap-4 px-4 sm:px-6">
          <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#8A6B32]/30"></div>
          <div className="w-2 h-2 rotate-45 bg-[#8A6B32]/40"></div>
          <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#8A6B32]/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#8A6B32]">
            TRUSTED BY LEADERS FROM
          </p>
        </div>
      </div>
      
      {/* ── SINGLE LINE, SEAMLESS INFINITE MARQUEE ── */}
      <div className="w-full py-8 sm:py-10 mt-auto z-10 overflow-hidden relative flex flex-col">
        {/* Left / Right gradient masks for seamless edge fade matching background */}
        <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-[#EDE7DB] via-[#EDE7DB]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-[#EDE7DB] via-[#EDE7DB]/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Line */}
        <div className="animate-marquee flex items-center w-max">
          {[0, 1].map((loopIdx) => (
            <div key={loopIdx} className="flex items-center gap-10 sm:gap-14 px-5 sm:px-7">
              
              {/* SBI */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="/brands/sbi.png" 
                  alt="SBI" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">State Bank of India</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* L&T */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="/brands/L&T.png" 
                  alt="L&T" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">L&amp;T</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* TCS */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="https://i.logos-download.com/113971/29583-9fde4947792aa7b5b379c0b1aee0ead2.png/Tata_Consultancy_Services_Logo_2020.png?dl" 
                  alt="TCS" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">TCS</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* John Maxwell Certified Coach */}
              <div className="flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#8A6B32]/30 shadow-sm hover:border-[#8A6B32] transition-all shrink-0">
                <img 
                  src="/brands/Max.png" 
                  alt="John Maxwell Certified Coach" 
                  className="h-7 sm:h-8 object-contain mix-blend-multiply" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-extrabold text-[#1A3B2F] uppercase tracking-wider">John Maxwell Certified Coach</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* SBI (Repeat to ensure width) */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="/brands/sbi.png" 
                  alt="SBI" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">State Bank of India</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* L&T (Repeat) */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="/brands/L&T.png" 
                  alt="L&T" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">L&amp;T</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* TCS (Repeat) */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="https://i.logos-download.com/113971/29583-9fde4947792aa7b5b379c0b1aee0ead2.png/Tata_Consultancy_Services_Logo_2020.png?dl" 
                  alt="TCS" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">TCS</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* John Maxwell (Repeat) */}
              <div className="flex items-center gap-3.5 px-7 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#8A6B32]/30 shadow-sm hover:border-[#8A6B32] transition-all shrink-0">
                <img 
                  src="/brands/Max.png" 
                  alt="John Maxwell Certified Coach" 
                  className="h-7 sm:h-8 object-contain mix-blend-multiply" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-extrabold text-[#1A3B2F] uppercase tracking-wider">John Maxwell Certified Coach</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

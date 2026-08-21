"use client";

import React from "react";

export const TrustedBySection: React.FC = () => {
  return (
    <section className="bg-[#EDE7DB] relative z-10 pb-8">
      {/* Decorative Dotted Separation */}
      <div className="w-full flex items-center justify-center pt-8 pb-8">
        <div className="w-full max-w-5xl flex items-center justify-center gap-4 px-4 sm:px-6">
          <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#8A6B32]/30"></div>
          <div className="w-2 h-2 rotate-45 bg-[#8A6B32]/40"></div>
          <div className="h-[2px] flex-1 border-t-2 border-dotted border-[#8A6B32]/30"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#1A3B2F] mb-4">
            Trusted By Leaders From
          </h2>
          <div className="h-[2px] w-[60px] bg-[#8A6B32] mx-auto" />
        </div>
      </div>
      
      {/* ── SINGLE LINE, SEAMLESS INFINITE MARQUEE ── */}
      <div className="w-full py-4 sm:py-6 mt-auto z-10 overflow-hidden relative flex flex-col">
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

              {/* DVC */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Damodar_Valley_Corporation_Logo.svg/960px-Damodar_Valley_Corporation_Logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail" 
                  alt="DVC" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">Damodar Valley Corporation</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* KVS */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg" 
                  alt="KVS" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">Kendriya Vidyalaya Sangathan</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* AKVO */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="https://www.akvosphere.com/wp-content/uploads/2025/07/akvo-machine-filter-table-logo.png" 
                  alt="AKVO" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">AKVO</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>

              {/* OMNIGREEN */}
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/50 backdrop-blur-sm border border-[#1A3B2F]/10 shadow-sm hover:border-[#8A6B32]/60 transition-all shrink-0">
                <img 
                  src="/brands/Omni Green Final Logo.png" 
                  alt="OMNIGREEN" 
                  className="h-6 sm:h-7 object-contain mix-blend-multiply opacity-90" 
                />
                <span className="hidden sm:block text-sm sm:text-base font-bold text-[#1A3B2F] uppercase tracking-wider ml-1">OMNIGREEN</span>
              </div>

              <span className="text-[#8A6B32] text-base sm:text-lg">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

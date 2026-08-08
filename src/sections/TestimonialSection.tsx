"use client";

import React from "react";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#1A3B2F] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A6B32]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A6B32]/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#EDE7DB] mb-4">
            Hear From Past Participants
          </h2>
          <div className="h-[2px] w-[60px] bg-[#8A6B32] mx-auto" />
        </div>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-[#8A6B32]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40 flex items-center justify-center relative group">
          
          {/* Placeholder for Video */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#0E2823]">
            <div className="w-16 h-16 rounded-full bg-[#8A6B32]/20 border border-[#8A6B32]/40 flex items-center justify-center mb-4 text-[#8A6B32]">
              <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-[#EDE7DB]/50 font-serif italic text-[15px] md:text-[18px]">
              Autoplay Video Placeholder<br/>
              <span className="text-[12px] md:text-[14px] font-sans not-italic text-[#EDE7DB]/30 mt-2 block">(Video will be added here)</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

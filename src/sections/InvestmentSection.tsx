"use client";

import React, { useState } from "react";
import { SITE_CONTENT } from "@/constants/content";
import { ApplicationModal } from "@/components/ApplicationModal";

export const InvestmentSection: React.FC = () => {
  const { investment } = SITE_CONTENT;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative rounded-2xl bg-white/40 backdrop-blur-sm border border-[#1A3B2F]/10 flex flex-col text-center h-full flex-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:z-10 transition-all duration-400">
      
      {/* Top Part (White/Cream bg inherited) */}
      <div className="p-6 sm:p-8 pb-6 flex flex-col flex-grow">
        <h3 className="font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[#8A6B32] mb-8">
          THE INVESTMENT IN YOUR NEXT EVOLUTION
        </h3>

        <div className="space-y-6 flex-grow flex flex-col justify-center">
          <div>
            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#1A3B2F] mb-1.5">
              TOTAL INVESTMENT
            </p>
            <div className="font-serif text-[50px] sm:text-[60px] leading-none text-[#1A3B2F] mb-3 font-medium">
              ₹7,999
            </div>
            <p className="text-[12px] sm:text-[13px] text-[#2D3D35] font-medium px-4 leading-relaxed">
              (Inclusive of all session materials, workbook, refreshments & integration tools)
            </p>
            <div className="mt-5 inline-flex items-center gap-2 bg-[#8A6B32]/10 px-4 py-2 rounded-full border border-[#8A6B32]/20">
              <svg className="w-4 h-4 text-[#8A6B32]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[12px] font-bold text-[#1A3B2F] uppercase tracking-widest">Kolkata, India</span>
            </div>
          </div>

          <div className="h-[1px] w-[80%] mx-auto bg-[#1A3B2F]/15 my-5" />

          <div>
            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#1A3B2F] mb-2">
              APPLICATION FEE
            </p>
            <div className="font-serif text-[38px] sm:text-[44px] leading-none text-[#1A3B2F] mb-2 font-medium">
              ₹0
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#2D3D35] font-serif italic mt-1">
              Fully refunded if not selected.
            </p>
          </div>

          <div className="h-[1px] w-[80%] mx-auto bg-[#1A3B2F]/15 my-5" />

          <div className="text-left px-2 sm:px-4 mb-2 mt-auto">
            <p className="text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-[#8A6B32] mb-5 text-center">
              SELECTION PROCESS
            </p>
            <div className="space-y-4">
              {[
                "Online Application",
                "Short Introductory Conversation",
                "Invitation to Join the Circle"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-[22px] h-[22px] rounded-full bg-[#8A6B32] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[12px] font-bold">{i + 1}</span>
                  </div>
                  <span className="text-[14px] sm:text-[15px] text-[#2D3D35] font-medium">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Button Area (Dark bg) */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-[#0E2823] rounded-b-2xl py-6 px-4 flex flex-col items-center justify-center cursor-pointer hover:bg-[#133731] transition-colors mt-auto"
      >
        <h4 className="font-serif text-[15px] sm:text-[16px] font-bold uppercase tracking-wider text-[#C5A44E] mb-2">
          APPLY FOR THE CIRCLE
        </h4>
        <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E8E2D4]">
          SPACES LIMITED TO 15 PRACTITIONERS. APPLY EARLY.
        </p>
      </div>
    </div>

      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

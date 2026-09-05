"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONTENT } from "@/constants/content";
import { ApplicationModal } from "@/components/ApplicationModal";

export const InvestmentSection: React.FC = () => {
  const { investment } = SITE_CONTENT;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 hours
  const [isClient, setIsClient] = useState(false); // To avoid hydration mismatch on first render

  useEffect(() => {
    setIsClient(true);
    
    // Personalized Evergreen Timer Logic
    const STORAGE_KEY = "ahe_countdown_v4";
    let targetDate: number;
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      targetDate = parseInt(stored, 10);
    } else {
      targetDate = Date.now() + 72 * 60 * 60 * 1000;
      localStorage.setItem(STORAGE_KEY, targetDate.toString());
    }

    const updateTimer = () => {
      const remaining = Math.max(0, Math.floor((targetDate - Date.now()) / 1000));
      setTimeLeft(remaining);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      hours: h.toString().padStart(2, "0"),
      minutes: m.toString().padStart(2, "0"),
      seconds: s.toString().padStart(2, "0")
    };
  };

  const time = formatTime(timeLeft);
  const isExpired = isClient && timeLeft === 0;

  return (
    <>
      <div className="relative rounded-2xl bg-white/40 backdrop-blur-sm border border-[#1A3B2F]/10 flex flex-col text-center h-full flex-1 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:z-10 transition-all duration-400">
      
      {/* Top Part (White/Cream bg inherited) */}
      <div className="p-6 sm:p-8 pb-6 flex flex-col flex-grow">
        <h3 className="font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-wider text-[#8A6B32] mb-8">
          THE INVESTMENT IN YOUR NEXT EVOLUTION
        </h3>

        <div className="space-y-6 flex-grow flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-widest text-[#1A3B2F] mb-3">
              TOTAL INVESTMENT
            </p>
            
            {!isExpired ? (
              <>
                <div className="flex items-center justify-center gap-3 mb-1">
                  <span className="text-[20px] sm:text-[24px] font-bold text-[#1A3B2F]/40 line-through decoration-2">₹9,999</span>
                  <span className="px-2 py-0.5 bg-[#8A6B32]/10 text-[#8A6B32] text-[10px] font-bold uppercase tracking-widest rounded border border-[#8A6B32]/20">Save ₹2,000</span>
                </div>
                
                <div className="font-serif text-[50px] sm:text-[60px] leading-none text-[#1A3B2F] mb-4 font-medium">
                  ₹7,999
                </div>

                {/* Countdown Timer */}
                {isClient && (
                  <div className="mb-5 bg-gradient-to-r from-[#1A3B2F] to-[#2D3D35] px-5 py-3 rounded-xl shadow-lg border border-[#8A6B32]/30 flex flex-col items-center relative overflow-hidden w-full max-w-[280px]">
                     <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C5A44E] to-transparent"></div>
                     <span className="text-[9px] uppercase tracking-widest text-[#C5A44E] font-bold mb-1.5 opacity-90">Special Price Ends In</span>
                     <div className="flex items-baseline gap-1.5 text-white font-mono font-bold text-[18px] sm:text-[20px] tracking-wider">
                       <span className="bg-black/30 px-1.5 py-0.5 rounded">{time.hours}</span><span className="text-[11px] text-white/50">h</span>
                       <span className="text-[#C5A44E] animate-pulse">:</span>
                       <span className="bg-black/30 px-1.5 py-0.5 rounded">{time.minutes}</span><span className="text-[11px] text-white/50">m</span>
                       <span className="text-[#C5A44E] animate-pulse">:</span>
                       <span className="bg-black/30 px-1.5 py-0.5 rounded">{time.seconds}</span><span className="text-[11px] text-white/50">s</span>
                     </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="font-serif text-[50px] sm:text-[60px] leading-none text-[#1A3B2F] mb-4 mt-2 font-medium">
                  ₹9,999
                </div>
                <div className="mb-5 bg-black/5 px-5 py-3 rounded-xl border border-black/10 flex flex-col items-center">
                  <span className="text-[11px] uppercase tracking-widest text-[#1A3B2F]/60 font-bold">Early Bird Offer Expired</span>
                </div>
              </>
            )}

            <p className="text-[12px] sm:text-[13px] text-[#2D3D35] font-medium px-4 leading-relaxed mt-2">
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

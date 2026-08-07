"use client";

import React from "react";
import { CheckCircle2, Sparkles, Flower2, Compass, Network, Layers } from "lucide-react";

export const TargetAudienceAndUnlockSection: React.FC = () => {
  const targetPoints = [
    "Breakthrough the invisible ceilings in your business and life",
    "Build an identity and personal brand that magnetizes",
    "Charge your true worth with confidence",
    "Create profound impact with clarity and alignment",
    "Lead from your deepest self, not from exhaustion",
  ];

  const unlockItems = [
    { title: "BREAKTHROUGH CLARITY", desc: "Discover the identity patterns holding you back.", Icon: Sparkles },
    { title: "IDENTITY UPGRADE", desc: "Shift into the version of you that your future clients, business and life demand.", Icon: Flower2 },
    { title: "STRATEGIC ALIGNMENT", desc: "Align your mission, message and offers with who you are becoming.", Icon: Compass },
    { title: "IMPACT MULTIPLIER™", desc: "Understand how your transformation multiplies the impact you create.", Icon: Network },
    { title: "NEXT EVOLUTION BLUEPRINT", desc: "Design your next curve with intention, not by default.", Icon: Layers },
  ];

  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      {/* ═══ CARD 1: THIS IS FOR YOU IF... ═══ */}
      <div className="relative rounded-2xl p-8 lg:p-10 bg-[#0E2823] border border-[#C5A44E]/15 shadow-xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)] hover:z-10 transition-all duration-400">
        <h3 className="font-serif text-[14px] sm:text-[15px] font-bold uppercase tracking-wider mb-3 text-[#C5A44E]">
          THIS IS FOR YOU IF...
        </h3>
        <p className="text-[13px] sm:text-[14px] mb-5 text-[#E8E2D4]/90 font-medium leading-relaxed">
          You are a coach, consultant, trainer or healer who is ready to:
        </p>

        <div className="space-y-3.5">
          {targetPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-[18px] h-[18px] flex-shrink-0 mt-0.5 text-[#C5A44E]" strokeWidth={1.5} />
              <span className="text-[13px] sm:text-[14px] leading-snug text-[#E8E2D4] font-medium">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CARD 2: WHAT YOU WILL UNLOCK ═══ */}
      <div className="relative rounded-2xl p-8 lg:p-10 bg-white/40 backdrop-blur-sm border border-[#1A3B2F]/10 flex flex-col justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)] hover:z-10 transition-all duration-400">
        <h3 className="font-serif text-[14px] sm:text-[15px] font-bold uppercase tracking-wider mb-6 text-[#8A6B32] text-center">
          WHAT YOU WILL UNLOCK
        </h3>

        <div className="space-y-5">
          {unlockItems.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0 bg-[#0E2823] shadow-sm border border-[#C5A44E]/30">
                <item.Icon className="w-[18px] h-[18px] text-[#C5A44E]" strokeWidth={1.5} />
              </div>
              <div className="pt-0.5">
                <p className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider mb-1 text-[#1A3B2F]">
                  {item.title}
                </p>
                <p className="text-[13px] sm:text-[14px] leading-snug text-[#2D3D35] font-medium pr-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

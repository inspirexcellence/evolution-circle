"use client";

import React from "react";
import { Star, MessageCircle, User, Wrench, Users } from "lucide-react";
import { SITE_CONTENT } from "@/constants/content";

export const ExperienceSection: React.FC = () => {
  const experienceItems = [
    { text: "Deep inner work and identity breakthroughs", Icon: Star },
    { text: "Powerful conversations in a safe, curated circle", Icon: MessageCircle },
    { text: "Clarity on your next level of leadership and impact", Icon: User },
    { text: "Tools, frameworks and strategies you can implement immediately", Icon: Wrench },
    { text: "A community of high-calibre practitioners walking the path of evolution with you", Icon: Users },
  ];

  return (
    <div className="bg-transparent mb-6 mt-2">
      <h3 className="font-serif text-[14px] sm:text-[15px] font-bold uppercase tracking-wider mb-6 text-[#8A6B32] text-center px-4">
        EXPERIENCE A DAY THAT CREATES SHIFTS YOU WILL FEEL FOR YEARS.
      </h3>

      <div className="space-y-5 px-2">
        {experienceItems.map((item, i) => (
          <div key={i} className="flex items-center gap-5">
            <div className="w-[38px] h-[38px] rounded-full border border-[#1A3B2F]/30 flex items-center justify-center flex-shrink-0 bg-transparent">
              <item.Icon className="w-[18px] h-[18px] text-[#1A3B2F]" strokeWidth={1.5} />
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#2D3D35] font-medium leading-snug max-w-[85%]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

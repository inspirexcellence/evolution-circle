"use client";

import React from "react";
import { SITE_CONTENT } from "@/constants/content";
import { Flower2, Users2, Sparkles, QrCode } from "lucide-react";

const SETTING_ICONS: Record<string, React.ComponentType<{ className?: string, strokeWidth?: number }>> = {
  Flower2,
  Users2,
  Sparkles,
};

export const SettingAndFooterBannerSection: React.FC = () => {
  const { settingHighlights, footerBanner } = SITE_CONTENT;

  return (
    <section className="bg-[#0E2823] pt-12 flex flex-col">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          
          {/* 3 Pillars in a row with separators */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full md:w-[90%] gap-y-6 md:gap-y-0">
            {settingHighlights.map((item, idx) => {
              const IconComp = SETTING_ICONS[item.icon] || Flower2;
              return (
                <div
                  key={idx}
                  className={`flex items-start space-x-3.5 w-full md:w-1/3 ${
                    idx < 2 ? 'md:border-r border-[#C5A44E]/30 md:pr-4 lg:pr-6' : ''
                  } ${idx > 0 ? 'md:pl-4 lg:pl-6' : ''}`}
                >
                  <div className="w-[42px] h-[42px] rounded-full border border-[#C5A44E] flex items-center justify-center flex-shrink-0 text-[#C5A44E]">
                    <IconComp className="w-5 h-5 text-[#C5A44E]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-serif text-[13px] sm:text-[14px] font-bold uppercase tracking-wide text-[#C5A44E]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] sm:text-[13px] text-[#E8E2D4] leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* QR Code on the far right */}
          <div className="w-full md:w-[10%] flex justify-center md:justify-end">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg p-2 sm:p-2.5 flex-shrink-0">
              <QrCode className="w-full h-full text-[#0E2823]" strokeWidth={1.2} />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Full-Width Banner */}
      <div className="w-full bg-[#C5A44E] py-4 sm:py-5 mt-10 text-center px-4">
        <p className="font-serif text-[13px] sm:text-[15px] md:text-[18px] font-bold uppercase tracking-[0.25em]" style={{ color: "#0E2823" }}>
          {footerBanner}
        </p>
      </div>
    </section>
  );
};

export default SettingAndFooterBannerSection;

"use client";

import React, { useState } from "react";

import { HeroSection } from "@/sections/HeroSection";
import { WhyDifferentSection } from "@/sections/WhyDifferentSection";
import { TargetAudienceAndUnlockSection } from "@/sections/TargetAudienceAndUnlockSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { PromiseSection } from "@/sections/PromiseSection";
import { FacilitatorSection } from "@/sections/FacilitatorSection";
import { InvestmentSection } from "@/sections/InvestmentSection";
import { SettingAndFooterBannerSection } from "@/sections/SettingAndFooterBannerSection";
import { Footer } from "@/components/Footer";
import { ApplicationModal } from "@/components/ApplicationModal";
import { CuratedExperienceCard } from "@/sections/CuratedExperienceCard";
import { FAQSection } from "@/sections/FAQSection";
import { TrustedBySection } from "@/sections/TrustedBySection";
import { TestimonialSection } from "@/sections/TestimonialSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#EDE7DB] text-[#1A3B2F] overflow-x-hidden relative selection:bg-gold-500 selection:text-forest-950">


      {/* Hero Section */}
      <HeroSection />

      {/* Trusted By Placeholder */}
      <TrustedBySection />

      {/* Why This Circle Is Different + Quote & Event Metadata */}
      <WhyDifferentSection />

      {/* Main 3-Column Content Section */}
      <section className="py-12 md:py-16 bg-[#EDE7DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Left Column: Target Audience */}
            <div className="flex flex-col h-full">
              <TargetAudienceAndUnlockSection />
            </div>

            {/* Middle Column: Experience + Promise */}
            <div className="flex flex-col gap-8 h-full">
              <ExperienceSection />
              <PromiseSection />
            </div>

            {/* Right Column: Curated + Investment (Spans 2 rows to match Facilitator bottom) */}
            <div className="flex flex-col gap-8 h-full lg:row-span-2">
              <CuratedExperienceCard />
              <div className="flex-1 flex flex-col">
                <InvestmentSection />
              </div>
            </div>

            {/* Bottom Row: Facilitator (Spans Left & Middle columns) */}
            <div className="lg:col-span-2 flex flex-col justify-end">
              <FacilitatorSection />
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Video */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Setting Highlights, QR Code & Footer Banner */}
      <SettingAndFooterBannerSection onOpenModal={handleOpenModal} />

      {/* Footer */}
      <Footer />

      {/* Sticky Floating Apply Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50">
        <button
          onClick={handleOpenModal}
          className="relative overflow-hidden rounded-full p-[2px] shadow-[0_0_25px_rgba(197,164,78,0.6)] hover:shadow-[0_0_35px_rgba(197,164,78,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center group"
          style={{ backgroundColor: "#8A6B32" }}
        >
          <div 
            className="absolute inset-[-400%] animate-spin opacity-80"
            style={{ 
              background: "conic-gradient(from 0deg, transparent 20%, rgba(255,255,255,0.9) 50%, transparent 80%)", 
              animationDuration: '3s',
              animationTimingFunction: 'linear'
            }}
          />
          <span className="relative w-full h-full bg-[#C5A44E] text-[#0E2823] px-6 py-3.5 rounded-full font-bold font-serif uppercase tracking-widest whitespace-nowrap z-10 flex items-center justify-center text-[13px] md:text-[14px]">
            APPLY NOW
          </span>
        </button>
      </div>

      {/* Application Form Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </main>
  );
}

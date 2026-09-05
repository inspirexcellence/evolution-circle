"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export const FirstHeroSection: React.FC = () => {
  const points = [
    {
      num: "01",
      setup: "You're excellent at what you do",
      punch: "but your income doesn't reflect your capability."
    },
    {
      num: "02",
      setup: "You know you should charge more",
      punch: "but something still holds you back."
    },
    {
      num: "03",
      setup: "You've accumulated certifications, knowledge and experience",
      punch: "yet growth still feels harder than it should."
    },
    {
      num: "04",
      setup: "You want premium clients",
      punch: "without becoming louder, pushier or sales-driven."
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full text-[#1A3B2F] flex flex-col overflow-hidden bg-[#EDE7DB]">
      
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* FULL-SIZE BACKGROUND IMAGE HERO CONTAINER */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[100vh] lg:min-h-[95vh] flex flex-col justify-center bg-[#EDE7DB]">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 pointer-events-none border-b border-[#8A6B32]/30">
          <Image 
            src="/extra/CT_08172016_0576_color-copyyy.jpg"
            alt="Prerona Roy"
            fill
            className="object-cover object-[80%_top] md:object-right-top lg:object-center"
            sizes="100vw"
            priority
          />
          {/* Subtle dark gradient for text readability without washing out the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent lg:from-black/60 lg:via-black/20" />
          {/* Extra bottom gradient for mobile to ground it if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 lg:hidden" />
        </div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* PREMIUM HERO HEADER TEXT */}
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* Added top padding for mobile to clear the navbar and bottom padding to clear floating buttons */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-32 lg:pt-12 lg:pb-24 flex flex-col h-full min-h-[100vh] lg:min-h-0 lg:justify-center">
          
          <div className="relative w-full h-full flex flex-col flex-1">
            
            {/* Urgency Badge — Top on Mobile, Centered Above on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-0 mb-auto lg:mt-auto lg:mb-20 flex justify-center w-full z-20 px-2 sm:px-0"
            >
              <div className="relative overflow-hidden px-3 py-2 sm:py-2.5 sm:px-5 lg:px-6 bg-gradient-to-r from-[#8A6B32] to-[#D4AF37] text-[#1A3B2F] font-bold uppercase tracking-wider lg:tracking-widest text-[8px] min-[375px]:text-[9px] min-[420px]:text-[10px] sm:text-[13px] rounded-full shadow-lg border border-[#D4AF37]/50 flex items-center justify-center gap-2 lg:gap-3 text-center mx-auto max-w-full">
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full pointer-events-none" style={{ transform: "skewX(-20deg)" }} />
                <span className="relative z-10 w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#EDE7DB] animate-pulse shrink-0"></span>
                <span className="relative z-10">
                  Application Closing Date : September 20<sup className="text-[6px] sm:text-[10px]">TH </sup> 2026
                </span>
              </div>
            </motion.div>

            {/* Left Column: All Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-[850px] flex flex-col items-start text-left pt-4 lg:pt-16 mt-auto mb-0 lg:mt-0"
            >
              {/* Brand Pill - Made Bigger with more margin below */}
              <div className="mb-6 lg:mb-16 relative group inline-block">
                <div className="px-6 py-3 lg:px-8 lg:py-3.5 rounded-full border border-white/20 bg-black/40 lg:bg-black/30 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-black/50 transition-all duration-500 cursor-default">
                  <p className="text-[11px] sm:text-[16px] font-bold uppercase tracking-[0.4em] text-[#EDE7DB] mb-1">
                    INSPIRE EXCELLENCE
                  </p>
                  <p className="text-[8px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
                    ACCELERATING HUMAN EVOLUTION
                  </p>
                </div>
              </div>

              {/* Decorative Top Accent */}
              <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4 w-full">
                <span className="text-[12px] sm:text-[15px] lg:text-[17px] tracking-[0.4em] text-[#D4AF37] font-medium uppercase drop-shadow-md">
                  The Reality
                </span>
                <div className="w-10 lg:w-16 h-[1px] bg-[#D4AF37]/60"></div>
              </div>

              {/* Main Heading */}
              <h2 className="font-serif uppercase flex flex-col items-start leading-[1.05] relative w-full mb-6 lg:mb-6">
                <span className="text-[14px] sm:text-[20px] md:text-[24px] lg:text-[28px] tracking-[0.2em] text-[#EDE7DB] font-light mb-2 drop-shadow-md">
                  YOU MAY BE READY FOR
                </span>
                
                <span className="text-[38px] sm:text-[56px] md:text-[68px] lg:text-[80px] xl:text-[96px] font-bold tracking-[-0.04em] text-white relative z-10 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] leading-[0.92] my-1">
                  YOUR NEXT<br />EVOLUTION
                </span>
                
                <div className="flex items-center justify-start gap-3 lg:gap-5 mt-2 w-full">
                  <div className="w-8 lg:w-20 h-[2px] bg-[#D4AF37]/60"></div>
                  <span className="text-[40px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-bold tracking-[-0.02em] text-[#D4AF37] italic drop-shadow-md" style={{fontVariant: 'small-caps'}}>
                    IF...
                  </span>
                  <div className="w-8 lg:w-20 h-[2px] bg-[#D4AF37]/60"></div>
                </div>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Decorative rotating text ring positioned subtly on the right */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 lg:right-24 top-1/4 w-32 h-32 opacity-20 hidden lg:flex items-center justify-center pointer-events-none z-10"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current drop-shadow-lg">
            <path id="heroCirclePath2" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
            <text fontSize="11" letterSpacing="5" fontWeight="bold">
              <textPath href="#heroCirclePath2" startOffset="0%">
                {"INSPIRE EXCELLENCE ✦"}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 4 LUXURY TALL CARDS SECTION (Begins on cream background) */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full bg-[#EDE7DB] pt-12 pb-16 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
        <div className="w-full max-w-[1400px] mx-auto">

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* 4 LUXURY TALL CARDS */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-10 lg:mb-16"
        >
          {points.map((point, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="relative group h-full flex flex-col"
            >
              {/* Soft hover glow behind card */}
              <div className="absolute inset-0 bg-[#8A6B32]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] blur-xl" />
              
              <div className="relative h-full bg-[#F5F0E6] border border-[#1A3B2F]/10 group-hover:border-[#8A6B32]/40 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-500 overflow-hidden shadow-lg group-hover:shadow-[0_20px_40px_rgba(26,59,47,0.1)] group-hover:-translate-y-2">
                
                {/* Large Background Number */}
                <div className="absolute -top-6 -right-6 text-[120px] font-serif font-bold text-[#1A3B2F] opacity-[0.03] group-hover:opacity-[0.06] group-hover:text-[#8A6B32] transition-colors duration-500 pointer-events-none select-none">
                  {point.num}
                </div>

                {/* Decorative Dot */}
                <div className="w-10 h-10 rounded-full border border-[#8A6B32]/30 flex items-center justify-center mb-8 bg-[#8A6B32]/5 group-hover:bg-[#8A6B32] transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-[#8A6B32] group-hover:bg-[#F5F0E6] transition-colors duration-500"></div>
                </div>

                <p className="font-serif text-[20px] lg:text-[24px] text-[#1A3B2F] leading-snug mb-6 z-10 relative">
                  {point.setup}
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A6B32]/20 to-transparent my-auto min-h-[1px]"></div>

                <p className="text-[15px] lg:text-[16px] text-[#2D3D35] group-hover:text-[#1A3B2F] font-medium leading-relaxed mt-6 transition-colors duration-500 z-10 relative">
                  {point.punch}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════ */}
        {/* PUNCHLINE CENTERPIECE (INVERTED HIGH-CONTRAST BLOCK) */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full overflow-hidden rounded-[2rem] bg-[#1A3B2F] border border-[#1A3B2F] p-10 md:p-16 text-center shadow-2xl group"
        >
          {/* Subtle lighting in the dark block */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8A6B32]/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          <h3 className="font-serif text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-tight text-[#EDE7DB] mb-8 relative z-10">
            You sense that the next breakthrough isn't another strategy.
          </h3>
          
          <div className="inline-block relative z-10">
            <p className="text-[14px] sm:text-[18px] md:text-[20px] text-[#1A3B2F] bg-[#D4AF37] hover:bg-[#F2D780] transition-colors duration-300 px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              It's who you need to become to execute it.
            </p>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

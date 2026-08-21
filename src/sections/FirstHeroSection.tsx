"use client";

import React from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full bg-[#EDE7DB] text-[#1A3B2F] py-12 lg:py-16 flex flex-col items-center justify-center overflow-hidden">
      
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* LIGHT PREMIUM BACKGROUND EFFECTS */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(138,107,50,0.08)_0%,rgba(237,231,219,0)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-multiply" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* ═══════════════════════════════════════════════════════════ */}
        {/* HIGHLY ENGAGING TOP SECTION */}
        {/* ═══════════════════════════════════════════════════════════ */}
        <div className="relative w-full flex flex-col items-center justify-center text-center mt-0 mb-10 lg:mb-12">
          
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative z-20"
          >
            <div className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-[#1A3B2F] to-[#2D3D35] text-[#EDE7DB] font-bold uppercase tracking-widest text-[11px] sm:text-[13px] rounded-full shadow-lg border border-[#8A6B32]/30 flex items-center gap-3">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full pointer-events-none" style={{ transform: "skewX(-20deg)" }} />
              
              <span className="relative z-10 w-2 h-2 rounded-full bg-[#8A6B32] animate-pulse"></span>
              <span className="relative z-10">
                Application Closing Date : August 30<sup className="text-[8px] sm:text-[10px]">TH </sup> 2026
              </span>
            </div>
          </motion.div>
          
          {/* Subtle Floating Background Elements to fill empty space */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -left-10 lg:left-10 top-4 w-28 h-28 opacity-20 hidden md:flex items-center justify-center pointer-events-none"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#8A6B32] fill-current">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="11" letterSpacing="5" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0%">
                  {"INSPIRE EXCELLENCE ✦"}
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -right-10 lg:right-10 top-10 w-20 h-20 opacity-[0.15] hidden md:flex items-center justify-center pointer-events-none"
          >
            {/* Elegant 8-pointed star */}
            <svg viewBox="0 0 24 24" className="w-full h-full text-[#1A3B2F] fill-current">
              <path d="M12 0l2 9 9 2-9 2-2 9-2-9-9-2 9-2z"/>
            </svg>
          </motion.div>

          {/* Brand Header as an Elegant Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative group"
          >
            <div className="px-6 py-2 rounded-full border border-[#1A3B2F]/15 bg-white/40 backdrop-blur-sm shadow-[0_4px_20px_rgba(26,59,47,0.05)] hover:border-[#8A6B32]/40 hover:bg-white/60 transition-all duration-500 cursor-default">
              <p className="text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.4em] text-[#1A3B2F] mb-0.5">
                INSPIRE EXCELLENCE
              </p>
              <p className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.35em] text-[#8A6B32]">
                ACCELERATING HUMAN EVOLUTION
              </p>
            </div>
            {/* Vertical connector line */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-gradient-to-b from-[#1A3B2F]/20 to-transparent"></div>
          </motion.div>

          {/* Massive Cinematic Heading */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Decorative Top Accent */}
            <div className="flex items-center justify-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-[#8A6B32]/40"></div>
              <span className="text-[14px] sm:text-[16px] tracking-[0.4em] text-[#8A6B32] font-medium uppercase">
                The Reality
              </span>
              <div className="w-12 h-[1px] bg-[#8A6B32]/40"></div>
            </div>

            <h2 className="font-serif uppercase flex flex-col items-center justify-center leading-[1.0] relative">
              <span className="text-[18px] sm:text-[22px] md:text-[28px] tracking-[0.2em] text-[#2D3D35] font-light mb-1">
                YOU MAY BE READY FOR
              </span>
              
              <div className="relative">
                {/* Background Shadow Text for Depth */}
                <span className="absolute top-1 left-1 sm:top-2 sm:left-2 text-[32px] sm:text-[46px] md:text-[60px] lg:text-[76px] font-bold tracking-[-0.04em] text-[#1A3B2F]/5 select-none pointer-events-none w-full text-center whitespace-nowrap">
                  YOUR NEXT EVOLUTION
                </span>
                <span className="text-[32px] sm:text-[46px] md:text-[60px] lg:text-[76px] font-bold tracking-[-0.04em] text-[#1A3B2F] relative z-10 drop-shadow-sm whitespace-nowrap">
                  YOUR NEXT EVOLUTION
                </span>
              </div>
              
              <div className="flex items-center gap-4 mt-1 md:mt-2">
                <div className="hidden md:block w-16 h-[2px] bg-[#8A6B32]/30"></div>
                <span className="text-[36px] sm:text-[50px] md:text-[64px] lg:text-[80px] font-bold tracking-[-0.02em] text-[#8A6B32] italic" style={{fontVariant: 'small-caps'}}>
                  IF...
                </span>
                <div className="hidden md:block w-16 h-[2px] bg-[#8A6B32]/30"></div>
              </div>
            </h2>
          </motion.div>
        </div>

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
    </section>
  );
};

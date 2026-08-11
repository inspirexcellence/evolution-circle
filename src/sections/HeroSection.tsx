"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/constants/content";

export const HeroSection: React.FC = () => {
  const { brand, hero } = SITE_CONTENT;

  return (
    <section className="relative w-full min-h-[520px] lg:min-h-[600px] xl:min-h-[680px] flex flex-col lg:flex-row overflow-hidden"
      style={{ backgroundColor: "#EDE7DB" }}
    >
      {/* ═══════════════════════════════════════════════════════════ */}
      {/* LEFT TEXT SIDE (~42%) */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center px-7 sm:px-10 lg:px-14 xl:px-16 py-10 lg:py-14"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Brand Header */}
        <div className="mb-8">
          <p
            className="text-[15px] sm:text-[16px] font-semibold uppercase tracking-[0.35em]"
            style={{ fontFamily: "'Inter', sans-serif", color: "#1A3B2F" }}
          >
            {brand.name}
          </p>
          <p
            className="text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.3em] mt-1 text-[#2D3D35]"
          >
            {brand.tagline}
          </p>
        </div>

        {/* Subtitle with separator */}
        <div className="mb-8">
          <div className="w-[60px] h-[2px] bg-[#8A6B32]"></div>
        </div>

        {/* THE EVOLUTION CIRCLE heading */}
        <h1 className="font-serif uppercase leading-[0.88] mb-5">
          <span
            className="block text-[24px] sm:text-[30px] md:text-[34px] lg:text-[40px] font-light tracking-[0.18em] mb-1"
            style={{ color: "#1A3B2F" }}
          >
            THE
          </span>
          <span
            className="block text-[44px] sm:text-[54px] md:text-[64px] lg:text-[86px] xl:text-[94px] font-bold tracking-[-0.01em]"
            style={{ color: "#1A2A23" }}
          >
            EVOLUTION
          </span>
          <span
            className="block text-[44px] sm:text-[54px] md:text-[64px] lg:text-[86px] xl:text-[94px] font-bold tracking-[-0.01em]"
            style={{ color: "#8A6B32" }}
          >
            CIRCLE
          </span>
        </h1>

        {/* A ONE-DAY IMMERSIVE EXPERIENCE */}
        <p
          className="text-[15px] sm:text-[16px] lg:text-[18px] font-bold uppercase tracking-[0.25em] mb-4"
          style={{ color: "#1A3B2F" }}
        >
          {hero.subtitle}
        </p>
        
        {/* Gold short separator line */}
        <div className="w-[50px] sm:w-[60px] h-[2px] bg-[#8A6B32] mb-5" />

        {/* Date of Event */}
        <div className="relative overflow-hidden mb-5 inline-flex items-center gap-2 bg-[#8A6B32]/10 border border-[#8A6B32]/20 px-4 py-2 rounded-full self-start">
          {/* Shimmer Effect */}
          <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/50 to-transparent w-full h-full pointer-events-none" style={{ transform: "skewX(-20deg)" }} />
          
          <svg className="w-4 h-4 text-[#8A6B32] relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[12px] font-bold text-[#1A3B2F] uppercase tracking-widest relative z-10">September 12, 2026</span>
        </div>

        {/* Audience line */}
        <p
          className="text-[15px] sm:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-5"
          style={{ color: "#2D3D35", fontFamily: "'Inter', sans-serif" }}
        >
          For Coaches. Consultants. Trainers. Healers.
          <br />
          Professional Practitioners. Solopreneurs.
          <br />
          Small Business Owners.
        </p>

        {/* Italic callout — NO card/box, just text */}
        <div className="space-y-3">
          <p
            className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] italic leading-snug"
            style={{ color: "#2D3D35" }}
          >
            This is not about learning more.
            <br />
            <span style={{ color: "#8A6B32" }} className="font-semibold">
              It&apos;s about becoming more.
            </span>
          </p>
          <p
            className="font-serif text-[15px] sm:text-[16px] lg:text-[18px] italic leading-relaxed"
            style={{ color: "#3D4D45" }}
          >
            Step into a curated space of transformation,
            <br />
            clarity and strategic breakthroughs that
            <br />
            elevate how you lead, serve and build your business as a professional.
          </p>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* RIGHT IMAGE SIDE (~58%) */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative lg:absolute lg:right-0 lg:inset-y-0 z-0 w-full lg:w-[60%] xl:w-[62%] min-h-[380px] sm:min-h-[450px] lg:min-h-full"
      >
        <Image
          src="/images/image.png"
          alt="Premium executive coaching lounge with luxury furnishings"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center"
        />

        {/* Desktop left-edge gradient (hidden on mobile) */}
        <div
          className="hidden lg:block absolute inset-y-0 -left-[2px] w-[150px] lg:w-[250px] xl:w-[350px] pointer-events-none z-[1]"
          style={{
            background: "linear-gradient(to right, #EDE7DB 0%, #EDE7DB 5%, rgba(237,231,219,0) 100%)",
          }}
        />



        {/* Very subtle bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-[1]"
          style={{
            background: "linear-gradient(to top, rgba(237,231,219,0.3), rgba(237,231,219,0))",
          }}
        />

        {/* ═══════════════════════════════════════════════════════ */}
        {/* FLOATING CIRCULAR BADGE */}
        {/* ═══════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10 z-20"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-[175px] h-[175px] sm:w-[190px] sm:h-[190px] lg:w-[205px] lg:h-[205px] xl:w-[220px] xl:h-[220px] rounded-full flex flex-col items-center justify-center text-center shadow-2xl backdrop-blur-md"
            style={{
              backgroundColor: "#113326",
              border: "3px solid #D4AF37",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6), inset 0 0 25px rgba(212,175,55,0.2)",
            }}
          >
            {/* Inner gold ring */}
            <div
              className="absolute inset-[6px] rounded-full pointer-events-none"
              style={{ border: "1px solid rgba(212,175,55,0.5)" }}
            />

            {/* Badge content */}
            <span
              className="text-[9px] sm:text-[11px] uppercase tracking-wider sm:tracking-[0.1em] font-bold leading-tight"
              style={{ color: "#D4AF37" }}
            >
              ONE
            </span>
            <span
              className="text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-wider sm:tracking-[0.1em] font-semibold leading-tight mt-0.5"
              style={{ color: "#F5F0E6", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              CURATED CIRCLE
            </span>

            <span
              className="font-serif text-[46px] sm:text-[54px] lg:text-[70px] font-bold leading-none my-1"
              style={{ color: "#D4AF37", textShadow: "0 4px 8px rgba(0,0,0,0.4)" }}
            >
              15
            </span>

            <span
              className="text-[9px] sm:text-[10px] lg:text-[12px] uppercase tracking-wide font-bold leading-tight"
              style={{ color: "#F5F0E6" }}
            >
              PRACTITIONERS
            </span>
            <span
              className="text-[9px] sm:text-[10px] lg:text-[12px] uppercase tracking-wide font-bold leading-tight"
              style={{ color: "#F5F0E6" }}
            >
              SELECTED
            </span>

            <span
              className="text-[8px] sm:text-[9px] italic mt-1.5 leading-tight max-w-[100px] sm:max-w-[120px]"
              style={{ color: "#E8E2D4" }}
            >
              Every application
              <br />
              personally reviewed.
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

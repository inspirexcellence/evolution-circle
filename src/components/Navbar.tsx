"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gold-gradient z-50 origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-forest-950/90 backdrop-blur-md py-3 border-b border-gold-500/20 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex flex-col group">
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-warmWhite group-hover:text-gold-400 transition-colors">
              INSPIRE EXCELLENCE
            </span>
            <span className="text-[9px] tracking-[0.2em] text-gold-500 font-medium">
              ACCELERATING HUMAN EVOLUTION
            </span>
          </a>

          {/* Quick Date Ticker */}
          <div className="hidden md:flex items-center space-x-2 text-xs text-ivory/80 border border-gold-500/20 px-3 py-1.5 rounded-full bg-forest-900/60">
            <Calendar className="w-3.5 h-3.5 text-gold-400" />
            <span className="font-medium text-gold-300">12th SEPT 2026</span>
            <span className="text-gold-500/40">|</span>
            <span>HYDERABAD / GOA</span>
          </div>

          {/* CTA Action */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenModal}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-forest-950 bg-gold-gradient rounded-full shadow-goldGlow hover:shadow-goldGlowIntense hover:scale-[1.03] transition-all duration-200"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-4 h-4 ml-1 text-forest-950" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

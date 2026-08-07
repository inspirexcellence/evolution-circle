"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-950 py-8 border-t border-gold-500/10 text-xs text-ivory/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
          <span className="font-bold tracking-widest text-warmWhite">
            INSPIRE EXCELLENCE
          </span>
          <span className="hidden sm:inline text-gold-500/40">•</span>
          <span>© 2026 The Evolution Circle. All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6 text-ivory/60">
          <a href="#" className="hover:text-gold-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gold-400 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gold-400 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

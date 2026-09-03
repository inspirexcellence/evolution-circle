"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Like in every sphere of life a Guru is essential even in your business and Prerona is that perfect mentor. She not only motivates you and boosts your self confidence but also critically analyses your business from a third party perspective and gives it its necessary strategy. Most coaches would stop at that - but not Prerona. She goes all out and even guides you in your execution process. Approachable, Knowledgeable, Confident and Calm are few of the adjectives that I associate with her - she has a zest for life which is super inspiring and i am glad that she has been a part of my business journey.",
    author: "Ritusmita Biswas",
    role: "Entrepreneur"
  },
  {
    quote: "After 3 months of coaching with Prerona I can say with full conviction that certain milestones I am about to reach is largely due to the commitment & systems approach of Prerona. She is very passionate in her interactive sessions leaving no stone unturned to get results.",
    author: "Pankaj Bajaj",
    role: "Business Owner"
  },
  {
    quote: "Prerona is amazing. I have worked with her closely for almost 5 years. She is very professional, detail oriented and passionate about everything she puts her mind to. She is a Dynamo who delivers results with a smile. A pleasure to work with.",
    author: "Harish Shadadpuri",
    role: "Executive"
  }
];

export const WrittenTestimonialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[#EDE7DB] relative overflow-hidden">
      
      {/* Delicate background texture/accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8A6B32]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1A3B2F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 relative">
          <p className="text-[11px] sm:text-[13px] uppercase tracking-[0.35em] font-semibold text-[#8A6B32] mb-3">
            Voices of Transformation
          </p>
          <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[54px] text-[#1A3B2F] tracking-tight leading-none mb-6">
            Impact That Speaks
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#8A6B32]/40" />
            <div className="w-2 h-2 rounded-full border border-[#8A6B32]" />
            <div className="h-[1px] w-12 bg-[#8A6B32]/40" />
          </div>
        </div>

        {/* Grid of Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative bg-[#F5F0E6] border border-[#1A3B2F]/10 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(26,59,47,0.04)] hover:shadow-[0_20px_50px_rgba(26,59,47,0.08)] hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Elegant floating quote icon - CENTERED */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#1A3B2F] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-500 z-20">
                <svg className="w-4 h-4 text-[#F5F0E6]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div className="relative z-10 pt-4 flex flex-col items-center text-center">
                {/* 5 Stars Centered */}
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-3.5 h-3.5 text-[#8A6B32]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote Text Centered */}
                <p className="text-[#2D3D35] text-[12.5px] lg:text-[13.5px] leading-[1.8] font-light mb-8 italic">
                  "{t.quote}"
                </p>
              </div>
              
              {/* Author Section Centered */}
              <div className="relative z-10 mt-auto flex flex-col items-center text-center">
                <div className="w-8 h-[1px] bg-[#8A6B32]/60 mb-3" />
                <p className="text-[#1A3B2F] font-bold tracking-wide uppercase text-[11px] lg:text-[12px]">
                  {t.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

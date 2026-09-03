"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const moments = [
  {
    id: "01",
    src: "/extra/newIMGG.png",
    title: "Women Leaders\nSummit 2024",
    spanClass: "lg:col-span-1 lg:row-span-2",
  },
  {
    id: "02",
    src: "/extra/Steve_Day2_lunch_018_b.jpg",
    title: "Leadership Summit 2024",
    spanClass: "lg:col-span-2 lg:row-span-1",
  },
  {
    id: "03",
    src: "/extra/0b0cdce9-2847-4a30-980d-8e6179e674e5.jpg.jpeg",
    title: "Panel Discussion",
    spanClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "04",
    src: "/extra/iCloud Photos/6605e07d-16ff-4479-a41d-7d0d8e2ba63f.jpg",
    title: "Seminar on Leadership",
    spanClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "05",
    src: "/extra/iCloud Photos/IMG_4342.jpg",
    title: "Engaging\nConversations",
    spanClass: "lg:col-span-1 lg:row-span-2",
  }
];

export const GallerySection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] pt-24 pb-24 overflow-hidden font-sans">
      
      {/* Background Decor (Watercolors / Textures inspired by mockup) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#8A6B32]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8A6B32]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header Section */}
        <div className="w-full text-center mb-16 relative">
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.35em] font-medium text-[#2D3D35] mb-4">
            MOMENTS THAT INSPIRE
          </p>
          <div className="flex justify-center mb-5">
             <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0L15.5 5L24 6L15.5 7L12 12L8.5 7L0 6L8.5 5L12 0Z" fill="#C5A44E"/>
             </svg>
          </div>
          <h2 className="font-serif text-[40px] sm:text-[50px] lg:text-[64px] text-[#1A3B2F] tracking-tight leading-none mb-5">
            Moments of <span className="text-[#8A6B32]">Impact</span>
          </h2>
          <p className="text-[#2D3D35] text-[15px] sm:text-[16px] font-light max-w-lg mx-auto">
            Glimpses from talks, seminars & conferences around the world.
          </p>
          <div className="flex justify-center mt-6">
             <div className="w-1.5 h-1.5 rounded-full bg-[#8A6B32]/50"></div>
          </div>
        </div>

        {/* Exact Layout Matching Mockup (Without Captions) */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full items-stretch">
          
          {/* LEFT COLUMN (Image 01) - Pushed down, taller and narrower on mobile */}
          <div className="w-full lg:w-1/4 lg:mt-16 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-[85%] sm:w-[70%] lg:w-full flex flex-col rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-[#8A6B32]/30 bg-[#FAF8F5] shadow-[0_10px_30px_rgba(26,59,47,0.03)] group relative h-full min-h-[450px] lg:min-h-[500px]"
            >
              <div className="relative flex-1 w-full p-2 aspect-[2/3] lg:aspect-auto">
                <div className="relative w-full h-full rounded-[1.2rem] lg:rounded-[1.7rem] overflow-hidden">
                  <Image src={moments[0].src} fill alt="01" className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                </div>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN (Images 02, 03, 04) */}
          <div className="w-full lg:w-2/4 flex flex-col gap-4 lg:gap-5">
            
            {/* Top Wide (Image 02) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full relative rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-[#8A6B32]/30 bg-[#FAF8F5] p-2 shadow-[0_10px_30px_rgba(26,59,47,0.03)] group"
            >
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
                <div className="relative w-full h-full rounded-[1.2rem] lg:rounded-[1.7rem] overflow-hidden">
                  <Image src={moments[1].src} fill alt="02" className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 80vw" quality={95} />
                </div>
              </div>
            </motion.div>

            {/* Bottom Two (Images 03, 04) */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 w-full">
              {/* Image 03 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full sm:w-1/2 flex flex-col rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-[#8A6B32]/30 bg-[#FAF8F5] p-2 shadow-[0_10px_30px_rgba(26,59,47,0.03)] group"
              >
                <div className="relative w-full aspect-[4/3]">
                  <div className="relative w-full h-full rounded-[1.2rem] lg:rounded-[1.7rem] overflow-hidden">
                    <Image src={moments[2].src} fill alt="03" className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                  </div>
                </div>
              </motion.div>

              {/* Image 04 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full sm:w-1/2 flex flex-col rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-[#8A6B32]/30 bg-[#FAF8F5] p-2 shadow-[0_10px_30px_rgba(26,59,47,0.03)] group"
              >
                <div className="relative w-full aspect-[4/3]">
                  <div className="relative w-full h-full rounded-[1.2rem] lg:rounded-[1.7rem] overflow-hidden">
                    <Image src={moments[3].src} fill alt="04" className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                  </div>
                </div>
              </motion.div>
            </div>
            
          </div>

          {/* RIGHT COLUMN (Image 05) - Pushed down */}
          <div className="w-full lg:w-1/4 lg:mt-16 flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-[85%] sm:w-[70%] lg:w-full flex flex-col rounded-[1.5rem] lg:rounded-[2rem] overflow-hidden border border-[#8A6B32]/30 bg-[#FAF8F5] shadow-[0_10px_30px_rgba(26,59,47,0.03)] group relative h-full min-h-[450px] lg:min-h-[500px]"
            >
              <div className="relative flex-1 w-full p-2 aspect-[2/3] lg:aspect-auto">
                <div className="relative w-full h-full rounded-[1.2rem] lg:rounded-[1.7rem] overflow-hidden">
                  <Image src={moments[4].src} fill alt="05" className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 50vw" quality={95} />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Bottom Quote Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-10 text-center sm:text-left"
        >
          <div className="text-[60px] lg:text-[80px] font-serif text-[#C5A44E] leading-none mt-4">
            “
          </div>
          <div className="text-[#2D3D35] text-[16px] lg:text-[18px] font-medium leading-[1.6]">
            Every stage.<br />
            Every conversation.<br />
            Every moment creates impact.
          </div>
          <div className="hidden sm:block">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C5A44E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c4-4 4-10 0-14 4 4 10 4 14 0-4 4-4 10 0 14-4-4-10-4-14 0z"/>
              <path d="M12 2v20"/>
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

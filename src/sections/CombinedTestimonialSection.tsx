"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Like in every sphere of life a Guru is essential even in your business and Prerona is that perfect mentor. She not only motivates you and boosts your self confidence but also critically analyses your business from a third party perspective and gives it its necessary strategy. Most coaches would stop at that - but not Prerona. She goes all out and even guides you in your execution process. Approachable, Knowledgeable, Confident and Calm are few of the adjectives that I associate with her - she has a zest for life which is super inspiring and i am glad that she has been a part of my business journey.",
    author: "Ritusmita Biswas",
    role: "Founder and Director at Digital Brandz Pvt Limited",
    image: "/testimonials/ritusmita.jpg"
  },
  {
    quote: "After 3 months of coaching with Prerona I can say with full conviction that certain milestones I am about to reach is largely due to the commitment & systems approach of Prerona. She is very passionate in her interactive sessions leaving no stone unturned to get results.",
    author: "Pankaj Bajaj",
    role: "GROUP CEO | COFOUNDER | GLOBAL MACRO ENTHUSIAST",
    image: "/testimonials/pankaj.jpg"
  },
  {
    quote: "Prerona is amazing. I have worked with her closely for almost 5 years. She is very professional, detail oriented and passionate about everything she puts her mind to. She is a Dynamo who delivers results with a smile. A pleasure to work with.",
    author: "Harish Shadadpuri",
    role: "President and Co-founder at 1 to 1 tutor",
    image: "/testimonials/harish.jpg"
  }
];

export const CombinedTestimonialSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React bug workaround: explicitly set muted on the DOM node so autoplay isn't blocked
    video.defaultMuted = true;
    video.muted = isMuted;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch((err) => {
                console.log("Autoplay blocked:", err);
              });
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 } // Play when 20% visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, [isMuted]);

  return (
    <section className="py-16 md:py-20 bg-[#1A3B2F] relative overflow-hidden">
      
      {/* Delicate background texture/accents */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8A6B32]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EDE7DB]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Header Section (Compact) */}
        <div className="text-center mb-10 md:mb-12 relative">
          <p className="text-[10px] sm:text-[12px] uppercase tracking-[0.35em] font-semibold text-[#8A6B32] mb-2">
            Voices of Transformation
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[48px] text-[#EDE7DB] tracking-tight leading-none mb-4">
            Impact That Speaks
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-[#8A6B32]/40" />
            <div className="w-1.5 h-1.5 rounded-full border border-[#8A6B32]" />
            <div className="h-[1px] w-8 bg-[#8A6B32]/40" />
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Top Left: Video Player (col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 w-full lg:h-full aspect-video rounded-3xl overflow-hidden border border-[#1A3B2F]/10 shadow-[0_15px_40px_rgba(26,59,47,0.1)] bg-black/40 flex items-center justify-center relative group"
          >
            <video 
              ref={videoRef}
              src="https://res.cloudinary.com/bckdihv8/video/upload/Testemonial_C6_1_xplh6f.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              loop
              muted={isMuted}
              onVolumeChange={(e) => {
                setIsMuted(e.currentTarget.muted || e.currentTarget.volume === 0);
              }}
            />
            {isMuted && (
              <button 
                onClick={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = false;
                    setIsMuted(false);
                    videoRef.current.play().catch(e => console.log(e));
                  }
                }}
                className="absolute bottom-5 right-5 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full text-[11px] font-bold tracking-wider backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all z-20 shadow-xl"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
                TAP TO UNMUTE
              </button>
            )}
          </motion.div>

          {/* Top Right: Ritusmita (col-span-5) - The longest text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 relative bg-[#F5F0E6] border border-[#1A3B2F]/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-center text-center shadow-[0_10px_30px_rgba(26,59,47,0.04)] h-full"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1A3B2F] w-8 h-8 rounded-full flex items-center justify-center shadow-md z-20">
              <svg className="w-3.5 h-3.5 text-[#F5F0E6]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            <div className="flex justify-center gap-1 mb-4 mt-2">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-3 h-3 text-[#8A6B32]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-[#2D3D35] text-[12px] lg:text-[13px] leading-relaxed font-light mb-6 italic">
              "{testimonials[0].quote}"
            </p>
            <div className="mt-auto flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1A3B2F]/10 border border-[#8A6B32]/30 mb-3 overflow-hidden relative">
                {testimonials[0].image && (
                  <img src={testimonials[0].image} alt={testimonials[0].author} className="w-full h-full object-cover" />
                )}
              </div>
              <p className="text-[#1A3B2F] font-bold uppercase text-[11px]">{testimonials[0].author}</p>
              <p className="text-[#8A6B32] text-[8.5px] uppercase tracking-wider font-semibold mt-1 max-w-[90%] leading-tight text-center">
                {testimonials[0].role}
              </p>
            </div>
          </motion.div>

          {/* Bottom Left: Pankaj (col-span-6) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative bg-[#F5F0E6] border border-[#1A3B2F]/10 rounded-3xl p-6 flex flex-col justify-center text-center shadow-[0_10px_30px_rgba(26,59,47,0.04)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A3B2F] w-7 h-7 rounded-full flex items-center justify-center shadow-md z-20">
              <svg className="w-3 h-3 text-[#F5F0E6]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            <p className="text-[#2D3D35] text-[12.5px] leading-relaxed font-light mt-3 mb-5 italic">
              "{testimonials[1].quote}"
            </p>
            <div className="mt-auto flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1A3B2F]/10 border border-[#8A6B32]/30 mb-3 overflow-hidden relative">
                {testimonials[1].image && (
                  <img src={testimonials[1].image} alt={testimonials[1].author} className="w-full h-full object-cover" />
                )}
              </div>
              <p className="text-[#1A3B2F] font-bold uppercase text-[11px]">{testimonials[1].author}</p>
              <p className="text-[#8A6B32] text-[8.5px] uppercase tracking-wider font-semibold mt-1 max-w-[90%] leading-tight text-center">
                {testimonials[1].role}
              </p>
            </div>
          </motion.div>

          {/* Bottom Right: Harish (col-span-6) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 relative bg-[#F5F0E6] border border-[#1A3B2F]/10 rounded-3xl p-6 flex flex-col justify-center text-center shadow-[0_10px_30px_rgba(26,59,47,0.04)]"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1A3B2F] w-7 h-7 rounded-full flex items-center justify-center shadow-md z-20">
              <svg className="w-3 h-3 text-[#F5F0E6]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            <p className="text-[#2D3D35] text-[12.5px] leading-relaxed font-light mt-3 mb-5 italic">
              "{testimonials[2].quote}"
            </p>
            <div className="mt-auto flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#1A3B2F]/10 border border-[#8A6B32]/30 mb-3 overflow-hidden relative">
                {testimonials[2].image && (
                  <img src={testimonials[2].image} alt={testimonials[2].author} className="w-full h-full object-cover" />
                )}
              </div>
              <p className="text-[#1A3B2F] font-bold uppercase text-[11px]">{testimonials[2].author}</p>
              <p className="text-[#8A6B32] text-[8.5px] uppercase tracking-wider font-semibold mt-1 max-w-[90%] leading-tight text-center">
                {testimonials[2].role}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

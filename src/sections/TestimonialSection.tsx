"use client";

import React, { useRef, useEffect, useState } from "react";

export const TestimonialSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play when it comes into view. Note: Browsers may block unmuted autoplay until user interacts.
            video.play().catch((err) => {
              console.log("Autoplay blocked by browser policy (unmuted).", err);
            });
          } else {
            // Pause when scrolled out of view
            video.pause();
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the video is visible
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#1A3B2F] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A6B32]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8A6B32]/30 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#EDE7DB] mb-4">
            Hear From Past Participants
          </h2>
          <div className="h-[2px] w-[60px] bg-[#8A6B32] mx-auto" />
        </div>

        <div className="w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-[#8A6B32]/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40 flex items-center justify-center relative group">
          
          {/* Embedded Video */}
          <video 
            ref={videoRef}
            src="https://res.cloudinary.com/bckdihv8/video/upload/Testemonial_C6_1_xplh6f.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            controls
            playsInline
            muted={isMuted}
            onVolumeChange={(e) => {
              setIsMuted(e.currentTarget.muted || e.currentTarget.volume === 0);
            }}
          />

          {/* Tap to Unmute Overlay */}
          {isMuted && (
            <button 
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.muted = false;
                  setIsMuted(false);
                  // Ensure it keeps playing after unmuting
                  videoRef.current.play().catch(e => console.log(e));
                }
              }}
              className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 bg-black/70 hover:bg-black/90 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-[13px] font-bold tracking-wider backdrop-blur-md border border-white/20 flex items-center gap-2 transition-all z-20 shadow-xl"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              TAP TO UNMUTE
            </button>
          )}

        </div>
      </div>
    </section>
  );
};

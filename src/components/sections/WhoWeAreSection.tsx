"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([subtitleRef.current, titleRef.current, descriptionRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(photosRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.9
      });

      // Create ScrollTrigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate elements in sequence
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")
      .to(photosRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2
      }, "-=0.2");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#231546] py-16 lg:py-20 px-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-16 right-20 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute top-32 left-16 w-1 h-1 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-24 right-32 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
      <div className="absolute bottom-16 left-24 w-1 h-1 bg-white/35 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-[#F8556D] text-sm font-medium tracking-wider uppercase mb-6"
          >
            Blockchain FUPRE&apos;s Mission And Goals.
          </p>

          {/* Main Title */}
          <h2
            ref={titleRef}
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 lg:mb-8"
          >
            Who We Are
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
          >
            Blockchain FUPRE Is A Student-Led Community Dedicated To Exploring
            Blockchain Technology, Educating Students, And Building Real-World
            Applications.
          </p>
        </div>

        {/* Photo Gallery - Balanced Scattered Layout */}
        <div
          ref={photosRef}
          className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
        >
          {/* Top Left - Small team photo */}
          <div className="absolute top-0 left-4 sm:left-8 md:left-20 w-40 sm:w-48 md:w-56 h-28 sm:h-32 md:h-36 transform -rotate-6">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-2 sm:p-3 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-xl flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                    <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Team Photo</p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Right - Large group photo */}
          <div className="absolute top-6 sm:top-8 right-4 sm:right-8 md:right-20 w-48 sm:w-56 md:w-72 h-32 sm:h-40 md:h-48 transform rotate-3">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-2 sm:p-3 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-xl flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">Community</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left - Presentation photo */}
          <div className="absolute bottom-10 sm:bottom-12 left-8 sm:left-16 md:left-32 w-44 sm:w-52 md:w-64 h-30 sm:h-36 md:h-40 transform rotate-2">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-2 sm:p-3 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-xl flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">Workshop</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right - Another group photo */}
          <div className="absolute bottom-0 right-6 sm:right-12 md:right-24 w-40 sm:w-48 md:w-60 h-28 sm:h-32 md:h-40 transform -rotate-4">
            <div className="w-full h-full bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl p-2 sm:p-3 backdrop-blur-sm border border-purple-500/30 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-xl flex items-center justify-center">
                <div className="text-white/80 text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                    <svg width="12" height="12" className="sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <p className="text-xs font-medium">Event</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a0f3a]/30 pointer-events-none"></div>
    </section>
  );
};

export default WhoWeAreSection;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "../ui/Logo";

gsap.registerPlugin(ScrollTrigger);

const FooterSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([newsletterRef.current, footerContentRef.current], {
        opacity: 0,
        y: 50
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

      // Animate newsletter section
      tl.to(newsletterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(footerContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer
      ref={sectionRef}
      className="relative w-full bg-[#231546] overflow-hidden"
    >
      {/* Newsletter Section */}
      <div
        ref={newsletterRef}
        className="relative py-16 lg:py-20 px-4"
      >
        {/* Background decorative elements */}
        <div className="absolute top-16 right-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-16 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-24 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 lg:mb-12">
            Join the Community!
          </h2>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="info@gmail.com"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-[12px] text-white placeholder-white/60 focus:outline-none focus:border-[#F8556D]/50 focus:ring-2 focus:ring-[#F8556D]/20 transition-all duration-300 text-sm sm:text-base"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#F8556D] to-[#FF6B7A] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-[12px] transition-all duration-300 hover:shadow-lg hover:shadow-[#F8556D]/25 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center text-sm sm:text-base"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div
        ref={footerContentRef}
        className="border-t border-white/10 py-12 lg:py-16 px-4"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Logo and Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-6">
                <Logo size="2xl" showText={false} />
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Blockchain FUPRE is a student-driven community dedicated to educating, innovating, and advancing blockchain technology at FUPRE. We empower students with hands-on learning, industry connections, and real-world blockchain applications.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F8556D] hover:border-[#F8556D] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F8556D] hover:border-[#F8556D] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F8556D] hover:border-[#F8556D] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-[#F8556D] hover:border-[#F8556D] transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div className="sm:col-span-1 lg:col-span-1">
              <h3 className="text-white font-bold text-lg mb-4 lg:mb-6">Links</h3>
              <ul className="space-y-3 lg:space-y-4">
                <li>
                  <a href="#" className="text-white/70 hover:text-[#F8556D] transition-colors duration-300 text-sm">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#F8556D] transition-colors duration-300 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#F8556D] transition-colors duration-300 text-sm">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-[#F8556D] transition-colors duration-300 text-sm">
                    Team Members
                  </a>
                </li>
              </ul>
            </div>

            {/* Empty column for spacing on larger screens */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
            <p className="text-white/60 text-sm">
              All rights reserved @BlockchainFUPRE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

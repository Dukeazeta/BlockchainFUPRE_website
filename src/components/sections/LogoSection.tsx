"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Crypto-related logos as SVG components
const BitcoinLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#F7931A" stroke="#fff" strokeWidth="0.5"/>
    <path d="M19.5 15h4c2.2 0 4 .8 4 3 0 1.5-1 2.5-2.5 2.8v.1c2 .3 3.2 1.5 3.2 3.5 0 2.8-2.2 4.4-5.2 4.4H19.5V15zm3 5.2h.8c1 0 1.8-.5 1.8-1.5s-.8-1.5-1.8-1.5h-.8v3zm0 5.8h1c1.2 0 2-.5 2-1.8s-.8-1.8-2-1.8h-1v3.6z" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Bitcoin</text>
  </svg>
);

const EthereumLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#627EEA" stroke="#fff" strokeWidth="0.5"/>
    <path d="M25 10l-7.5 12.8L25 27.5l7.5-4.7L25 10z" fill="white" fillOpacity="0.6"/>
    <path d="M17.5 22.8L25 40l7.5-17.2L25 27.5l-7.5-4.7z" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Ethereum</text>
  </svg>
);

const BinanceLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#F3BA2F" stroke="#fff" strokeWidth="0.5"/>
    <path d="M20 20l5-5 5 5-2.5 2.5-2.5-2.5-2.5 2.5L20 20zm-5 5l2.5-2.5 2.5 2.5-2.5 2.5L15 25zm5 5l5 5 5-5-2.5-2.5-2.5 2.5-2.5-2.5L20 30zm10-5l2.5-2.5 2.5 2.5-2.5 2.5L30 25zm-5-2.5l2.5-2.5 2.5 2.5-2.5 2.5-2.5-2.5z" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Binance</text>
  </svg>
);

const PolygonLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#8247E5" stroke="#fff" strokeWidth="0.5"/>
    <path d="M31 17l-3.5 2v4.2l-2.5 1.5-2.5-1.5V19l-3.5-2-3.5 2v8.2l3.5 2 2.5-1.5v4.2l2.5 1.5 2.5-1.5v-4.2l2.5 1.5 3.5-2V19L31 17z" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Polygon</text>
  </svg>
);

const SolanaLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#9945FF" stroke="#fff" strokeWidth="0.5"/>
    <path d="M17 20h12.5l-2.5-2.5H15L17 20zm0 5h15l-2.5 2.5H17l-2.5-2.5H17zm0 5h12.5l2.5-2.5H19.5L17 30z" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Solana</text>
  </svg>
);

const CardanoLogo = () => (
  <svg width="160" height="50" viewBox="0 0 160 50" fill="none" className="opacity-60 hover:opacity-100 transition-opacity">
    <circle cx="25" cy="25" r="22" fill="#0033AD" stroke="#fff" strokeWidth="0.5"/>
    <circle cx="25" cy="25" r="10" fill="none" stroke="white" strokeWidth="1.8"/>
    <circle cx="25" cy="17" r="2.5" fill="white"/>
    <circle cx="33" cy="25" r="2.5" fill="white"/>
    <circle cx="25" cy="33" r="2.5" fill="white"/>
    <circle cx="17" cy="25" r="2.5" fill="white"/>
    <text x="55" y="30" fill="white" fontSize="18" fontWeight="bold">Cardano</text>
  </svg>
);

const logos = [BitcoinLogo, EthereumLogo, BinanceLogo, PolygonLogo, SolanaLogo, CardanoLogo];

const LogoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const logoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!logoContainerRef.current) return;

      // Set initial states for logos
      gsap.set(logoContainerRef.current.children, {
        opacity: 0,
        y: 30,
        scale: 0.8
      });

      // Create ScrollTrigger animation for entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate logos entrance
      tl.to(logoContainerRef.current.children, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      // Add floating animation
      Array.from(logoContainerRef.current.children).forEach((logo, index) => {
        gsap.to(logo, {
          y: "+=5",
          duration: 2 + index * 0.1,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
          delay: index * 0.2
        });
      });

      // Infinite horizontal scroll animation
      const logoWidth = 176; // logo width + gap
      const totalWidth = logoWidth * logos.length;

      gsap.to(logoContainerRef.current, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#231546] py-12 lg:py-16 overflow-hidden"
    >
      {/* Background decorative stars */}
      <div className="absolute top-8 left-20 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-16 right-32 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-12 left-40 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-24 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-8 left-1/4 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8 lg:mb-12 px-4">
          <h2 className="text-white/60 text-sm font-medium tracking-wider uppercase">
            Trusted By The Blockchain Community
          </h2>
        </div>

        {/* Logo Container with infinite scroll */}
        <div className="relative overflow-hidden">
          <div
            ref={logoContainerRef}
            className="flex items-center gap-12 lg:gap-16"
            style={{
              width: `${(160 + 64) * logos.length * 2}px`,
              willChange: 'transform'
            }}
          >
            {/* First set of logos */}
            {logos.map((LogoComponent, index) => (
              <div key={index} className="flex-shrink-0">
                <LogoComponent />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((LogoComponent, index) => (
              <div key={`duplicate-${index}`} className="flex-shrink-0">
                <LogoComponent />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;

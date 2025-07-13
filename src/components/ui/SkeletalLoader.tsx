"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const SkeletalLoader: React.FC = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([logoRef.current, textRef.current], {
        opacity: 0,
        scale: 0.8,
        y: 30
      });

      gsap.set(progressRef.current, {
        width: "0%"
      });

      // Create main timeline
      const tl = gsap.timeline();

      // Logo animation
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })

      // Text animation
      .to(textRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")

      // Progress bar animation
      .to(progressRef.current, {
        width: "100%",
        duration: 2.5,
        ease: "power2.inOut"
      }, "-=0.2");

      // Logo pulse animation
      gsap.to(logoRef.current, {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });

      // Floating particles animation
      const particles = particlesRef.current?.children;
      if (particles) {
        Array.from(particles).forEach((particle, index) => {
          // Use deterministic values based on index to avoid hydration mismatch
          const yValues = [-20, -15, -10, -5, 0, 5, 10, 15, 20];
          const xValues = [-15, -10, -5, 0, 5, 10, 15];
          const rotationValues = [-180, -135, -90, -45, 0, 45, 90, 135, 180];
          const durationValues = [2, 2.5, 3, 3.5, 4];

          gsap.to(particle, {
            y: yValues[index % yValues.length],
            x: xValues[index % xValues.length],
            rotation: rotationValues[index % rotationValues.length],
            duration: durationValues[index % durationValues.length],
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
          });
        });
      }

      // Text shimmer effect
      gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        duration: 2,
        ease: "none",
        repeat: -1
      });

    }, loaderRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#231546] via-[#2a1a5e] to-[#1a0f3a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated background particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          // Use deterministic positions based on index to avoid hydration mismatch
          const positions = [
            { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 25, top: 75 }, { left: 70, top: 45 },
            { left: 45, top: 10 }, { left: 90, top: 80 }, { left: 15, top: 60 }, { left: 60, top: 25 },
            { left: 35, top: 85 }, { left: 80, top: 35 }, { left: 5, top: 50 }, { left: 95, top: 65 },
            { left: 50, top: 5 }, { left: 20, top: 90 }, { left: 75, top: 55 }, { left: 40, top: 30 },
            { left: 65, top: 70 }, { left: 30, top: 40 }, { left: 85, top: 85 }, { left: 55, top: 95 }
          ];
          const pos = positions[i] || { left: 50, top: 50 };

          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          );
        })}
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-[#F8556D]/20 to-[#FF6B7A]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        
        {/* Logo */}
        <div ref={logoRef} className="relative">
          <div className="w-24 h-24 relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md border border-white/20">
            <Image
              src="/Logo.png"
              alt="Blockchain FUPRE Logo"
              fill
              className="object-contain p-2"
              priority
            />
          </div>

          {/* Rotating ring */}
          <div className="absolute inset-0 border-2 border-transparent border-t-[#F8556D] border-r-[#F8556D] rounded-2xl animate-spin"></div>
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#F8556D] to-white bg-clip-text text-transparent bg-[length:200%_100%] animate-shimmer"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #F8556D 50%, #ffffff 100%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 2s ease-in-out infinite'
            }}
          >
            Blockchain FUPRE
          </h1>
          <p className="text-white/70 text-lg mt-2 animate-pulse">
            Loading the future...
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-gradient-to-r from-[#F8556D] to-[#FF6B7A] rounded-full relative"
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-[#F8556D] rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Custom CSS for shimmer effect */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SkeletalLoader;

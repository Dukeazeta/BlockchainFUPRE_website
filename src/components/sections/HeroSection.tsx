"use client";

import React, { useEffect, useRef } from "react";
import Button from "../ui/Button";
import Navbar from "../ui/Navbar";
import { gsap } from "gsap";

// Community images
const images = [
  "/images/blockchain-team-1.jpg",
  "/images/blockchain-team-2.jpg",
  "/images/blockchain-presentation.jpg"
];

const cardPositions = [
  { left: "0px", top: "40px", rotate: "-8deg", z: 1 },
  { left: "80px", top: "0px", rotate: "0deg", z: 3 },
  { left: "160px", top: "40px", rotate: "8deg", z: 2 },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([navRef.current, heroTextRef.current, heroDescRef.current, buttonsRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(cardsContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10
      });

      // Create main timeline
      const tl = gsap.timeline();

      // Navbar animation
      tl.to(navRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })

      // Hero text animations
      .to(heroTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

      .to(heroDescRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")

      // Cards container animation
      .to(cardsContainerRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, "-=0.4");

      // Menu items stagger animation
      if (menuItemsRef.current) {
        gsap.fromTo(menuItemsRef.current.children,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.3
          }
        );
      }

      // Logo pulse animation removed

      // Add hover effects for spreading out cards using React state
      if (cardsContainerRef.current) {
        const container = cardsContainerRef.current;

        container.addEventListener('mouseenter', () => {
          console.log('Adding spread-cards class');
          container.classList.add('spread-cards');
        });

        container.addEventListener('mouseleave', () => {
          console.log('Removing spread-cards class');
          container.classList.remove('spread-cards');
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-[#231546] flex flex-col items-center justify-start overflow-hidden">
      {/* Navbar */}
      <Navbar
        navRef={navRef}
        menuItemsRef={menuItemsRef}
      />

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-24 lg:mt-32 gap-8 lg:gap-12 z-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start gap-6 lg:gap-8 text-center lg:text-left">
          <div ref={heroTextRef}>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl mx-auto lg:mx-0">
              Empowering The Future Of Blockchain At FUPRE
            </h1>
          </div>
          <p ref={heroDescRef} className="text-white/80 text-base sm:text-lg md:text-xl max-w-lg mx-auto lg:mx-0">
            Join a vibrant community of innovators, learners, and leaders driving blockchain technology at the Federal University of Petroleum Resources, Effurun. Discover events, connect with experts, and shape the future with us.
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto justify-center lg:justify-start">
            <Button className="w-full sm:w-auto">
              Explore Events
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Join Us
            </Button>
          </div>
        </div>
        {/* Right: Community Photos */}
        <div className="flex-1 flex items-center justify-center relative min-h-[350px] lg:min-h-[450px] w-full max-w-lg lg:max-w-none overflow-visible">
          {/* Glassmorphism photo cards */}
          <div ref={cardsContainerRef} className="relative w-full max-w-[600px] lg:max-w-[700px] h-[300px] lg:h-[350px] cursor-pointer group">
            {images.map((_, i) => (
              <div
                key={i}
                className={`absolute w-48 sm:w-56 lg:w-64 h-32 sm:h-36 lg:h-40 rounded-[15px] bg-white/20 backdrop-blur-[12px] border border-white/30 shadow-2xl overflow-hidden transition-all duration-700 ease-out community-card-${i}`}
                style={{
                  left: `${parseInt(cardPositions[i].left) * 0.8}px`,
                  top: cardPositions[i].top,
                  zIndex: cardPositions[i].z,
                  transform: `rotate(${cardPositions[i].rotate})`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <div className="text-white/80 text-center p-3 lg:p-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <svg width="20" height="20" className="lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                    </div>
                    <p className="text-xs lg:text-sm font-medium">Community {i + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for hover spread effect */}
      <style jsx>{`
        .spread-cards .community-card-0 {
          transform: translateX(-120px) translateY(-20px) rotate(-20deg) scale(1.05) !important;
          z-index: 15 !important;
        }

        .spread-cards .community-card-1 {
          transform: translateX(0px) translateY(-50px) rotate(0deg) scale(1.1) !important;
          z-index: 16 !important;
        }

        .spread-cards .community-card-2 {
          transform: translateX(120px) translateY(-20px) rotate(20deg) scale(1.05) !important;
          z-index: 15 !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
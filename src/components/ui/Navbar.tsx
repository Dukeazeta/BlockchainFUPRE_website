"use client";

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { gsap } from "gsap";

const menuItems = ["HOME", "ABOUT US", "EVENTS", "TEAM MEMBERS"];

interface NavbarProps {
  navRef?: React.RefObject<HTMLElement | null>;
  menuItemsRef?: React.RefObject<HTMLUListElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ navRef, menuItemsRef }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuItemsRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Mobile menu animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobileMenuOpen) {
        // Set initial states
        gsap.set(mobileMenuRef.current, { x: "100%" });
        gsap.set(overlayRef.current, { opacity: 0 });

        // Open animation
        const tl = gsap.timeline();

        // Animate overlay
        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        })

        // Slide in menu
        .to(mobileMenuRef.current, {
          x: "0%",
          duration: 0.5,
          ease: "power3.out"
        }, "-=0.1");

        // Hamburger to X animation
        gsap.to(hamburgerRef.current?.children[0], {
          rotation: 45,
          y: 6,
          duration: 0.3
        });
        gsap.to(hamburgerRef.current?.children[1], {
          opacity: 0,
          duration: 0.2
        });
        gsap.to(hamburgerRef.current?.children[2], {
          rotation: -45,
          y: -6,
          duration: 0.3
        });

      } else {
        // Close animation
        const tl = gsap.timeline();

        tl.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power3.in"
        })

        .to(overlayRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        }, "-=0.2");

        // X to hamburger animation
        gsap.to(hamburgerRef.current?.children[0], {
          rotation: 0,
          y: 0,
          duration: 0.3
        });
        gsap.to(hamburgerRef.current?.children[1], {
          opacity: 1,
          duration: 0.2,
          delay: 0.1
        });
        gsap.to(hamburgerRef.current?.children[2], {
          rotation: 0,
          y: 0,
          duration: 0.3
        });
      }
    });

    return () => ctx.revert();
  }, [isMobileMenuOpen]);

  // Close menu when clicking overlay
  const handleOverlayClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <header className="w-full pt-4 sm:pt-6 z-20 relative">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <Logo size="2xl" showText={false} />
          </div>

          {/* Centered Navigation Links Container */}
          <nav
            ref={navRef}
            className="hidden lg:block px-4 xl:px-6 py-2.5 rounded-[12px] bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
          >
            <ul ref={menuItemsRef} className="flex gap-4 xl:gap-6 text-white/90 font-medium text-sm">
              {menuItems.map((item) => (
                <li key={item} className="hover:text-white transition-colors cursor-pointer relative group whitespace-nowrap">
                  {item}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F8556D] transition-all duration-300 group-hover:w-full"></div>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Far Right */}
          <div className="hidden lg:block flex-shrink-0">
            <Button className="px-4 xl:px-5 py-2.5 text-sm">
              Join The Community
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            ref={hamburgerRef}
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-30 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
            <div className="w-6 h-0.5 bg-white transition-all duration-300"></div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={handleOverlayClick}
      />

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-80 bg-[#231546]/95 backdrop-blur-xl border-l border-white/20 z-50 flex flex-col translate-x-full"
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <Logo size="2xl" showText={false} />
        </div>

        {/* Menu Items */}
        <div ref={mobileMenuItemsRef} className="flex-1 flex flex-col justify-center px-6 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={item}
              className="group cursor-pointer opacity-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="text-white text-xl font-medium py-4 border-b border-white/10 transition-all duration-300 group-hover:text-[#F8556D] group-hover:border-[#F8556D]/30">
                <div className="flex items-center justify-between">
                  <span>{item}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="p-6 border-t border-white/10">
          <Button className="w-full">
            Join The Community
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

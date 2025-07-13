"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Full Name",
    role: "Team Lead And Founder",
    image: "/images/team-member-1.jpg",
    position: { top: "0%", left: "5%", rotate: "-8deg" }
  },
  {
    id: 2,
    name: "Full Name", 
    role: "Blockchain Developer",
    image: "/images/team-member-2.jpg",
    position: { top: "0%", right: "5%", rotate: "8deg" }
  },
  {
    id: 3,
    name: "Team Members",
    role: "BlockchainFUPRE",
    image: "/images/team-group.jpg",
    position: { top: "25%", left: "50%", rotate: "0deg", transform: "translateX(-50%)" },
    isCenter: true
  },
  {
    id: 4,
    name: "Full Name",
    role: "Blockchain Developer", 
    image: "/images/team-member-3.jpg",
    position: { bottom: "0%", left: "5%", rotate: "6deg" }
  },
  {
    id: 5,
    name: "Full Name",
    role: "Co-Lead",
    image: "/images/team-member-4.jpg", 
    position: { bottom: "0%", right: "5%", rotate: "-6deg" }
  }
];

const TeamSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(cardsContainerRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        rotationY: 45
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

      // Animate title and subtitle
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
      }, "-=0.4");

      // Animate team cards with stagger
      if (cardsContainerRef.current) {
        tl.to(cardsContainerRef.current.children, {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.4");
      }

      // Add hover animations for cards
      const cards = cardsContainerRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              scale: 1.05,
              y: -10,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#231546] py-16 lg:py-20 px-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-16 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 left-24 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 right-40 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-32 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            ref={subtitleRef}
            className="text-[#F8556D] text-sm font-medium tracking-wider uppercase mb-4"
          >
            Meet The Team Behind Blockchain FUPRE
          </p>
          <div ref={titleRef}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Our Team & Partners
            </h2>
          </div>
        </div>

        {/* Team Cards Layout - Responsive Grid for Mobile, Absolute for Desktop */}
        <div className="block lg:hidden">
          {/* Mobile Grid Layout */}
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="w-full h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 shadow-2xl overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-3/4 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-[15px] mb-4 overflow-hidden relative">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center text-white/60">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                        <p className="text-xs opacity-80">Team Photo</p>
                      </div>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#F8556D] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-[#F8556D]/0 group-hover:border-[#F8556D]/50 rounded-[20px] transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Absolute Layout */}
        <div className="hidden lg:block">
          <div
            className="relative w-full h-[700px] xl:h-[800px]"
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`absolute ${member.isCenter ? 'w-80 h-[420px]' : 'w-72 h-96'} group cursor-pointer`}
                style={{
                  ...member.position,
                  transform: `${member.position.transform || ''} rotate(${member.position.rotate})`,
                }}
              >
                {/* Card */}
                <div className="w-full h-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 shadow-2xl overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-3/4 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-[15px] mb-4 overflow-hidden relative">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full flex items-center justify-center text-white/60">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                          </svg>
                        </div>
                        <p className="text-sm opacity-80">Team Photo</p>
                      </div>
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#F8556D] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-white/70 text-sm font-medium">
                      {member.role}
                    </p>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-[#F8556D]/0 group-hover:border-[#F8556D]/50 rounded-[20px] transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

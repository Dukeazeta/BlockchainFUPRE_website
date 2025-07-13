"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Events data
const events = [
  {
    id: 1,
    title: "Event Title",
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    image: "/images/blockchain-event-1.jpg",
    registerLink: "#"
  },
  {
    id: 2,
    title: "Event Title", 
    description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    image: "/images/blockchain-event-2.jpg",
    registerLink: "#"
  }
];

const EventsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const eventsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(eventsContainerRef.current?.children || [], {
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

      // Animate event cards with stagger
      if (eventsContainerRef.current) {
        tl.to(eventsContainerRef.current.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)"
        }, "-=0.4");
      }

      // Add hover animations for cards
      const cards = eventsContainerRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          cardElement.addEventListener('mouseleave', () => {
            gsap.to(cardElement, {
              y: 0,
              scale: 1,
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
      <div className="absolute top-16 right-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-32 left-16 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-24 right-32 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-24 w-1 h-1 bg-white/35 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            ref={subtitleRef}
            className="text-[#F8556D] text-sm font-medium tracking-wider uppercase mb-4"
          >
            Upcoming And Past Events
          </p>
          <div ref={titleRef}>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Exciting Events & Hands-On<br className="hidden sm:block" />
              Workshops
            </h2>
          </div>
        </div>

        {/* Events Grid */}
        <div
          ref={eventsContainerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12"
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="group cursor-pointer"
            >
              {/* Event Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-4 sm:p-6 shadow-2xl overflow-hidden transition-all duration-300 group-hover:border-[#F8556D]/50 h-full">

                {/* Event Image/Visual */}
                <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-purple-500/40 via-blue-500/40 to-pink-500/40 rounded-[15px] mb-4 sm:mb-6 overflow-hidden relative">
                  {/* Blockchain Visual Effect */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Animated Blockchain Icon */}
                    <div className="relative">
                      {/* Outer Ring */}
                      <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-spin-slow relative">
                        <div className="absolute inset-2 border-2 border-[#F8556D]/50 rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Center Hexagon Pattern */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1">
                          {[...Array(7)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 ${
                                i === 1 || i === 3 || i === 5 ? 'bg-[#F8556D]' : 'bg-white/60'
                              } transform rotate-45 animate-pulse`}
                              style={{
                                animationDelay: `${i * 0.2}s`,
                                display: i === 0 || i === 2 || i === 6 ? 'none' : 'block'
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Floating Particles */}
                      <div className="absolute -top-4 -left-4 w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                      <div className="absolute -top-2 -right-6 w-1 h-1 bg-[#F8556D]/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute -bottom-4 -right-2 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                      <div className="absolute -bottom-2 -left-6 w-1 h-1 bg-[#F8556D]/40 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                    </div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Event Content */}
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-white font-bold text-lg sm:text-xl group-hover:text-[#F8556D] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                    {event.description}
                  </p>

                  {/* Register Button */}
                  <button className="w-full bg-gradient-to-r from-[#F8556D] to-[#FF6B7A] text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-[12px] transition-all duration-300 hover:shadow-lg hover:shadow-[#F8556D]/25 hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;

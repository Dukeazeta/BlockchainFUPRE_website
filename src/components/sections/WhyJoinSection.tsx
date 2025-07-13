"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Feature card data
const features = [
  {
    icon: "🎓",
    title: "Learn Blockchain From Experts",
    description: "Access Free Blockchain Training",
    details: "Get hands-on learning from industry professionals and academic experts in blockchain technology."
  },
  {
    icon: "🛠️",
    title: "Hands-On Projects",
    description: "Build And Contribute To Real Projects",
    details: "Work on real-world blockchain projects that make a difference in the industry."
  },
  {
    icon: "🌐",
    title: "Networking & Internships",
    description: "Connect With Industry Experts",
    details: "Build valuable connections and gain access to exclusive internship opportunities."
  },
  {
    icon: "🏆",
    title: "Hackathons & Competitions",
    description: "Compete, Win Prizes, And Gain Experience",
    details: "Participate in exciting competitions and showcase your blockchain development skills."
  }
];

const WhyJoinSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaBadgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50
      });

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.8
      });

      gsap.set(ctaBadgeRef.current, {
        opacity: 0,
        y: 50,
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
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");

      // Animate cards with stagger
      if (cardsRef.current) {
        tl.to(cardsRef.current.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)"
        }, "-=0.4");
      }

      // Animate CTA badge
      tl.to(ctaBadgeRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.2");

      // Add hover animations for cards
      const cards = cardsRef.current?.children;
      if (cards) {
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          
          cardElement.addEventListener('mouseenter', () => {
            gsap.to(cardElement, {
              y: -10,
              scale: 1.05,
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

      // Floating animation for icons
      const icons = sectionRef.current?.querySelectorAll('.feature-icon');
      if (icons) {
        icons.forEach((icon, index) => {
          gsap.to(icon, {
            y: "+=8",
            duration: 2 + index * 0.3,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1,
            delay: index * 0.2
          });
        });
      }

      // Add floating animation to the CTA badge
      gsap.to(ctaBadgeRef.current, {
        y: "+=6",
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#231546] py-16 lg:py-20 px-4 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute top-32 left-20 w-1 h-1 bg-white/30 rounded-full"></div>
      <div className="absolute bottom-20 right-32 w-1.5 h-1.5 bg-white/25 rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p
            ref={subtitleRef}
            className="text-[#F8556D] text-sm font-medium tracking-wider uppercase mb-4"
          >
            Why Be Part Of Blockchain FUPRE?
          </p>
          <h2
            ref={titleRef}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto"
          >
            Why Join Blockchain FUPRE?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md border border-white/20 rounded-[20px] p-6 lg:p-8 hover:bg-white/15 transition-all duration-300 cursor-pointer h-full"
            >
              {/* Icon */}
              <div className="feature-icon text-4xl mb-6 flex justify-center">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-[15px] flex items-center justify-center text-xl lg:text-2xl">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-white text-lg lg:text-xl font-bold mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm font-medium mb-4">
                  {feature.description}
                </p>
                <p className="text-white/60 text-xs leading-relaxed">
                  {feature.details}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8556D]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[20px]"></div>
            </div>
          ))}
        </div>

        {/* CTA Badge */}
        <div className="text-center mt-12 lg:mt-16">
          <div
            ref={ctaBadgeRef}
            className="inline-block"
          >
            <div className="bg-gradient-to-r from-[#F8556D] to-[#FF6B7A] text-white px-6 sm:px-8 py-3 rounded-full text-sm font-medium tracking-wide shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              Ready To Be Part Of The Future? Join Us Today!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;

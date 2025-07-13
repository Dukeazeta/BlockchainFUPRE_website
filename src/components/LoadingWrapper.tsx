"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SkeletalLoader from "./ui/SkeletalLoader";

interface LoadingWrapperProps {
  children: React.ReactNode;
  loadingDuration?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ 
  children, 
  loadingDuration = 3000 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration]);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Set initial state for content
        gsap.set(contentRef.current, {
          opacity: 0,
          scale: 0.95
        });

        // Create exit animation for loader and entrance for content
        const tl = gsap.timeline({
          onComplete: () => {
            setShowContent(true);
          }
        });

        // Fade out loader
        tl.to(loaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.inOut"
        })

        // Fade in content
        .to(contentRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out"
        }, "-=0.3");

      });

      return () => ctx.revert();
    }
  }, [isLoading]);

  return (
    <>
      {/* Skeletal Loader */}
      {isLoading && (
        <div ref={loaderRef}>
          <SkeletalLoader />
        </div>
      )}

      {/* Main Content */}
      <div 
        ref={contentRef}
        className={`${isLoading ? 'opacity-0' : ''}`}
        style={{ display: isLoading ? 'none' : 'block' }}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingWrapper;

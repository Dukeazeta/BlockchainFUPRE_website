"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showText?: boolean;
  textColor?: "white" | "dark";
}

const Logo: React.FC<LogoProps> = ({
  size = "md",
  className = "",
  showText = false,
  textColor = "white"
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-24 h-24",
    "2xl": "w-32 h-32"
  };

  const textSizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
    "2xl": "text-3xl"
  };

  const textColorClasses = {
    white: "text-white",
    dark: "text-gray-900"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative rounded-lg overflow-hidden`}>
        <Image
          src="/Logo.png"
          alt="Blockchain FUPRE Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className={`${textSizeClasses[size]} font-bold tracking-wide`}>
          <span className={textColorClasses[textColor]}>Blockchain</span>
          <span className="text-[#F8556D]">FUPRE</span>
        </div>
      )}
    </div>
  );
};

export default Logo;

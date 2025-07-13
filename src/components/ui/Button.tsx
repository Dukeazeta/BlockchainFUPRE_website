import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "font-semibold px-6 py-3 rounded-[15px] transition-colors text-base shadow-md";
  const variants = {
    primary: "bg-[#F8556D] text-white hover:bg-[#e04a60]",
    secondary:
      "bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button; 
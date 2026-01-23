import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

const variantStyles = {
  primary: "bg-white text-black hover:bg-gray-200 shadow-lg",
  secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10",
  outline: "border border-white/20 text-white hover:bg-white/5",
  ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  accent: "bg-[#6b21ff] text-white hover:bg-[#6b21ff]/80 shadow-[0_0_20px_rgba(107,33,255,0.4)]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-xs uppercase tracking-wider",
  md: "px-6 py-3 text-sm font-bold",
  lg: "px-8 py-4 text-base font-bold",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="mr-2 opacity-80">{icon}</span>}
      {children}
    </button>
  );
};
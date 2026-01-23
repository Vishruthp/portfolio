import React from "react";

type BadgeProps = {
  label: string;
  variant?: "success" | "info" | "warning" | "danger" | "neutral";
  icon?: React.ReactNode;
  className?: string;
};

const variantStyles = {
  success: "bg-green-500/10 text-green-400 border-green-500/20",
  info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
  neutral: "bg-white/5 text-gray-300 border-white/10",
};

function Badge({
  label,
  variant = "neutral",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {label}
    </span>
  );
}

export default Badge;

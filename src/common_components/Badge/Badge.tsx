import React from "react";

type BadgeProps = {
  label: string;
  variant?: "success" | "info" | "warning" | "danger" | "neutral";
  icon?: React.ReactNode;
  className?: string;
};

const variantStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  danger: "bg-red-100 text-red-800 border-red-300",
  neutral: "bg-gray-100 text-gray-800 border-gray-300",
};

function Badge({
  label,
  variant = "neutral",
  icon,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </span>
  );
}

export default Badge;

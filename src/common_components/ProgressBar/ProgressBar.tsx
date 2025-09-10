
import React from 'react'

type ProgressBarProps = {
  value: number; // 0 to 100
  label?: string;
  color?: "blue" | "green" | "yellow" | "red" | "gray";
  showValue?: boolean;
  icon?: React.ReactElement;
};

const colorVariants = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  yellow: "bg-yellow-500",
  red: "bg-red-600",
  gray: "bg-gray-500",
};


function ProgressBar({
  value,
  label,
  color = "blue",
  icon,
  showValue = true,
} : ProgressBarProps) {
  return (
     <div className="w-full">
      <div className="flex items-center gap-2">
        {label && <div className="mb-1 text-sm font-medium">{label}</div>}
        {icon && <div className="mb-1 text-sm font-medium">{icon}</div>}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${colorVariants[color]}`}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        ></div>
      </div>
      {showValue && <div className="text-sm mt-1 text-right">{value}%</div>}
    </div>
  )
}

export default ProgressBar
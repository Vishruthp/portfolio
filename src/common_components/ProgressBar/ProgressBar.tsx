
import React from 'react'

type ProgressBarProps = {
  value: number; // 0 to 100
  label?: string;
  color?: "blue" | "green" | "yellow" | "red" | "accent";
  showValue?: boolean;
  icon?: React.ReactElement;
};

const colorVariants = {
  blue: "from-blue-600 to-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.4)]",
  green: "from-emerald-600 to-emerald-400 shadow-[0_0_10px_rgba(5,150,105,0.4)]",
  yellow: "from-amber-500 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.4)]",
  red: "from-rose-600 to-rose-400 shadow-[0_0_10px_rgba(225,29,72,0.4)]",
  accent: "from-[#6b21ff] to-[#00e5ff] shadow-[0_0_10px_rgba(107,33,255,0.4)]",
};


function ProgressBar({
  value,
  label,
  color = "blue",
  icon,
  showValue = true,
} : ProgressBarProps) {
  return (
     <div className="w-full group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-accent-secondary">{icon}</span>}
          {label && <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-white transition-colors">{label}</div>}
        </div>
        {showValue && <div className="text-[10px] font-bold text-accent-secondary tabular-nums">{value}%</div>}
      </div>
      <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden border border-white/5">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${colorVariants[color]}`}
          style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
import React from "react";
import { Typography } from "../Typography/Typography";

type TimelineItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
};

function TimelineItem({
  title,
  subtitle,
  description,
  date,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-12 transition-all group">
      <div className="absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-[0_0_15px_rgba(107,33,255,0.5)] group-hover:scale-125 transition-transform" />
      
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-accent-secondary">
          {date}
        </div>
        
        <div className="space-y-1">
          <Typography variant="h4" fontWeight="semibold" className="text-white group-hover:text-accent-secondary transition-colors">
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="h6"
              fontWeight="medium"
              className="text-gray-400 font-medium"
            >
              {subtitle}
            </Typography>
          )}
        </div>
        
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed max-w-4xl group-hover:text-gray-400 transition-colors">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default TimelineItem;

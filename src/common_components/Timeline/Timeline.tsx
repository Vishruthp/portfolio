import React from "react";
import TimelineItem from "./TimelineItem";

type Item = {
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
};

type TimelineProps = {
  items: Item[];
};

function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative border-l-2 border-white/5 ml-4 sm:ml-6 space-y-2">
      <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/50 via-accent-secondary/50 to-transparent pointer-events-none" />
      
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </div>
  );
}

export default Timeline;

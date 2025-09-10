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
    <div className="relative border-l-2 border-gray-200 pl-4 sm:pl-6">
      {items.map((item, idx) => (
        <TimelineItem key={idx} {...item} />
      ))}
    </div>
  );
}

export default Timeline;

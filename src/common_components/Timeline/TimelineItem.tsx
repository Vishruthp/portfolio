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
    <div className="relative pl-8 sm:pl-10 pb-10">
      <div className="absolute left-2.5 sm:left-3 top-1.5 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md" />
      <div className="text-sm text-white mb-1">{date}</div>
      <Typography variant="h4" fontWeight="semibold">
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          fontWeight="medium"
          className="text-md"
        >
          {subtitle}
        </Typography>
      )}
      {description && (
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
}

export default TimelineItem;

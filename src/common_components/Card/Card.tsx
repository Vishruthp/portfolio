import React from "react";
import "./Card.css";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`glass glass-hover w-full p-6 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;

import React from "react";
import "./Card.css";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
  cardBackground?: CardBackground;
};


export enum CardBackground {
  primary = "#1b1b1bff",
  secondary = "#24362bff",
}

function Card({
  children,
  className = "",
  cardBackground = CardBackground.primary,
}: CardProps) {
  return (
    <div
      className={`card w-full ${className} transition-transform duration-200 hover:scale-102 hover:shadow-lg`}
      style={{
        backgroundColor: cardBackground,
        color: cardBackground === CardBackground.secondary ? "#000" : "#fff",
      }}
    >
      {children}
    </div>
  );
}

export default Card;

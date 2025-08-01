import React from "react";
import { FontWeight, Variant } from "../types";

const variantClasses: Record<Variant, string> = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
};

const fontWeights: Record<FontWeight, string> = {
  bold: "font-bold",
  semibold: "font-semibold",
  medium: "font-medium",
  normal: "font",
};

type TypographyProps = {
  variant: Variant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fontWeight: FontWeight;
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = "",
  as,
  fontWeight = "medium",
}) => {
  const Component = as || (variant.startsWith("h") ? variant : "p");

  return (
    <Component
      className={`${variantClasses[variant]} ${fontWeights[fontWeight]} ${className}`}
    >
      {children}
    </Component>
  );
};

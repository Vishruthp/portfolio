export const AvatarSize = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 96,
} as const;

export type AvatarSizeKey = keyof typeof AvatarSize;

export const BadgeColor = {
  primary: "bg-blue-500",
  secondary: "bg-green-500",
  danger: "bg-red-500",
  warning: "bg-yellow-500",
  info: "bg-cyan-500",
} as const;

export type BadgeColorKey = keyof typeof BadgeColor;
export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type FontWeight = "bold" | "semibold" | "medium" | "normal";

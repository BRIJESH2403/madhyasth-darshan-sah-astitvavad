"use client";

import React from "react";

type ButtonSize = "lg" | "md" | "sm";
type ButtonType = "primary" | "white";

interface CtaButtonProps {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  showBorder?: boolean;
  icon?: React.ReactNode;
  className?: string;
  size?: ButtonSize;
  buttonType?: ButtonType;
  iconColor?: "white" | "black";
}

const sizeClasses: Record<ButtonSize, string> = {
  lg: "w-44.75 h-16.25 text-xl font-semibold",
  md: "w-40.5 h-14 text-lg font-semibold",
  sm: "w-28 h-10.5 text-sm font-semibold",
};

export default function CtaButton({
  text,
  onClick,
  bgColor = "white",
  textColor = "black",
  borderColor = "black",
  showBorder = false,
  icon,
  className = "",
  size = "lg",
  buttonType = "primary",
  iconColor = "black",
}: CtaButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        relative overflow-hidden
        ${sizeClasses[size]}
        flex items-center justify-center gap-2
        rounded-xl
        transition-all duration-300
        hover:scale-105
        active:scale-100
        ${showBorder ? "border" : "border-none"}
        ${className}
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: showBorder ? borderColor : "transparent",
      }}
    >
      {buttonType === "white" && (
        <span
          className="
            pointer-events-none
            absolute inset-0
            bg-[#FFC50F]/50
            opacity-0
            transition-opacity duration-300
            group-hover:opacity-100
          "
        />
      )}

      {/* Shine effect */}
      <span
        className="
          pointer-events-none
          absolute top-0 left-[-150%]
          h-full w-[150%]
          bg-linear-to-r
          from-transparent via-white/70 to-transparent
          skew-x-12
          transition-all duration-1000
          group-hover:left-[150%]
        "
      />

      {/* Text */}
      <span className="relative z-10" style={{ color: textColor }}>
        {text}
      </span>

      {/* Icon */}
      <span
        className="relative z-10 flex items-center"
        style={{ color: iconColor }}
      >
        {icon ? icon : <span>↗</span>}
      </span>
    </button>
  );
}

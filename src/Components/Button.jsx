import React from "react";
import { useNavigate } from "react-router-dom";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-sky-500",
  textColor = "text-white",
  className = "",
  onClick,
  disabled = false,
  ...props
}) {
  const navigate = useNavigate(); // ✅ hook inside component

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-lg font-medium
        transition-all duration-200 ease-out
        ${bgColor} ${textColor}
        hover:shadow-md hover:-translate-y-[1px]
        active:translate-y-0 active:shadow-sm
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}


import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const baseClasses = "rounded-full font-medium transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:pointer-events-none";

  const variantClasses = {
    primary: "bg-primary-indigo text-white shadow-md hover:shadow-lg hover:bg-primary-indigo/90",
    secondary: "bg-white/70 backdrop-blur-sm text-primary-indigo shadow-sm border border-primary-indigo/20 hover:bg-white hover:shadow-md",
    outline: "bg-transparent text-primary-indigo border border-primary-indigo hover:bg-primary-indigo/10",
    ghost: "bg-transparent text-primary-indigo hover:bg-primary-indigo/10",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

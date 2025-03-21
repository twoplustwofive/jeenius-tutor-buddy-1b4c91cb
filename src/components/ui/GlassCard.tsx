
import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const GlassCard: React.FC<GlassCardProps> = ({
  className,
  hoverEffect = true,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white/40 backdrop-blur-lg border border-white/50 rounded-2xl shadow-sm p-6",
        hoverEffect && "transition-all duration-300 hover:shadow-md hover:bg-white/50",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;


import React from "react";
import { cn } from "@/lib/utils";
import GlassCard from "../ui/GlassCard";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  className,
  iconClassName,
  delay = 0,
}) => {
  const animationDelay = {
    animationDelay: `${delay}ms`,
  };

  return (
    <GlassCard
      className={cn("h-full opacity-0", className)}
      style={animationDelay}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6",
          iconClassName || "bg-primary-indigo/10 text-primary-indigo"
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
};

export default FeatureCard;

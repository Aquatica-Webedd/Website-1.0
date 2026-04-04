import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2 mb-8", centered && "text-center" , className)}>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight text-glow text-aqua-light"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-muted-foreground max-w-3xl mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;

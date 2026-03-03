"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "text-text-muted text-sm tracking-[0.2em] uppercase font-semibold flex items-center mb-12",
        className
      )}
      {...props}
    >
      <span className="opacity-50 mr-2">[</span>
      {children}
      <span className="opacity-50 ml-2">]</span>
    </div>
  );
}

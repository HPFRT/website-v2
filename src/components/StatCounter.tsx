"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function StatCounter({ value, suffix = "", prefix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20, mass: 1 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <div className="flex flex-col gap-2" ref={ref}>
      <div className="text-5xl md:text-7xl font-display font-bold tabular-nums tracking-tighter flex items-baseline justify-center gap-1">
        {prefix}
        <motion.span>{display}</motion.span>
        {suffix}
      </div>
      <p className="opacity-70 text-sm tracking-wide uppercase font-medium mt-2">
        {label}
      </p>
    </div>
  );
}

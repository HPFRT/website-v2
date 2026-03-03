"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";

export default function SchedulePage() {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Schedule</SectionLabel>
          <h1 className="text-5xl md:text-7xl font-display text-text mb-6 tracking-tight">
            The flight plan.
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mb-12 leading-relaxed font-light">
            Join us for our weekly meetings, build sessions, and flight tests. See you there!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full h-[700px] bg-off-white rounded-3xl overflow-hidden border border-grey-100/50 shadow-sm"
        >
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=c_6be4a3c915bf0b958d89ed587d370127c058eaadf7ea6992ef1fb5591adb9f10%40group.calendar.google.com&ctz=America%2FLos_Angeles" 
            className="w-full h-full" 
            loading="lazy" 
            title="HPFRT Schedule" 
            frameBorder="0"
            scrolling="no"
            style={{ border: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

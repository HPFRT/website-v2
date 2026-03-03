"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const timelineEvents = [
  {
    year: "1977",
    title: "Gossamer Condor",
    description: "Designed by Dr. Paul MacCready and piloted by Bryan Allen. Completed the Kremer Prize figure-eight course, achieving the first sustained human-powered flight.",
  },
  {
    year: "1979",
    title: "Gossamer Albatross",
    description: "Also designed by MacCready. Piloted by Bryan Allen across the English Channel (22.26 miles in 2 hours, 49 minutes) to win the second Kremer Prize.",
  },
  {
    year: "1988",
    title: "MIT Daedalus",
    description: "Piloted by Greek Olympic cyclist Kanellos Kanellopoulos across the Aegean Sea. Flew 71.53 miles in 3 hours, 54 minutes, setting records that still stand today.",
  },
  {
    year: "2024",
    title: "HPFRT Founded",
    description: "Founded at USC by undergraduate aerospace engineers David Moeller Sztajnbok, Nicholas Lototsky, and Jonah Colagross with the singular goal of breaking the endurance record.",
  },
  {
    year: "2024",
    title: "Redbull Flugtag",
    description: "Our engineered entry for the 2024 Redbull Flugtag in Tampa, FL. An exercise in rapid prototyping, creative aerodynamics, and structural survival.",
  },
  {
    year: "2025",
    title: "HATB Testbed Flight",
    description: "Development and flight testing of the Human-Powered Avionics Testbed (HATB), a 10 ft wingspan aircraft for rigorously testing data acquisition and telemetry.",
  },
  {
    year: "2026",
    title: "Quarter-Scale RC Flight",
    description: "Target for the completion and first flight of Project Hercules, our 25-foot wingspan RC test aircraft to validate aerodynamics and stability before full-scale manufacturing.",
  },
  {
    year: "2026+",
    title: "Full-Scale Development",
    description: "The next chapter: building the 100+ ft wingspan human-powered aircraft to sustain flight for over 4 hours and challenge the Daedalus record.",
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionLabel>A Brief History of Human-Powered Flight</SectionLabel>

        <div className="relative mt-20" ref={containerRef}>
          {/* Animated line */}
          <motion.div
            className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-grey-100 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="flex flex-col gap-16 md:gap-32">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={event.title}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "flex-row-reverse md:flex-row" : "flex-row-reverse md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <motion.div
                    className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-accent z-10 -translate-x-1/2 outline outline-4 outline-surface"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
                  />

                  {/* Spacer for empty side on desktop */}
                  <div className="hidden md:block w-[45%]" />

                  {/* Content Card */}
                  <motion.div
                    className="w-full pl-16 md:pl-0 md:w-[45%]"
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="p-8 bg-off-white rounded-2xl hover:shadow-lg transition-shadow duration-300">
                      <div className="text-4xl font-display font-bold text-accent mb-4 tabular-nums">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-text mb-3">{event.title}</h3>
                      <p className="text-text-muted text-balance leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

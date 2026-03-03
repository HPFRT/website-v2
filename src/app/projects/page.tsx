"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Wrench } from "lucide-react";

const phases = [
  {
    title: "Project Hercules (1/4-scale)",
    number: "Project 01",
    description: "Quarter-scale human-powered aircraft technology demonstrator. Designed to validate aerodynamic performance, low-speed handling characteristics, and control surface authority prior to full-scale fabrication.",
    tags: ["Aerodynamics", "Flight Testing", "Demonstrator"],
    imageUrl: "",
  },
  {
    title: "HATB - Human-Powered Avionics Testbed",
    number: "Project 02",
    description: "A 10 ft wingspan testbed aircraft specifically engineered for our quarter-scale avionics suite. Allows us to rigorously test data acquisition, telemetry, and flight-test methodology without risking the primary airframe.",
    tags: ["Avionics", "Telemetry", "Testbed"],
    imageUrl: "/hatb.jpg",
    imageClassName: "object-[center_20%]",
    imageScale: 1.35,
  },
];

const supportingPrograms = [
  {
    title: "Composite Tube Oven",
    description: "Design and fabrication of a custom PID-temperature-controlled oven. Essential for properly curing the carbon fiber composite tubes that will make up the main structural elements of the full-scale aircraft.",
    tags: ["Manufacturing", "Composites", "Controls"],
    imageUrl: "/oven.jpg",
  },
  {
    title: "Redbull Flugtag 2024",
    description: "Our engineered entry for the 2024 Redbull Flugtag in Tampa, FL, developed in partnership with a local film producer. An exercise in rapid prototyping, creative aerodynamics, and structural survival.",
    tags: ["Prototyping", "Design", "Outreach"],
    imageUrl: "/2.webp",
  },
];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="pt-40 min-h-screen bg-surface" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <SectionLabel>Research & Development</SectionLabel>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-text mb-8 tracking-tight text-balance leading-[0.9]">
            Hardware in the loop.
          </h1>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light mb-32 max-w-2xl">
            We follow a rigorous design-analysis-test cycle. Explore the active airframes, testbeds, and manufacturing systems currently under development by the team.
          </p>
        </motion.div>

        {/* Primary Airframes */}
        <div className="mb-48 flex flex-col gap-32">
          {phases.map((phase, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={phase.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Huge Image Container */}
                <div className="w-full lg:w-3/5 relative aspect-[4/3] rounded-3xl overflow-hidden group bg-off-white">
                  <motion.div 
                    className="absolute inset-0 z-10 bg-midnight/20 group-hover:bg-transparent transition-colors duration-700" 
                  />
                  {phase.imageUrl ? (
                    <motion.img
                      style={{ y: isEven ? y1 : y2, scale: phase.imageScale || 1.15 }}
                      src={phase.imageUrl}
                      alt={phase.title}
                      className={`absolute inset-0 w-full h-full object-cover origin-center ${phase.imageClassName || ''}`}
                    />
                  ) : (
                    <motion.div 
                      style={{ y: isEven ? y1 : y2, scale: 1.15 }}
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-grey-400 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-80 mix-blend-multiply"
                    >
                      <Wrench size={48} className="mb-4 opacity-50" />
                      <span className="font-mono text-sm tracking-widest uppercase font-bold">WIP_ASSET_PENDING</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 pointer-events-none" />
                    </motion.div>
                  )}
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-sm">
                      {phase.number}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-text mb-6 leading-tight">
                    {phase.title}
                  </h2>
                  
                  <p className="text-lg text-text-muted leading-relaxed font-light mb-10 text-balance">
                    {phase.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {phase.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium tracking-wide uppercase px-4 py-2 bg-off-white text-text-muted rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manufacturing & Testbeds Section */}
        <div className="relative w-screen relative -ml-[50vw] left-1/2 bg-[#050505] text-white pt-32 pb-32 mt-32 overflow-hidden">
          {/* Schematic background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
            >
              <div>
                <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase mb-4 block">
                  [ Specialized Hardware ]
                </span>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                  Manufacturing & Testbeds
                </h2>
              </div>
              <p className="text-white/40 font-mono text-xs tracking-widest uppercase">
                STATUS: ACTIVE_DEVELOPMENT
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportingPrograms.map((program, i) => (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                  className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 hover:border-white/30 transition-colors duration-500 overflow-hidden cursor-pointer"
                >
                  {/* Schematic corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-accent transition-colors duration-500 z-20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-accent transition-colors duration-500 z-20" />

                  {/* Image section */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-white/5">
                    <motion.div 
                      className="absolute inset-0 z-10 bg-black/40 group-hover:bg-transparent transition-colors duration-700" 
                    />
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Floating index number */}
                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 text-white font-mono text-xs tracking-widest">
                      T_{String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {program.title}
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed font-light mb-8 flex-1">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {program.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-mono tracking-widest uppercase text-white/40">
                            /{tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="text-white/20 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

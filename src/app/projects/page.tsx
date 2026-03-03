"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const phases = [
  {
    title: "Quarter-Scale RC Test Aircraft",
    number: "Phase 01",
    description: "A 25-foot wingspan remote-controlled model—the largest ever built at USC. This phase validates aerodynamic design, stability margins, and testing infrastructure before we risk a human pilot in the full-scale build.",
    tags: ["2024-2025", "Aerodynamics", "Flight Testing", "Manufacturing"],
    imageUrl: "https://images.unsplash.com/photo-1559060017-445fb9722f2a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Full-Scale Aircraft Development",
    number: "Phase 02",
    description: "The primary vehicle: a 100+ ft wingspan aircraft designed to sustain flight for over 4 hours. Engineered at the extreme bleeding edge of weight and aerodynamic efficiency using carbon fiber, Kevlar, and Mylar film.",
    tags: ["Summer 2025+", "Structures", "Composites", "Human Power"],
    imageUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1200&auto=format&fit=crop",
  },
];

const supportingPrograms = [
  {
    title: "Ergometer Testing & Physiology",
    description: "Rigorous studies measuring pilot power output, endurance, heart rate, and oxygen consumption. Critical for understanding how long a pilot can sustain the ~200W of continuous power needed for flight.",
    tags: ["Physiology", "Data Analysis", "Athletics"],
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Flight Simulator Development",
    description: "A custom-built simulator to train cyclist-pilots in the unique handling characteristics of a human-powered aircraft, which are extremely slow, light, and sensitive to wind.",
    tags: ["Software", "Simulation", "Training"],
    imageUrl: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Human Factors Research",
    description: "Safety-critical design ensuring the pilot can operate the aircraft under physical strain. Includes cockpit ergonomics, visibility, emergency egress, and fatigue management.",
    tags: ["Human Factors", "Safety", "Ergonomics"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
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
    <div className="pt-40 pb-32 min-h-screen bg-surface" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <SectionLabel>The Technical Program</SectionLabel>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-text mb-8 tracking-tight text-balance leading-[0.9]">
            Engineering the Impossible.
          </h1>
          <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light mb-32 max-w-2xl">
            We don&apos;t build generic drones. We run an industry-style design-analysis-test cycle across multiple extreme disciplines to build a human-rated aircraft capable of breaking a world record.
          </p>
        </motion.div>

        {/* Cinematic Development Phases */}
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
                <div className="w-full lg:w-3/5 relative aspect-[4/3] rounded-3xl overflow-hidden group">
                  <motion.div 
                    className="absolute inset-0 z-10 bg-midnight/20 group-hover:bg-transparent transition-colors duration-700" 
                  />
                  <motion.img
                    style={{ y: isEven ? y1 : y2, scale: 1.15 }}
                    src={phase.imageUrl}
                    alt={phase.title}
                    className="absolute inset-0 w-full h-full object-cover origin-center"
                  />
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

        {/* Supporting Programs Grid */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-grey-100 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-32 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-text">
              Supporting Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportingPrograms.map((program, i) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className="group flex flex-col bg-surface hover:bg-off-white transition-colors duration-500 rounded-3xl p-8 border border-grey-100/50 hover:border-transparent cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-midnight text-white flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500 shadow-xl">
                  <span className="font-display font-bold text-2xl">{i + 1}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-text mb-4 group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                
                <p className="text-text-muted leading-relaxed font-light mb-8 flex-1">
                  {program.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-8 border-t border-grey-100/50">
                  <div className="flex flex-wrap gap-2">
                    {program.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-grey-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="text-grey-400 group-hover:text-accent transition-colors" size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Wrench, X } from "lucide-react";
import { createPortal } from "react-dom";

type Project = {
  id: string;
  title: string;
  number?: string;
  shortDescription: string;
  longDescription: React.ReactNode;
  tags: string[];
  imageUrl: string;
  imageClassName?: string;
  imageScale?: number;
};

const phases: Project[] = [
  {
    id: "hercules",
    title: "Project Hercules (1/4-scale)",
    number: "Project 01",
    shortDescription: "Quarter-scale human-powered aircraft technology demonstrator. Designed to validate aerodynamic performance, low-speed handling characteristics, and control surface authority prior to full-scale fabrication.",
    longDescription: (
      <div className="flex flex-col gap-24">
        {/* Intro statement - massive text */}
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-display text-text leading-[1.2] text-balance mb-12">
            Following the HATB testbed, the team secured funding to begin construction of our ¼-scale HPA, <span className="text-accent italic">Hercules</span>.
          </p>
          <p className="text-text-muted leading-relaxed font-light text-xl md:text-2xl max-w-4xl mx-auto">
            This 30-foot wingspan RC aircraft serves as a critical platform to perfect manufacturing techniques for the full-scale endurance record aircraft. The team spent the Fall of 2025 going through the conceptual and preliminary design, culminating in a 2-hour design review with feedback from influential figures in Human-Powered Aircraft history.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
           <div className="bg-[#050505] text-white rounded-3xl p-10 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 shadow-xl">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <Wrench size={120} />
             </div>
             <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-12 relative z-10">Target Maiden</div>
             <div className="text-5xl lg:text-6xl font-display font-bold text-accent tracking-tighter relative z-10">Aug<br/>2026</div>
           </div>
           
           <div className="bg-off-white rounded-3xl p-10 flex flex-col justify-between border border-grey-100/50 hover:scale-[1.02] transition-transform duration-500 shadow-sm">
             <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-grey-400 mb-12">Wingspan</div>
             <div className="text-5xl lg:text-6xl font-display font-bold text-text tracking-tighter">30 ft</div>
           </div>

           <div className="bg-off-white rounded-3xl p-10 flex flex-col justify-between border border-grey-100/50 hover:scale-[1.02] transition-transform duration-500 shadow-sm">
             <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-grey-400 mb-8">Material Architecture</div>
             <ul className="space-y-4">
               <li className="flex items-start gap-3 text-text font-medium text-sm lg:text-base leading-snug">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                 Carbon-fiber primary tubes
               </li>
               <li className="flex items-start gap-3 text-text font-medium text-sm lg:text-base leading-snug">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                 Low-density foam ribs
               </li>
               <li className="flex items-start gap-3 text-text font-medium text-sm lg:text-base leading-snug">
                 <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                 Heat-shrunk mylar skin
               </li>
             </ul>
           </div>
        </div>

        {/* Adajcent Infrastructure */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 border-t border-grey-100/50">
          <div>
            <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-accent mb-6">Adjacent Infrastructure</h3>
            <h4 className="text-4xl md:text-5xl font-display font-bold text-text mb-6 leading-tight">Beyond the Airframe</h4>
            <p className="text-text-muted font-light leading-relaxed text-xl mb-8">
              As the team grows, we are concurrently developing supporting technologies vital for the full-scale HPA effort.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="p-8 bg-surface border border-grey-100/80 rounded-3xl hover:border-accent/40 hover:shadow-xl transition-all duration-500">
              <h5 className="font-display font-bold text-text mb-3 text-2xl">Structural Proof Testing</h5>
              <p className="text-text-muted font-light leading-relaxed">Custom hardware to validate our analysis and sizing methods for carbon fiber tubes.</p>
            </div>
            <div className="p-8 bg-surface border border-grey-100/80 rounded-3xl hover:border-accent/40 hover:shadow-xl transition-all duration-500">
              <h5 className="font-display font-bold text-text mb-3 text-2xl">Flight Simulator</h5>
              <p className="text-text-muted font-light leading-relaxed">Bespoke software for pilot selection, flying quality assessment, and controller design.</p>
            </div>
          </div>
        </div>
      </div>
    ),
    tags: ["Aerodynamics", "Flight Testing", "Demonstrator"],
    imageUrl: "",
  },
  {
    id: "hatb",
    title: "HATB - Human-Powered Avionics Testbed",
    number: "Project 02",
    shortDescription: "A 10 ft wingspan testbed aircraft specifically engineered for our quarter-scale avionics suite. Allows us to rigorously test data acquisition, telemetry, and flight-test methodology without risking the primary airframe.",
    longDescription: (
      <div className="flex flex-col gap-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-text text-balance mb-12 tracking-tight">
            Before risking an expensive carbon-fiber airframe, we needed a way to train our team in rigorous flight test procedures.
          </p>
          <p className="text-text-muted font-light leading-relaxed text-xl md:text-2xl max-w-4xl mx-auto">
            After Flugtag, we found ourselves in a holding pattern. We lacked the funding to begin construction of our ¼-scale HPA, but needed a project to build critical skills and maintain momentum. We sized and built a 10-ft wingspan airplane out of foam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
          <div className="bg-[#050505] text-white p-12 lg:p-16 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-end min-h-[500px] shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 p-12 opacity-20">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
            <div className="relative z-10">
              <div className="text-gold font-mono text-xs tracking-[0.3em] uppercase mb-6">Methodology</div>
              <h3 className="text-5xl lg:text-6xl font-display font-bold mb-8">The Sink Polar</h3>
              <p className="text-white/70 font-light leading-relaxed text-xl">
                The pilot trims the aircraft in a steady-glide at varying airspeeds. From this data, a sink polar is constructed, allowing us to perform a quadratic fit and extract the vehicle&apos;s key aerodynamic coefficients.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-12 lg:p-16 bg-accent/5 rounded-[2.5rem] border border-accent/10 relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 text-accent text-[20rem] font-display font-bold opacity-5 group-hover:scale-110 transition-transform duration-700 pointer-events-none">
              25
            </div>
            <div className="relative z-10">
              <div className="text-accent text-sm font-bold tracking-[0.3em] uppercase mb-8">Milestone</div>
              <h4 className="text-4xl lg:text-5xl font-display font-bold text-text mb-8 leading-tight">AIAA LA-LV Regional Conference</h4>
              <p className="text-text-muted font-light leading-relaxed text-xl">
                Though HATB didn&apos;t generate perfect flight data on its own, it allowed us to validate the test procedure on another aircraft, culminating in HPFRT&apos;s very first published academic paper.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    tags: ["Avionics", "Telemetry", "Testbed"],
    imageUrl: "/hatb.jpg",
    imageClassName: "object-[center_20%]",
    imageScale: 1.35,
  },
];

const supportingPrograms: Project[] = [
  {
    id: "oven",
    title: "Composite Tube Oven",
    shortDescription: "Design and fabrication of a custom PID-temperature-controlled oven. Essential for properly curing the carbon fiber composite tubes that will make up the main structural elements of the full-scale aircraft.",
    longDescription: (
      <div className="flex flex-col gap-24">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-text text-balance mb-12 tracking-tight">
            Human-Powered Airplanes require incredibly long, slender structures with an extreme strength-to-weight ratio.
          </p>
          <p className="text-text-muted font-light leading-relaxed text-xl md:text-2xl max-w-4xl mx-auto">
            The answer is pre-impregnated carbon-fiber—but curing it requires absolute thermal precision. To cure the carbon fiber composite tubes that will make up the main structural elements of our full-scale aircraft, we had to build our own manufacturing hardware: a massive, custom PID-temperature-controlled oven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {[
            { num: "01", title: "Heating Element", desc: "Stainless steel resistance wires wrapped around an aluminum mandrel." },
            { num: "02", title: "Control System", desc: "Custom PID loops for precise, programmable temperature profiles." },
            { num: "03", title: "Production", desc: "Has successfully produced nearly a dozen structural tubes to date." }
          ].map((spec) => (
            <div key={spec.num} className="p-12 border border-grey-100/50 group hover:border-accent hover:shadow-xl transition-all duration-500 bg-off-white rounded-[2rem]">
              <div className="text-sm font-mono font-bold text-grey-400 mb-10 tracking-[0.3em] group-hover:text-accent transition-colors">SYS_{spec.num}</div>
              <h4 className="text-3xl font-display font-bold text-text mb-6">{spec.title}</h4>
              <p className="text-text-muted font-light leading-relaxed text-lg">{spec.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#050505] text-white rounded-[2.5rem] p-12 lg:p-24 relative overflow-hidden shadow-2xl max-w-6xl mx-auto w-full">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent opacity-50 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col xl:flex-row gap-20 items-center justify-between">
            <div className="xl:w-1/3 text-center xl:text-left">
              <h3 className="text-5xl lg:text-7xl font-display font-bold mb-8 tracking-tighter leading-none">Safety<br/>Interlocks</h3>
              <p className="text-white/60 font-light leading-relaxed text-xl">
                The oven was designed with operator safety as the absolute primary consideration.
              </p>
            </div>
            <div className="xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {["Grounding Wire", "Emergency Stops", "Conservative Fuses", "Overvoltage Trips"].map((feature) => (
                <div key={feature} className="p-8 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold text-white tracking-[0.2em] uppercase flex items-center justify-center text-center hover:bg-white/10 transition-colors backdrop-blur-md">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    tags: ["Manufacturing", "Composites", "Controls"],
    imageUrl: "/oven.jpg",
  },
  {
    id: "flugtag",
    title: "Redbull Flugtag 2024",
    shortDescription: "Our engineered entry for the 2024 Redbull Flugtag in Tampa, FL, developed in partnership with a local film producer. An exercise in rapid prototyping, creative aerodynamics, and structural survival.",
    longDescription: (
      <div className="flex flex-col gap-24">
        
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-off-white rounded-[2.5rem] border border-grey-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-7xl lg:text-8xl font-display font-bold text-text mb-6">2</div>
            <div className="text-xs text-grey-400 uppercase tracking-[0.3em] font-bold">Months to Build</div>
          </div>
          <div className="p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-off-white rounded-[2.5rem] border border-grey-100/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="text-7xl lg:text-8xl font-display font-bold text-text mb-6">22&apos;</div>
            <div className="text-xs text-grey-400 uppercase tracking-[0.3em] font-bold">Max Wingspan</div>
          </div>
          <div className="p-12 lg:p-16 flex flex-col items-center justify-center text-center bg-accent text-white rounded-[2.5rem] shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
            <div className="text-7xl lg:text-8xl font-display font-bold relative z-10 mb-6">50&apos;</div>
            <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/80 relative z-10">Glide Distance</div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-10">
          <p className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-text text-balance tracking-tight">
            In 2024, a Los Angeles film producer approached HPFRT with a unique challenge: design a human-glider for the Redbull Flugtag in Tampa, Florida.
          </p>
          <p className="text-text-muted font-light leading-relaxed text-xl md:text-2xl max-w-4xl mx-auto">
            Facing a strict 22-foot wingspan limit and barely 10 feet of length for a tail, the team engineered an exotic solution: a tandem, slightly staggered tailless biplane joined at the wingtips. This was our very first experience with a &quot;human-rated&quot; vehicle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto w-full">
          <div className="lg:col-span-5 bg-[#050505] text-white p-12 lg:p-16 rounded-[2.5rem] flex flex-col justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            <h4 className="text-sm text-gold tracking-[0.3em] font-bold uppercase mb-8 relative z-10">Scaled Validation</h4>
            <p className="text-white/80 leading-relaxed font-light text-2xl relative z-10">
              To validate this exotic aerodynamic configuration, we built a dynamically scaled model. Its test flights proved successful, demonstrating the ability to trim at a steady, unaccelerated glide.
            </p>
          </div>
          <div className="lg:col-span-7 p-12 lg:p-16 bg-off-white rounded-[2.5rem] border border-grey-100/50 flex flex-col justify-center relative shadow-sm">
            <div className="absolute top-8 left-10 text-accent text-9xl opacity-5 font-serif leading-none">&quot;</div>
            <p className="text-3xl lg:text-4xl text-text font-display leading-[1.4] relative z-10 italic text-balance">
              The team flew out to Tampa to help integrate the aircraft and watched it fly. Despite some structural issues, the aircraft glided 50 feet—one of the best distances in the entire competition.
            </p>
          </div>
        </div>
      </div>
    ),
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

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
          <SectionLabel>Research &amp; Development</SectionLabel>
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
                key={phase.id}
                layoutId={`project-container-${phase.id}`}
                onClick={() => setSelectedProject(phase)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group cursor-pointer ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Huge Image Container */}
                <motion.div 
                  layoutId={`project-image-container-${phase.id}`}
                  className="w-full lg:w-3/5 relative aspect-[4/3] rounded-3xl overflow-hidden bg-off-white"
                >
                  <motion.div 
                    className="absolute inset-0 z-10 bg-midnight/20 group-hover:bg-transparent transition-colors duration-700" 
                  />
                  {phase.imageUrl ? (
                    <motion.img
                      layoutId={`project-image-${phase.id}`}
                      style={{ y: isEven ? y1 : y2, scale: phase.imageScale || 1.15 }}
                      src={phase.imageUrl}
                      alt={phase.title}
                      className={`absolute inset-0 w-full h-full object-cover origin-center ${phase.imageClassName || ''}`}
                    />
                  ) : (
                    <motion.div 
                      layoutId={`project-image-${phase.id}`}
                      style={{ y: isEven ? y1 : y2, scale: 1.15 }}
                      className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-grey-400 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-80 mix-blend-multiply"
                    >
                      <Wrench size={48} className="mb-4 opacity-50" />
                      <span className="font-mono text-sm tracking-widest uppercase font-bold">WIP_ASSET_PENDING</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-black/5 pointer-events-none" />
                    </motion.div>
                  )}
                </motion.div>

                {/* Text Content */}
                <div className="w-full lg:w-2/5 flex flex-col relative z-20">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase rounded-sm">
                      {phase.number}
                    </span>
                  </div>
                  
                  <motion.h2 
                    layoutId={`project-title-${phase.id}`}
                    className="text-4xl md:text-5xl font-display font-bold text-text mb-6 leading-tight group-hover:text-accent transition-colors"
                  >
                    {phase.title}
                  </motion.h2>
                  
                  <motion.p 
                    layoutId={`project-desc-${phase.id}`}
                    className="text-lg text-text-muted leading-relaxed font-light mb-10 text-balance"
                  >
                    {phase.shortDescription}
                  </motion.p>

                  <div className="mt-8 flex items-center gap-2 text-accent font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                    <span>Explore Project</span>
                    <ArrowUpRight size={18} />
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
                  Manufacturing &amp; Testbeds
                </h2>
              </div>
              <p className="text-white/40 font-mono text-xs tracking-widest uppercase">
                STATUS: ACTIVE_DEVELOPMENT
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportingPrograms.map((program, i) => (
                <motion.div
                  key={program.id}
                  layoutId={`project-container-${program.id}`}
                  onClick={() => setSelectedProject(program)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                  className="group relative flex flex-col bg-[#0a0a0a] border border-white/10 hover:border-accent/40 transition-all duration-500 overflow-hidden cursor-pointer rounded-2xl shadow-xl"
                >
                  {/* Schematic corners */}
                  <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-white/20 group-hover:border-accent transition-colors duration-500 z-20" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-white/20 group-hover:border-accent transition-colors duration-500 z-20" />

                  {/* Image section */}
                  <motion.div 
                    layoutId={`project-image-container-${program.id}`}
                    className="relative h-64 sm:h-80 w-full overflow-hidden bg-white/5"
                  >
                    <motion.div 
                      className="absolute inset-0 z-10 bg-black/40 group-hover:bg-transparent transition-colors duration-700" 
                    />
                    <motion.img
                      layoutId={`project-image-${program.id}`}
                      src={program.imageUrl}
                      alt={program.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    
                    {/* Floating index number */}
                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10 text-white font-mono text-xs tracking-widest">
                      T_{String(i + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                  
                  {/* Content section */}
                  <div className="p-8 flex flex-col flex-1 relative z-20">
                    <motion.h3 
                      layoutId={`project-title-${program.id}`}
                      className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors"
                    >
                      {program.title}
                    </motion.h3>
                    
                    <motion.p 
                      layoutId={`project-desc-${program.id}`}
                      className="text-white/60 leading-relaxed font-light mb-8 flex-1"
                    >
                      {program.shortDescription}
                    </motion.p>

                    <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-auto">
                      <ArrowUpRight className="text-white/20 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ml-auto" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Project Modal Overlay */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-midnight/90 backdrop-blur-md z-[100]"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal Content */}
              <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8 pointer-events-none perspective-[2000px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
                  className="bg-surface text-text w-full max-w-[95vw] lg:max-w-[1400px] h-[95vh] lg:h-[90vh] rounded-[2rem] overflow-hidden shadow-2xl relative pointer-events-auto flex flex-col border border-white/5"
                >
                  {/* Close Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-6 right-6 z-50 w-14 h-14 bg-black/10 hover:bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-text transition-colors"
                  >
                    <X size={24} />
                  </motion.button>

                  <div className="flex flex-col flex-1 min-h-0 overflow-y-auto relative w-full">
                    {/* Subtle schematic background pattern for the entire modal */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8A7A7A05_1px,transparent_1px),linear-gradient(to_bottom,#8A7A7A05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

                    <div className="p-8 md:p-16 lg:p-24 w-full relative z-10 flex flex-col">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                        className="flex flex-col items-center text-center gap-6 mb-12"
                      >
                        <div className="flex items-center justify-center gap-4">
                          {selectedProject.number && (
                            <span className="px-4 py-1.5 bg-accent text-white text-xs font-bold tracking-[0.2em] uppercase rounded-full">
                              {selectedProject.number}
                            </span>
                          )}
                          <span className="text-xs font-mono tracking-widest uppercase text-text-muted">
                            [ Declassified Mission Profile ]
                          </span>
                        </div>
                      </motion.div>

                      <motion.h2 
                        layoutId={`project-title-${selectedProject.id}`}
                        className="text-5xl md:text-7xl lg:text-[6rem] font-display font-bold text-text mb-16 leading-[0.9] tracking-tighter text-balance text-center"
                      >
                        {selectedProject.title}
                      </motion.h2>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                      >
                        {selectedProject.longDescription}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

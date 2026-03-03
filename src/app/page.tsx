"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import SectionLabel from "@/components/SectionLabel";
import StatCounter from "@/components/StatCounter";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import CTABand from "@/components/CTABand";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen bg-midnight text-white flex flex-col justify-center items-center overflow-hidden">
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
        
        <div className="container relative z-10 px-6 md:px-12 text-center flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-8"
          >
            <Image src="/logo.svg" alt="HPFRT Logo" width={96} height={96} className="mx-auto drop-shadow-2xl" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-[0.9] tracking-tight text-balance flex flex-col">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="font-display font-medium text-white/95"
            >
              Human-Powered
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="font-display font-bold text-white/80"
            >
              Flight Research Team
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="text-xl md:text-2xl text-white/50 font-medium tracking-wide"
          >
            Building the next chapter of human-powered flight.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
            className="mt-12 px-8 py-3 rounded-full border border-white/20 text-white/90 font-medium hover:bg-white/10 transition-colors flex items-center gap-3 group"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            Learn More
            <ArrowDown size={18} className="animate-bounce mt-1" />
          </motion.button>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/40 to-white/0 animate-pulse" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 md:py-48 bg-surface text-text">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <SectionLabel>Our Mission</SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-12"
          >
            <p className="text-3xl md:text-5xl font-display leading-[1.1] text-text/90 text-balance border-l-4 border-gold pl-6 md:pl-10">
              &quot;The founding mission of the Human-Powered Flight Research Team is to{" "}
              <span className="text-gold bg-gold/10 px-2 rounded-sm inline-block -mx-2 mx-0.5 mt-2 md:mt-0">beat the endurance world record</span>{" "}
              of human-powered flight — set by MIT Daedalus in 1988 during its historic flight between the Greek islands of Crete and Santorini.&quot;
            </p>

            <div className="pl-6 md:pl-10 max-w-3xl space-y-6">
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                As the only design team at USC working on a human-rated flying vehicle, we aim to arm students with real design, analysis, and testing skills similar to what they might encounter in industry.
              </p>
              <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-light">
                In other words, we wish to build great engineers while building great aircraft.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="py-32 bg-midnight text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20 text-center flex flex-col items-center">
            <span className="text-accent font-mono font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
              [ The Record to Beat ]
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">MIT Daedalus</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-8 justify-items-center text-center">
            <StatCounter value={1988} label="Year established" />
            <StatCounter value={71} suffix=" mi" label="Distance across Aegean Sea" />
            <StatCounter value={69} suffix=" lbs" label="Aircraft empty weight" />
            <StatCounter value={200} prefix="" suffix=" W" label="Sustained pilot power" />
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <Timeline />

      {/* Gallery */}
      <Gallery />

      {/* CTA Band */}
      <CTABand />
    </>
  );
}

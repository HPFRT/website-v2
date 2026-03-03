"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABand() {
  return (
    <section className="py-32 bg-midnight text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-sky)_0%,transparent_70%)] opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center gap-12"
        >
          <h2 className="text-4xl md:text-5xl font-display leading-tight text-balance">
            Are you a USC student eager to take to the skies?
          </h2>

          <a href="https://forms.gle/arguHL66bRyB5QaH6" target="_blank" rel="noopener noreferrer" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-8 py-4 bg-white text-midnight rounded-full font-semibold flex items-center gap-3 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">Join the Team</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

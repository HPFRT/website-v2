"use client";

import { motion } from "framer-motion";
import { Linkedin, Plus } from "lucide-react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  linkedinUrl?: string;
  delay?: number;
}

export default function TeamCard({ name, role, imageUrl, linkedinUrl, delay = 0 }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[#080808] border border-white/5 p-4 hover:border-white/20 transition-colors duration-500 h-full"
    >
      {/* Schematic corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:border-accent transition-colors duration-500 z-10 -translate-x-[1px] -translate-y-[1px]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:border-accent transition-colors duration-500 z-10 translate-x-[1px] translate-y-[1px]" />

      <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 mb-6">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={533}
            className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white/20">
            <Plus size={32} className="mb-4 opacity-50" />
            <span className="font-mono text-xs tracking-widest uppercase">Classified</span>
          </div>
        )}
        
        {/* Tech overlay grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
      </div>

      <div className="flex flex-col flex-1 pb-1">
        <p className="font-mono text-[9px] text-accent tracking-[0.2em] uppercase mb-1 flex items-center gap-1.5">
          <span className="w-1.5 h-[1px] bg-accent inline-block" />
          {role}
        </p>
        
        <div className="flex justify-between items-end gap-2 mt-auto">
          <h3 className="text-white font-display text-base sm:text-lg font-bold uppercase tracking-wide leading-none">
            {name}
          </h3>
          
          {linkedinUrl && (
            <motion.a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-white/30 hover:text-accent transition-colors shrink-0 pb-0.5"
            >
              <Linkedin size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Plus, Mail, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface TeamCardProps {
  name: string;
  role: string;
  imageUrl?: string;
  linkedinUrl?: string;
  email?: string;
  delay?: number;
}

export default function TeamCard({ name, role, imageUrl, linkedinUrl, email, delay = 0 }: TeamCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => (linkedinUrl || email) && setIsModalOpen(true)}
        className={`group relative flex flex-col bg-[#080808] border border-white/5 p-4 hover:border-white/20 transition-colors duration-500 h-full ${(linkedinUrl || email) ? 'cursor-pointer' : ''}`}
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
          <p className="font-mono text-[9px] text-accent font-bold tracking-[0.2em] uppercase mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-[1px] bg-accent inline-block" />
            {role}
          </p>
          
          <div className="flex justify-between items-end gap-2 mt-auto">
            <h3 className="text-white font-display text-base sm:text-lg font-bold uppercase tracking-wide leading-none">
              {name}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Contact Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
              >
                <div className="bg-[#080808] border border-white/20 rounded-lg p-8 max-w-md w-full pointer-events-auto relative shadow-2xl">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  <h3 className="text-white font-display text-2xl font-bold uppercase mb-2">{name}</h3>
                  <p className="text-accent font-mono text-xs font-bold tracking-widest uppercase mb-8">{role}</p>
                  
                  <div className="flex flex-col gap-4">
                    {linkedinUrl && (
                      <motion.a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-colors rounded-lg group"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                          <Linkedin size={24} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">LinkedIn</p>
                          <p className="text-white font-medium text-sm truncate">{linkedinUrl.replace('https://www.linkedin.com/in/', '').replace('https://linkedin.com/in/', '').replace('/', '')}</p>
                        </div>
                      </motion.a>
                    )}
                    
                    {email && (
                      <motion.a
                        href={`mailto:${email}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-colors rounded-lg group"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                          <Mail size={24} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Email</p>
                          <p className="text-white font-medium text-sm truncate">{email}</p>
                        </div>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

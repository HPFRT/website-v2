"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { Linkedin, Mail, Plane, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-surface">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Get in Touch</SectionLabel>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mt-6">
          {/* Left Column - Info & Joining */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col"
          >
            <h1 className="text-5xl md:text-7xl font-display text-text mb-6 tracking-tight leading-[1.1]">
              Ready to fly?
            </h1>
            <p className="text-xl text-text-muted leading-relaxed font-light mb-12">
              Interested in joining? Have a question about our research? We&apos;re always looking for dedicated engineers, pilots, and sponsors to help us break the record.
            </p>

            {/* Huge Join CTA */}
            <motion.a
              href="https://forms.gle/arguHL66bRyB5QaH6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group block p-8 md:p-12 bg-midnight text-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden mb-16"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <Plane size={28} />
                  </div>
                  <ArrowRight size={32} className="text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-500" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Join the Team
                </h3>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Fill out our official interest form to get involved. We recruit across all engineering disciplines.
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column - Direct Links (Replacing Form) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <div className="bg-off-white p-8 md:p-12 rounded-3xl h-full flex flex-col justify-center">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-grey-400 mb-12">
                Connect Directly
              </h3>
              
              <div className="space-y-8">
                {[
                  { label: "Email Us", value: "hpfrteam@gmail.com", icon: Mail, href: "mailto:hpfrteam@gmail.com" },
                  { label: "LinkedIn", value: "Human-Powered Flight Research Team", icon: Linkedin, href: "https://www.linkedin.com/company/hpfrt-usc" },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-16 h-16 shrink-0 rounded-2xl bg-surface flex items-center justify-center text-text group-hover:bg-accent group-hover:text-white transition-colors duration-300 shadow-sm">
                      <link.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold tracking-widest text-grey-400 uppercase mb-1">
                        {link.label}
                      </p>
                      <p className="text-xl md:text-2xl font-display font-bold text-text group-hover:text-accent transition-colors">
                        {link.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

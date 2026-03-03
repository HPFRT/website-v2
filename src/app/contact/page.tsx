"use client";

import SectionLabel from "@/components/SectionLabel";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="pt-40 pb-32 min-h-screen bg-surface">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Get in Touch</SectionLabel>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mt-6">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 flex flex-col"
          >
            <h1 className="text-5xl md:text-7xl font-display text-text mb-6 tracking-tight">
              Ready to fly?
            </h1>
            <p className="text-xl text-text-muted leading-relaxed font-light mb-12 max-w-lg">
              Interested in joining? Have a question about our research? We&apos;re always looking for dedicated engineers, pilots, and sponsors to help us break the record.
            </p>

            <div className="mt-auto space-y-6">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-grey-400 mb-8">
                Connect Directly
              </h3>
              {[
                { label: "Email Us", value: "hpfrt@usc.edu", icon: Mail, href: "mailto:hpfrt@usc.edu" },
                { label: "Instagram", value: "@usc_hpfrt", icon: Instagram, href: "#" },
                { label: "LinkedIn", value: "Human-Powered Flight Research Team", icon: Linkedin, href: "https://www.linkedin.com/company/hpfrt-usc" },
                { label: "EngageSC", value: "Join our roster", icon: ExternalLink, href: "https://engage.usc.edu/hpfrt/" },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-off-white flex items-center justify-center text-text group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium tracking-wide text-grey-400 uppercase">
                      {link.label}
                    </p>
                    <p className="text-lg font-display text-text group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <div className="bg-off-white p-8 md:p-12 rounded-3xl">
              <form className="flex flex-col gap-12" onSubmit={(e) => e.preventDefault()}>
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    placeholder=" "
                    className="w-full bg-transparent border-b border-grey-100 py-3 text-lg text-text focus:outline-none peer"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 top-3 text-text-muted text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm"
                  >
                    Name
                  </label>
                  <div className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-accent transition-all duration-500 peer-focus:left-0 peer-focus:right-0" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    placeholder=" "
                    className="w-full bg-transparent border-b border-grey-100 py-3 text-lg text-text focus:outline-none peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-3 text-text-muted text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm"
                  >
                    USC Email
                  </label>
                  <div className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-accent transition-all duration-500 peer-focus:left-0 peer-focus:right-0" />
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    placeholder=" "
                    rows={4}
                    className="w-full bg-transparent border-b border-grey-100 py-3 text-lg text-text focus:outline-none peer resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-0 top-3 text-text-muted text-lg transition-all duration-300 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-accent peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-sm"
                  >
                    Tell us about your background...
                  </label>
                  <div className="absolute bottom-0 left-1/2 right-1/2 h-[2px] bg-accent transition-all duration-500 peer-focus:left-0 peer-focus:right-0" />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="mt-4 px-8 py-5 bg-midnight text-white rounded-xl font-semibold flex items-center justify-center gap-3 overflow-hidden relative group"
                >
                  <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0" />
                  <span className="relative z-10">Send Message</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    className="relative z-10"
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

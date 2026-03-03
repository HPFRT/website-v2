"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-white pt-24 pb-12 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.svg"
              alt="HPFRT Logo"
              width={64}
              height={64}
              className="drop-shadow-sm"
            />
          </Link>
          <p className="text-white/70 text-sm leading-relaxed text-balance">
            The founding mission of the Human-Powered Flight Research Team is to beat
            the endurance world record of human-powered flight. Building great engineers
            while building great aircraft.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
              Sitemap
            </h4>
            <ul className="space-y-4">
              {["Projects", "Schedule", "The Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/hpfrt-usc", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hpfrteam@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs">
          © {currentYear} Human-Powered Flight Research Team. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">
          University of Southern California
        </p>
      </div>
    </footer>
  );
}

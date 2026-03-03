"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", path: "/projects" },
  { name: "Schedule", path: "/schedule" },
  { name: "The Team", path: "/team" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isTeamPage = pathname === '/team';
  
  // The nav text should be light if we are on the Home page OR the Team page (which is dark mode)
  // when we haven't scrolled. Once we scroll and the white background appears, it should turn dark (except on the Team page).
  const shouldBeLightText = (!isScrolled && isHomePage) || isTeamPage;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300 ease-in-out",
        isScrolled
          ? isTeamPage 
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-sm" 
            : "bg-surface/80 backdrop-blur-xl border-b border-grey-100/20 py-4 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link 
          href="/" 
          className={cn(
            "relative z-50 flex items-center transition-opacity duration-300",
            isScrolled || !isHomePage ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <Image
            src="/logo.svg"
            alt="HPFRT Logo"
            width={48}
            height={48}
            priority
            className="transition-all duration-300 drop-shadow-sm"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-accent",
                  shouldBeLightText ? "text-white/90 hover:text-white" : "text-text"
                )}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="block relative"
                >
                  {link.name}
                </motion.span>
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={shouldBeLightText ? "text-white" : "text-text"} />
          ) : (
            <Menu className={shouldBeLightText ? "text-white" : "text-text"} />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={false}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            pointerEvents: isMobileMenuOpen ? "auto" : "none",
          }}
          className="fixed inset-0 bg-midnight z-40 flex items-center justify-center"
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  y: isMobileMenuOpen ? 0 : 20,
                }}
                transition={{ delay: isMobileMenuOpen ? i * 0.1 : 0 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-3xl font-display"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

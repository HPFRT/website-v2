"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useContext, useRef, useEffect } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

function FrozenRoute({ children }: { children: ReactNode }) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Force scroll to top on page navigation and reload
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div key={pathname} className="flex-1 flex flex-col">
        {/* Slide UP to reveal on Enter */}
        <motion.div
          className="fixed left-0 right-0 top-0 z-[100] bg-[#050505] pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          initial={{ height: "100vh" }}
          animate={{ height: "0vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        
        {/* Slide UP to cover on Exit */}
        <motion.div
          className="fixed left-0 right-0 bottom-0 z-[100] bg-[#050505] pointer-events-none"
          initial={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        />
        
        {/* Main Content Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", scale: 0.98 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -40, filter: "blur(10px)", scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          className="flex-1 flex flex-col origin-bottom"
        >
          <FrozenRoute>{children}</FrozenRoute>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

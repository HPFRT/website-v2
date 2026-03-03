"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const GALLERY_IMAGES = Array.from({ length: 6 }).map((_, i) => `/${i + 1}.webp`);

export default function Gallery() {
  return (
    <section className="py-32 bg-off-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionLabel>Gallery</SectionLabel>

        <div className="mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm group"
            >
              <motion.img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tags, imageUrl, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group flex flex-col bg-surface border border-grey-100/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <div className="relative h-64 overflow-hidden bg-off-white">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-midnight/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-display font-semibold text-text mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-text-muted leading-relaxed mb-8 flex-1">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium tracking-wide uppercase px-3 py-1.5 bg-off-white text-text-muted rounded-full group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

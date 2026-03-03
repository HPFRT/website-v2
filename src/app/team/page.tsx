"use client";

import TeamCard from "@/components/TeamCard";
import { motion } from "framer-motion";

const executiveBoard = [
  {
    name: "David Sztajnbok",
    role: "President / Co-Founder",
  },
  {
    name: "Nicholas Lototsky",
    role: "Vice President / Co-Founder",
  },
  {
    name: "Jonah Colagross",
    role: "Secretary / Co-Founder",
  },
  {
    name: "Marc Palicki",
    role: "Executive Board",
  }
];

const responsibleEngineers = [
  {
    name: "John Doe",
    role: "Lead Aerodynamicist",
  },
  {
    name: "Jane Smith",
    role: "Structures Lead",
  },
  {
    name: "Alex Johnson",
    role: "Human Factors",
  },
  {
    name: "Emily Chen",
    role: "Ergometer Lead",
  },
  {
    name: "Marcus Cole",
    role: "Simulations Lead",
  },
  {
    name: "Sarah Jenkins",
    role: "Manufacturing",
  }
];

const facultyAdvisors = [
  {
    name: "Dr. Saakar Byahut",
    role: "Faculty Advisor",
  }
];

function SectionHeading({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="text-center mb-16">
      <span className="text-white/40 text-sm tracking-[0.2em] uppercase font-medium">
        {number && <span className="text-accent mr-4">{number}</span>}
        [ {children} ]
      </span>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="pt-40 pb-32 min-h-screen bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight text-balance">
            Minds over matter.
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            We are a group of dedicated student engineers pursuing what many consider impossible. Meet the leadership driving the record attempt.
          </p>
        </motion.div>

        {/* Executive Board */}
        <div className="mb-32">
          <SectionHeading number="01">Executive Board</SectionHeading>
          <div className="flex flex-wrap justify-center gap-6">
            {executiveBoard.map((member, index) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] max-w-[280px] flex">
                <div className="w-full h-full">
                  <TeamCard
                    {...member}
                    delay={0.1 * (index + 1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Engineers */}
        <div className="mb-32">
          <SectionHeading number="02">Responsible Engineers</SectionHeading>
          <div className="flex flex-wrap justify-center gap-6">
            {responsibleEngineers.map((member, index) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] max-w-[280px] flex">
                <div className="w-full h-full">
                  <TeamCard
                    {...member}
                    delay={0.1 * (index + 1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Advisor */}
        <div>
          <SectionHeading number="03">Faculty Advising</SectionHeading>
          <div className="flex flex-wrap justify-center gap-6">
            {facultyAdvisors.map((member, index) => (
              <div key={member.name} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-20px)] max-w-[280px] flex">
                <div className="w-full h-full">
                  <TeamCard
                    {...member}
                    delay={0.1 * (index + 1)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

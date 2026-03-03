"use client";

import TeamCard from "@/components/TeamCard";
import { motion } from "framer-motion";

const executiveBoard = [
  {
    name: "David Sztajnbok",
    role: "Program Manager / Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/davidsztajnbok/",
    email: "sztajnbo@usc.edu",
  },
  {
    name: "Jonah Colagross",
    role: "Vehicle Design / Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/jonahcolagross/",
    email: "colagros@usc.edu",
  },
  {
    name: "Nicholas Lototsky",
    role: "Vehicle Performance / Co-Founder",
    linkedinUrl: "https://www.linkedin.com/in/nicholas-lototsky/",
    email: "nlototsk@usc.edu",
  },
  {
    name: "Marc Palicki",
    role: "Mechanical Systems",
    linkedinUrl: "https://www.linkedin.com/in/marc-anthony-palicki-5bba79210/",
    email: "palicki@usc.edu",
  }
];

const responsibleEngineers = [
  {
    name: "Noelle Lehrman",
    role: "Responsible Engineer",
    linkedinUrl: "https://www.linkedin.com/in/noelle-lehrman/?lipi=urn%3Ali%3Apage%3Ad_flagship3_people_sent_invitations%3BiK3Bvv3lTt6KgoDK46bQ2Q%3D%3D",
    email: "nlehrman@usc.edu",
  },
  {
    name: "Elro Starr",
    role: "Responsible Engineer",
    linkedinUrl: "https://www.linkedin.com/in/elynor-starr/",
    email: "elrostarr@gmail.com",
  }
];

const facultyAdvisors = [
  {
    name: "Dr. Saakar Byahut",
    role: "Faculty Advisor",
    email: "byahut@usc.edu",
  }
];

function SectionHeading({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="text-center mb-16">
      <span className="text-white/40 text-sm tracking-[0.2em] uppercase font-medium">
        {number && <span className="text-accent font-bold mr-4">{number}</span>}
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

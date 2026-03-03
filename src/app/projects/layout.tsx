import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the active airframes, testbeds, and manufacturing systems currently under development by the Human-Powered Flight Research Team.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
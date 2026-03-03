import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the student engineers, leadership, and advisors driving the HPFRT endurance record attempt at USC.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
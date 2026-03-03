import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description: "View the HPFRT public calendar for meetings, build sessions, and major milestones.",
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
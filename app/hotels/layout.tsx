import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "impact-site-verification": "dda355a8-437f-4a7b-b53b-5588142a9886",
  },
};

export default function HotelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

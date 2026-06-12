import type { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "impact-site-verification": "undefined",
  },
};

export default function HotelsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

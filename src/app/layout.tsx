import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Ways I Use AI to Run My Business While Working a 9-to-5 | @mindsetreset",
  description:
    "Free guide: How I built a $98K side business without burning out. Get the 5 AI strategies + 7-day kickstart checklist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

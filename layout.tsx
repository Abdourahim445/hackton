import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextStep Jobs",
  description: "Memphis reentry – gigs & careers",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">{/* Toggle 'dark' for dark-mode preview; remove to follow system */}
      <body className="antialiased">{children}</body>
    </html>
  );
}

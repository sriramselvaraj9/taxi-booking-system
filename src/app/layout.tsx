import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickRide - Taxi Booking System",
  description: "Professional taxi booking application with Next.js and Express.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
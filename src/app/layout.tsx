import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Sidebar from "@/components/global/side-bar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Create with React and Shadcn UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <Sidebar>{children}</Sidebar>
    </html>
  );
}

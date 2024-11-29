import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import localFont from "next/font/local";
import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Yggdrasil",
  description: "Codebase Analysis using AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const appFont = localFont({
  src: "./fonts/AppFont.ttf",
  weight: "100 900"
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(appFont.className)}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

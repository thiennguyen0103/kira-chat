import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import AuthProvider from "@/providers/auth-provider";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const fontSans = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kira Chat",
  description: "A chat platform for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={fontSans.className}>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-poppins antialiased",
          fontSans.variable,
        )}
      >
        <Suspense fallback={<Loading />}>
          <TanstackQueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </TanstackQueryProvider>
          <Toaster />
        </Suspense>
      </body>
    </html>
  );
}

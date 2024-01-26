import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Roboto_Flex, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { DarkModeProvider } from "@/components/dark-mode/provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Peter Jun Park | Full Stack Dev & Technical Writer",
  description: "Peter's Portfolio / Blog"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${robotoFlex.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <DarkModeProvider
          enableSystem
          defaultTheme="system"
          attribute="class"
          disableTransitionOnChange
        >
          <Header />
          <TooltipProvider>
            <main>{children}</main>
          </TooltipProvider>
          <Footer />
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  );
}

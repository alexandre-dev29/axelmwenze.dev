import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { generateIndexMetadata } from "@/portfolio/app/lib/utilities";
import { ThemeProviders } from "@/portfolio/app/lib/ui/ThemeProvider";
import { MainNav } from "@/portfolio/app/lib/ui/main-nav";
import SocialLinks from "@/portfolio/app/lib/ui/social-link";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';



const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900", "400", "300"],
});
export const metadata: Metadata = generateIndexMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProviders>
          <div className="w-screen">

          {children}
            <SpeedInsights />
            <Analytics />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}

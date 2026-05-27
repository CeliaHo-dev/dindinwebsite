import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Suspense } from "react";

import TelemetryProvider from "@/components/TelemetryProvider";

import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://celiahoportfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Celia Ho's Portfolio",
  description: "Project-led media planner portfolio focused on commerce growth, brand strategy, and conversion improvement across FMCG, beauty, and real estate.",
  icons: {
    icon: "/HoHaoDuyen_Portrait.jpeg",
  },
  openGraph: {
    title: "Celia Ho's Portfolio",
    description: "Project-led media planner portfolio with case studies across commerce, brand, and UX performance.",
    url: siteUrl,
    images: [{ url: "/HoHaoDuyen_Portrait.jpeg", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celia Ho's Portfolio",
    description: "Project-led media planner portfolio with case studies across commerce, brand, and UX performance.",
    images: ["/HoHaoDuyen_Portrait.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${beVietnamPro.variable} font-sans antialiased text-muted bg-bg selection:bg-purple/30`}>
                <Suspense fallback={null}>
                    <TelemetryProvider />
                </Suspense>
                {children}
            </body>
        </html>
  );
}

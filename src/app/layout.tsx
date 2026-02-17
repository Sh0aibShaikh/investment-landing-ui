import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Providers from "./components/Providers";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "InvestPro — Invest in Bonds with 9–14% Fixed Returns",
  description:
    "India's most trusted investment platform for bonds, mutual funds and fixed deposits. SEBI Registered. Zero defaults. Start with ₹10,000.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={dmSans.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}

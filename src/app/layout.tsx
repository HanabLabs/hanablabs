import type { Metadata } from "next";
import { Zen_Maru_Gothic, Nunito } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "hanab",
  description: "note執筆・個人開発をしています",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://hanab.me"
  ),
  openGraph: {
    title: "hanab",
    description: "note執筆・個人開発をしています",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "hanab",
    description: "note執筆・個人開発をしています",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${zenMaruGothic.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}

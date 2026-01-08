import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "hanab labs | 生きた証を、プロダクトにする。",
  description: "プロダクトと思考をまとめた個人サイト",
  openGraph: {
    title: "hanab labs",
    description: "生きた証を、プロダクトにする。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

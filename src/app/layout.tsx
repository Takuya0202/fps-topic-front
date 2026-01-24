import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "fps topic",
  description: "fps topic",
};

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`bg-darker ${inter.className}`}>{children}</body>
    </html>
  );
}

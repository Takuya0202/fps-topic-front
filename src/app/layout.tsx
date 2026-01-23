import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fps topic",
  description: "fps topic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-darker">{children}</body>
    </html>
  );
}

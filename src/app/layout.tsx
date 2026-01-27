import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

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
      <body className={`bg-darker ${inter.className}`}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#272727",
              color: "#fff",
              border: "1px solid #3a3a3a",
              padding: "12px 16px",
              fontSize: "14px",
              fontWeight: 500,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
            },
            success: {
              iconTheme: {
                primary: "#22c55e",
                secondary: "#272727",
              },
            },
            error: {
              iconTheme: {
                primary: "#ff1f1f",
                secondary: "#272727",
              },
            },
          }}
        />
      </body>
    </html>
  );
}

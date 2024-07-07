import type { Metadata } from "next";
import { Spirax, Cinzel } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({ subsets: ["latin-ext"], weight: ["400", "500", "600", "800"] })

export const metadata: Metadata = {
  title: "Dev Sam",
  description: "Portfolio website of Dev Sam AKA Abdus Samad",
  authors: { name: "Abdus Samad" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Yanone_Kaffeesatz, Special_Elite } from "next/font/google";
import "./globals.css";

const yanoneKaffeesatz = Yanone_Kaffeesatz({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-yanone",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-special-elite",
});

export const metadata: Metadata = {
  title: "BlackJack - Dansband från Sverige",
  description: "BlackJack är ett svenskt dansband. Boka oss för spelningar och evenemang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${yanoneKaffeesatz.variable} ${specialElite.variable}`}>{children}</body>
    </html>
  );
}

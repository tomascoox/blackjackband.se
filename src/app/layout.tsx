import type { Metadata } from "next";
import { Yanone_Kaffeesatz, Special_Elite } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';
import Analytics from '@/components/Analytics';

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
      <body className={`${yanoneKaffeesatz.variable} ${specialElite.variable}`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `,
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

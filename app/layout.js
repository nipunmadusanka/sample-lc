import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Leisure Ceylon - Sri Lanka's Premier Destination Management Company",
  description: "Experience extraordinary Sri Lankan adventures with Leisure Ceylon. We craft bespoke journeys showcasing pristine beaches, ancient temples, wildlife safaris, and cultural immersions across paradise isle.",
  keywords: "Sri Lanka tours, destination management, travel packages, wildlife safaris, cultural tours, beach holidays, Ceylon travel",
  authors: [{ name: "Leisure Ceylon" }],
  openGraph: {
    title: "Leisure Ceylon - Sri Lanka's Premier Destination Management Company",
    description: "Your gateway to extraordinary Sri Lankan experiences. 15+ years of excellence, 98% client satisfaction.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leisure Ceylon - Sri Lanka's Premier Destination Management Company",
    description: "Your gateway to extraordinary Sri Lankan experiences. 15+ years of excellence, 98% client satisfaction.",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

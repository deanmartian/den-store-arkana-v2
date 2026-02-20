import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "@/app/ClientBody";

export const metadata: Metadata = {
  title: "Den Store Arkana - Novellesamling av Henrik Aareskjold",
  description: "En novellesamling inspirert av tarotkortenes mystikk av Henrik Aareskjold. Historier som spenner fra hverdagsliv til fantasi, sci-fi og mørke eventyr. Utgis 15. februar 2026 - forhåndsbestill nå!",
  keywords: [
    "Den Store Arkana",
    "Henrik Aareskjold",
    "novellesamling",
    "tarot",
    "tarotkort",
    "norsk litteratur",
    "fantasy",
    "sci-fi",
    "noveller",
    "mystikk",
    "magisk realisme",
    "norsk forfatter",
    "debutbok",
    "Forfatterskolen"
  ],
  authors: [{ name: "Henrik Aareskjold" }],
  creator: "Henrik Aareskjold",
  publisher: "Henrik Aareskjold",
  openGraph: {
    type: "book",
    locale: "nb_NO",
    url: "https://den-store-arkana.vercel.app",
    siteName: "Den Store Arkana",
    title: "Den Store Arkana - Novellesamling av Henrik Aareskjold",
    description: "La tarotkortenes mystikk ta deg med til en verden av drømmer og mareritt. En novellesamling som spenner fra hverdagsliv til fantasi, sci-fi og mørke eventyr.",
    images: [
      {
        url: "https://static.vecteezy.com/system/resources/previews/002/789/100/non_2x/set-of-mystical-tarot-cards-elements-of-esoteric-occult-alchemical-and-witch-symbols-zodiac-signs-cards-with-esoteric-symbols-silhouette-of-hands-stars-moon-and-crystals-illustration-free-vector.jpg",
        width: 1200,
        height: 630,
        alt: "Den Store Arkana - Bokcover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Den Store Arkana - Novellesamling av Henrik Aareskjold",
    description: "La tarotkortenes mystikk ta deg med til en verden av drømmer og mareritt.",
    images: ["https://static.vecteezy.com/system/resources/previews/002/789/100/non_2x/set-of-mystical-tarot-cards-elements-of-esoteric-occult-alchemical-and-witch-symbols-zodiac-signs-cards-with-esoteric-symbols-silhouette-of-hands-stars-moon-and-crystals-illustration-free-vector.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}

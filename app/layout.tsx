import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import Head from "next/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Padukuhan ngepoh",
    template: "%s - Padukuhan ngepoh"
  },
  description: "Situs Resmi Padukuhan ngepoh.",
  metadataBase: new URL("https://www.padukuhanngepoh.my.id"),
  keywords: [
    "Padukuhan ngepoh",
    "ngepoh",
    "ngepoh Gunungkidul",
    "ngepoh Gunung Kidul",
    "Padukuhan ngepoh Gunungkidul",
    "Padukuhan ngepoh Gunung Kidul",
    "Kerupuk Udang",
    "Kerupuk Udang ngepoh",
    "Kerupuk Udang ngepoh Gunungkidul",
    "Kerupuk Udang ngepoh Gunung Kidul"
  ],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "Padukuhan ngepoh",
    description: "Situs Resmi Padukuhan ngepoh",
    url: "https://www.padukuhanngepoh.my.id",
    type: "website",
    locale: "id_ID",
    siteName: "Padukuhan ngepoh",
    images: [
      {
        url: "https://www.padukuhanngepoh.my.id/img/ngepoh.jpg",
        width: 1200,
        height: 630,
        alt: "Padukuhan ngepoh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Padukuhan ngepoh",
    description: "Situs Resmi Padukuhan ngepoh",
    images: [
      {
        url: "https://www.padukuhanngepoh.my.id/img/ngepoh.jpg",
        alt: "Padukuhan ngepoh"
      }
    ]
  },
  alternates: {
    canonical: "https://www.padukuhanngepoh.my.id",
    languages: {
      "id-ID": "https://www.padukuhanngepoh.my.id",
      "en-US": "https://www.padukuhanngepoh.my.id/en"
    }
  }
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body className="text-gray-800 antialiased dark:bg-black dark:text-gray-400">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

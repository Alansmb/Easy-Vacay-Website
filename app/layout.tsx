import { HashScrollHandler } from "@/components/hash-scroll-handler";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Easy Vacay - Plan Group Vacations Made Simple",
    template: "%s | Easy Vacay",
  },
  description:
    "Discover the best destinations around the world. Plan, organize, and experience group vacations made simple with Easy Vacay. Seamless payments, smooth user experience, and smart trip management all in one place.",
  keywords: [
    "group vacation planning",
    "travel app",
    "vacation planning",
    "group travel",
    "trip planning",
    "travel management",
    "easy vacay",
    "vacation organizer",
    "group trips",
    "travel payments",
    "trip coordination",
    "vacation app",
  ],
  authors: [{ name: "Easy Vacay" }],
  creator: "Easy Vacay",
  publisher: "Easy Vacay",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("https://easyvacay.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Easy Vacay",
    title: "Easy Vacay - Plan Group Vacations Made Simple",
    description:
      "Discover the best destinations around the world. Plan, organize, and experience group vacations made simple with Easy Vacay.",
    images: [
      {
        url: "/og-easy.png", // Recommended: Create a 1200x630px OG image
        width: 1200,
        height: 630,
        alt: "Easy Vacay - Group Vacation Planning App",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy Vacay - Plan Group Vacations Made Simple",
    description:
      "Discover the best destinations around the world. Plan, organize, and experience group vacations made simple with Easy Vacay.",
    images: [
      {
        url: "/og-easy.png", // Recommended: Create a 1200x630px OG image
        alt: "Easy Vacay - Group Vacation Planning App",
      },
    ],
    creator: "@easyvacay", // Update with your Twitter handle
    site: "@easyvacay", // Update with your Twitter handle
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
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Travel",
  classification: "Travel App",
  applicationName: "Easy Vacay",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json", // You can create a web app manifest
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Easy Vacay",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6FAFF" },
    { media: "(prefers-color-scheme: dark)", color: "#3200AA" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} antialiased min-h-screen  bg-easy-vacay bg-fixed bg-no-repeat bg-cover relative`}
      >
        <HashScrollHandler />
        <Header />
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
        <footer className="  border-t-2  md:mb-0  px-6 xl:mx-20">
          <div className="px-6 md:px-12 lg:px-16 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <p className="text-gray-700 text-sm md:text-base">
                © {new Date().getFullYear()} Easy Vacay. All rights reserved.
              </p>

              {/* Policy Links */}
              <div className="flex items-center gap-4 text-gray-700 text-sm md:text-base">
                <Link
                  href="/terms"
                  className="hover:text-[#DE149F] transition-colors"
                >
                  Terms of Use
                </Link>
                <span className="text-gray-400">•</span>
                <Link
                  href="/privacy-policy"
                  className="hover:text-[#DE149F] transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

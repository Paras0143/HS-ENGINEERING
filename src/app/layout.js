import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Footer } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.hs-engineering.example"),
  title: {
    default: "HS ENGINEERING | Industrial Air Solutions",
    template: "%s | HS ENGINEERING"
  },
  description:
    "HS ENGINEERING manufactures air compressors, dryers, and filtration systems. Reliable, efficient, and industry-ready solutions.",
  keywords: [
    "air compressors",
    "industrial air",
    "air dryers",
    "filtration",
    "manufacturing",
    "HS ENGINEERING"
  ],
  openGraph: {
    type: "website",
    siteName: "HS ENGINEERING",
    title: "HS ENGINEERING | Industrial Air Solutions",
    description:
      "Reliable, efficient air compressors and dryers for industry across India.",
    images: [{ url: "/logo.jpg" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "HS ENGINEERING | Industrial Air Solutions",
    description:
      "Reliable, efficient air compressors and dryers for industry across India.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

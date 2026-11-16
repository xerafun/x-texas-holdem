import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "XeraFun Poker | Free Texas Hold'em AI Game",
    template: "%s | XeraFun Poker",
  },
  description:
    "Free single-player Texas Hold'em with smart AI. No download required. By XeraFun.",
  keywords: [
    "XeraFun Poker",
    "Texas Hold'em",
    "德州扑克",
    "单机德州扑克",
    "Poker AI",
    "Free Poker",
    "XeraFun",
  ],
  authors: [{ name: "XeraFun", url: "https://xerafun.com" }],
  creator: "XeraFun",
  publisher: "XeraFun",
  metadataBase: new URL("https://poker.xerafun.com"),
  alternates: {
    canonical: "https://poker.xerafun.com",
    languages: {
      en: "https://poker.xerafun.com",
      zh: "https://poker.xerafun.com",
      "x-default": "https://poker.xerafun.com",
    },
  },
  openGraph: {
    title: "XeraFun Poker - Free Texas Hold'em",
    description: "Free single-player Texas Hold'em with smart AI. By XeraFun.",
    url: "https://poker.xerafun.com",
    siteName: "XeraFun Poker",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XeraFun Poker | Free Texas Hold'em",
    description: "Free single-player Texas Hold'em with smart AI. By XeraFun.",
    creator: "@xerafun",
    site: "@xerafun",
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://xerafun.com/#organization",
      name: "XeraFun",
      url: "https://xerafun.com",
      logo: "https://poker.xerafun.com/favicon.ico",
      sameAs: ["https://github.com/xerafun"],
    },
    {
      "@type": "WebSite",
      "@id": "https://poker.xerafun.com/#website",
      url: "https://poker.xerafun.com",
      name: "XeraFun Poker",
      description: "Free single-player Texas Hold'em with smart AI.",
      publisher: {
        "@id": "https://xerafun.com/#organization",
      },
      inLanguage: ["en", "zh"],
    },
    {
      "@type": ["WebApplication", "VideoGame"],
      "@id": "https://poker.xerafun.com/#game",
      name: "XeraFun Poker",
      alternateName: "XeraFun 德州扑克",
      url: "https://poker.xerafun.com",
      applicationCategory: "GameApplication",
      gamePlatform: "Web Browser",
      genre: ["Card Game"],
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://xerafun.com/#organization",
      },
      isPartOf: {
        "@id": "https://poker.xerafun.com/#website",
      },
      description: "Free single-player Texas Hold'em web game with AI opponents.",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://poker.xerafun.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "XeraFun",
          item: "https://xerafun.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "XeraFun Poker",
          item: "https://poker.xerafun.com",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="help" type="text/markdown" href="/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { I18nProvider } from "@/components/i18n-provider";

// 禁用页面缩放，避免移动端用户误操作
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "XeraFun Poker | Free Single-Player Texas Hold'em AI Game",
    template: "%s | XeraFun Poker",
  },
  description:
    "Free single-player Texas Hold'em by XeraFun (xerafun.com). Play instantly in your browser with no download or signup. Features Monte Carlo equity odds and intelligent AI opponents.",
  keywords: [
    "XeraFun",
    "XeraFun Poker",
    "xerafun.com",
    "poker.xerafun.com",
    "Texas Hold'em",
    "德州扑克",
    "单机德州扑克",
    "Free Texas Holdem",
    "Offline Poker",
    "Free Poker",
    "Poker AI",
    "Single Player Poker",
    "No Download Poker",
    "Browser Poker Game",
    "Monte Carlo Poker Odds",
    "摸鱼德州",
    "AI扑克对战",
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
    title: "XeraFun Poker - Free Single-Player Texas Hold'em with AI",
    description:
      "Experience thrilling Texas Hold'em against smart AI opponents. No download, 100% free, mobile-optimized. Powered by XeraFun (xerafun.com).",
    url: "https://poker.xerafun.com",
    siteName: "XeraFun Poker",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XeraFun Poker | Free Single-Player Texas Hold'em",
    description:
      "Play Texas Hold'em against smart AI opponents on XeraFun. Zero download, pause anytime, free forever.",
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
      description:
        "Free single-player Texas Hold'em web game with advanced AI opponents, built by XeraFun.",
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
      genre: ["Card Game", "Strategy Game"],
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
      description:
        "Lightweight, mobile-first single-player Texas Hold'em game featuring Monte Carlo equity calculation and intelligent AI opponents.",
      featureList: [
        "Single-player offline Texas Hold'em",
        "Monte Carlo real-time win rate & equity calculation",
        "Intelligent Super AI with opponent profiling (VPIP/PFR)",
        "Mobile-first responsive vertical poker table",
        "No download or registration required",
        "English and Chinese language support",
      ],
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
    {
      "@type": "FAQPage",
      "@id": "https://poker.xerafun.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is XeraFun Poker?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "XeraFun Poker (poker.xerafun.com) is a free, single-player Texas Hold'em web game hosted by XeraFun (xerafun.com). It runs directly in any modern mobile or desktop browser without requiring downloads, app installs, or user registration.",
          },
        },
        {
          "@type": "Question",
          name: "什么是 XeraFun 德州扑克？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "XeraFun 德州扑克（poker.xerafun.com）是 XeraFun（xerafun.com）主站旗下的免费单机德州扑克网页游戏，无需下载安装或注册登录，手机或电脑浏览器即点即玩。",
          },
        },
        {
          "@type": "Question",
          name: "How does the AI in XeraFun Poker work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "XeraFun Poker features two AI tiers: Normal Mode, which makes probabilistic decisions based on pot odds and position; and Super Mode, which combines real-time Monte Carlo simulations (calculating hand equity over thousands of iterations) with opponent profiling (tracking VPIP, PFR, and aggression factors) to make advanced decisions.",
          },
        },
        {
          "@type": "Question",
          name: "XeraFun 德州扑克的人工智能（AI）是如何运作的？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "游戏提供“普通电脑”与“超级电脑”两种难度。超级电脑结合了蒙特卡洛千次实时胜率模拟（Monte Carlo Equity）与对手行为画像分析（追踪 VPIP 入池率、PFR 翻前加注率等指标）进行决策。",
          },
        },
        {
          "@type": "Question",
          name: "Is XeraFun Poker free to play?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, XeraFun Poker is 100% free and open for leisure and practice. All chips are virtual for entertainment and skill development only.",
          },
        },
        {
          "@type": "Question",
          name: "XeraFun 德州扑克收费吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "完全免费。游戏为纯单机娱乐与技巧练习工具，所有筹码均为虚拟筹码，绿色健康。",
          },
        },
        {
          "@type": "Question",
          name: "Can I play XeraFun Poker on mobile devices?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, XeraFun Poker is built mobile-first. The user interface is specifically tailored for vertical touchscreens, allowing seamless one-handed gameplay on iOS and Android devices.",
          },
        },
        {
          "@type": "Question",
          name: "手机可以玩 XeraFun 德州扑克吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "可以。游戏采用 Mobile-first（移动优先）竖屏设计，专为智能手机单手触控优化，iOS 与 Android 均可流畅运行。",
          },
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

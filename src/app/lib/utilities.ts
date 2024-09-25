import { Metadata } from "next";
import { siteDataConfig } from "@/portfolio/app/lib/config";

export const generateIndexMetadata = (): Metadata => {
  return {
    title: siteDataConfig.title,
    description: siteDataConfig.description,
    authors: [{ name: siteDataConfig.author, url: siteDataConfig.url }],
    category: "Portfolio",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      title: "Axel Mwenze Portfolio",
      url: siteDataConfig.url,
      authors: [siteDataConfig.author],
      description: siteDataConfig.description,
      creators: [siteDataConfig.author],
      countryName: "DRC",
      firstName: "Axel",
      lastName: "Mwenze",
      images: siteDataConfig.image,
    },
    twitter: {
      title: siteDataConfig.title,
      description: siteDataConfig.description,
      images: [siteDataConfig.image],
      card: "summary_large_image",
      site: `${siteDataConfig.title}`,
      creator: siteDataConfig.author,
    },
    keywords: siteDataConfig.keywords,
    publisher: siteDataConfig.author,
    other: {
      "twitter:tile:image": `${siteDataConfig.image}`,
      "twitter:tile:info1:icon": "Person",
      "twitter:tile:info2:icon": "Calendar",
      "al:web:url": `${siteDataConfig.url}`,
    },
    metadataBase: new URL("https://axelmwenze.dev"),
    robots: {
      index: true,
      follow: true,
      nocache: true,
      "max-image-preview": "large",
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-image-preview": "large",
      },
    },
  };
};

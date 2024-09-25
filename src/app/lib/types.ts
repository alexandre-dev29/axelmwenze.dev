export type SiteConfigType = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
  author: string;
};

export type NavigationType = {
  title: string;
  href: string;
  target?: "_blank" | "_self";
};

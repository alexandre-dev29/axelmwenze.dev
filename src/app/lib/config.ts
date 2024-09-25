import { NavigationType, SiteConfigType } from "@/portfolio/app/lib/types";

export const siteDataConfig: SiteConfigType = {
  url: "https://axelmwenze.dev",
  description: `My name is Axel Mwenze, I am a software engineer,FullStack Web developer and Udemy
                Instructor.
                My main Stack are Typescript(Javascript), C#, Flutter and Python.
                I'm also passionate about Classical music, Opera,Piano Playing,
                football, TV and I'm a big fan of Japanese anime.`,
  image: "/me.jpeg",
  keywords: [
    "Axel Mwenze",
    "Portfolio",
    "Developer",
    "Mobile developer",
    "Fullstack",
    "Fullstack web developer",
  ],
  title: "Axel Mwenze",
  author: "Axel Mwenze",
};
export const navigationData: Array<NavigationType> = [
  { title: "About", href: "/about", target: "_self" },
  // { title: "Works", href: "/works", target: "_self" },
  // { title: "Skills", href: "/skills", target: "_self" },
  { title: "Blog", href: "https://blog.axelmwenze.dev", target: "_blank" },
];

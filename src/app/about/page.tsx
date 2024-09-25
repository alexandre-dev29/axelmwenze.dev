import React from "react";
import ProfileContainer from "@/portfolio/app/lib/ui/profile-container";
import { Metadata } from "next";
import about1 from "../images/about01.png";
import about2 from "../images/about02.png";
import about3 from "../images/about03.png";

export const metadata: Metadata = {
  title: "Axel Mwenze | About Me",
  description:
    "Hello I am Axel Mwenze, Software developer based in Congo DRC, i am specialised in Web application and Mobile using various technologies",
};
const Page = () => {
  return (
    <div className={"flex-1 w-full flex-col py-10 xl:py-12"}>
      <h2
        className={
          "text-center default-police font-bold text-black capitalize text-2xl lg:text-3xl xl:text-5xl"
        }
      >
        I Know that <span className={"text-secondary"}>Good Design</span> <br />
        means <span className={"text-secondary"}>Good Business</span>
      </h2>

      <ProfileContainer
        data={[
          {
            title: "Frontend developer",
            description:
              "I transform designs into dynamic, user-friendly websites using modern frameworks like React and Angular. Let's build an online presence that captivates your audience and reflects your brand's unique identity.",
            imageFile: about1,
          },
          {
            title: "Backend developer",
            description:
              "I build the invisible backbone of your web applications, ensuring smooth functionality and reliable data management. From secure databases to scalable APIs, I craft robust backend solutions that power your website's performance.",
            imageFile: about2,
          },
          {
            title: "Mobile developer (Flutter, React native)",
            description:
              "I bring your apps to life on both iOS and Android platforms, leveraging the power of Flutter and React Native. These cross-platform frameworks allow me to build native-quality apps that deliver a seamless user experience across devices.",
            imageFile: about3,
          },
        ]}
      />
    </div>
  );
};

export default Page;

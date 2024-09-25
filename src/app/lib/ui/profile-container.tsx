import React, { FC } from "react";
import AboutCard from "@/portfolio/app/lib/ui/about-card";
import { StaticImageData } from "next/image";

export interface ProfileContainerProps {
  data: { title: string; description: string; imageFile: StaticImageData }[];
}

export const ProfileContainer: FC<ProfileContainerProps> = ({ data }) => {
  return (
    <div
      className={
        "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-3/4 mx-auto "
      }
    >
      {data.map(({ imageFile, description, title }) => (
        <AboutCard
          key={Math.random()}
          imageUrl={imageFile}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default ProfileContainer;

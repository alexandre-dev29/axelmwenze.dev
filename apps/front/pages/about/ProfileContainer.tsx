import React from 'react';
import { GetAllAboutQuery } from '@next-template-nx/data';
import { AboutCard } from '@next-template-nx/ui';

export interface ProfileContainerProps {
  allAboutData: GetAllAboutQuery;
}

const ProfileContainer = ({ allAboutData }: ProfileContainerProps) => {
  return (
    <div className={'flex justify-center items-start flex-wrap mt-10'}>
      {allAboutData.abouts.data.map(({ id, attributes }, index) => (
        <AboutCard
          key={id}
          imageUrl={attributes.ImageUrl?.data?.attributes?.url}
          title={attributes.Title}
          description={attributes.Description}
        />
      ))}
    </div>
  );
};

export default ProfileContainer;

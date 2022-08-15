import { motion } from 'framer-motion';
import { useExperiencesQuery, useSkillsQuery } from '@next-template-nx/data';

import { Tooltip } from '@nextui-org/react';
import Image from 'next/image';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  const { data: skillsData } = useSkillsQuery({
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });
  const { data: experienceData } = useExperiencesQuery({
    fetchPolicy: 'cache-first',
    errorPolicy: 'all',
  });

  return (
    <div className={'flex-1 w-full flex-col py-8 xl:py-24'}>
      <Head>
        <title>Axel Mwenze | Skills and Work experience</title>
        <meta
          name="description"
          content="Here are some of my skills and work experience"
        />
      </Head>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container mx-auto lg:mt-6 xl:mt-12">
        <motion.div className="app__skills-list">
          {skillsData?.skills?.data.map(({ id, attributes }, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: attributes.BackgroundColor }}
                key={`att-${index}`}
              >
                <Image
                  src={attributes.ImageUrl.data.attributes.url}
                  width={350}
                  height={300}
                  alt={attributes.Name}
                />
              </div>
              <p className="p-text default-police">{attributes.Name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp mx-auto">
          {experienceData?.experiences?.data.map(
            ({ id, attributes }, index) => (
              <motion.div className="app__skills-exp-item" key={index}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{attributes.Year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {attributes.work_experiences.data.map(
                    ({ id, attributes }) => (
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={attributes.Name}
                        key={attributes.Name}
                      >
                        <Tooltip
                          content={attributes.Description}
                          rounded
                          color="primary"
                        >
                          <h4 className="bold-text default-police">
                            {attributes.Name}
                          </h4>
                        </Tooltip>

                        <p className="p-text default-police">
                          {attributes.Compagny}
                        </p>
                      </motion.div>
                    )
                  )}
                </motion.div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Skills;

import { motion } from 'framer-motion';
import { useExperiencesQuery, useSkillsQuery } from '@next-template-nx/data';
import { LoadingState } from '@next-template-nx/ui';
import ReactTooltip from 'react-tooltip';
import { Tooltip } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface SkillsProps {}

export function Skills(props: SkillsProps) {
  const {
    loading: loadingSkills,
    error: errorSkills,
    data: skillsData,
  } = useSkillsQuery({ fetchPolicy: 'cache-first', errorPolicy: 'all' });
  const {
    loading,
    error,
    data: experienceData,
  } = useExperiencesQuery({ fetchPolicy: 'cache-first', errorPolicy: 'all' });

  return (
    <div className={'flex-1 w-full flex-col py-24'}>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container mx-auto">
        <motion.div className="app__skills-list">
          {skillsData?.skills?.data.map(({ id, attributes }) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={attributes.Name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: attributes.BackgroundColor }}
              >
                <img
                  src={attributes.ImageUrl.data.attributes.url}
                  alt={attributes.Name}
                />
              </div>
              <p className="p-text">{attributes.Name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experienceData?.experiences?.data.map(({ id, attributes }) => (
            <motion.div className="app__skills-exp-item" key={attributes.Year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{attributes.Year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {attributes.work_experiences.data.map(({ id, attributes }) => (
                  <>
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
                        <h4 className="bold-text">{attributes.Name}</h4>
                      </Tooltip>

                      <p className="p-text">{attributes.Compagny}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

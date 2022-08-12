import Image from 'next/image';
import { motion } from 'framer-motion';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface WorkCardProps {
  attributes: any;
}

export function WorkCard({ attributes }: WorkCardProps) {
  return (
    <div className="app__work-item app__flex">
      <div className="app__work-img app__flex">
        <Image
          src={attributes?.ImageUrl.data.attributes.url}
          width={350}
          height={330}
          alt={attributes.Title}
        />
        <motion.div
          whileHover={{ opacity: [0, 1] }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
            staggerChildren: 0.5,
          }}
          className="app__work-hover app__flex"
        >
          <a href={attributes.ProjectLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillEye />
            </motion.div>
          </a>
          <a href={attributes.CodeLink} target="_blank" rel="noreferrer">
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <AiFillGithub />
            </motion.div>
          </a>
        </motion.div>
      </div>

      <div className="app__work-content app__flex">
        <h4 className="bold-text default-police">{attributes.Title}</h4>
        <p className="p-text default-police" style={{ marginTop: 10 }}>
          {attributes.Description}
        </p>

        <div className="app__work-tag app__flex">
          <p className="p-text default-police">
            {attributes?.tags?.data[0].attributes.tag}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;

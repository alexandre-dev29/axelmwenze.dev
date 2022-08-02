import './about-card.module.scss';
import { motion } from 'framer-motion';

/* eslint-disable-next-line */
export interface AboutCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export function AboutCard({ title, imageUrl, description }: AboutCardProps) {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className={
        'w-[190px] flex justify-start items-start flex-col m-[2rem] xl:w-[370px] xl:mx-[2rem] xl:my-[4rem]'
      }
      key={1}
    >
      <img
        src={imageUrl}
        className={'w-full h-[170px] rounded-sm'}
        style={{ objectFit: 'cover' }}
        alt={title}
      />
      <h2 className="bold-text" style={{ marginTop: 20 }}>
        {title}
      </h2>
      <p className="p-text" style={{ marginTop: 10 }}>
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;

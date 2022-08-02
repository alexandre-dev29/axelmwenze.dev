import styles from './about-card.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
      className={styles['app__profile-item']}
      key={1}
    >
      <Image
        src={imageUrl}
        width={400}
        height={350}
        alt={title}
        className={'w-full h-[170px] rounded-sm'}
      />

      <h2 className={styles['bold-text']} style={{ marginTop: 20 }}>
        {title}
      </h2>
      <p className={styles['p-text']} style={{ marginTop: 10 }}>
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;

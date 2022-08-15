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
      className={
        'app__profile-item w-[120px] md:w-[190px] xl:w-[220px] m-5 xl:m-12'
      }
      key={1}
    >
      <Image
        src={imageUrl}
        width={400}
        height={350}
        alt={title}
        className={'w-full h-[170px] rounded-sm'}
      />

      <h2
        className={'bold-text default-police text-center mx-auto'}
        style={{ marginTop: 20 }}
      >
        {title}
      </h2>
      <p
        className={'p-text default-police text-center'}
        style={{ marginTop: 10, textAlign: 'center' }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default AboutCard;

import { useEffect, useState } from 'react';
import {
  TagEntity,
  useGetAllTagsQuery,
  useWorksQuery,
  WorkEntity,
} from '@next-template-nx/data';
import { motion } from 'framer-motion';
import { WorkCard } from '@next-template-nx/ui';

/* eslint-disable-next-line */
export interface WorkProps {}

export function Work(props: WorkProps) {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [tags, setTags] = useState([] as Array<string>);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { data } = useWorksQuery({
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  });
  const { data: dataTags } = useGetAllTagsQuery({
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(
          works.filter(({ id, attributes }: WorkEntity) =>
            attributes.tags.data
              .map(({ id, attributes }: TagEntity) => attributes.tag)
              .includes(item)
          )
        );
      }
    }, 500);
  };

  useEffect(() => {
    setWorks(data?.works?.data);
    setFilterWork(data?.works?.data);
    setTags(dataTags?.tags?.data.map((ta) => ta.attributes.tag).slice(0, 5));
  }, [data, dataTags]);

  return (
    <div className={'flex-1 w-full flex-col py-4 md:py-8 3xl:py-24'}>
      <h2 className="head-text">
        My <span>Recent</span> Projects
      </h2>

      <div className="app__work-filter">
        {tags ? (
          ['All', ...tags].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? 'item-active' : ''
              }`}
            >
              {item}
            </div>
          ))
        ) : (
          <div>No Tags</div>
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork?.map(({ id, attributes }: WorkEntity, index) => (
          <WorkCard key={index} attributes={attributes} />
        ))}
      </motion.div>
    </div>
  );
}

export default Work;

import styles from './index.module.scss';
import { useGetAllAboutQuery } from '@next-template-nx/data';
import { LoadingState } from '@next-template-nx/ui';
import ProfileContainer from './ProfileContainer';

/* eslint-disable-next-line */
export interface AboutProps {
  element: string;
}

export function About(props: AboutProps) {
  const { loading, data, error } = useGetAllAboutQuery({
    errorPolicy: 'all',
    fetchPolicy: 'cache-first',
  });
  return (
    <div className={'flex-1 w-full flex-col py-24'}>
      <h2 className={styles['head-text']}>
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>

      {loading ? <LoadingState /> : <ProfileContainer allAboutData={data} />}
    </div>
  );
}

export default About;

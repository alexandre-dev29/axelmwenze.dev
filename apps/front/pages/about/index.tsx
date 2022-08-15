import { useGetAllAboutQuery } from '@next-template-nx/data';
import { LoadingState, ProfileContainer } from '@next-template-nx/ui';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface AboutProps {
  element: string;
}

export function About(props: AboutProps) {
  const { loading, data } = useGetAllAboutQuery({
    errorPolicy: 'all',
    fetchPolicy: 'cache-first',
  });
  return (
    <div className={'flex-1 w-full flex-col py-10 xl:py-24'}>
      <Head>
        <title>Axel Mwenze | About Me</title>
        <meta
          name="description"
          content="Hello I am Axel Mwenze, Software developer based in Congo DRC,
         i am specialised in Web application and Mobile using various technologies"
        />
      </Head>
      <h2
        className={
          'text-center default-police font-bold text-black capitalize text-2xl lg:text-3xl xl:text-5xl'
        }
      >
        I Know that <span className={'text-secondary'}>Good Design</span> <br />
        means <span className={'text-secondary'}>Good Business</span>
      </h2>

      {loading ? <LoadingState /> : <ProfileContainer allAboutData={data} />}
    </div>
  );
}

export default About;

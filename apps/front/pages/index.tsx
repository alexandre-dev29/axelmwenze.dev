import Head from 'next/head';
import { DefaultButton } from '@next-template-nx/ui';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  return (
    <div className={'flex-1 w-full h-2/4  flex-col py-24'}>
      <Head>
        <title>Axel Mwenze | Home</title>
        <meta
          name="description"
          content="Hello welcome to my portfolio,  I am Axel Mwenze, Software developer based in Congo DRC"
        />
      </Head>
      <div
        className={
          'flex justify-start  w-8/12  h-[60vh] items-center p-4 mx-auto'
        }
      >
        <div className={'flex h-[80%] flex-col justify-between items-start'}>
          <p
            className={
              'text-4xl font-bold capitalize text-secondary tracking-wider default-police'
            }
          >
            welcome I am,
          </p>
          <h2 className={'text-7xl capitalize text-gray-800 default-police'}>
            Axel mwenze
          </h2>
          <p
            className={
              'text-7xl capitalize text-gray-800 font-bold text-secondary default-police'
            }
          >
            I Build web and mobile application
          </p>
          <p className={'tracking-widest default-police'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            animi blanditiis, cum deleniti dolores eveniet itaque labore minima
            molestias mollitia neque nobis numquam, placeat quasi rem saepe sit
            vero
          </p>
          <DefaultButton
            textButton={'Contact Me'}
            onClickAction={async () => {
              await router.push('/contact');
            }}
            isFilled={true}
            isSmall={false}
            customStyle={'mt-4 default-police'}
          />
        </div>

        <img src="me.jpeg" alt={'my picture'} className={'profile_image'} />
      </div>
    </div>
  );
}

export default Index;

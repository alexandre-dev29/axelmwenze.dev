import Head from 'next/head';
import { DefaultButton } from '@next-template-nx/ui';
import { useRouter } from 'next/router';

export function Index() {
  const router = useRouter();
  return (
    <div className={'flex-1 w-full h-2/4  flex-col py-10 md:py-24'}>
      <Head>
        <title>Axel Mwenze | Home</title>
        <meta
          name="description"
          content="Hello welcome to my portfolio,  I am Axel Mwenze, Software developer based in Congo DRC"
        />
      </Head>

      <div
        className={
          'flex flex-col-reverse lg:flex-row justify-center w-10/12  xl:w-8/12  h-[60vh] items-center p-4 mx-auto'
        }
      >
        <div
          className={
            'flex h-[80%] flex-col justify-between items-center lg:items-start  md:mt-0'
          }
        >
          <p
            className={
              'text-lg sm:text-2xl md:text-4xl font-bold capitalize text-secondary tracking-wider default-police'
            }
          >
            welcome I am,
          </p>
          <h2
            className={
              'text-4xl sm:text-5xl text-center md:text-left lg:text-7xl capitalize text-gray-800 default-police'
            }
          >
            Axel mwenze
          </h2>
          <p
            className={
              'text-3xl sm:text-4xl md:text-5xl 3xl:text-6xl text-center lg:text-left capitalize text-gray-800 font-bold text-secondary default-police'
            }
          >
            I Build web and mobile application
          </p>
          <p
            className={
              'tracking-widest default-police text-sm mt-0 sm:mt-8 md:mt-4 md:text-xl sm:text-2xl text-center md:text-center lg:text-left'
            }
          >
            I am a software engineer,FullStack Web developer and Udemy
            Instructor.
            <br />
            My main Stack are Typescript(Javascript), C#, Flutter and Python.
            I'm also passionate about Classical music, Opera,Piano Playing,
            football, TV and I'm a big fan of Japanese anime.
          </p>
          <DefaultButton
            textButton={'Contact Me'}
            onClickAction={async () => {
              await router.push('/contact');
            }}
            isFilled={true}
            isSmall={false}
            customStyle={'mt-4 sm:mt-10 md:mt-6 default-police'}
          />
        </div>

        <img
          src="me.jpeg"
          alt={'my picture'}
          className={
            'profile_image  mb-8  lg:mb-0 w-[100px] lg:w-[300px] lg:h-[300px] sm:w-[120px] sm:w-[120px]'
          }
        />
      </div>
    </div>
  );
}

export default Index;

import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { SiUdemy } from 'react-icons/si';
import { Link, Tooltip } from '@nextui-org/react';

/* eslint-disable-next-line */
interface SocialLinksProps {}

export function SocialLinks(props: SocialLinksProps) {
  return (
    <div className={'absolute top-1/2 right-10 flex flex-col gap-5'}>
      <Tooltip content={'Youtube'} color={'error'}>
        <Link
          href={'https://www.youtube.com/channel/UChTsPe6FZBxyozw5M-gE76g'}
          target={'_blank'}
        >
          <BsYoutube
            className={
              'text-3xl  text-gray-800 cursor-pointer transition-all transition duration-200 hover:scale-125 hover:text-red-600'
            }
          />
        </Link>
      </Tooltip>
      <Tooltip content={'Linkedin'} color={'primary'}>
        <Link href={'https://linkedin.com/axel-mwenze'} target={'_blank'}>
          <BsLinkedin
            className={
              'text-3xl text-gray-800 cursor-pointer transition-all transition duration-200 hover:scale-125 hover:text-blue-500'
            }
          />
        </Link>
      </Tooltip>
      <Tooltip content={'Github'} color={'invert'}>
        <Link href={'https://github.com/alexandre-dev29'} target={'_blank'}>
          <BsGithub
            className={
              'text-3xl text-gray-800 cursor-pointer transition-all transition duration-200 hover:scale-125'
            }
          />
        </Link>
      </Tooltip>
      <Tooltip content={'Twitter'} color={'primary'}>
        <Link href={'https://twitter.com/MwenzeAxel'} target={'_blank'}>
          <BsTwitter
            className={
              'text-3xl text-gray-800 cursor-pointer transition-all transition duration-200 hover:scale-125 hover:text-blue-800'
            }
          />
        </Link>
      </Tooltip>

      <Tooltip content={'Udemy'} color={'secondary'}>
        <Link
          href={'https://www.udemy.com/user/axel-mwenze-2/'}
          target={'_blank'}
        >
          <SiUdemy
            className={
              'text-3xl text-gray-800 cursor-pointer transition-all transition duration-200 hover:scale-125 hover:text-violet-500'
            }
          />
        </Link>
      </Tooltip>
    </div>
  );
}

export default SocialLinks;

import styles from './nav-bar.module.scss';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface NavBarProps {}

const listLinks: Array<{ linkName: string; link: string }> = [
  { link: '/', linkName: 'Home' },
  { link: '/about', linkName: 'About' },
  { link: '/work', linkName: 'Work' },
  { link: '/skills', linkName: 'Skills' },
  { link: '/contact', linkName: 'Contact' },
];

export function NavBar(props: NavBarProps) {
  return (
    <div className={'top-0 flex h-[7vh] backdrop-blur-2xl '}>
      <h1 className={'p-0 m-0 text-2xl w-[10vw] my-auto pl-4 text-violet-600'}>
        Axel <span className={'text-blue-400'}> Mwenze</span>
      </h1>
      <div className={'flex flex-1  p-0 justify-center items-center'}>
        <ul className={`flex justify-center items-center m-0`}>
          {listLinks.map(({ linkName, link }, index) => (
            <li key={index} className={'m-0'}>
              <Link href={link}>
                <p className={'p-4 cursor-pointer'}>{linkName}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;

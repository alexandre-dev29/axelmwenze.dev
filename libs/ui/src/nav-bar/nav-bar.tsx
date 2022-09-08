import { HTMLAttributeAnchorTarget, useEffect, useState } from 'react';
import Link from 'next/link';
import { Dropdown } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface NavBarProps {}

type MenuItem = {
  name: string;
  link: string;
  key: string;
  target: HTMLAttributeAnchorTarget;
};
const listLinks: Array<MenuItem> = [
  { link: '/', name: 'Home', key: 'home', target: '_self' },
  { link: '/about', name: 'Little Information', key: 'about', target: '_self' },
  {
    link: 'https://www.blog.axelmwenze.dev',
    name: 'Blog',
    key: 'blog',
    target: '_blank',
  },
  { link: '/work', name: 'Work', key: 'work', target: '_self' },
  { link: '/skills', name: 'Skills', key: 'skills', target: '_self' },
  { link: '/contact', name: 'Contact', key: 'contact', target: '_self' },
];

export function NavBar(props: NavBarProps) {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2 className="head-text" style={{ fontSize: '1.7rem' }}>
          Axel <span>mwenze</span>
        </h2>
      </div>
      <ul className="app__navbar-links">
        {listLinks.map((item, index) => (
          <li className="app__flex p-text" key={index}>
            <div />
            <Link href={`${item.link}`}>
              <p className={'default-police font-bold'}>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={'app__navbar-menu'}>
        {!isSSR && (
          <Dropdown>
            <Dropdown.Button flat>
              <AiOutlineMenu className={'text-xl'} />
            </Dropdown.Button>
            <Dropdown.Menu aria-label="Dynamic Actions" items={listLinks}>
              {(item: any) => (
                <Dropdown.Item key={item.key} color={'secondary'}>
                  <Link href={`${item.link}`} target={item.target}>
                    <p className={'font-bold default-police'}>{item.name}</p>
                  </Link>
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

import { useState } from 'react';
import { images } from '@next-template-nx/ui';
import Link from 'next/link';
import { Dropdown } from '@nextui-org/react';
import { AiOutlineMenu } from 'react-icons/ai';

/* eslint-disable-next-line */
export interface NavBarProps {}

type MenuItem = { name: string; link: string; key: string };
const listLinks: Array<MenuItem> = [
  { link: '/', name: 'Home', key: 'home' },
  { link: '/about', name: 'About', key: 'about' },
  { link: '/work', name: 'Work', key: 'work' },
  { link: '/skills', name: 'Skills', key: 'skills' },
  { link: '/contact', name: 'Contact', key: 'contact' },
];

export function NavBar(props: NavBarProps) {
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
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={'app__navbar-menu'}>
        <Dropdown>
          <Dropdown.Button flat>
            <AiOutlineMenu className={'text-xl'} />
          </Dropdown.Button>
          <Dropdown.Menu aria-label="Dynamic Actions" items={listLinks}>
            {(item: any) => (
              <Dropdown.Item key={item.key} color={'secondary'}>
                <Link href={`${item.link}`}>
                  <p>{item.name}</p>
                </Link>
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;

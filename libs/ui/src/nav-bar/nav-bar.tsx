import { useState } from 'react';
import { images } from '@next-template-nx/ui';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
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
  const [toggle, setToggle] = useState(false);

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
              <p>{item.linkName}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {listLinks.map((item, index) => (
                <li key={`item-${index}`}>
                  <Link href={`${item.link}`}>
                    <p>{item.linkName}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

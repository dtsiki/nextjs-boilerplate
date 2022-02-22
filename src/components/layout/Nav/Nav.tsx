import React, { ReactElement } from 'react';
import Link from 'next/link';

import styles from './nav.module.scss';

const Nav = (): ReactElement => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <Link href='/'>Home</Link>
        </li>
        <li className={styles.nav__item}>
          <Link href='/page'>Page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

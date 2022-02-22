import React, { ReactElement } from 'react';
import Nav from './../Nav';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.footer}>
      <Nav />
    </header>
  );
};

export default Header;

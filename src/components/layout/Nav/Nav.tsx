import React, { ReactElement } from 'react';
import { useTranslation } from 'next-i18next';
import NavLink from 'src/components/common/NavLink';

import styles from './nav.module.scss';
import { useRouter } from 'next/router';

const Nav = (): ReactElement => {
  const { t, i18n  } = useTranslation('common');
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            path='/'
            locale={i18n.language}
            isActive={router.pathname == '/'}>
            {t('MENU.LINK_HOME')}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            path='/page'
            locale={i18n.language}
            isActive={router.pathname == '/page'}>
            {t('MENU.LINK_PAGE')}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

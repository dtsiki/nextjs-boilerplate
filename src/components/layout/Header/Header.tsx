import React, { ReactElement } from 'react';
import Nav from './../Nav';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import NavLink from 'src/components/common/NavLink';

import styles from './header.module.scss';

const Header = (): ReactElement => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Nav />
      <ul className={styles.header__languages}>
        <li>
          <NavLink
            path={router.asPath}
            locale='en'
            isActive={i18n.language == 'en'}>
            {t('LANGUAGE.LINK_ENGLISH')}
          </NavLink>
        </li>
        <li>
          <NavLink
            path={router.asPath}
            locale='ru'
            isActive={i18n.language == 'ru'}>
            {t('LANGUAGE.LINK_RUSSIAN')}
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;

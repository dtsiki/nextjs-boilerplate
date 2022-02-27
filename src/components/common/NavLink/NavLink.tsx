import React, { ReactElement, ReactNode } from 'react';
import Link from 'next/link';

interface NavLinkProps {
  children: ReactNode;
  isActive?: boolean;
  locale?: string;
  path: string;
  prefetch?: boolean
}

const NavLink = ({ children, isActive = false, path, locale, prefetch = false }: NavLinkProps): ReactElement => {
  return (
    <Link
      prefetch={prefetch}
      href={path}
      locale={locale}>
      <a className={isActive ? 'active' : ''}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;

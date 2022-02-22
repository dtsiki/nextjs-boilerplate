import React, { ReactElement, MouseEvent, ReactNode } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick: (e: MouseEvent<HTMLElement>) => void;
  variant?: string;
}

const Button = ({ children, onClick, className, variant }: ButtonProps): ReactElement => {
  const classNames = `${styles.button} ${variant ? `button--${variant}` : ''}${className ? ` ${className}` : ''}`;

  return (
    <button
      onClick={onClick}
      className={classNames}
      type='submit'>
      {children}
    </button>
  );
};

export default Button;

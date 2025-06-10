'use client';

import styles from './button.module.css';
interface IProps {
  text: string;
  color: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  handle?: any;
}

const Button = ({ text, color, type = 'button', handle }: IProps) => {
  return (
    <button
      className={color === 'primary' ? styles.primary : styles.secondary}
      type={type}
      onClick={handle}
    >
      {text}
    </button>
  );
};

export default Button;

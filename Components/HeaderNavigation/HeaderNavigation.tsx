'use client';
import Link from 'next/link';
import styles from './headerNavigation.module.css';
import { usePathname } from 'next/navigation';

interface IProps {
  link: string;
  text: string;
}

const HeaderNavigation = ({ link, text }: IProps) => {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      className={path.startsWith(link) ? styles.active : undefined}
      href={link}
    >
      {text}
    </Link>
  );
};

export default HeaderNavigation;

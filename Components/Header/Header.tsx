import Image from 'next/image';
import Button from '../Button/Button';
import HeaderNavigation from '../HeaderNavigation/HeaderNavigation';
import styles from './header.module.css';
import logo from '../../public/logo.png';
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <div>
        <Link href='/'>
          <Image src={logo.src} alt='Logo' width='40' height='40' />
        </Link>
      </div>
      <div className={styles.navigationBlock}>
        <ul className={styles.linksList}>
          {/* <HeaderNavigation text='Расходы' link='/' /> */}
          <HeaderNavigation text='Доходы' link='/revenues' />
          <HeaderNavigation text='Остатки' link='/remainders' />
        </ul>
        <div className={styles.buttonsBlock}>
          <Button text='Вход' color='secondary' />
          <Button text='Регистрация' color='primary' />
        </div>
      </div>
    </>
  );
};

export default Header;

import Image from 'next/image';
import Button from '../Button/Button';
import img from '../../public/logo.png';

import styles from './expenseItem.module.css';
const ExpenseItem = () => {
  return (
    <div className={styles.expenseItemContainer}>
      <div className={styles.expenseItemHeader}>
        <div className={styles.expenseItemHeaderIcon}>
          {'Title'.slice(0, 1)}
        </div>
        <div>Title</div>
      </div>
      <div className={styles.expenseItemImageContainer}>
        <Image src={img.src} alt='Section image' fill />
      </div>
      <div className={styles.expenseItemTextContainer}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore,
          quibusdam repellat mole...
        </p>
      </div>
      <div className={styles.expenseItemButtonsBlock}>
        <Button text='Закрепить' color='secondary' />
        <Button text='Удалить' color='primary' />
      </div>
    </div>
  );
};
export default ExpenseItem;

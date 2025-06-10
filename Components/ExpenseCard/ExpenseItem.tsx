'use client';

import Image from 'next/image';
import Button from '../Button/Button';
import img from '../../public/logo.png';

import styles from './expenseItem.module.css';
import { deleteCard } from '../../actions/test';
const ExpenseCard = ({
  title,
  text,
  id,
}: {
  title: string;
  text: string;
  id: number;
}) => {
  return (
    <div className={styles.expenseItemContainer}>
      <div className={styles.expenseItemHeader}>
        <div className={styles.expenseItemHeaderIcon}>
          {'Title'.slice(0, 1)}
        </div>
        <div>{title}</div>
      </div>
      <div className={styles.expenseItemImageContainer}>
        <Image src={img} alt='Section image' fill />
      </div>
      <div className={styles.expenseItemTextContainer}>
        <p>{text}</p>
      </div>
      <div className={styles.expenseItemButtonsBlock}>
        <Button text='Закрепить' color='secondary' />
        <Button text='Удалить' color='primary' handle={() => deleteCard(id)} />
      </div>
    </div>
  );
};
export default ExpenseCard;

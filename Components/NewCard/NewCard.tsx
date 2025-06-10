'use client';
import { useActionState, useState } from 'react';
import styles from './newCard.module.css';
import { submitForm } from '../../actions/createNewCard';
import Button from '../Button/Button';

const NewCard = () => {
  const [isActive, setIsActive] = useState(false);
  const [state, formAction] = useActionState(submitForm, null);

  return (
    <div className={styles.newCardContainer}>
      {state && state.errors?.mainError && state.errors?.mainError}
      {isActive ? (
        <form className={styles.form} id='form' action={formAction}>
          <input
            title='input'
            type='text'
            name='title'
            className={styles.input}
          />
          <input
            title='text'
            type='text'
            name='text'
            className={styles.input}
          />
          <Button text='Создать' color='primary' type='submit' />
        </form>
      ) : (
        <p onClick={() => setIsActive((isActive) => !isActive)}>+</p>
      )}
    </div>
  );
};
export default NewCard;

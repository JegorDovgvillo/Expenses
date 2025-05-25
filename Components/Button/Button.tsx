import styles from './button.module.css';
interface IProps {
  text: string;
  color: 'primary' | 'secondary';
}

const Button = ({ text, color }: IProps) => {
  return (
    <button
      className={color === 'primary' ? styles.primary : styles.secondary}
      type='button'
    >
      {text}
    </button>
  );
};

export default Button;

import { FC } from 'react';
import styles from './Button.module.scss';

const Button: FC<any> = (props) => {
  return <button className={styles.button} onClick={props.onClick}>{props.children}</button>;
};

export default Button;

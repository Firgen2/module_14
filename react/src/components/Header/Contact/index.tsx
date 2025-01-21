import { FC } from 'react';
import styles from './style.module.css';

interface Props {
  text?: string;
}

const Contact: FC<Props> = ({ text = 'Contact Me' }) => {
  return (
    <button className={styles.container}>
      {text}
    </button>
  );
};

export default Contact;
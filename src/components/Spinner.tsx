import { FC } from 'react';
import styles from './styles/Spinner.module.css';

const Spinner: FC = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.bounce}></div>
      <div className={styles.bounce}></div>
    </div>
  );
};

export default Spinner;

import React, { FC, ReactNode } from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import styles from './styles/Button.module.css';

interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode;
  text: string;
  className?: string;
}

const Button: FC<CustomButtonProps> = ({ icon, text, className, ...props }) => (
  <BootstrapButton {...props} className={`${styles.customButton} ${className}`}>
    {icon && <span className={styles.buttonIcon}>{icon}</span>}
    <span className={styles.buttonText}>{text}</span>
  </BootstrapButton>
);

export default Button;

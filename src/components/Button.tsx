import { FC, ReactNode, memo } from 'react';
import { Button as BootstrapButton, ButtonProps } from 'react-bootstrap';
import styles from './styles/Button.module.css';

interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode;
  text?: string;
  className?: string;
}

const Button: FC<CustomButtonProps> = ({
  icon,
  text,
  className,
  children,
  ...props
}) => (
  <BootstrapButton {...props} className={`${styles.customButton} ${className}`}>
    {icon && <span className={styles.buttonIcon}>{icon}</span>}
    {text && <span className={styles.buttonText}>{text}</span>}
    {children}
  </BootstrapButton>
);

export default memo(Button);

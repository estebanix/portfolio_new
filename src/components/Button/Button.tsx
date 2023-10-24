import styles from "./Button.module.scss";

interface ButtonProps {
    text: string;
}

export const Button: React.FC <ButtonProps> = ({text}) => {
  return <button className={styles.button}>{text}</button>;
};

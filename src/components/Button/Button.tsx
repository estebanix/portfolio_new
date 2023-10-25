import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, to }) => {
  if (to) {
    return (
      <Link to={to}>
        <div className={styles.button}>{text}</div>
      </Link>
    );
  }

  return <button className={styles.button}>{text}</button>;
};

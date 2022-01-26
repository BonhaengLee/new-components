import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ children }: { children: string }): JSX.Element => {
  return <button className={styles.el_btn}>{children}</button>;
};

export default Button;

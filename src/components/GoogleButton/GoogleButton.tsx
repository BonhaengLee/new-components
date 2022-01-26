import classNames from "classnames/bind";
import styles from "./GoogleButton.module.scss";

const cx = classNames.bind(styles);

const GoogleButton = (): JSX.Element => {
  return <a className={styles.el_googleBtn} />;
};

export default GoogleButton;

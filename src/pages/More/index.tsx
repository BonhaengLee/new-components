import classNames from "classnames/bind";
import styles from "./More.module.scss";

import GoogleButton from "../../components/GoogleButton/GoogleButton";
import MoreList from "../../components/MoreList";

const cx = classNames.bind(styles);

const More = (): JSX.Element => {
  return (
    <div className={styles.ly_more}>
      <MoreList />
    </div>
  );
};

export default More;

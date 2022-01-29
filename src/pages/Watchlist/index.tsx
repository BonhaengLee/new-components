import classNames from "classnames/bind";
import styles from "./Watchlist.module.scss";

const cx = classNames.bind(styles);

const Watchlist = (): JSX.Element => {
  return <div className={styles.ly_watchlist}>관심목록 페이지</div>;
};

export default Watchlist;

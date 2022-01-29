import classNames from "classnames/bind";
import styles from "./News.module.scss";

const cx = classNames.bind(styles);

const News = (): JSX.Element => {
  return <div className={styles.ly_news}>뉴스 페이지</div>;
};

export default News;

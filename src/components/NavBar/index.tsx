import styles from "./NavBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.bl_tabNav}>
      <ul className={styles.bl_tabNav_inner}>
        <li>
          {/* 첫 페이지 로딩에서 시장 탭 active 필요 */}
          <a
            className={cx(
              styles.bl_tabNav_link,
              styles.bl_tabNav_link__market,
              styles.is_active
            )}
            href="/"
          >
            시장
          </a>
        </li>
        <li>
          <a
            className={cx(styles.bl_tabNav_link, styles.bl_tabNav_link__news)}
            href="/news"
          >
            뉴스
          </a>
        </li>
        <li>
          <a
            className={cx(styles.bl_tabNav_link, styles.bl_tabNav_link__star)}
            href="/watchlist"
          >
            관심목록
          </a>
        </li>
        <li>
          <a
            className={cx(styles.bl_tabNav_link, styles.bl_tabNav_link__more)}
            href="/more"
          >
            더보기
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

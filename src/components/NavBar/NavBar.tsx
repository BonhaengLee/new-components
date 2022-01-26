import classNames from "classnames/bind";
import styles from "./NavBar.module.scss";

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
            href="#"
          >
            <span className={styles.el_beforeIcon}>시장</span>
          </a>
        </li>
        <li>
          <a
            className={cx(styles.bl_tabNav_link, styles.bl_tabNav_link__news)}
            href="#"
          >
            뉴스
          </a>
        </li>
        <li>
          <a
            className={cx(styles.bl_tabNav_link, styles.bl_tabNav_link__star)}
            href="#"
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

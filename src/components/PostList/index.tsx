import styles from "./PostList.module.scss";

const PostList = (): JSX.Element => {
  return (
    <ul className={styles.bl_vertPosts}>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="/market/1">
          코스피 지수
          {/* [다국어 사이트를 구축한다] 1 대상 언어/지역 및 URL 방식 선정 */}
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="/market/1">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="/market/1">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
        </div>
        {/* /.bl_vertPosts_header */}
        <a className={styles.bl_vertPosts_ttl} href="#">
          코스피 지수
        </a>
      </li>
    </ul>
  );
};

export default PostList;

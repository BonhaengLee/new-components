import styles from "./LabelPostList.module.scss";

const LabelPostList = (): JSX.Element => {
  return (
    <ul className={styles.bl_vertPosts}>
      <li className={styles.bl_vertPosts_item}>
        <div className={styles.bl_vertPosts_header}>
          <time className={styles.bl_vertPosts_date} dateTime="2019-03-29">
            2019/03/29
          </time>
          <ul className={styles.bl_vertPosts_labels}>
            <li>
              <span className={styles.el_label}>해외 마케팅</span>
            </li>
          </ul>
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

export default LabelPostList;

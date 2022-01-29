import styles from "./MoreList.module.scss";

import GoogleButton from "../GoogleButton/GoogleButton";

const MoreList = (): JSX.Element => {
  return (
    <ul className={styles.bl_vertPosts}>
      <li className={styles.bl_vertPosts_item}>
        <GoogleButton />
      </li>
      <li className={styles.bl_vertPosts_item}>
        <a className={styles.bl_vertPosts_ttl} href="/market/1">
          닉네임 변경
        </a>
      </li>
      <li className={styles.bl_vertPosts_item}>
        <a className={styles.bl_vertPosts_ttl} href="/market/1">
          설정
        </a>
      </li>
    </ul>
  );
};

export default MoreList;

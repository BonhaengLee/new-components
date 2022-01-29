import styles from "./Header.module.scss";

const index = (): JSX.Element => {
  return (
    <header className={styles.ly_header}>
      <div className={styles.ly_header_inner}>
        <a className={styles.el_logo} href="/" rel="home">
          <img src="http://placeimg.com/100/36/any" alt="logo" />
        </a>
      </div>
      {/* /.ly_header_inner */}
    </header>
  );
};

export default index;

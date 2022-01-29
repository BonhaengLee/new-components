import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
  return (
    <>
      <header className={styles.ly_header}>
        <div className={styles.ly_header_inner}>
          <a className={styles.el_logo} href="/" rel="home">
            <img src="http://placeimg.com/100/36/any" alt="logo" />
          </a>
        </div>
        {/* /.ly_header_inner */}
      </header>

      <main>
        <article>
          <section className={styles.ly_cont}>{/* 콘텐츠 */}</section>
        </article>
      </main>

      <footer>{/* 푸터 */}</footer>
    </>
  );
};

export default Home;

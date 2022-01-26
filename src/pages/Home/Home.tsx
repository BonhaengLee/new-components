import NavBar from "../../components/NavBar/NavBar";

import styles from "./Home.module.scss";

const Home = (): JSX.Element => {
  return (
    <>
      <header className={styles.ly_header}>
        <div className={styles.ly_header_inner}>
          {/* 레이아웃 안에 로고, 검색 버튼 배치*/}
          <a className={styles.logo} href="/" rel="home">
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

      <NavBar />
    </>
  );
};

export default Home;

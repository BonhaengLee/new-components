import styles from "./Home.module.scss";

import Header from "../../components/Header";
// import PostList from "../../components/PostList";
import Link from "../../components/Link";

const Home = (): JSX.Element => {
  return (
    <div className={styles.ly_home}>
      <Header />
      <main>
        <article>
          <section className={styles.ly_cont}>
            {/* 콘텐츠 */}
            Learn React
            {/* <PostList /> */}
            <Link href="https://reactjs.org/">Learn React</Link>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;

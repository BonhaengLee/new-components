import styles from "./Home.module.scss";

import Header from "../../components/Header";
import PostList from "../../components/PostList";

const Home = (): JSX.Element => {
  return (
    <div className={styles.ly_home}>
      <Header />
      <main>
        <article>
          <section className={styles.ly_cont}>
            {/* 콘텐츠 */}
            <PostList />
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;

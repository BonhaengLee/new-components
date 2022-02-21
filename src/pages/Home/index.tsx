import styles from "./Home.module.scss";

// import PostList from "../../components/PostList";
import Link from "../../components/Link";
import DelayedToggle from "../../components/DelayedToggle.js";

const Home = (): JSX.Element => {
  return (
    <div className={styles.ly_home}>
      <main>
        <article>
          <section className={styles.ly_cont}>
            <Link href="https://reactjs.org/">Learn React</Link>
            <DelayedToggle />
          </section>
        </article>
      </main>
    </div>
  );
};

export default Home;

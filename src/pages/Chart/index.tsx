import styles from "./Chart.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Chart = (): JSX.Element => {
  return (
    <>
      <header className={styles.ly_header}>
        <div className={styles.ly_header_inner}>
          <span className={styles.bl_titleWrapper}>
            <h2>코스피지수</h2>
            <span>서울 (KS11)</span>
          </span>
          <span className={styles.bl_btnWrapper}>
            <i className="fas fa-search fa-2x"></i>
            <i className="far fa-star fa-2x"></i>
          </span>
        </div>
        {/* /.ly_header_inner */}
      </header>
      <main>
        <article>
          <section className={styles.ly_cont}>
            <div className={styles.ly_header_inner}>
              <span className={styles.bl_titleWrapper}>
                <div className={styles.bl_titleWrapper_mainTitle}>
                  <h2>2727.08</h2>
                  <p>+6.69 (+0.25%)</p>
                </div>
                <div className={styles.bl_titleWrapper_info}>
                  13:16:20 - 실시간. KRW 통화
                </div>
              </span>
            </div>
          </section>
        </article>
      </main>

      {/* 스피너 */}
      {/* <i className={cx("fas fa-spinner fa-pulse fa-4x", styles.faSpinner)}></i> */}
    </>
  );
};

export default Chart;

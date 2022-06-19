import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";

const cx = classNames.bind(styles);

const Canvas = (): React.ReactElement => {
  return (
    <div className={styles.canvas}>
      <div className={styles.flower} id={styles.flower1}>
        <div className={cx(styles.petal, styles.petal1, styles.f1p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f1p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f1p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f1p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f1p)}></div>
      </div>
      <div className={styles.flower} id={styles.flower2}>
        <div className={cx(styles.petal, styles.petal1, styles.f2p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f2p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f2p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f2p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f2p)}></div>
      </div>
      <div className={styles.flower} id={styles.flower3}>
        <div className={cx(styles.petal, styles.petal1, styles.f3p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f3p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f3p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f3p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f3p)}></div>
      </div>
      <div className={styles.flower} id={styles.flower4}>
        <div className={cx(styles.petal, styles.petal1, styles.f4p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f4p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f4p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f4p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f4p)}></div>
      </div>
      <div className={styles.flower} id={styles.flower5}>
        <div className={cx(styles.petal, styles.petal1, styles.f5p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f5p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f5p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f5p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f5p)}></div>
      </div>
      <div className={styles.flower} id={styles.flower6}>
        <div className={cx(styles.petal, styles.petal1, styles.f6p)}></div>
        <div className={cx(styles.petal, styles.petal2, styles.f6p)}></div>
        <div className={cx(styles.petal, styles.petal3, styles.f6p)}></div>
        <div className={cx(styles.petal, styles.petal4, styles.f6p)}></div>
        <div className={cx(styles.petal, styles.petal5, styles.f6p)}></div>
      </div>
    </div>
  );
};

export default Canvas;

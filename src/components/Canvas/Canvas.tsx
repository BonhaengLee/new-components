import styles from "./Canvas.module.scss";

const Canvas = (): React.ReactElement => {
  return (
    <div className={styles.canvas}>
      <div className={styles.flowerA} id={styles.flower1}></div>
      <div className={styles.flowerC} id={styles.flower2}></div>
      <div className={styles.flowerB} id={styles.flower3}></div>
      <div className={styles.flowerC} id={styles.flower4}></div>
      <div className={styles.flowerA} id={styles.flower5}></div>
      <div className={styles.flowerB} id={styles.flower6}></div>
      <div className={styles.flowerA} id={styles.flower7}></div>
      <div className={styles.flowerC} id={styles.flower8}></div>
      <div className={styles.flowerB} id={styles.flower9}></div>
      <div className={styles.flowerA} id={styles.flower10}></div>
      <div className={styles.flowerC} id={styles.flower11}></div>
      <div className={styles.flowerB} id={styles.flower12}></div>
      <div className={styles.flowerA} id={styles.flower13}></div>
      <div className={styles.flowerC} id={styles.flower14}></div>
      <div className={styles.flowerB} id={styles.flower15}></div>
      <div className={styles.flowerA} id={styles.flower16}></div>
      <div className={styles.flowerC} id={styles.flower17}></div>
    </div>
  );
};

export default Canvas;

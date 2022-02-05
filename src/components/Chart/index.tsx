import Canvas from "../Canvas";

import styles from "./Chart.module.scss";

const draw = (context: CanvasRenderingContext2D) => {
  context.beginPath();

  context.moveTo(0, 0);
  context.lineTo(100, 100);

  context.stroke();
};

const Chart = (): JSX.Element => {
  return (
    <div className={styles.ly_chart}>
      <div className={styles.ly_chart_view}>
        <Canvas draw={draw} />
      </div>

      <ul className={styles.bl_horizViewMenu}>
        <li className={styles.active}>1일</li>
        <li>1주</li>
        <li>1달</li>
        <li>1년</li>
        <li>5년</li>
        <li>최대</li>
      </ul>
    </div>
  );
};

export default Chart;

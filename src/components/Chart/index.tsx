import { useEffect, useRef } from "react";
import Canvas from "../Canvas";

import styles from "./Chart.module.scss";
import cs from "classnames/bind";

const cx = cs.bind(styles);

const draw = (context: CanvasRenderingContext2D) => {
  // Insert your canvas API code to draw an image
  context.fillStyle = "red";
  context.fillRect(0, 0, 100, 100);
};

const Chart = (): JSX.Element => {
  return (
    <div className={styles.ly_chart}>
      <div className={styles.ly_chart_view}>
        <Canvas draw={draw} height={100} width={100} />
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

import { LegacyRef, useEffect, useRef } from "react";

import styles from "./Canvas.module.scss";

interface CanvasProps {
  draw: (context: CanvasRenderingContext2D) => void;
  height: number;
  width: number;
}

const Canvas = ({ draw, height, width }: CanvasProps): JSX.Element => {
  const canvas = useRef<HTMLCanvasElement>();

  useEffect(() => {
    const context = canvas.current?.getContext("2d");
    draw(context as CanvasRenderingContext2D);
  }, [draw]);

  return (
    <canvas
      className={styles.el_canvas}
      ref={canvas as LegacyRef<HTMLCanvasElement>}
      height={"80px"}
      width={width}
    />
  );
};

export default Canvas;

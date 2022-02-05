import { useCallback, useEffect, useRef, useState } from "react";

interface CanvasProps {
  width: number;
  height: number;
}
// 마우스 위치를 추적하는 데 쓰는 좌표 타입
type Coordinate = {
  x: number;
  y: number;
};

const Canvas = ({ width, height }: CanvasProps) => {
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] =
    useState<Coordinate | undefined>(undefined);
  // useRef를 사용하여 ref를 설정한 캔버스 요소를 수정
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ! : Start drawing when the mouse is pressed.
  // startPaint는 마우스의 현재 좌표를 가져와 isPainting을 true로 설정
  // useEffect 안에서 사용할 수 있도록 useCallback을 사용하여 반환
  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event);

    if (coordinates) {
      setIsPainting(true);
      setMousePosition(coordinates);
    }
  }, []);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;

    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    };
  };

  useEffect(() => {
    // 캔버스에 대한 유효한 참조가 있는 경우 mouseDown 이벤트에 이벤트 리스너를 추가
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);

    // 마운트 해제 시 이벤트 리스너를 제거
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [startPaint]);

  // ! : Draw the line on mouse move
  const paint = useCallback(
    (event: MouseEvent) => {
      // 그리고 있는지 확인
      if (isPainting) {
        // 새 마우스 좌표
        const newMousePosition = getCoordinates(event);
        // 캔버스에서 렌더링 컨텍스트를 가져와 이전 좌표에서 새 좌표까지 선을 그림
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          // 이전 좌표를 업데이트
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");

    if (context) {
      context.strokeStyle = "red";

      context.lineJoin = "round";

      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };

  useEffect(() => {
    // mouseDown 이벤트 리스너와 마찬가지로 useEffect를 사용하여 mousemove 이벤트를 추가
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousemove", paint);

    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  // ! : Stop drawing on mouse release
  const exitPaint = useCallback(() => {
    setIsPainting(false);
  }, []);

  // 마우스를 놓거나 마우스를 캔버스 영역 밖으로 이동할 때 그리기를 중지
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);

    return () => {
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [exitPaint]);

  return <canvas ref={canvasRef} height={height} width={width} />;
};

// props를 추가할 필요가 없도록 sensible default를 추가
Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;

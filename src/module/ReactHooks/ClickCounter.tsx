import { FC } from "react";

interface Props {
  defaultCount?: number;
}

const ClickCounter: FC<Props> = ({ defaultCount = 0 }) => {
  return (
    <div>
      <h1>Counter: {defaultCount}</h1>
      <button onClick={() => console.warn("Increase btn click")}>
        Increment
      </button>
    </div>
  );
};

export default ClickCounter;

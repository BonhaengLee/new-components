import Canvas from "../../components/DrawingInteraction/Canvas";
import Spinner from "../../components/Spinner/Spinner";

const Market = (): JSX.Element => {
  return (
    <>
      <Spinner />
      <h1>Drawing Interaction</h1>
      <Canvas />
    </>
  );
};

export default Market;

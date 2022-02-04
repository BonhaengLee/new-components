import { useParams } from "react-router-dom";
import Chart from "../../components/Chart";

const MarketDetail = (): JSX.Element => {
  const { id } = useParams();
  return (
    <>
      <p>{id}번 시장 상세 페이지</p>
      <Chart />
    </>
  );
};

export default MarketDetail;

import { useParams } from "react-router-dom";

import styles from "./Market.module.scss";

import Chart from "../../components/Chart";

const MarketDetail = (): JSX.Element => {
  const { id } = useParams();
  return (
    <div className={styles.ly_market}>
      <p>{id}번 시장 상세 페이지</p>
      <Chart />
    </div>
  );
};

export default MarketDetail;

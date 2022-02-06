import { useParams } from "react-router-dom";

import styles from "./Market.module.scss";

import Chart from "../../components/Chart";
import DarkModeButton from "../../components/DarkModeButton";

const MarketDetail = (): JSX.Element => {
  const { id } = useParams();

  return (
    <div className={styles.ly_market}>
      <p>{id}번 시장 상세 페이지</p>
      <Chart />

      <div className={styles.ly_market_darkModeBtnWrapper}>
        <DarkModeButton />
      </div>
    </div>
  );
};

export default MarketDetail;

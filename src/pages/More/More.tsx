import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import styles from "./More.module.scss";

const cx = classNames.bind(styles);

const More = (): JSX.Element => {
  return (
    <>
      <h4>
        로그인 방법이 하나면 로그인 페이지로 넘어가지 말고 바로 구글 로그인?
      </h4>
      <Button>로그인</Button>
      <GoogleButton />
    </>
  );
};

export default More;

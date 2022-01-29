import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import GoogleButton from "../../components/GoogleButton/GoogleButton";
import styles from "./More.module.scss";

const cx = classNames.bind(styles);

const More = (): JSX.Element => {
  return (
    <>
      <Button>로그인</Button>
      <GoogleButton />
    </>
  );
};

export default More;

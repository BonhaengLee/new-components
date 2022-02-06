import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import styles from "./DarkModeButton.module.scss";

import useDarkMode from "../../hooks/useDarkMode";

const DarkModeButton = (): JSX.Element => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <button
      className={styles.el_darkModeBtn}
      onClick={() =>
        setTheme((theme: string) => (theme === "dark" ? "light" : "dark"))
      }
    >
      <FontAwesomeIcon icon={colorTheme === "light" ? faSun : faMoon} />
    </button>
  );
};

export default DarkModeButton;

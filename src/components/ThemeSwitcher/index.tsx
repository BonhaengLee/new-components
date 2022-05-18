import { useTheme } from "../../hooks/useTheme";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme();

  return (
    <main>
      <p>Theme is {theme}</p>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <button onClick={() => setTheme("dark")}>Dark Theme</button>
    </main>
  );
};

import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const browser = typeof window !== "undefined";

const localValue = browser ? localStorage.getItem("theme") : "light";
const systemTheme =
  browser && matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

// The atom to hold the value goes here
const themeAtom = atom(localValue || systemTheme);

/** Sitewide theme */
export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (!browser) return;
    localStorage.setItem("theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
}

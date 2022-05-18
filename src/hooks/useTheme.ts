import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useEffect } from "react";

const browser = typeof window !== "undefined";

// The atom to hold the value goes here
const themeAtom = atomWithStorage(
  "theme",
  browser && matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
);

/** Sitewide theme */
export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    if (!browser) return;
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme] as const;
}

"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import SystemIcon from "./SystemIcon";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const ACTIVE_CSS_CLASSES = "bg-slate-200 dark:bg-slate-500";
const INACTIVE_CSS_CLASSES = "bg-transparent";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-x-2 md:gap-x-2">
      <button
        onClick={() => setTheme("system")}
        className={`${
          theme === "system" ? ACTIVE_CSS_CLASSES : INACTIVE_CSS_CLASSES
        } p-1 rounded flex justify-center items-center transition-all`}
      >
        <SystemIcon />
      </button>
      <button
        onClick={() => setTheme("light")}
        className={`${
          theme === "light" ? ACTIVE_CSS_CLASSES : INACTIVE_CSS_CLASSES
        } p-1 rounded flex justify-center items-center transition-all`}
      >
        <SunIcon />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`${
          theme === "dark" ? ACTIVE_CSS_CLASSES : INACTIVE_CSS_CLASSES
        } p-1 rounded flex justify-center items-center transition-all`}
      >
        <MoonIcon />
      </button>
    </div>
  );
};

export default ThemeSwitcher;

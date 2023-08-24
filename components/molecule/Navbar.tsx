"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import DarkThemeIcon from "../atomic/DarkThemeIcon";
import LightThemeIcon from "../atomic/LightThemeIcon";

const Navbar = () => {
  const { theme, setTheme }: any = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeIcon = (theme: any) => {
    if (theme === "light") {
      return (
        <button
          className={`p-2 rounded`}
          aria-label="Light Mode button"
          onClick={() => setTheme("dark")}
        >
          <LightThemeIcon />
        </button>
      );
    } else if (theme === "dark") {
      return (
        <button
          className={`p-2 rounded`}
          aria-label="Dark Mode button"
          onClick={() => setTheme("light")}
        >
          <DarkThemeIcon />
        </button>
      );
    }
  };

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  if (!mounted) return null;

  return (
    <div className="container mx-auto flex flex-row justify-between items-center w-full py-5">
      <Link href="/" className="text-xl font-semibold tracking-wider">
        CRUD MENN
      </Link>
      <div className="">{handleThemeIcon(theme)}</div>
    </div>
  );
};

export default Navbar;

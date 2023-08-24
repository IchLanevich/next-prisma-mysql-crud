"use client";

import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: any) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

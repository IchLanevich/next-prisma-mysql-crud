"use client";

import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: any) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      {children}
    </ThemeProvider>
  );
};

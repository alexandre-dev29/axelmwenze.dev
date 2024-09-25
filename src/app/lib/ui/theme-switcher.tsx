"use client";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="ghost" size="sm" className="hover:bg-transparent">
      <SunIcon
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <MoonIcon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export default ThemeSwitcher;

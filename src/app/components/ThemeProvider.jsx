"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch (error) {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
      } catch (error) {
        console.error("Failed to apply theme:", error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{ theme: mounted ? theme : "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

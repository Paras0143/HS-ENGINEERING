'use client';

import { useTheme } from './ThemeProvider';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
  className="p-2 text-brand dark:text-slate-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--brand-600)] focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-md"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MdDarkMode className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MdLightMode className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}

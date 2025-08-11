'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';
import './Header.css';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="header-title">
          Palettify
        </h1>
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <MoonIcon />
          ) : (
            <SunIcon />
          )}
        </button>
      </div>
    </header>
  );
}

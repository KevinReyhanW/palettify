'use client';

import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import logoImage from '@/assets/logo/favicon-32x32.png';
import '../styles/components/Header.css';

interface HeaderProps {
  onCreatePalette: () => void;
}

export default function Header({ onCreatePalette }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="header-title">
            <Image
              src={logoImage}
              alt="Palettify Logo"
              width={32}
              height={32}
              className="header-logo"
            />
            Palettify
          </h1>
          {/* <button
            onClick={onCreatePalette}
            className="create-palette-btn"
            aria-label="Create new palette"
          >
            Create Your Palette
          </button> */}
        </div>
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

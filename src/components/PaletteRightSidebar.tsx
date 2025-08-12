'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useColorPalette } from '@/context/ColorPaletteContext';
import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import './PaletteRightSidebar.css';

const PALETTES_PER_PAGE = 3;

export default function PaletteRightSidebar() {
  const { palettes, currentPaletteIndex, setCurrentPaletteIndex } = useColorPalette();
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const totalPages = Math.ceil(palettes.length / PALETTES_PER_PAGE);
  const startIndex = page * PALETTES_PER_PAGE;
  const endIndex = Math.min(startIndex + PALETTES_PER_PAGE, palettes.length);
  const currentPalettes = palettes.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const goToPreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handlePaletteClick = (index: number) => {
    setCurrentPaletteIndex(startIndex + index);
  };

  return (
    <div className={`palette-right-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button 
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close palette sidebar' : 'Open palette sidebar'}
      >
        {window.innerWidth <= 768 
          ? (isOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />)
          : (isOpen ? <ChevronRightIcon className="w-6 h-6" /> : <ChevronLeftIcon className="w-6 h-6" />)
        }
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="palette-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPalettes.map((palette, index) => (
            <div
              key={startIndex + index}
              className="palette-set"
              onClick={() => handlePaletteClick(index)}
              style={{ 
                opacity: startIndex + index === currentPaletteIndex ? 1 : 0.7,
                transform: startIndex + index === currentPaletteIndex ? 'scale(1.02)' : 'scale(1)'
              }}
            >
              <div className="palette-info">
                <h3 className="palette-name">{palette.name}</h3>
                <p className="palette-description">{palette.description}</p>
              </div>
              <div className="palette-colors">
                {palette.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    title={color}
                    suppressHydrationWarning
                  >
                    <span className="color-hex">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="palette-navigation">
        <button
          className="nav-button"
          onClick={goToPreviousPage}
          disabled={page === 0}
        >
          Previous
        </button>
        <span className="palette-indicator">
          Page {page + 1} of {totalPages}
        </span>
        <button
          className="nav-button"
          onClick={goToNextPage}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useColorPalette } from '@/context/ColorPaletteContext';
import { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import '../styles/components/PaletteRightSidebar.css';

const PALETTES_PER_PAGE = 5;
const MOBILE_BREAKPOINT = 768;

export default function PaletteRightSidebar() {
  const { palettes, currentPaletteIndex, setCurrentPaletteIndex, setPreviewColors, isCreatingPalette } = useColorPalette();
  const [page, setPage] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };
    
    // Check initially
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const filteredPalettes = palettes.filter(palette => 
    palette.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPalettes.length / PALETTES_PER_PAGE);
  const startIndex = page * PALETTES_PER_PAGE;
  const endIndex = Math.min(startIndex + PALETTES_PER_PAGE, filteredPalettes.length);
  const currentPalettes = filteredPalettes.slice(startIndex, endIndex);

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
    if (isCreatingPalette) return;
    const filteredPaletteIndex = startIndex + index;
    const globalPaletteIndex = palettes.findIndex(p => p === filteredPalettes[filteredPaletteIndex]);
    setCurrentPaletteIndex(globalPaletteIndex);
    setPreviewColors(palettes[globalPaletteIndex].colors);
  };

  return (
    <div className={`palette-right-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button 
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close palette sidebar' : 'Open palette sidebar'}
      >
        {isMobile
          ? (isOpen ? <ChevronDownIcon className="w-6 h-6" /> : <ChevronUpIcon className="w-6 h-6" />)
          : (isOpen ? <ChevronRightIcon className="w-6 h-6" /> : <ChevronLeftIcon className="w-6 h-6" />)
        }
      </button>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search palettes..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(0); // Reset to first page when searching
          }}
          className="search-input"
        />
      </div>
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
              className={`palette-set ${isCreatingPalette ? 'disabled' : ''}`}
              onClick={() => handlePaletteClick(index)}
              style={{ 
                opacity: (startIndex + index === currentPaletteIndex && !isCreatingPalette) ? 1 : 0.7,
                transform: (startIndex + index === currentPaletteIndex && !isCreatingPalette) ? 'scale(1.02)' : 'scale(1)',
                cursor: isCreatingPalette ? 'not-allowed' : 'pointer'
              }}
            >
              <div className="palette-info">
                <div className="palette-header">
                  <h3 className="palette-name">{palette.name}</h3>
                  <button
                    className="copy-css-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const semanticNames = ['background', 'foreground', 'primary', 'secondary', 'accent'];
                      const cssVars = palette.colors.map((color, idx) => 
                        `  --${idx < semanticNames.length ? semanticNames[idx] : `color-${idx + 1}`}: ${color};`
                      ).join('\n');
                      const css = `:root {\n${cssVars}\n}`;
                      navigator.clipboard.writeText(css);
                    }}
                    title="Copy CSS Variables"
                  >
                    Copy CSS
                  </button>
                </div>
              </div>
              <div className="palette-colors">
                {palette.colors.map((color, colorIndex) => {
                  const semanticNames = ['background', 'foreground', 'primary', 'secondary', 'accent'];
                  const semanticName = colorIndex < semanticNames.length ? semanticNames[colorIndex] : `color-${colorIndex + 1}`;
                  return (
                    <div
                      key={colorIndex}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      title={`${semanticName}: ${color}`}
                      suppressHydrationWarning
                    >
                      <div className="color-info">
                        <span className="color-hex">{color}</span>
                        <span className="color-semantic-name">{semanticName}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="palette-navigation">
        <button
          className="nav-button-sidebar"
          onClick={goToPreviousPage}
          disabled={page === 0}
        >
          Previous
        </button>
        <span className="palette-indicator">
          Page {page + 1} of {totalPages}
        </span>
        <button
          className="nav-button-sidebar"
          onClick={goToNextPage}
          disabled={page === totalPages - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}

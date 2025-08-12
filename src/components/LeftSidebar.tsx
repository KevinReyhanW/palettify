'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './LeftSidebar.css';

import { HexColorPicker } from 'react-colorful';
import { useColorPalette } from '@/context/ColorPaletteContext';

interface PaletteCreationStep {
  title: string;
  description: string;
}

const STEPS: PaletteCreationStep[] = [
  { title: 'Start Creation', description: 'Begin creating your custom color palette' },
  { title: 'Choose Colors', description: 'Pick all five colors for your palette' },
  { title: 'Save Palette', description: 'Name and save your custom color palette' },
];

import Values from 'values.js';

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [colors, setColors] = useState<string[]>(['#000000', '#000000', '#000000', '#000000', '#000000']);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [paletteName, setPaletteName] = useState('');
  const [savedPalettes, setSavedPalettes] = useState<Array<{ name: string, colors: string[] }>>([]);
  const [showPalettes, setShowPalettes] = useState(true);
  const { setPreviewColors, setIsCreatingPalette, addPalette } = useColorPalette();

  const handleCreatePalette = () => {
    setStep(1);
    setPaletteName('');
    setColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
    setCurrentColorIndex(0);
    setShowPalettes(false);
    setIsCreatingPalette(true);
  };

  const handleColorChange = (color: string) => {
    const newColors = [...colors];
    newColors[currentColorIndex] = color;
    setColors(newColors);
    setPreviewColors(newColors);
  };

  const handleColorConfirm = () => {
    if (currentColorIndex < 4) {
      setCurrentColorIndex(currentColorIndex + 1);
    } else {
      setStep(2);
    }
  };

  const handlePaletteConfirm = () => {
    if (!paletteName.trim()) return;
    
    setSavedPalettes(prev => [{
      name: paletteName,
      colors: [...colors]
    }, ...prev]);
    
    setPaletteName('');
    setStep(0);
    setShowPalettes(true);
    setIsCreatingPalette(false);
  };

  const handlePaletteSelect = (palette: { name: string, colors: string[] }) => {
    setPreviewColors(palette.colors);
    setColors(palette.colors); // This ensures the colors are updated in both states
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    // Add/remove no-scroll class on body for mobile
    if (window.innerWidth <= 768) {
      document.body.classList.toggle('no-scroll', !isOpen);
    }
  };

  return (
    <>
      <div className={`left-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            className="sidebar-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="palette-creation">
              {step === 0 ? (
                <div className="palette-creation-start">
                  <h2 className="step-title">Your Color Palettes</h2>
                  <div className="saved-palettes">
                    {savedPalettes.length === 0 ? (
                      <p className="no-palettes">No saved palettes yet</p>
                    ) : (
                      savedPalettes.map((palette, index) => (
                        <div
                          key={index} 
                          className="saved-palette"
                          onClick={() => handlePaletteSelect(palette)}
                        >
                          <div className="saved-palette-header">
                            <h3 className="palette-name">{palette.name}</h3>
                            <button
                              className="copy-css-button"
                              onClick={(e) => {
                                e.stopPropagation();
                                const css = `:root {\n  --background: ${palette.colors[0]};\n  --foreground: ${palette.colors[1]};\n  --primary: ${palette.colors[2]};\n  --secondary: ${palette.colors[3]};\n  --accent: ${palette.colors[4]};\n}`;
                                navigator.clipboard.writeText(css);
                              }}
                            >
                              Copy CSS
                            </button>
                          </div>
                          <div className="color-strip">
                            {palette.colors.map((color, colorIndex) => {
                              const labels = ["Background", "Foreground", "Primary", "Secondary", "Accent"];
                              return (
                                <div
                                  key={colorIndex}
                                  className="color-strip-item"
                                  style={{ backgroundColor: color }}
                                >
                                  <div className="color-strip-info">
                                    <span className="color-strip-semantic-name">{labels[colorIndex]}</span>
                                    <span className="color-strip-hex">{color}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  <button className="create-now-btn" onClick={handleCreatePalette}>
                    Create Now!
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="step-title">{STEPS[step].title}</h2>
                  <p className="step-description">{STEPS[step].description}</p>
                  
                  {step === 1 && (
                    <div className="palette-creation-container">
                      <div className="color-picker-container">
                        <h3>Pick Color {currentColorIndex + 1}</h3>
                        <HexColorPicker 
                          color={colors[currentColorIndex]} 
                          onChange={handleColorChange} 
                        />
                        <div className="color-preview" style={{ backgroundColor: colors[currentColorIndex] }}>
                          <span>{colors[currentColorIndex]}</span>
                        </div>
                        <button 
                          className="confirm-btn" 
                          onClick={handleColorConfirm}
                        >
                          {currentColorIndex < 4 ? 'Next Color' : 'Complete Palette'}
                        </button>
                      </div>
                      <div className="colors-grid">
                        {colors.map((color, index) => {
                          const labels = [
                            "Background",
                            "Foreground",
                            "Primary",
                            "Secondary",
                            "Accent"
                          ];
                          return (
                            <div
                              key={index}
                              className={`color-square ${index === currentColorIndex ? 'active' : ''}`}
                              style={{ backgroundColor: color }}
                              title={labels[index]}
                              onClick={() => setCurrentColorIndex(index)}
                            >
                              <div className="color-info">
                                <span className="color-label">{labels[index]}</span>
                                <span className="color-value">{color}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="save-palette-container">
                      <div className="colors-preview">
                        {colors.map((color, index) => (
                          <div
                            key={index}
                            className="color-preview-item"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                        ))}
                      </div>
                      <div className="save-form">
                        <input
                          type="text"
                          placeholder="Enter palette name"
                          value={paletteName}
                          onChange={(e) => setPaletteName(e.target.value)}
                          className="palette-name-input"
                        />
                        <button 
                          className="save-palette-btn"
                          onClick={handlePaletteConfirm}
                          disabled={!paletteName.trim()}
                        >
                          Save Palette
                        </button>
                      </div>
                    </div>
                  )}

                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button 
        className="left-sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isOpen ? 'Close left sidebar' : 'Open left sidebar'}
      >
        {isOpen ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
      </button>
      <div className="sidebar-backdrop" onClick={toggleSidebar} />
    </>
  );
}

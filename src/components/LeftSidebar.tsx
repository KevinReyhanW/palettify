'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon, TrashIcon } from '@heroicons/react/24/outline';
import '../styles/components/LeftSidebar.css';

import { HexColorPicker } from 'react-colorful';
import { useColorPalette } from '@/context/ColorPaletteContext';
import { generateHarmonizedPalette } from '@/utils/colorUtils';

interface PaletteCreationStep {
  title: string;
  description: string;
}

const STEPS: PaletteCreationStep[] = [
  { title: 'Start Creation', description: 'Begin creating your custom color palette' },
  { title: 'Choose Colors', description: 'Pick all five colors for your palette' },
  { title: 'Save Palette', description: 'Name and save your custom color palette' },
];

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [colors, setColors] = useState<string[]>(['#000000', '#000000', '#000000', '#000000', '#000000']);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [paletteName, setPaletteName] = useState('');
  const [savedPalettes, setSavedPalettes] = useState<Array<{ name: string, colors: string[] }>>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [hexInput, setHexInput] = useState('');
  const { setPreviewColors, setIsCreatingPalette, addPalette } = useColorPalette();
  
  const iconKey = isGenerating ? 'generating' : 'idle';

  useEffect(() => {
    setHexInput(colors[currentColorIndex] || '#');
  }, [colors, currentColorIndex]);

  const handleHexInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    
    // If the input is empty, set it to # only
    if (value === '') {
      setHexInput('#');
      return;
    }

    // Always ensure # is at the start
    if (!value.startsWith('#')) {
      value = '#' + value;
    }

    // Remove any non-hex characters after #
    value = '#' + value.slice(1).replace(/[^0-9A-Fa-f]/g, '');

    // Convert to uppercase
    value = value.toUpperCase();
    
    setHexInput(value);
    
    // Only update colors if we have a valid 6-digit hex
    if (/^#[0-9A-Fa-f]{6}$/.test(value)) {
      const newColors = [...colors];
      newColors[currentColorIndex] = value;
      setColors(newColors);
      setPreviewColors(newColors);
    }
  };

  const handleCreatePalette = () => {
    setStep(1);
    setPaletteName('');
    setColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
    setCurrentColorIndex(0);
    setIsCreatingPalette(true);
  };

  const handleColorChange = (color: string) => {
    const upperColor = color.toUpperCase();
    const newColors = [...colors];
    newColors[currentColorIndex] = upperColor;
    setColors(newColors);
    setPreviewColors(newColors);
    setHexInput(upperColor);
  };

  const handleGenerateAIPalette = async () => {
    setIsGenerating(true);
    try {
      const baseColor = colors[currentColorIndex].toUpperCase();
      const harmonizedColors = await generateHarmonizedPalette(baseColor);
      
      const roleOrder = ["background", "foreground", "primary", "secondary", "accent"];
      const currentRole = roleOrder[currentColorIndex];
      
      const newColors = [...colors];
      const colorAssignments = new Map([
        ["background", 0],
        ["foreground", 1],
        ["primary", 2],
        ["secondary", 3],
        ["accent", 4]
      ]);
      
      harmonizedColors[colorAssignments.get(currentRole)!] = baseColor;
      
      roleOrder.forEach((role, index) => {
        if (index !== currentColorIndex) {
          newColors[index] = harmonizedColors[colorAssignments.get(role)!].toUpperCase();
        }
      });
      
      setColors(newColors);
      setPreviewColors(newColors);
      setCurrentColorIndex(4);
    } catch (error) {
      console.error('Failed to generate AI palette:', error);
    } finally {
      setIsGenerating(false);
    }
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
    
    const newPalette = {
      name: paletteName,
      colors: [...colors]
    };
    
    setSavedPalettes(prev => [newPalette, ...prev]);
    addPalette(Date.now().toString(), newPalette.colors);
    setPaletteName('');
    setStep(0);
    setIsCreatingPalette(false);
  };

  const handlePaletteSelect = (palette: { name: string, colors: string[] }) => {
    setPreviewColors(palette.colors);
    setColors(palette.colors);
  };

  const handleDeletePalette = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPalettes(prev => prev.filter((_, i) => i !== index));
    if (JSON.stringify(colors) === JSON.stringify(savedPalettes[index].colors)) {
      setPreviewColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
      setColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
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
                            <div className="palette-actions">
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
                              <button
                                className="delete-palette-btn"
                                onClick={(e) => handleDeletePalette(index, e)}
                                title="Delete palette"
                              >
                                <TrashIcon className="w-5 h-5" />
                              </button>
                            </div>
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
                    Create Color Palette
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="step-title">{STEPS[step].title}</h2>
                  <p className="step-description">{STEPS[step].description}</p>
                  
                  {step === 1 && (
                    <div className="palette-creation-container">
                      <div className="color-picker-container">
                        <div className="color-role-header">
                          <h3>{["Background", "Foreground", "Primary", "Secondary", "Accent"][currentColorIndex]}</h3>
                          <button 
                            className={`ai-generate-btn ${isGenerating ? 'generating' : ''}`}
                            onClick={handleGenerateAIPalette}
                            disabled={isGenerating}
                            title={`Generate color palette using this ${["Background", "Foreground", "Primary", "Secondary", "Accent"][currentColorIndex].toLowerCase()} as the base color`}
                          >
                            <SparklesIcon key={iconKey} className="sparkles-icon" />
                            <div className="generating-rings">
                              <div></div><div></div><div></div>
                            </div>
                          </button>
                        </div>
                        <div className="color-picker-wrapper">
                          <HexColorPicker 
                            color={colors[currentColorIndex]} 
                            onChange={handleColorChange} 
                          />
                          {isGenerating && (
                            <div className="generating-overlay">
                              <span>Generating palette...</span>
                            </div>
                          )}
                        </div>
                        <div 
                          className="color-preview" 
                          style={{ backgroundColor: colors[currentColorIndex] }}
                        >
                          <input
                            type="text"
                            value={hexInput}
                            onChange={handleHexInputChange}
                            placeholder="#RRGGBB"
                            className="hex-input"
                            pattern="^#[0-9A-Fa-f]{6}$"
                            maxLength={7}
                          />
                        </div>
                        <button 
                          className="confirm-btn" 
                          onClick={handleColorConfirm}
                        >
                          {currentColorIndex < 4 ? 'Next Role' : 'Complete Palette'}
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
                              <div className="color-hex">{color}</div>
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
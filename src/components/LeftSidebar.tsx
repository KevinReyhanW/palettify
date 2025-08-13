'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon, TrashIcon } from '@heroicons/react/24/outline';
import './LeftSidebar.css';

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

import Values from 'values.js';

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [colors, setColors] = useState<string[]>(['#000000', '#000000', '#000000', '#000000', '#000000']);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [paletteName, setPaletteName] = useState('');
  const [savedPalettes, setSavedPalettes] = useState<Array<{ name: string, colors: string[] }>>([]);
  const [showPalettes, setShowPalettes] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const { setPreviewColors, setIsCreatingPalette, addPalette } = useColorPalette();
  
  // Force React to remount the SparklesIcon when generation starts/ends
  const iconKey = isGenerating ? 'generating' : 'idle';

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

  const handleGenerateAIPalette = async () => {
    setIsGenerating(true);
    try {
      // Use the currently selected color as the base
      const baseColor = colors[currentColorIndex];
      const harmonizedColors = await generateHarmonizedPalette(baseColor);
      
      // Reorder the harmonized colors based on the current role
      const roleOrder = ["background", "foreground", "primary", "secondary", "accent"];
      const currentRole = roleOrder[currentColorIndex];
      
      // Find where the base color should be in the harmonized array
      const newColors = [...colors];
      const colorAssignments = new Map([
        ["background", 0],  // Lightest color
        ["foreground", 1],  // Darkest color
        ["primary", 2],     // Most saturated
        ["secondary", 3],   // Muted
        ["accent", 4]       // Complementary
      ]);
      
      // Put the base color in its current position and arrange others
      harmonizedColors[colorAssignments.get(currentRole)!] = baseColor;
      
      // Fill in the other colors
      roleOrder.forEach((role, index) => {
        if (index !== currentColorIndex) {
          newColors[index] = harmonizedColors[colorAssignments.get(role)!];
        }
      });
      
      setColors(newColors);
      setPreviewColors(newColors);
      setCurrentColorIndex(4); // Move to last color
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

  const handleDeletePalette = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent palette selection when clicking delete
    setSavedPalettes(prev => prev.filter((_, i) => i !== index));
    // Reset preview if the deleted palette was being previewed
    if (JSON.stringify(colors) === JSON.stringify(savedPalettes[index].colors)) {
      setPreviewColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
      setColors(['#000000', '#000000', '#000000', '#000000', '#000000']);
    }
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
                        <div className="color-preview" style={{ backgroundColor: colors[currentColorIndex] }}>
                          <span>{colors[currentColorIndex]}</span>
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

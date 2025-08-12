'use client';

import { createContext, useContext, useState } from 'react';
import { Palette, PREDEFINED_PALETTES } from '../data/palettes';

interface ColorPaletteContextType {
  palettes: Palette[];
  currentPaletteIndex: number;
  setCurrentPaletteIndex: (index: number) => void;
  addPalette: (name: string, colors: string[]) => void;
  previewColors: string[];
  setPreviewColors: (colors: string[]) => void;
  isCreatingPalette: boolean;
  setIsCreatingPalette: (value: boolean) => void;
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(undefined);

export function ColorPaletteProvider({ children }: { children: React.ReactNode }) {
  const [palettes, setPalettes] = useState<Palette[]>(PREDEFINED_PALETTES);
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  const [previewColors, setPreviewColors] = useState<string[]>(PREDEFINED_PALETTES[0].colors);
  const [isCreatingPalette, setIsCreatingPalette] = useState(false);

  const addPalette = (name: string, colors: string[]) => {
    setPalettes((prev) => [...prev, { 
      id: prev.length,
      name,
      colors,
      description: "Custom user-created palette"
    }]);
  };

  return (
    <ColorPaletteContext.Provider
      value={{
        palettes,
        currentPaletteIndex,
        setCurrentPaletteIndex,
        addPalette,
        previewColors,
        setPreviewColors,
        isCreatingPalette,
        setIsCreatingPalette,
      }}
    >
      {children}
    </ColorPaletteContext.Provider>
  );
}
export function useColorPalette() {
  const context = useContext(ColorPaletteContext);
  if (context === undefined) {
    throw new Error('useColorPalette must be used within a ColorPaletteProvider');
  }
  return context;
}

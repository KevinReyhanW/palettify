'use client';

import { createContext, useContext, useState, useEffect } from 'react';

export interface Palette {
  id: number;
  name: string;
  colors: string[];
  description: string;
}

interface ColorPaletteContextType {
  palettes: Palette[];
  currentPaletteIndex: number;
  setCurrentPaletteIndex: (index: number) => void;
  addPalette: (colors: string[]) => void;
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(undefined);

const PREDEFINED_PALETTES: Palette[] = [
  {
    id: 0,
    name: "Material Ocean",
    colors: ["#0F111A", "#3B4252", "#4F5B93", "#8FBCBB", "#88C0D0"],
    description: "Inspired by the deep ocean, perfect for dark themes"
  },
  {
    id: 1,
    name: "Spotify",
    colors: ["#1DB954", "#191414", "#FFFFFF", "#535353", "#B3B3B3"],
    description: "Spotify's iconic brand colors"
  },
  {
    id: 2,
    name: "Instagram Gradient",
    colors: ["#405DE6", "#5851DB", "#833AB4", "#C13584", "#E1306C"],
    description: "Instagram's vibrant gradient palette"
  },
  {
    id: 3,
    name: "Forest Fresh",
    colors: ["#2D5A27", "#5E8C31", "#A4B494", "#BEC5AD", "#D6DBD2"],
    description: "Natural and calming forest tones"
  },
  {
    id: 4,
    name: "Sunset Vibes",
    colors: ["#FF7B89", "#FF9B89", "#FFB489", "#FFD289", "#FFF289"],
    description: "Warm sunset gradient colors"
  },
  {
    id: 5,
    name: "Moonlight",
    colors: ["#0D1B2A", "#1B263B", "#415A77", "#778DA9", "#E0E1DD"],
    description: "Elegant night sky inspired palette"
  },
  {
    id: 6,
    name: "Cherry Blossom",
    colors: ["#FFB7C5", "#FFC9D6", "#FFE0E6", "#FFF0F3", "#FFF7F9"],
    description: "Soft and delicate pink tones"
  },
  {
    id: 7,
    name: "Tech Mint",
    colors: ["#2EC4B6", "#CBF3F0", "#FFFFFF", "#FFBF69", "#FF9F1C"],
    description: "Modern and fresh tech-inspired colors"
  },
  {
    id: 8,
    name: "Autumn Harvest",
    colors: ["#9C4722", "#D68B45", "#FFCE78", "#FFE2AD", "#FFF4E3"],
    description: "Warm autumn color palette"
  },
  {
    id: 9,
    name: "Arctic Aurora",
    colors: ["#112F41", "#068587", "#4FB99F", "#F2B134", "#ED553B"],
    description: "Inspired by northern lights"
  },
  {
    id: 10,
    name: "Desert Night",
    colors: ["#1A1B25", "#242535", "#313140", "#3D3D4C", "#4A4A59"],
    description: "Dark and mysterious desert night tones"
  },
  {
    id: 11,
    name: "Coastal Breeze",
    colors: ["#00B4D8", "#48CAE4", "#90E0EF", "#ADE8F4", "#CAF0F8"],
    description: "Fresh coastal water tones"
  },
  {
    id: 12,
    name: "Berry Smoothie",
    colors: ["#FF0A54", "#FF477E", "#FF7096", "#FF8FA3", "#FFB5B5"],
    description: "Sweet and vibrant berry colors"
  },
  {
    id: 13,
    name: "Emerald City",
    colors: ["#004B23", "#006400", "#007200", "#008000", "#38B000"],
    description: "Rich emerald green gradients"
  },
  {
    id: 14,
    name: "Lavender Fields",
    colors: ["#7400B8", "#6930C3", "#5E60CE", "#5390D9", "#4EA8DE"],
    description: "Soothing lavender and blue tones"
  },
  {
    id: 15,
    name: "Retro Wave",
    colors: ["#2B0F54", "#AB2346", "#FF6B6B", "#FFE66D", "#4ECDC4"],
    description: "80s inspired retro color scheme"
  }
];

// Extend the palettes to 50 by creating variations
const generatePalettes = () => {
  const palettes: Palette[] = [...PREDEFINED_PALETTES];
  
  // Create variations of existing palettes
  PREDEFINED_PALETTES.forEach((basePalette, index) => {
        // Create a darker version
    palettes.push({
      id: palettes.length,
      name: `${basePalette.name} - Dark`,
      colors: basePalette.colors.map(color => 
        color.startsWith('#') ? 
          color.replace(/^#/, '#66') : 
          color
      ),
      description: `Darker version of ${basePalette.name}`
    });

    // Create a lighter version
    palettes.push({
      id: palettes.length,
      name: `${basePalette.name} - Light`,
      colors: basePalette.colors.map(color => 
        color.startsWith('#') ? 
          color.replace(/^#/, '#99') : 
          color
      ),
      description: `Lighter version of ${basePalette.name}`
    });
  });

  return palettes.slice(0, 50);
};

export function ColorPaletteProvider({ children }: { children: React.ReactNode }) {
  const [palettes, setPalettes] = useState<Palette[]>([]);
  const [currentPaletteIndex, setCurrentPaletteIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      setPalettes(generatePalettes());
      setIsLoaded(true);
    }
  }, [isLoaded]);

  const addPalette = (colors: string[]) => {
    setPalettes((prev) => [...prev, { 
      id: prev.length,
      name: `Custom Palette ${prev.length + 1}`,
      colors,
      description: "Custom user-created palette"
    }]);
  };

  if (!isLoaded) return null;

  return (
    <ColorPaletteContext.Provider
      value={{
        palettes,
        currentPaletteIndex,
        setCurrentPaletteIndex,
        addPalette,
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

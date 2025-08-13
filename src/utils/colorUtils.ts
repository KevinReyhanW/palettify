export function hexToHSL(hex: string) {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h *= 60;
  }
  return { h, s: s * 100, l: l * 100 };
}

export function hslToHex(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Convert hex to RGB
function hexToRGB(hex: string): { r: number, g: number, b: number } {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16)
  };
}

// Convert hex to RGB array for Colormind API
function hexToRGBArray(hex: string): number[] {
  const rgb = hexToRGB(hex);
  return [rgb.r, rgb.g, rgb.b];
}

// Convert RGB array to hex
function rgbArrayToHex(rgb: number[]): string {
  return `#${rgb.map(x => Math.round(x).toString(16).padStart(2, '0')).join('')}`;
}

export async function generateHarmonizedPalette(baseHex: string): Promise<string[]> {
  try {
    // Prepare the input color (lock the first color)
    const input = [[...hexToRGBArray(baseHex)], "N", "N", "N", "N"];
    
    // Call Colormind API
    const response = await fetch('http://colormind.io/api/', {
      method: 'POST',
      body: JSON.stringify({
        model: 'default',
        input: input
      })
    });

    if (!response.ok) {
      throw new Error('Failed to fetch AI color palette');
    }

    const data = await response.json();
    
    // Convert the RGB arrays back to hex colors
    return data.result.map((rgb: number[]) => rgbArrayToHex(rgb));
  } catch (error) {
    console.error('Error generating AI palette:', error);
    // Fallback to basic complementary colors if AI fails
    const { h, s, l } = hexToHSL(baseHex);
    return [
      baseHex,
      hslToHex((h + 180) % 360, s, l),
      hslToHex((h + 30) % 360, s, l),
      hslToHex((h - 30 + 360) % 360, s, l),
      hslToHex((h + 120) % 360, s, l)
    ];
  }
}


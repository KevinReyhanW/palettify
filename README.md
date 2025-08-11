# Palettify - Color Palette Explorer

Palettify is a modern web application that helps designers and developers explore and visualize color palettes in real-world website contexts. Built with Next.js and React, it offers an interactive way to see how different color combinations would look in a real website layout.

## Features

- **50+ Curated Color Palettes**: Including popular design systems and brand-inspired color schemes
- **Live Preview**: See how your selected palette looks in a realistic website layout
- **Interactive Carousel**: Browse through palettes with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive Design**: Works perfectly on all devices
- **Color Information**: View hex codes and palette descriptions
- **Categories**: Various palette categories including:
  - Brand-inspired (Spotify, Instagram)
  - Nature-inspired (Forest Fresh, Sunset Vibes)
  - Mood-based (Moonlight, Tech Mint)
  - Seasonal (Autumn Harvest, Cherry Blossom)
  - Modern design (Material Ocean, Arctic Aurora)

## Tech Stack

- Next.js 14
- React
- TypeScript
- CSS Modules
- Framer Motion
- Chroma.js

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd palettify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
palettify/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page component
│   │   └── globals.css   # Global styles
│   ├── components/
│   │   ├── Header.tsx    # App header with theme toggle
│   │   ├── PaletteCarousel.tsx  # Color palette browser
│   │   └── WebPreview.tsx # Website preview component
│   └── context/
│       ├── ThemeContext.tsx     # Dark/light mode management
│       └── ColorPaletteContext.tsx  # Color palette management
└── public/
    └── [static files]
```

## Features in Detail

### Color Palettes
- Each palette contains 5 carefully selected colors
- Palettes include name and description
- Hover effects reveal hex color codes
- Click to select and preview

### Website Preview
- Real-time preview of selected colors
- Interactive elements (buttons, inputs)
- Responsive layout demonstration
- Navigation menu preview

### Theme Support
- System-wide dark/light mode
- Smooth transitions between themes
- Consistent styling across modes

## Contributing

Feel free to open issues and pull requests for any improvements you'd like to add.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Color palettes inspired by popular design systems and brands
- Built as a portfolio project to demonstrate modern web development practices

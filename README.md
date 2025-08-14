# Palettify - Advanced Color Palette Explorer

Palettify is a sophisticated web application designed to help designers and developers discover, create, and visualize color palettes in real-world website contexts. Built with Next.js and React, it offers an interactive way to see how different color combinations would look across various website layouts and designs.

## Key Features

- **Multiple Website Preview Layouts**: 
  - Modern Blog Layout
  - E-commerce Design
  - Dashboard Interface
  - See your color palette in action across different contexts

- **Smart Color Selection**:
  - **AI-Powered Color Suggestions**: Input one color and get 4 AI-recommended complementary colors (powered by Colormind.io)
  - **Custom Palette Creation**: Create your own palette by picking exactly 5 colors
  - **50+ Pre-built Color Palettes**: Including popular design systems and brand-inspired schemes

- **Interactive Features**:
  - **Smart Search**: Quickly find pre-built palettes by name, theme, or color
  - **Live Preview**: Real-time updates across all three website layouts
  - **Dark/Light Mode**: Toggle between dark and light themes
  - **Color Information**: Detailed color information including hex codes

- **Palette Categories**:
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
- Colormind.io AI API Integration

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
│   │   └── page.tsx      # Home page component
│   ├── components/
│   │   ├── Header.tsx    # App header with theme toggle
│   │   ├── LeftSidebar.tsx # Navigation and tools
│   │   ├── PaletteRightSidebar.tsx # Color palette manager
│   │   ├── WebPreview.tsx # Website preview container
│   │   └── previews/
│   │       ├── Dashboard.tsx  # Dashboard layout preview
│   │       ├── Ecommerce.tsx # E-commerce layout preview
│   │       └── ModernBlog.tsx # Blog layout preview
│   ├── context/
│   │   ├── ThemeContext.tsx     # Dark/light mode management
│   │   └── ColorPaletteContext.tsx  # Color palette management
│   ├── styles/
│   │   ├── components/   # Component-specific styles
│   │   ├── global/      # Global styles
│   │   └── pages/       # Page-specific styles
│   ├── utils/
│   │   └── colorUtils.ts # Color manipulation utilities
│   └── data/
│       └── palettes.ts  # Pre-built palette data
└── public/
    └── [static files]
```

## Features in Detail

### Color Palette Management
- Create custom palettes with exactly 5 colors
- AI-powered complementary color suggestions
- Search through pre-built palettes
- Save and manage favorite palettes

### Website Previews
- Three distinct layout previews:
  - Modern Blog: Perfect for content-focused websites
  - E-commerce: Showcase products and shopping experiences
  - Dashboard: Visualize data-heavy interfaces
- Real-time updates across all previews
- Interactive elements in each layout

### Smart Color Tools
- AI color recommendation system
- Color harmony validation
- Accessibility contrast checking
- Export palette in various formats

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
- AI color suggestions powered by Colormind.io - A deep learning-based color scheme generator
- Thanks to Colormind.io for providing the AI color palette generation service

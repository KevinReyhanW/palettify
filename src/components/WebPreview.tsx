'use client';

import { useColorPalette } from '@/context/ColorPaletteContext';
import './WebPreview.css';

export default function WebPreview() {
  const { palettes, currentPaletteIndex } = useColorPalette();
  const currentPalette = palettes[currentPaletteIndex].colors;

  return (
    <div className="web-preview">
      <div 
        className="preview-container"
        style={{ backgroundColor: currentPalette[0] }}
        suppressHydrationWarning
      >
        <header className="preview-header">
          <h2 style={{ color: currentPalette[4], fontWeight: 600 }}>Brand</h2>
          <nav className="preview-nav">
            {['Home', 'Features', 'Pricing', 'About'].map((item) => (
              <div
                key={item}
                className="preview-nav-item"
                style={{ 
                  color: currentPalette[4],
                  backgroundColor: item === 'Home' ? currentPalette[1] : 'transparent'
                }}
              >
                {item}
              </div>
            ))}
          </nav>
        </header>

        <main className="preview-main">
          <div className="preview-section">
            <h1 
              className="preview-title"
              style={{ color: currentPalette[4] }}
            >
              Transform Your Website with Perfect Colors
            </h1>
            <p 
              className="preview-subtitle"
              style={{ color: currentPalette[4] }}
            >
              See how your brand could look with this carefully crafted color palette. 
              Experience the perfect balance of aesthetics and functionality.
            </p>
            <div className="preview-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="preview-input"
                style={{ 
                  backgroundColor: currentPalette[2],
                  color: currentPalette[4],
                  borderColor: currentPalette[3]
                }}
              />
              <button
                className="preview-button"
                style={{ 
                  backgroundColor: currentPalette[3],
                  color: currentPalette[0]
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="preview-section">
            <div 
              className="preview-card"
              style={{ backgroundColor: currentPalette[1] }}
            >
              <h3 style={{ color: currentPalette[4], fontSize: '1.5rem' }}>
                Color Psychology
              </h3>
              <p style={{ color: currentPalette[4] }}>
                Colors influence emotions and behaviors. Choose the right palette to convey your message effectively.
              </p>
            </div>
          </div>
        </main>

        <footer className="preview-footer">
          <div style={{ color: currentPalette[4], opacity: 0.7 }}>
            © 2025 Your Brand. All rights reserved.
          </div>
          <div 
            style={{ 
              display: 'flex', 
              gap: '1rem', 
              color: currentPalette[4],
              opacity: 0.7
            }}
          >
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

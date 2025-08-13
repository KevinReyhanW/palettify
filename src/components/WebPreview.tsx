'use client';

import { useColorPalette } from '@/context/ColorPaletteContext';
import './WebPreview.css';

export default function WebPreview() {
  const { previewColors } = useColorPalette();
  const currentPalette = previewColors;

  return (
    <div className="web-preview">
      <div
        className="preview-container"
        style={{
          backgroundColor: currentPalette[0],
          '--background-color': currentPalette[0],
          '--foreground-color': currentPalette[1],
          '--primary-color': currentPalette[2],
          '--secondary-color': currentPalette[3],
          '--accent-color': currentPalette[4],
        } as React.CSSProperties} // background
        suppressHydrationWarning
      >
        <header className="preview-header">
          <h2 style={{ color: currentPalette[1], fontWeight: 600 }}>Brand</h2> {/* foreground */}
          <nav className="preview-nav">
            {['Home', 'Features', 'Pricing', 'About'].map((item) => (
              <div
                key={item}
                className="preview-nav-item"
                style={{
                  color: currentPalette[1], // foreground
                  backgroundColor: item === 'Home' ? currentPalette[2] : 'transparent', // primary
                  ...(item === 'Home' ? { color: currentPalette[0] } : {}) // if active, use background color for text
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
              style={{ color: currentPalette[1] }} // foreground
            >
              Transform Your Website with Perfect Colors
            </h1>
            <p
              className="preview-subtitle"
              style={{ color: currentPalette[1], opacity: 0.9 }} // foreground with slight transparency
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
                  backgroundColor: 'transparent',
                  color: currentPalette[1], // foreground
                  borderColor: currentPalette[3], // secondary
                  borderWidth: '2px'
                }}
              />
              <button
                className="preview-button"
                style={{
                  backgroundColor: currentPalette[2], // primary
                  color: currentPalette[0], // background
                  boxShadow: `0 4px 12px ${currentPalette[2]}40`, // primary with transparency
                  border: `2px solid ${currentPalette[4]}`, // accent color border
                }}
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="preview-section">
            <div
              className="preview-card"
              style={{
                backgroundColor: currentPalette[3], // secondary
                boxShadow: `0 8px 24px ${currentPalette[3]}30` // secondary with transparency
              }}
            >
              <h3 style={{
                color: currentPalette[0], // background
                fontSize: '1.5rem',
                marginBottom: '1rem'
              }}>
                Color Psychology
              </h3>
              <p style={{
                color: currentPalette[0], // background
                opacity: 0.9
              }}>
                Colors influence emotions and behaviors. Choose the right palette to convey your message effectively.
              </p>
            </div>
          </div>
        </main>

        <footer className="preview-footer">
          <div style={{
            color: currentPalette[1], // foreground
            opacity: 0.7
          }}>
            © 2025 Your Brand. All rights reserved.
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1rem'
            }}
          >
            {['Privacy', 'Terms', 'Contact'].map((item) => (
              <span
                key={item}
                style={{
                  color: currentPalette[1], // foreground
                  opacity: 0.7,
                  cursor: 'pointer',
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}

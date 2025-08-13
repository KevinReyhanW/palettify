'use client';

import { useState } from 'react';
import { useColorPalette } from '@/context/ColorPaletteContext';
import { Dashboard } from './previews/Dashboard';
import { Ecommerce } from './previews/Ecommerce';
import { ModernBlog } from './previews/ModernBlog';
import './WebPreview.css';

type PreviewType = 'blog' | 'dashboard' | 'ecommerce';

export default function WebPreview() {
  const { previewColors } = useColorPalette();
  const currentPalette = previewColors;
  const [activePreview, setActivePreview] = useState<PreviewType>('blog');

  const renderPreview = () => {
    switch (activePreview) {
      case 'dashboard':
        return <Dashboard />;
      case 'ecommerce':
        return <Ecommerce />;
      case 'blog':
      default:
        return <ModernBlog />;
    }
  };

  return (
    <div className="web-preview">
      <div
        className="preview-container"
        style={{
          '--background-color': currentPalette[0],
          '--foreground-color': currentPalette[1],
          '--primary-color': currentPalette[2],
          '--secondary-color': currentPalette[3],
          '--accent-color': currentPalette[4],
        } as React.CSSProperties}
        suppressHydrationWarning
      >
        <div className="preview-tabs">
          <button
            className={`preview-tab ${activePreview === 'blog' ? 'active' : ''}`}
            onClick={() => setActivePreview('blog')}
          >
            Blog
          </button>
          <button
            className={`preview-tab ${activePreview === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePreview('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={`preview-tab ${activePreview === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActivePreview('ecommerce')}
          >
            E-commerce
          </button>
        </div>
        <div className="preview-content">
          {renderPreview()}
        </div>
      </div>
    </div>
  );
}

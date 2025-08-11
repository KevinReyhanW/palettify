'use client';

import Header from '@/components/Header';
import PaletteCarousel from '@/components/PaletteCarousel';
import WebPreview from '@/components/WebPreview';
import './page.css';

export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <div className="content-container">
        <PaletteCarousel />
        <WebPreview />
      </div>
    </main>
  );
}

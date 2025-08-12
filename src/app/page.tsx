'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import PaletteRightSidebar from '@/components/PaletteRightSidebar';
import WebPreview from '@/components/WebPreview';
import './page.css';

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleCreatePalette = () => {
    setIsSidebarOpen(true);
  };

  return (
    <main className="main-container">
      <Header onCreatePalette={handleCreatePalette} />
      <div className="content-container">
        <LeftSidebar />
        <PaletteRightSidebar />
        <WebPreview />
      </div>
    </main>
  );
}

'use client';

import Header from '@/components/Header';
import LeftSidebar from '@/components/LeftSidebar';
import PaletteRightSidebar from '@/components/PaletteRightSidebar';
import WebPreview from '@/components/WebPreview';
import '../styles/pages/page.css';

export default function Home() {
  return (
    <main className="main-container">
      <Header />
      <div className="content-container">
        <LeftSidebar />
        <PaletteRightSidebar />
        <WebPreview />
      </div>
    </main>
  );
}

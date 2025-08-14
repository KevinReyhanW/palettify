'use client';
import { useState } from 'react';
import { User, BookOpen, Clock, Home, PenTool, Sparkles } from 'lucide-react';
import '../../styles/components/previews/ModernBlog.css';

export function ModernBlog() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeContent, setActiveContent] = useState('home');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveContent(tab);
  };

  return (
    <div className="modern-blog">
      <header className="blog-header">
        <div className="blog-header-content">
          <div className="logo">
            <PenTool size={20} color="var(--accent-color)" />
            <span>PaletteBlog</span>
          </div>
          <nav className="main-nav">
            <ul className="nav-links">
              <li 
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => handleTabClick('home')}
              >
                <Home size={18} />
                <span>Home</span>
              </li>
              <li 
                className={activeTab === 'articles' ? 'active' : ''}
                onClick={() => handleTabClick('articles')}
              >
                <BookOpen size={18} />
                <span>Articles</span>
              </li>
              <li 
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => handleTabClick('about')}
              >
                <User size={18} />
                <span>About</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="blog-content">
        {activeContent === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-content">
                <h1 className="hero-title">Design Insights & Color Theory</h1>
                <p className="hero-subtitle">Expert perspectives on visual design and color psychology</p>
                <button className="cta-button">
                  Read Latest
                  
                </button>
              </div>
            </section>

            <section className="featured-section">
              <div className="featured-card">
                <div className="card-content">
                  <div className="card-header">
                    <BookOpen size={16} color="var(--accent-color)" />
                    <span className="card-category">Featured</span>
                  </div>
                  <h3>The Psychology Behind Effective Color Palettes</h3>
                  <p>How color combinations influence user perception and behavior in digital products.</p>
                  <div className="card-meta">
                    <Clock size={14} color="var(--foreground-color)" opacity={0.6} />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeContent === 'articles' && (
          <section className="articles-section">
            <h2 className="section-title">
              <BookOpen size={24} color="var(--accent-color)" />
              <span>Latest Articles</span>
            </h2>
            <div className="article-list">
              <div className="article-item">
                <div className="article-content">
                  <div className="article-header">
                    <PenTool size={16} color="var(--accent-color)" />
                    <h3>Color Contrast for Accessibility</h3>
                  </div>
                  <p>Learn how to create accessible designs with proper color contrast ratios.</p>
                  <div className="article-meta">
                    <Clock size={14} color="var(--foreground-color)" opacity={0.6} />
                    <span>8 min read</span>
                  </div>
                </div>
              </div>
              <div className="article-item">
                <div className="article-content">
                  <div className="article-header">
                    <PenTool size={16} color="var(--accent-color)" />
                    <h3>Dark Mode Design Principles</h3>
                  </div>
                  <p>Best practices for implementing dark mode in your applications.</p>
                  <div className="article-meta">
                    <Clock size={14} color="var(--foreground-color)" opacity={0.6} />
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeContent === 'about' && (
          <section className="about-section">
            <div className="author-avatar">
              <User size={48} color="var(--accent-color)" />
            </div>
            <h2 className="section-title">About PaletteBlog</h2>
            <p className="about-text">
              We're dedicated to exploring the world of color theory and design principles. 
              Our mission is to help designers create more effective and beautiful interfaces.
            </p>
            <div className="about-meta">
              <span className="meta-item">
                <Sparkles size={16} color="var(--accent-color)" />
                <span>Founded 2023</span>
              </span>
              <span className="meta-item">
                <BookOpen size={16} color="var(--accent-color)" />
                <span>50+ Articles</span>
              </span>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
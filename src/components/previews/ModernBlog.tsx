'use client';

import './ModernBlog.css';

export function ModernBlog() {
  return (
    <div className="modern-blog">
      <header className="blog-header">
        <div className="header-content">
          <div className="logo">Mindful<span>Blog</span></div>
          <nav className="main-nav">
            <ul className="nav-links">
              <li className="active">Home</li>
              <li>Articles</li>
              <li>Topics</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="blog-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Thoughtful Insights for Creative Minds</h1>
            <p className="hero-subtitle">Exploring the intersection of design, technology, and human experience through thoughtful writing.</p>
            <button className="cta-button">Browse Articles</button>
          </div>
        </section>

        <section className="featured-section">
          <h2 className="section-title">Featured Content</h2>
          <div className="featured-grid">
            <article className="featured-card">
              <div className="card-image"></div>
              <div className="card-content">
                <span className="card-category">Design</span>
                <h3>The Psychology of Minimalism in UI Design</h3>
                <p>Exploring how minimal interfaces affect user behavior and perception in digital products.</p>
                <div className="card-meta">
                  <span>12 min read</span>
                  <span>•</span>
                  <span>May 15, 2023</span>
                </div>
              </div>
            </article>

            <article className="featured-card">
              <div className="card-image"></div>
              <div className="card-content">
                <span className="card-category">Technology</span>
                <h3>Emerging Trends in Web Development for 2023</h3>
                <p>An analysis of the most impactful technologies shaping the future of web experiences.</p>
                <div className="card-meta">
                  <span>8 min read</span>
                  <span>•</span>
                  <span>April 28, 2023</span>
                </div>
              </div>
            </article>

            <article className="featured-card">
              <div className="card-image"></div>
              <div className="card-content">
                <span className="card-category">Productivity</span>
                <h3>Deep Work in the Age of Distraction</h3>
                <p>Strategies for maintaining focus and producing meaningful work in our connected world.</p>
                <div className="card-meta">
                  <span>10 min read</span>
                  <span>•</span>
                  <span>March 22, 2023</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="blog-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">Mindful<span>Blog</span></div>
            <p>Thoughtful content for curious minds.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <ul>
                <li>All Articles</li>
                <li>Popular</li>
                <li>Topics</li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Newsletter</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2023 MindfulBlog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare, Menu, X, ArrowUpRight, Coffee, Mic, Radio } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Wings', href: '#departments' },
    { label: 'Mentors', href: '#matchmaker' },
    { label: 'Podcast 🎙️', href: '#podcast' },
    { label: 'Events', href: '#programs' },
    { label: 'Survival Kit', href: '#survival-kit' },
    { label: 'Confessions', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo with Official ABES + ॥ सलाह ॥ Logo */}
        <a href="#" className="nav-brand" aria-label="Salaah - The Mentor Community Home">
          <div className="official-logo-nav-card" title="Salaah - The Mentor Community (ABES)">
            <img 
              src="/images/salaah-official-logo.png" 
              alt="Salaah - The Mentor Community" 
              className="official-logo-nav-img" 
            />
          </div>
          <div className="brand-text-wrap hide-brand-text-sm">
            <div className="brand-title-row">
              <span className="brand-name">SALAAH</span>
              <span className="brand-tag">ABESECian</span>
            </div>
            <span className="brand-subtitle">The Mentor Community</span>
          </div>
        </a>

        {/* Live Senior Status Indicator */}
        <div className="senior-status-indicator hide-mobile">
          <span className="status-pulse-green"></span>
          <span className="status-text">
            <strong>18 Seniors</strong> active at Gauri Cafe & Discord
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu desktop-menu" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="nav-actions">
          <button 
            type="button"
            className="btn btn-primary nav-cta-btn"
            onClick={() => onOpenBooking(null)}
          >
            <Coffee size={16} />
            <span>Book 1:1 Chat</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <div className="official-logo-drawer-box">
                <img 
                  src="/images/salaah-official-logo.png" 
                  alt="Salaah - The Mentor Community" 
                  className="official-logo-drawer-img"
                />
              </div>
              <button 
                type="button"
                className="close-drawer-btn" 
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="drawer-live-pill">
              <span className="status-pulse-green"></span>
              <span>18 Mentors available today at Gauri Cafe</span>
            </div>

            <div className="drawer-links">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="drawer-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <ArrowUpRight size={16} className="drawer-link-icon" />
                </a>
              ))}
            </div>

            <div className="drawer-footer">
              <button 
                type="button"
                className="btn btn-primary btn-full-width"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking(null);
                }}
              >
                <Coffee size={18} />
                <span>Book 1:1 Mentorship Session</span>
              </button>
              <p className="drawer-note">
                ☕ Free Chai & guidance at Gauri Cafe on us!
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { 
  Heart, 
  ArrowUp, 
  Coffee, 
  MessageSquare, 
  Terminal, 
  MapPin, 
  Sparkles, 
  Mic 
} from 'lucide-react';
import { GithubIcon, InstagramIcon, DiscordIcon } from './Icons';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="footer-grid">
          
          {/* Col 1: Brand & Philosophy with Official Logo */}
          <div className="footer-brand-col">
            <div className="footer-official-logo-box">
              <img 
                src="/images/salaah-official-logo.png" 
                alt="Salaah - The Mentor Community" 
                className="footer-official-logo-img" 
              />
            </div>

            <p className="footer-brand-desc">
              <strong>Salaah - The Mentor Community</strong> is a student-led, non-profit peer mentorship club at ABES Engineering College, 
              founded by ABESECians. We bridge the gap between freshers and seniors through radical zero-gatekeeping, 
              open roadmaps, podcasts, and canteen chai chats.
            </p>

            <div className="footer-student-humor-note glass-card">
              <Terminal size={14} className="text-amber" />
              <span>
                "Compiled between ABES OS Lab & Canteen breaks. Zero faculty red-tape was harmed in making this."
              </span>
            </div>
          </div>

          {/* Col 2: Wings & Media */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Community Wings</h4>
            <ul className="footer-links-list">
              <li><a href="#podcast">The Salaah Podcast 🎙️</a></li>
              <li><a href="#departments">Tech & Development Wing</a></li>
              <li><a href="#departments">Competitive Programming (DSA)</a></li>
              <li><a href="#departments">UI/UX & Creative Media</a></li>
              <li><a href="#departments">Academics & PYQ Vault</a></li>
              <li><a href="#departments">Placements & Career Outreach</a></li>
            </ul>
          </div>

          {/* Col 3: Student Tools */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Campus Survival</h4>
            <ul className="footer-links-list">
              <li><a href="#survival-kit">CGPA Comeback Calculator</a></li>
              <li><a href="#survival-kit">1st Year PYQ Master Drive</a></li>
              <li><a href="#survival-kit">Salaah 75 DSA Roadmap</a></li>
              <li><a href="#matchmaker">Find an ABES Senior Mentor</a></li>
              <li><a href="#programs">Upcoming Bootcamps & RSVPs</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Col 4: Campus Coordinates & Action */}
          <div className="footer-action-col">
            <h4 className="footer-heading">Campus Base</h4>
            <div className="campus-location-info">
              <div className="loc-row">
                <MapPin size={15} className="text-amber" />
                <span>Table 4, Gauri Cafe & Student Lounge, ABES EC</span>
              </div>
              <div className="loc-row">
                <Coffee size={15} className="text-cyan" />
                <span>Walk-in Hours: Weekday Afternoons</span>
              </div>
            </div>

            <button 
              type="button" 
              className="btn btn-primary btn-full-width footer-cta-btn"
              onClick={() => onOpenBooking('Joining as Mentee')}
            >
              <Coffee size={16} />
              <span>Book Mentorship (Free)</span>
            </button>

            <div className="footer-social-row">
              <a href="#" className="footer-social-link" title="Discord" onClick={(e) => { e.preventDefault(); alert("Salaah Discord: discord.gg/salaah-hub"); }}>
                <DiscordIcon size={18} />
              </a>
              <a href="#" className="footer-social-link" title="Instagram" onClick={(e) => { e.preventDefault(); alert("Salaah Instagram: @salaah_thementorcommunity"); }}>
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="footer-social-link" title="GitHub" onClick={(e) => { e.preventDefault(); alert("Salaah GitHub: github.com/salaah-mentorship"); }}>
                <GithubIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy-text">
            <span>© {new Date().getFullYear()} <strong>Salaah - The Mentor Community (ABES)</strong>.</span>
            <span className="heart-span">Crafted by ABESECians with <Heart size={14} className="text-rose" /> &amp; chai.</span>
          </div>

          <button 
            type="button" 
            className="back-to-top-btn"
            onClick={scrollToTop}
            title="Back to Top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}

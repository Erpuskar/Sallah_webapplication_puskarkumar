import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Coffee, 
  Search, 
  Calculator, 
  CheckCircle2, 
  Lightbulb, 
  ChevronRight, 
  ShieldCheck, 
  Terminal, 
  HeartHandshake, 
  Mic, 
  Radio,
  Users
} from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  const seniorTips = [
    { id: 1, tag: "ACADEMICS", text: "Don't buy expensive hardcopy textbooks! Our Academic Wing has verified Google Drive links for every subject's PYQs & handwritten notes." },
    { id: 2, tag: "ABES EXAMS", text: "Prof. Sharma's surprise quizzes almost always test Question 4 & 7 from the previous tutorial sheet. Don't skip them!" },
    { id: 3, tag: "HACKATHONS", text: "Want to crack Smart India Hackathon? Form a trio: 1 React builder, 1 Backend/Python dev, and 1 god-tier pitch presenter." },
    { id: 4, tag: "CAMPUS LIFE", text: "The 75% attendance policy is non-negotiable, but smart timetable math is an art. Use our CGPA & Attendance tool below!" },
    { id: 5, tag: "INTERNSHIPS", text: "First year is for GitHub commits & basic projects. Don't panic over LeetCode hard problems yet — step by step!" }
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % seniorTips.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [seniorTips.length]);

  return (
    <section className="hero-section" id="hero">
      {/* Soothing Ambient Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>

      <div className="container hero-container">
        
        {/* Prominent Official Logo Showcase Card */}
        <div className="official-hero-brand-strip glass-card">
          <div className="official-brand-logo-frame">
            <img 
              src="/images/salaah-official-logo.png" 
              alt="॥ सलाह ॥ The Mentor Community - ABES" 
              className="official-hero-logo-img"
            />
          </div>
          <div className="official-brand-text-block">
            <span className="badge-chip pulse-amber">
              <Sparkles size={13} />
              <span>OFFICIAL MENTORSHIP COMMUNITY • ABES</span>
            </span>
            <p className="official-brand-motto">
              Guidance grounded in empathy, zero-hierarchy, and authentic campus experience.
            </p>
          </div>
        </div>

        <div className="hero-grid">
          
          {/* Left Column: Copy & CTAs */}
          <div className="hero-content">
            
            {/* Top Pill */}
            <div className="badge-chip pulse-cyan hero-pill">
              <span className="badge-dot"></span>
              <span>BUILT BY ABESECians WHO SURVIVED FRESHMAN YEAR ⚡</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Senior Guidance <br />
              <span className="gradient-text-amber">Without The Senior</span> Attitude.
            </h1>

            {/* Relatable Subtitle */}
            <p className="hero-description">
              Remember feeling lost on day one? We were in your shoes just 12 months ago at ABES. 
              <strong> Salaah - The Mentor Community</strong> is here to help you navigate 8:30 AM lectures, 
              hostel dilemmas, open-source projects, CGPA turnarounds, and dream internships over a warm cup of cutting chai at Gauri Cafe.
            </p>

            {/* Live Senior Tip Ticker */}
            <div className="senior-tip-box glass-card">
              <div className="tip-header-row">
                <div className="tip-label">
                  <Lightbulb size={16} className="tip-icon" />
                  <span>SENIOR ABESECian PRO-TIP</span>
                </div>
                <span className="tip-category">{seniorTips[currentTipIndex].tag}</span>
              </div>
              <p className="tip-body-text">
                "{seniorTips[currentTipIndex].text}"
              </p>
              <div className="tip-footer-row">
                <span className="tip-author">— Curated by ABESECians in Tech & Academic Wing</span>
                <button 
                  type="button" 
                  className="next-tip-btn"
                  onClick={() => setCurrentTipIndex((prev) => (prev + 1) % seniorTips.length)}
                  title="Next Senior Tip"
                >
                  <span>Next Tip</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-cta-group">
              <button 
                type="button" 
                className="btn btn-primary hero-btn-main"
                onClick={() => onOpenBooking(null)}
              >
                <Coffee size={18} />
                <span>Book 1:1 Senior Chat @ Gauri Cafe</span>
                <ArrowRight size={16} />
              </button>

              <a href="#podcast" className="btn btn-amber">
                <Mic size={18} />
                <span>Listen to Podcast 🎙️</span>
              </a>

              <a href="#matchmaker" className="btn btn-secondary">
                <Search size={18} />
                <span>Browse Mentors</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="hero-guarantees">
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>100% Free Peer Guidance</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>Zero Gatekeeping</span>
              </div>
              <div className="guarantee-item">
                <CheckCircle2 size={16} className="guarantee-icon" />
                <span>In-person @ Gauri Cafe & Discord</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Photography of Standing Mentor */}
          <div className="hero-visual-wrapper">
            <div className="hero-card-frame glass-card">
              
              {/* Terminal Window Header */}
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="window-title">
                  <Terminal size={14} />
                  <span>salaah.thementorcommunity.internal (~/gauri-cafe)</span>
                </div>
                <div className="window-badge">ABESEC</div>
              </div>

              {/* Real Photograph of Students with Standing Mentor */}
              <div className="hero-image-box">
                <img 
                  src="/images/hero-standing-mentor.jpg" 
                  alt="Students being mentored by a senior in standing position at study table" 
                  className="hero-main-img"
                />
                <div className="hero-image-overlay"></div>
              </div>

              {/* Interactive Floating Pill Stickers */}
              <div className="floating-badge badge-top-right glass-card">
                <div className="badge-icon-bg bg-amber">
                  <Mic size={18} />
                </div>
                <div>
                  <div className="badge-title">The Salaah Podcast</div>
                  <div className="badge-subtitle">Ep 12 Live on Spotify 🎧</div>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left glass-card">
                <div className="badge-icon-bg bg-cyan">
                  <Coffee size={18} />
                </div>
                <div>
                  <div className="badge-title">Chai & Code Sundays</div>
                  <div className="badge-subtitle">4 PM @ Gauri Cafe</div>
                </div>
              </div>

              {/* Micro Status Bar */}
              <div className="hero-footer-bar">
                <div className="mentor-avatars-preview">
                  <img src="/images/mentor-arjun.jpg" alt="Mentor Arjun" className="mini-avatar" />
                  <img src="/images/mentor-tanya.jpg" alt="Mentor Tanya" className="mini-avatar" />
                  <img src="/images/mentor-kabir.jpg" alt="Mentor Kabir" className="mini-avatar" />
                  <img src="/images/mentor-ananya.jpg" alt="Mentor Ananya" className="mini-avatar" />
                  <span className="mini-avatar-more">+14</span>
                </div>
                <div className="hero-footer-text">
                  <span className="text-highlight">Next Open Session:</span> This Saturday, Gauri Cafe & Meet
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Impact Metrics Strip */}
        <div className="hero-metrics-strip glass-card">
          <div className="metric-box">
            <span className="metric-number">1,450+</span>
            <span className="metric-label">Freshers Guided at ABES</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">18+</span>
            <span className="metric-label">Senior ABESECian Mentors</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">12 Episodes</span>
            <span className="metric-label">The Salaah Podcast Streamed</span>
          </div>
          <div className="metric-divider"></div>
          <div className="metric-box">
            <span className="metric-number">98.2%</span>
            <span className="metric-label">End-Sem Doubt Clearance Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}

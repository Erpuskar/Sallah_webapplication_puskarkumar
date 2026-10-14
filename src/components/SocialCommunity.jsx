import React from 'react';
import { 
  MessageSquare, 
  Send, 
  Music, 
  Users, 
  Sparkles, 
  ArrowUpRight,
  Radio,
  Headphones,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, InstagramIcon, DiscordIcon, WhatsAppIcon } from './Icons';

export default function SocialCommunity() {
  const socialCards = [
    {
      title: "Discord Community Lounge",
      handle: "discord.gg/salaah-hub",
      desc: "Our primary 24/7 digital hub. Voice rooms for late-night study sprints, hackathon teammate matchmaking, and direct senior pings.",
      liveStat: "🟢 342 Seniors & Freshers Online",
      badge: "LIVE ACTIVE",
      icon: <DiscordIcon className="text-purple" size={24} />,
      colorClass: "violet",
      cta: "Join Discord Server",
      channels: ["#doubt-clearance-room", "#hackathon-teammates", "#resume-roasts", "#canteen-updates"]
    },
    {
      title: "WhatsApp Announcement Group",
      handle: "chat.whatsapp.com/salaah-broadcast",
      desc: "Zero-spam broadcast channel. Instant alerts when new PYQ drive links drop, surprise quiz alerts, and weekend Chai & Code locations.",
      liveStat: "📱 1,200+ Campus Members",
      badge: "ZERO SPAM",
      icon: <WhatsAppIcon className="text-emerald" size={24} />,
      colorClass: "emerald",
      cta: "Join WhatsApp Channel",
      channels: ["Strictly Admin Announcements", "PYQ Links", "Exam Notifications", "Free Chai Meetups"]
    },
    {
      title: "Instagram Campus Reels",
      handle: "@salaah_mentorship",
      desc: "Hilarious and relatable campus content, senior interview takeaways, fest survival guides, and behind-the-scenes hostel moments.",
      liveStat: "🔥 4.2k Campus Followers",
      badge: "CAMPUS MEMES & TIPS",
      icon: <InstagramIcon className="text-rose" size={24} />,
      colorClass: "rose",
      cta: "Follow on Instagram",
      channels: ["Exam Memes & Tips", "Mentor Spotlights", "Live Q&A Stories", "Fest Announcements"]
    },
    {
      title: "GitHub Open Source Org",
      handle: "github.com/salaah-mentorship",
      desc: "All campus tools are open-source! Contribute to CampusSync, our timetable scraper, and our custom markdown cheat-sheets.",
      liveStat: "⭐ 280+ Stars across 6 Repos",
      badge: "OPEN SOURCE",
      icon: <GithubIcon className="text-cyan" size={24} />,
      colorClass: "cyan",
      cta: "Explore Repositories",
      channels: ["campus-sync-app", "salaah-75-dsa", "fresher-handbook-docs", "college-proxy-scripts"]
    }
  ];

  return (
    <section className="section-spacing community-section" id="social-community">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Users size={16} />
            <span>COMMUNITY & DIGITAL SPACES</span>
          </div>
          <h2>
            Stay Connected 24/7. <br />
            <span className="gradient-text">Wherever College Conversations Happen.</span>
          </h2>
          <p>
            Whether you want to study with seniors on Discord at 3 AM, get flash alerts on WhatsApp before exams, 
            or contribute to open-source tools on GitHub — join our campus network.
          </p>
        </div>

        {/* 4 Main Community Platforms */}
        <div className="social-cards-grid">
          {socialCards.map((card, idx) => (
            <div key={idx} className="social-card glass-card">
              
              <div className="social-card-top">
                <div className="social-icon-box">
                  {card.icon}
                </div>
                <div className="social-badge-wrap">
                  <span className={`badge-chip pulse-${card.colorClass}`}>
                    <span>{card.badge}</span>
                  </span>
                </div>
              </div>

              <h3 className="social-title">{card.title}</h3>
              <span className="social-handle">{card.handle}</span>

              <p className="social-desc">{card.desc}</p>

              <div className="social-stat-pill">
                <span>{card.liveStat}</span>
              </div>

              {/* Channels Preview */}
              <div className="social-channels-list">
                <span className="channels-label">POPULAR CHANNELS & HIGHLIGHTS:</span>
                <div className="channels-pill-wrap">
                  {card.channels.map((ch, i) => (
                    <span key={i} className="channel-pill-item">
                      {ch}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert(`Redirecting to ${card.title} (${card.handle})`); }}
                className="btn btn-secondary btn-full-width social-cta-btn"
              >
                <span>{card.cta}</span>
                <ArrowUpRight size={16} />
              </a>

            </div>
          ))}
        </div>

        {/* Bonus Fun Card: Spotify Late Night Study Playlist */}
        <div className="spotify-playlist-card glass-card">
          <div className="spotify-content">
            <div className="spotify-icon-badge">
              <Headphones size={28} className="text-emerald" />
            </div>
            <div className="spotify-info">
              <div className="spotify-tag">OFFICIAL ABESECian CURATED PLAYLIST</div>
              <h3 className="spotify-title">Salaah: 3 AM Hostel Coding & Exam Cramming Lo-Fi</h3>
              <p className="spotify-desc">
                Atmospheric synthwave and mellow beats handpicked by our Tech Wing to help you lock in and finish your DSA assignments before midnight.
              </p>
            </div>
          </div>

          <div className="spotify-actions">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => alert("Launching Salaah Late Night Study Beats on Spotify 🎧")}
            >
              <Music size={18} />
              <span>Listen on Spotify (1h 48m)</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

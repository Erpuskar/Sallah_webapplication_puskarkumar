import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Clock, 
  Headphones, 
  Share2, 
  Radio, 
  Sparkles, 
  ChevronRight, 
  ExternalLink,
  MessageCircle,
  Mic,
  Bookmark
} from 'lucide-react';

export default function Podcast({ onOpenBooking }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState('1x');
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38); // 38%
  const [activeEpisodeId, setActiveEpisodeId] = useState(12);

  // Simulated progress timer when playing
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const episodes = [
    {
      id: 12,
      number: "EPISODE 12",
      title: "Cracking 45 LPA Off-Campus & Escaping 1st-Year Coding Burnout",
      guest: "Aditya Sharma",
      guestRole: "ABES Alumni '24 • Software Engineer @ Atlassian",
      duration: "48 mins",
      date: "Oct 2026",
      tag: "FEATURED EPISODE",
      description: "Aditya sits down with 2nd-year host Arjun to discuss how he navigated 8:30 AM lectures, built real projects instead of tutorial hell, and landed 6 off-campus interview calls without paid referrals.",
      timestamps: [
        { time: "03:15", label: "Managing 75% attendance with DSA prep" },
        { time: "14:40", label: "The cold message template that got senior referrals" },
        { time: "26:50", label: "Why 1st-year CGPA is your biggest asset" },
        { time: "39:10", label: "Handling imposter syndrome in hostel rooms" }
      ]
    },
    {
      id: 11,
      number: "EPISODE 11",
      title: "The Smart India Hackathon Blueprint: How Freshers Won ₹1 Lakh",
      guest: "Team Zenith",
      guestRole: "1st & 2nd Year ABES SIH National Finalists",
      duration: "41 mins",
      date: "Sep 2026",
      tag: "HACKATHONS",
      description: "How 4 students who barely knew Git in first semester teamed up, designed an end-to-end healthcare prototype in 36 hours, and convinced national judges.",
      timestamps: [
        { time: "04:00", label: "Picking problem statements early" },
        { time: "18:20", label: "Figma pitching vs heavy backend" }
      ]
    },
    {
      id: 10,
      number: "EPISODE 10",
      title: "DSA vs Full-Stack Web: What Should You Actually Learn in Sem 1?",
      guest: "Kabir Singh & Tanya Sen",
      guestRole: "CP & AI Wing Leads • Salaah Community",
      duration: "36 mins",
      date: "Aug 2026",
      tag: "ROADMAP SPECIAL",
      description: "The age-old debate settled once and for all: should freshers grind LeetCode from week one, or build web apps? An honest, non-toxic roadmap for college engineers.",
      timestamps: [
        { time: "02:30", label: "When to start LeetCode" },
        { time: "15:45", label: "Building your first GitHub project" }
      ]
    },
    {
      id: 9,
      number: "EPISODE 09",
      title: "From 6.4 to 8.9 CGPA: The Honest Academic Comeback Story",
      guest: "Devansh Sharma",
      guestRole: "2nd Year ECE • Academic Lifeline Lead",
      duration: "32 mins",
      date: "Jul 2026",
      tag: "ACADEMICS",
      description: "A candid breakdown of how Devansh turned around his academic trajectory after a disastrous first mid-sem exam through strategic PYQ analysis and teacher cabin visits.",
      timestamps: [
        { time: "05:10", label: "The 3 weeks before end-sems strategy" },
        { time: "19:00", label: "Lab records and viva hacks" }
      ]
    }
  ];

  const currentEpisode = episodes.find(e => e.id === activeEpisodeId) || episodes[0];

  const toggleSpeed = () => {
    if (playbackSpeed === '1x') setPlaybackSpeed('1.25x');
    else if (playbackSpeed === '1.25x') setPlaybackSpeed('1.5x');
    else setPlaybackSpeed('1x');
  };

  return (
    <section className="section-spacing podcast-section" id="podcast">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Mic size={16} className="text-amber" />
            <span>THE OFFICIAL AUDIO SHOW</span>
          </div>
          <h2>
            The Salaah Podcast. <br />
            <span className="gradient-text-amber">Chai, Code & Campus Conversations.</span>
          </h2>
          <p>
            No sugarcoated corporate gyaan. Honest, unfiltered studio talks with alumni, 
            placement toppers, hackathon winners, and faculty navigators from <strong>ABES</strong> and beyond.
          </p>
        </div>

        {/* Main Audio Player Card */}
        <div className="podcast-player-card glass-card">
          
          <div className="player-grid">
            
            {/* Left Column: Visual Cover & Show Details */}
            <div className="player-cover-side">
              <div className="podcast-art-box">
                {/* Visual Header displaying the Official Logo */}
                <div className="podcast-logo-banner">
                  <img 
                    src="/images/salaah-official-logo.png" 
                    alt="Salaah - The Mentor Community" 
                    className="podcast-art-logo"
                  />
                </div>
                <div className="podcast-art-overlay">
                  <span className="podcast-pill">
                    <Radio size={13} className="pulse-dot-red" />
                    <span>AUDIO EXPERIENCE</span>
                  </span>
                  <div className="podcast-art-meta">
                    <span className="art-show-name">Salaah: The Mentor Community</span>
                    <span className="art-ep-num">{currentEpisode.number}</span>
                  </div>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div className="podcast-platforms-box">
                <span className="platforms-label">LISTEN ON YOUR FAVORITE APP:</span>
                <div className="platforms-row">
                  <button 
                    type="button" 
                    className="platform-chip spotify"
                    onClick={() => alert("Opening The Salaah Podcast on Spotify 🎧")}
                  >
                    <span>Spotify</span>
                    <ExternalLink size={12} />
                  </button>
                  <button 
                    type="button" 
                    className="platform-chip youtube"
                    onClick={() => alert("Opening The Salaah Podcast on YouTube 📺")}
                  >
                    <span>YouTube</span>
                    <ExternalLink size={12} />
                  </button>
                  <button 
                    type="button" 
                    className="platform-chip apple"
                    onClick={() => alert("Opening The Salaah Podcast on Apple Podcasts 🍎")}
                  >
                    <span>Apple Podcasts</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Audio Controls & Episode Highlights */}
            <div className="player-controls-side">
              
              <div className="player-ep-header">
                <span className="badge-chip pulse-amber">{currentEpisode.tag}</span>
                <span className="ep-duration-meta">
                  <Clock size={14} />
                  <span>{currentEpisode.duration} • {currentEpisode.date}</span>
                </span>
              </div>

              <h3 className="player-ep-title">{currentEpisode.title}</h3>

              <div className="player-guest-card">
                <div className="guest-badge-circle">
                  <Mic size={18} className="text-amber" />
                </div>
                <div>
                  <h4 className="guest-name">{currentEpisode.guest}</h4>
                  <p className="guest-role">{currentEpisode.guestRole}</p>
                </div>
              </div>

              <p className="player-ep-desc">{currentEpisode.description}</p>

              {/* Interactive Audio Wave & Scrubber */}
              <div className="audio-wave-container">
                <div className="wave-bars-row">
                  {[40, 65, 80, 50, 95, 30, 85, 60, 45, 90, 75, 40, 80, 65, 90, 55, 35, 70, 85, 45, 60, 95, 40, 75, 90, 50, 65, 80, 45, 90].map((h, i) => (
                    <span 
                      key={i} 
                      className={`wave-bar ${isPlaying ? 'animated' : ''}`}
                      style={{ 
                        height: `${h}%`,
                        animationDelay: `${(i % 5) * 0.15}s`
                      }}
                    />
                  ))}
                </div>

                <div className="audio-scrubber-wrap">
                  <div className="audio-scrubber-track">
                    <div 
                      className="audio-scrubber-fill" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="audio-timestamps-row">
                    <span>{Math.floor((progress / 100) * 48)}:15</span>
                    <span>{currentEpisode.duration}</span>
                  </div>
                </div>
              </div>

              {/* Playback Button Bar */}
              <div className="player-button-bar">
                <div className="playback-primary-controls">
                  <button 
                    type="button" 
                    className="btn btn-primary play-toggle-btn"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? "Pause Episode" : "Play Episode"}
                  >
                    {isPlaying ? <Pause size={22} /> : <Play size={22} />}
                    <span>{isPlaying ? 'Pause Episode' : 'Listen Now'}</span>
                  </button>

                  <button 
                    type="button" 
                    className="speed-btn"
                    onClick={toggleSpeed}
                    title="Change Playback Speed"
                  >
                    <span>{playbackSpeed}</span>
                  </button>

                  <button 
                    type="button" 
                    className="mute-btn"
                    onClick={() => setIsMuted(!isMuted)}
                    title={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>
                </div>

                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm"
                  onClick={() => onOpenBooking(`Suggesting guest for Salaah Podcast`)}
                >
                  <MessageCircle size={15} />
                  <span>Suggest a Guest</span>
                </button>
              </div>

              {/* Timestamp Chapters */}
              <div className="podcast-timestamps-box">
                <span className="timestamps-title">EPISODE CHAPTERS & HIGHLIGHTS:</span>
                <div className="timestamps-list">
                  {currentEpisode.timestamps.map((ts, idx) => (
                    <div key={idx} className="timestamp-item">
                      <span className="ts-time">{ts.time}</span>
                      <span className="ts-label">{ts.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Other Episodes Archive List */}
        <div className="other-episodes-wrap">
          <div className="episodes-header-row">
            <h4>More Recent Episodes</h4>
            <span className="episodes-count">4 Episodes Recorded</span>
          </div>

          <div className="episodes-cards-grid">
            {episodes.map((ep) => {
              const isCurrent = ep.id === activeEpisodeId;
              return (
                <div 
                  key={ep.id}
                  className={`episode-card glass-card ${isCurrent ? 'active-ep-card' : ''}`}
                  onClick={() => {
                    setActiveEpisodeId(ep.id);
                    setIsPlaying(true);
                  }}
                >
                  <div className="ep-card-top">
                    <span className="ep-badge">{ep.number}</span>
                    <span className="ep-duration">
                      <Clock size={13} />
                      <span>{ep.duration}</span>
                    </span>
                  </div>

                  <h4 className="ep-card-title">{ep.title}</h4>
                  <p className="ep-card-guest">Feat. {ep.guest} ({ep.guestRole.split('•')[0]})</p>

                  <div className="ep-card-footer">
                    <span className="listen-action-text">
                      {isCurrent && isPlaying ? "Currently Playing 🎵" : "Click to Play Episode"}
                    </span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

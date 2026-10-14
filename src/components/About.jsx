import React from 'react';
import { 
  Heart, 
  Terminal, 
  Coffee, 
  Award, 
  Users, 
  Unlock, 
  BookOpen, 
  Compass, 
  MessageCircle,
  Sparkles,
  Mic
} from 'lucide-react';

export default function About({ onOpenBooking }) {
  const pillars = [
    {
      icon: <Unlock className="pillar-icon text-amber" size={24} />,
      title: "Radical Zero-Gatekeeping",
      description: "Everything we learned — from cold email templates to internal lab viva question banks at ABES — is openly shared on our club GitHub & Notion.",
      badge: "Open Source"
    },
    {
      icon: <Coffee className="pillar-icon text-cyan" size={24} />,
      title: "Chai-Table Conversations",
      description: "Ditch the intimidating classroom hierarchy. We solve code bugs and college dilemmas where real students hang out: Gauri Cafe.",
      badge: "No Sir/Ma'am Culture"
    },
    {
      icon: <Mic className="pillar-icon text-amber" size={24} />,
      title: "The Salaah Podcast",
      description: "Recorded in hostel rooms and local cafes — candid conversations with placed seniors, hackathon winners, and teachers on real career paths.",
      badge: "Audio & Video"
    },
    {
      icon: <Compass className="pillar-icon text-emerald" size={24} />,
      title: "The Honest Career Reality Check",
      description: "No false promises or edtech hype. Unfiltered guidance on off-campus jobs, tech vs core engineering, and surviving university exams.",
      badge: "Reality Tested"
    }
  ];

  return (
    <section className="section-spacing about-section" id="about">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={16} className="text-amber" />
            <span>WHO WE ARE & WHY WE BUILT THIS</span>
          </div>
          <h2>
            Born in an ABES Hostel Room at 2 AM, <br />
            <span className="gradient-text-amber">Built for Every Fresher</span> in Campus.
          </h2>
          <p>
            <strong>Salaah - The Mentor Community</strong> (inspired by the Devanagari <em>“॥ सलाह ॥”</em>, meaning sincere, heartfelt guidance) 
            is a student-led mentorship society started by ABESECians who remember what it's like to be utterly confused.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          
          {/* Bento Card 1: The Origin Story */}
          <div className="bento-card bento-story glass-card">
            <div className="story-tag-row">
              <span className="badge-chip pulse-amber">
                <Coffee size={14} />
                <span>ABES HOSTEL CHRONICLES</span>
              </span>
              <span className="story-date">Est. Oct 2024</span>
            </div>

            <h3 className="story-title">
              "We survived 1st year so you don't have to suffer through the same trial-and-error."
            </h3>

            <p className="story-text">
              During our first year at ABES, we spent countless nights agonizing over vague syllabi, wondering if we should study Web Dev or DSA first, 
              and hesitating to knock on senior dorm doors. One night over instant Maggi noodles, four of us made a pact:
              <em> as proud ABESECians, we will build the peer guidance system our college always needed.</em>
            </p>

            <div className="story-stats-grid">
              <div className="story-stat">
                <span className="stat-val">365+</span>
                <span className="stat-label">Days as Mentors</span>
              </div>
              <div className="story-stat">
                <span className="stat-val">500+</span>
                <span className="stat-label">Hours of 1:1 Chats</span>
              </div>
              <div className="story-stat">
                <span className="stat-val">0₹</span>
                <span className="stat-label">Charge Ever</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2: The Convener Quote */}
          <div className="bento-card bento-lead glass-card">
            <div className="lead-header">
              <img 
                src="/images/mentor-arjun.jpg" 
                alt="Arjun Mehta, ABESECian" 
                className="lead-avatar" 
              />
              <div>
                <h4 className="lead-name">Arjun Mehta</h4>
                <p className="lead-role">ABESECian (CSE) • Community Co-Founder & Podcast Host</p>
              </div>
            </div>
            <p className="lead-quote">
              "The biggest mistake freshers make is isolating themselves because they feel everyone else has it figured out. 
              Spoiler alert: nobody has it figured out. Come sit with us, drink chai, listen to our podcast, and let's build together."
            </p>
            <div className="lead-badges">
              <span className="mini-badge">⚡ Full-Stack Developer</span>
              <span className="mini-badge">🏆 SIH '25 Regional Finalist</span>
              <span className="mini-badge">🎙️ Salaah Podcast Host</span>
            </div>
          </div>

        </div>

        {/* The 4 Pillars */}
        <div className="pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="pillar-card glass-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <span className="pillar-badge">{pillar.badge}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Interactive Banner inside About */}
        <div className="about-join-banner glass-card">
          <div className="banner-content">
            <div className="banner-text">
              <h3>Have a specific doubt about your branch or semester at ABES?</h3>
              <p>You don't need an official appointment or formal email. Drop your question in 2 clicks.</p>
            </div>
            <div className="banner-actions">
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenBooking(null)}
              >
                <MessageCircle size={18} />
                <span>Ask a Senior Now</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

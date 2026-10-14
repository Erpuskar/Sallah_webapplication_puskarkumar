import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Zap, 
  Calendar, 
  Coffee, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare,
  Award,
  ArrowRight
} from 'lucide-react';

export default function MentorMatchmaker({ onOpenBooking }) {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const domains = [
    'All',
    'Web & App Dev',
    'AI & Data Science',
    'Competitive Coding',
    'UI/UX Design',
    'Academics & CGPA'
  ];

  const mentors = [
    {
      id: 1,
      name: 'Arjun Mehta',
      year: '2nd Year CSE',
      domain: 'Web & App Dev',
      avatar: '/images/mentor-arjun.jpg',
      superpower: 'Can debug weird React CORS errors in 3 minutes & explains full-stack architectures like a breeze.',
      hangout: 'Gauri Cafe Table 4 / Hostel Block 4',
      availability: 'Mon, Wed, Fri after 4:30 PM',
      tags: ['React', 'FastAPI', 'SIH Finalist', 'Git & Docker', 'Open Source'],
      experienceBadge: '120+ Chats Done',
      favoriteSnack: 'Adrak Chai + Bun Maska ☕'
    },
    {
      id: 2,
      name: 'Tanya Sen',
      year: '3rd Year AI & DS',
      domain: 'AI & Data Science',
      avatar: '/images/mentor-tanya.jpg',
      superpower: 'Cracked FinTech off-campus internship with 0 paid referrals; master of ATS resumes & research papers.',
      hangout: 'Central Library 2nd Floor Cubicles',
      availability: 'Tue, Thu, Sat evenings & Discord',
      tags: ['PyTorch', 'ATS Resumes', 'Off-Campus Hiring', 'Kaggle', 'Research'],
      experienceBadge: 'Senior Advisor',
      favoriteSnack: 'Cold Coffee with Ice Cream 🥤'
    },
    {
      id: 3,
      name: 'Kabir Singh',
      year: '2nd Year CSE',
      domain: 'Competitive Coding',
      avatar: '/images/mentor-kabir.jpg',
      superpower: 'Codeforces Expert (1620+); can break down complex DP and Graph problems into simple whiteboard diagrams.',
      hangout: 'Computer Lab 3 / Mech Canteen Lawn',
      availability: 'Everyday post 8:00 PM (Hostel/Meet)',
      tags: ['C++', 'STL Master', 'LeetCode 500+', 'Codeforces', 'DSA Roadmaps'],
      experienceBadge: '85+ Students Mentored',
      favoriteSnack: 'Double Egg Maggi 🍜'
    },
    {
      id: 4,
      name: 'Ananya Patel',
      year: '2nd Year Design & CSE',
      domain: 'UI/UX Design',
      avatar: '/images/mentor-ananya.jpg',
      superpower: 'Designs stunning hackathon landing pages in hours; critiques your UI portfolios with actionable design tweaks.',
      hangout: 'Design Studio & Campus Amphitheatre',
      availability: 'Wed, Sat afternoons',
      tags: ['Figma Pro', 'Design Systems', 'Pitch Decks', 'Spline 3D', 'Micro-Interactions'],
      experienceBadge: 'Design Wing Lead',
      favoriteSnack: 'Hazelnut Latte ☕'
    },
    {
      id: 5,
      name: 'Devansh Sharma',
      year: '2nd Year ECE',
      domain: 'Academics & CGPA',
      avatar: '/images/mentor-arjun.jpg',
      superpower: 'Holds a 9.68 CGPA while running 2 clubs; master of previous year exam question predictions & lab viva tactics.',
      hangout: 'ECE Department Study Lounge',
      availability: 'Weekdays 1:00 PM – 2:30 PM',
      tags: ['9.6+ CGPA', 'Engineering Math', 'PYQ Predictor', 'Lab Viva', 'Time Management'],
      experienceBadge: 'Exam Lifeline Lead',
      favoriteSnack: 'Masala Samosa + Chai 🥟'
    },
    {
      id: 6,
      name: 'Sneha Kulkarni',
      year: '2nd Year IT',
      domain: 'Web & App Dev',
      avatar: '/images/mentor-tanya.jpg',
      superpower: 'Won 3 collegiate hackathons in 1st year itself; specializes in building MVPs that judges love under 24 hours.',
      hangout: 'Hostel 2 Common Room & Discord Voice',
      availability: 'Fri & Sun 5:00 PM onwards',
      tags: ['Next.js', 'Firebase', 'Hackathon Pitching', 'Team Synergy'],
      experienceBadge: 'Hackathon Coach',
      favoriteSnack: 'Chocolate Milkshake 🍫'
    }
  ];

  // Filtering logic
  const filteredMentors = mentors.filter(mentor => {
    const matchesDomain = selectedDomain === 'All' || mentor.domain === selectedDomain;
    const matchesSearch = 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.superpower.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <section className="section-spacing matchmaker-section" id="matchmaker">
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Zap size={16} />
            <span>THE 1:1 PEER MATCHMAKER</span>
          </div>
          <h2>
            Find Your Senior Mentor. <br />
            <span className="gradient-text">Book a 20-Minute Chai Chat.</span>
          </h2>
          <p>
            No formal formalities, no awkward introductions. Filter by your branch, passion, or current academic panic, 
            and meet up at the campus canteen or hop on Google Meet.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="matchmaker-controls glass-card">
          
          {/* Domain Pills */}
          <div className="domain-filters-row">
            <span className="filter-label">
              <Filter size={15} />
              <span>DOMAINS:</span>
            </span>
            <div className="domain-pills-wrap">
              {domains.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  className={`domain-pill-btn ${selectedDomain === domain ? 'active' : ''}`}
                  onClick={() => setSelectedDomain(domain)}
                >
                  {domain}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="mentor-search-wrap">
            <Search size={18} className="search-input-icon" />
            <input 
              type="text"
              placeholder="Search by mentor name, topic (e.g. React, C++, 9.6 CGPA, SIH)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mentor-search-input"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Mentor Cards Grid */}
        <div className="mentors-grid">
          {filteredMentors.map((mentor) => (
            <div key={mentor.id} className="mentor-card glass-card">
              
              {/* Card Top Row */}
              <div className="mentor-card-top">
                <div className="mentor-avatar-wrap">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name} 
                    className="mentor-avatar-img"
                  />
                  <span className="online-beacon" title="Available this week"></span>
                </div>
                
                <div className="mentor-title-block">
                  <div className="mentor-name-row">
                    <h3 className="mentor-name">{mentor.name}</h3>
                  </div>
                  <div className="mentor-submeta">
                    <span className="mentor-year-chip">{mentor.year}</span>
                    <span className="mentor-exp-chip">{mentor.experienceBadge}</span>
                  </div>
                </div>
              </div>

              {/* Superpower Callout */}
              <div className="mentor-superpower-box">
                <div className="superpower-label">
                  <Zap size={14} className="text-amber" />
                  <span>SENIOR SUPERPOWER:</span>
                </div>
                <p className="superpower-text">"{mentor.superpower}"</p>
              </div>

              {/* Tags */}
              <div className="mentor-tags-row">
                {mentor.tags.map((tag, i) => (
                  <span key={i} className="mentor-tag-item">#{tag}</span>
                ))}
              </div>

              {/* Campus Hangout & Availability */}
              <div className="mentor-meta-details">
                <div className="meta-detail-row">
                  <MapPin size={14} className="text-cyan" />
                  <span><strong>Hangout:</strong> {mentor.hangout}</span>
                </div>
                <div className="meta-detail-row">
                  <Calendar size={14} className="text-emerald" />
                  <span><strong>Availability:</strong> {mentor.availability}</span>
                </div>
                <div className="meta-detail-row">
                  <Coffee size={14} className="text-amber" />
                  <span><strong>Chai Choice:</strong> {mentor.favoriteSnack}</span>
                </div>
              </div>

              {/* Card CTA */}
              <button 
                type="button"
                className="btn btn-primary btn-full-width mentor-book-btn"
                onClick={() => onOpenBooking(`Session with ${mentor.name} (${mentor.year})`)}
              >
                <Coffee size={16} />
                <span>Book 20-min Chat with {mentor.name.split(' ')[0]}</span>
              </button>

            </div>
          ))}
        </div>

        {/* Empty State if search finds nothing */}
        {filteredMentors.length === 0 && (
          <div className="empty-mentors-state glass-card">
            <Sparkles size={36} className="text-amber" />
            <h3>No specific mentor found for "{searchQuery}"</h3>
            <p>Don't worry! We have 18+ active seniors across all branches. Drop an open request and we'll match you manually.</p>
            <button 
              type="button"
              className="btn btn-primary"
              onClick={() => onOpenBooking(`General Request for: ${searchQuery}`)}
            >
              Request Custom Senior Match
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

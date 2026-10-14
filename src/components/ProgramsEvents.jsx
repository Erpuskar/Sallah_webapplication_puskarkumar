import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Coffee, 
  Sparkles, 
  Check, 
  Share2, 
  Flame,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProgramsEvents({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [rsvpedEvents, setRsvpedEvents] = useState({});

  const handleRSVP = (eventId, eventTitle) => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });

    setRsvpedEvents(prev => ({
      ...prev,
      [eventId]: !prev[eventId]
    }));
  };

  const eventsData = [
    {
      id: 'event-1',
      category: 'upcoming',
      title: 'Freshers 101: The Unofficial College Handbook',
      tag: 'FLAGSHIP BOOTCAMP',
      date: 'Saturday, Nov 1, 2026',
      time: '5:30 PM – 8:00 PM IST',
      venue: 'Main Auditorium 2 & Live Stream',
      attendees: 380,
      description: 'Everything the college administration never tells you. Surviving the 75% attendance rule, which clubs are actually worth your time, branch change roadmaps, and hacking your first semester GPA.',
      perks: ['Illustrated Handbook PDF', 'Free Gauri Cafe Chai & Samosa', 'Direct Q&A with 4th yr placed seniors'],
      featured: true
    },
    {
      id: 'event-2',
      category: 'upcoming',
      title: 'Chai & Code: Git, GitHub & First Pull Request',
      tag: 'HANDS-ON WORKSHOP',
      date: 'Sunday, Nov 9, 2026',
      time: '4:00 PM – 7:00 PM IST',
      venue: 'Gauri Cafe Green Lawn',
      attendees: 120,
      description: 'Bring your laptop! We will sit in circles, install Git together, write your first markdown README, and make your first open-source PR with 1:1 senior troubleshooting.',
      perks: ['Stickers for your laptop', 'GitHub Pro free perks setup', 'Adrak Chai on the club'],
      featured: false
    },
    {
      id: 'event-3',
      category: 'upcoming',
      title: 'The Great Resume Roast & Toast Night',
      tag: 'DISCORD LIVE',
      date: 'Wednesday, Nov 18, 2026',
      time: '9:30 PM – 11:30 PM IST',
      venue: 'Salaah Discord Stage Room',
      attendees: 490,
      description: 'Placed 3rd & 4th years critique anonymous resumes live on stream. Say goodbye to Canva multi-column templates and hello to high-yield ATS LaTeX formats.',
      perks: ['Overleaf LaTeX Templates', 'Bullet points formula guide', 'Top 5 resumes get direct referral chance'],
      featured: false
    },
    {
      id: 'event-4',
      category: 'ongoing',
      title: 'Peer DSA Sprint: The Salaah 75 Series',
      tag: 'WEEKLY SPRINT',
      date: 'Every Tuesday & Thursday',
      time: '8:30 PM – 9:45 PM IST',
      venue: 'Google Meet & Codeforces Group',
      attendees: 210,
      description: 'Structured 12-week roadmap solving 2 curated DSA problems daily. Zero toxic competition; just shared problem-solving intuition and dry runs.',
      perks: ['Handwritten dry-run sheets', 'Peer accountability squads', 'Mock coding assessments'],
      featured: false
    },
    {
      id: 'event-5',
      category: 'ongoing',
      title: 'Fresher Shadow Program (Cohort 3)',
      tag: 'CORE CLUB MENTORSHIP',
      date: 'Ongoing this Semester',
      time: 'Flexible Peer Hours',
      venue: 'Club Labs & Canteen',
      attendees: 45,
      description: 'Selected 1st-year students shadow 2nd-year leads in Web Dev, UI/UX, Event Management, and Academic vault curation. Fast-track to club core leadership.',
      perks: ['Leadership certificate', '1:1 dedicated senior mentor', 'Hands-on production projects'],
      featured: false
    },
    {
      id: 'event-6',
      category: 'past',
      title: 'SalaahCon 2025: 36-Hour Campus Hackathon',
      tag: 'PAST HIGHLIGHT',
      date: 'Concluded Sep 2025',
      time: '36 Hours Non-Stop',
      venue: 'Campus Innovation Center',
      attendees: 640,
      description: 'Over 160 teams competed! Every 1st year team was matched with a senior mentor to guide architecture and pitch design. 14 teams shipped working MVPs to production.',
      perks: ['₹75,000 Total Prize Pool', '3 Direct Startup Offers', 'Sponsor Swag & Pizza'],
      featured: true
    }
  ];

  const filteredEvents = eventsData.filter(e => e.category === activeTab);

  return (
    <section className="section-spacing programs-section" id="programs">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Calendar size={16} />
            <span>CAMPUS HAPPENINGS & SESSIONS</span>
          </div>
          <h2>
            Programs Built for Real Student Needs. <br />
            <span className="gradient-text">Zero Boring Slides, 100% Practical.</span>
          </h2>
          <p>
            From our legendary <em>Freshers 101</em> orientation to late-night resume roasts and weekly 
            <em> Chai & Code</em> sprints — check out what is happening around campus.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="programs-tabs-nav">
          <button
            type="button"
            className={`program-tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <Flame size={16} className="text-amber" />
            <span>Upcoming Sessions ({eventsData.filter(e => e.category === 'upcoming').length})</span>
          </button>

          <button
            type="button"
            className={`program-tab-btn ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            <Clock size={16} className="text-cyan" />
            <span>Weekly Sprints ({eventsData.filter(e => e.category === 'ongoing').length})</span>
          </button>

          <button
            type="button"
            className={`program-tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <Sparkles size={16} className="text-purple" />
            <span>Past Campus Highlights</span>
          </button>
        </div>

        {/* Events Cards Grid */}
        <div className="events-grid">
          {filteredEvents.map((event) => {
            const isRSVPed = !!rsvpedEvents[event.id];

            return (
              <div 
                key={event.id} 
                className={`event-card glass-card ${event.featured ? 'featured-border' : ''}`}
              >
                {/* Top strip */}
                <div className="event-top-bar">
                  <span className="badge-chip pulse-cyan event-category-pill">
                    <Sparkles size={12} />
                    <span>{event.tag}</span>
                  </span>

                  <div className="event-attendees">
                    <Users size={14} className="text-muted" />
                    <span>{event.attendees + (isRSVPed ? 1 : 0)} students registered</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="event-title">{event.title}</h3>

                {/* Timing & Venue */}
                <div className="event-meta-box">
                  <div className="meta-row">
                    <Calendar size={15} className="text-cyan" />
                    <span><strong>Date:</strong> {event.date}</span>
                  </div>
                  <div className="meta-row">
                    <Clock size={15} className="text-amber" />
                    <span><strong>Time:</strong> {event.time}</span>
                  </div>
                  <div className="meta-row">
                    <MapPin size={15} className="text-emerald" />
                    <span><strong>Venue:</strong> {event.venue}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="event-description">{event.description}</p>

                {/* Perks Checklist */}
                <div className="event-perks-box">
                  <span className="perks-heading">WHAT YOU GET:</span>
                  <div className="perks-tags">
                    {event.perks.map((perk, i) => (
                      <span key={i} className="perk-tag">
                        <Check size={12} className="text-emerald" />
                        <span>{perk}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Event Footer CTA */}
                <div className="event-card-footer">
                  {event.category === 'past' ? (
                    <button 
                      type="button" 
                      className="btn btn-secondary btn-full-width"
                      onClick={() => onOpenBooking(`Interested in next edition of ${event.title}`)}
                    >
                      <span>Get Notified for Next Edition</span>
                      <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button 
                      type="button"
                      className={`btn ${isRSVPed ? 'btn-secondary rsvped' : 'btn-primary'} btn-full-width`}
                      onClick={() => handleRSVP(event.id, event.title)}
                    >
                      {isRSVPed ? (
                        <>
                          <Check size={18} className="text-emerald" />
                          <span>RSVP Confirmed! See you there 🎉</span>
                        </>
                      ) : (
                        <>
                          <Coffee size={18} />
                          <span>RSVP For Free (Includes Chai Voucher)</span>
                        </>
                      )}
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

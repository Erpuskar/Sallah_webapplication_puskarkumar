import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Coffee 
} from 'lucide-react';

export default function Testimonials({ onOpenBooking }) {
  const [filter, setFilter] = useState('All');

  const testimonials = [
    {
      id: 1,
      category: 'Academics',
      name: 'Sneha Rao',
      batch: '1st Year CSE (Batch \'28)',
      avatar: '/images/mentor-tanya.jpg',
      quote: "I had never written a single line of C++ before college. In our 2nd lab, when the prof gave us a recursive pointers task, I panicked. Arjun sat with me at Gauri Cafe and drew memory stacks on a tissue paper. Scored an A+ in end-sem lab!",
      highlight: "Scored A+ in End-Sem Lab",
      mentorHelped: "Arjun Mehta (Tech Wing)"
    },
    {
      id: 2,
      category: 'Hackathons',
      name: 'Varun Joshi & Team',
      batch: '1st Year ECE (Batch \'28)',
      avatar: '/images/mentor-kabir.jpg',
      quote: "People told us 1st-year teams never win Smart India Hackathon. The Salaah seniors tore apart our pitch deck at 2 AM, taught us how to tell a story instead of just listing tech stacks. We ended up qualifying for the national finals!",
      highlight: "SIH National Finalists",
      mentorHelped: "Tanya & Kabir (Core Leads)"
    },
    {
      id: 3,
      category: 'Academics',
      name: 'Rohan Deshmukh',
      batch: '2nd Year Mech (Batch \'27)',
      avatar: '/images/mentor-arjun.jpg',
      quote: "The Academic Wing's handwritten notes vault is genuine gold. The step-by-step derivations for Engineering Mechanics saved at least 300 students in our batch from getting backlogs. You guys are heroes.",
      highlight: "Saved from Backlogs",
      mentorHelped: "Devansh (Exam Lifeline)"
    },
    {
      id: 4,
      category: 'Campus Life',
      name: 'Priya Nambiar',
      batch: '1st Year AI/DS (Batch \'28)',
      avatar: '/images/mentor-ananya.jpg',
      quote: "I was extremely shy and intimidated by seniors during the first month of college. Walking into a Salaah Chai & Code session changed everything. No senior attitude, no hierarchy — just warm chai and genuine mentorship.",
      highlight: "Found my Campus Tribe",
      mentorHelped: "Ananya Patel (Design Wing)"
    },
    {
      id: 5,
      category: 'Hackathons',
      name: 'Aditya Kulkarni',
      batch: '1st Year IT (Batch \'28)',
      avatar: '/images/mentor-kabir.jpg',
      quote: "Kabir taught me how to actually understand Graph BFS/DFS instead of memorizing code templates. Now I can solve LeetCode medium questions without dread. Best peer guidance ever.",
      highlight: "DSA Intuition Unlocked",
      mentorHelped: "Kabir Singh (CP Wing)"
    },
    {
      id: 6,
      category: 'Campus Life',
      name: 'Meera Sengupta',
      batch: '1st Year Biotech (Batch \'28)',
      avatar: '/images/mentor-tanya.jpg',
      quote: "I wanted to switch into computational biology and had zero roadmap. Tanya mapped out my next 6 months of courses, GitHub projects, and open-source repos. That 20-minute chat gave me so much clarity.",
      highlight: "Interdisciplinary Roadmap",
      mentorHelped: "Tanya Sen (AI Advisor)"
    }
  ];

  const filtered = filter === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === filter);

  return (
    <section className="section-spacing testimonials-section" id="testimonials">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Heart size={16} className="text-rose" />
            <span>CAMPUS LOVE & CONFESSIONS</span>
          </div>
          <h2>
            The Unfiltered Wall of Love. <br />
            <span className="gradient-text">What Freshers Actually Say</span> About Us.
          </h2>
          <p>
            Real feedback from 1st and 2nd years across hostels, libraries, and canteens. 
            No sponsored reviews, just honest student confessions.
          </p>
        </div>

        {/* Global Rating Card */}
        <div className="rating-summary-strip glass-card">
          <div className="rating-box">
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="star-filled text-amber" />
              ))}
            </div>
            <span className="rating-score">4.94 / 5.0</span>
            <span className="rating-count">Based on 420+ anonymous feedback forms</span>
          </div>
          <div className="rating-stat-divider"></div>
          <div className="rating-metric">
            <span className="metric-val">100%</span>
            <span className="metric-sub">Freshers feel comfortable asking doubts</span>
          </div>
          <div className="rating-stat-divider"></div>
          <div className="rating-metric">
            <span className="metric-val">0₹</span>
            <span className="metric-sub">Charged for any session or drive link</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="testimonials-filter-row">
          {['All', 'Academics', 'Hackathons', 'Campus Life'].map((cat) => (
            <button
              key={cat}
              type="button"
              className={`testimonial-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="testimonials-grid">
          {filtered.map((item) => (
            <div key={item.id} className="testimonial-card glass-card">
              
              <div className="testimonial-header">
                <Quote size={24} className="quote-icon text-cyan" />
                <span className="category-chip">{item.category}</span>
              </div>

              <p className="testimonial-quote">
                "{item.quote}"
              </p>

              <div className="testimonial-highlight-pill">
                <Sparkles size={13} className="text-amber" />
                <span>{item.highlight}</span>
              </div>

              <div className="testimonial-footer">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="testimonial-avatar" 
                />
                <div className="testimonial-author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <span className="author-batch">{item.batch}</span>
                  <span className="author-mentor-meta">Guided by: {item.mentorHelped}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="testimonial-bottom-cta">
          <p>Want to share your Salaah experience or get guidance this week?</p>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => onOpenBooking('Joining as Mentee / Sharing Story')}
          >
            <Coffee size={18} />
            <span>Book Your First 1:1 Chat</span>
          </button>
        </div>

      </div>
    </section>
  );
}

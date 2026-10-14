import React, { useState } from 'react';
import { 
  Code2, 
  Binary, 
  Palette, 
  GraduationCap, 
  Briefcase, 
  PartyPopper,
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  BookOpen,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function Departments({ onOpenBooking }) {
  const departments = [
    {
      id: 'tech',
      name: 'Tech & Dev Wing',
      tagline: 'From Hello World to Production Deployments',
      icon: <Code2 size={24} className="dept-icon-glow text-cyan" />,
      colorClass: 'cyan',
      lead: 'Arjun Mehta & Dev Team',
      leadAvatar: '/images/mentor-arjun.jpg',
      leadYear: '2nd Year CSE',
      description: 'We demystify modern full-stack web, app development, and open-source contributions. 1st years get paired with 2nd years to ship live apps rather than just watching 40-hour tutorial playlists.',
      skills: ['React & Vite', 'Node.js & FastAPI', 'Python & PyTorch', 'Git & GitHub', 'PostgreSQL & Docker'],
      flagshipProject: 'CampusSync — Real-time college timetable & hostel mess tracker built by club members.',
      activeInitiatives: [
        'Weekly weekend code-alongs in campus cafe',
        'Beginner Git & GitHub hands-on onboarding',
        'SIH & National Hackathon squad matchmaking'
      ]
    },
    {
      id: 'cp',
      name: 'Competitive Programming',
      tagline: 'Crack DSA & Online Assessments Stress-Free',
      icon: <Binary size={24} className="dept-icon-glow text-purple" />,
      colorClass: 'violet',
      lead: 'Kabir Singh',
      leadAvatar: '/images/mentor-kabir.jpg',
      leadYear: '2nd Year CSE (Codeforces 1620+)',
      description: 'DSA sounds scary when you start C++ in 1st year. We break down arrays, recursion, and dynamic programming with relatable intuition without the toxic contest grind.',
      skills: ['C++ & STL', 'Data Structures', 'Graph Algorithms', 'Time Complexity Math', 'LeetCode Sprints'],
      flagshipProject: 'Salaah 75 — Curated college OA & mid-sem question bank with video breakdowns.',
      activeInitiatives: [
        'Bi-weekly Codeforces Div 3 post-contest upsolving',
        'DSA peer study circles by difficulty level',
        '1:1 mock interview code walk-throughs'
      ]
    },
    {
      id: 'design',
      name: 'UI/UX & Creative Wing',
      tagline: 'Making Products that Look & Feel Premium',
      icon: <Palette size={24} className="dept-icon-glow text-rose" />,
      colorClass: 'rose',
      lead: 'Ananya Patel',
      leadAvatar: '/images/mentor-ananya.jpg',
      leadYear: '2nd Year Design & CSE',
      description: 'Great engineering is useless if users hate using it. We teach wireframing, modern design systems, 3D assets, Figma prototypes, and compelling visual storytelling for hackathons.',
      skills: ['Figma Design Systems', 'UI/UX Wireframing', 'Spline 3D', 'Motion Design', 'Pitch Deck Storytelling'],
      flagshipProject: 'The Fresher Survival Handbook — 40-page illustrated campus guide designed entirely in Figma.',
      activeInitiatives: [
        'Figma 101 workshop for absolute beginners',
        'Hackathon Pitch Deck Clinic (reviewing UI & slides)',
        'Campus branding & sticker design drops'
      ]
    },
    {
      id: 'academic',
      name: 'Academic & Exam Wing',
      tagline: 'The CGPA Lifeline Before End-Sems',
      icon: <GraduationCap size={24} className="dept-icon-glow text-amber" />,
      colorClass: 'amber',
      lead: 'Devansh & Tanya',
      leadAvatar: '/images/mentor-tanya.jpg',
      leadYear: '2nd Year ECE & 3rd Year AI (9.4+ CGPA)',
      description: 'You cannot get an internship if your CGPA drops below college criteria. We maintain the definitive Google Drive vault of handwritten notes, PYQs with answers, and lab viva crash sheets.',
      skills: ['Engineering Math Mastery', 'Lab Manual Solutions', 'PYQ Trends Analysis', 'Professor Grading Insights', 'Notion Roadmaps'],
      flagshipProject: 'End-Sem 2-Page Cheat Sheets — Condensed summaries of entire syllabi before exam night.',
      activeInitiatives: [
        'One-night-before-mid-sem live doubt clearance room',
        'Verified faculty question archives from 2019-2025',
        'Lab record formatting assistance'
      ]
    },
    {
      id: 'careers',
      name: 'Career & Placements',
      tagline: 'ATS Resumes, Off-Campus Paths & Cold Outreach',
      icon: <Briefcase size={24} className="dept-icon-glow text-emerald" />,
      colorClass: 'emerald',
      lead: 'Tanya Sen & Placed Seniors',
      leadAvatar: '/images/mentor-tanya.jpg',
      leadYear: '3rd Year AI (Upcoming Intern @ FinTech)',
      description: 'Don’t wait till 4th year to figure out corporate hiring. We connect freshers with placed 3rd and 4th year alumni for real resume roasting, LinkedIn audits, and off-campus referral strategies.',
      skills: ['LaTeX Resume Building', 'LinkedIn Networking', 'Cold Emailing Founders', 'Behavioral HR Rounds', 'System Design Basics'],
      flagshipProject: 'The Senior Placement Transcripts — Real interview questions asked by visiting companies.',
      activeInitiatives: [
        'Monthly Resume Roasting Livestream (friendly critiques)',
        'Direct referral connects with alumni working at top tech firms',
        'Internship roadmap sessions for 2nd & 3rd years'
      ]
    },
    {
      id: 'community',
      name: 'Events & Culture Wing',
      tagline: 'Campus Vibes, HackNights & Gaming',
      icon: <PartyPopper size={24} className="dept-icon-glow text-cyan" />,
      colorClass: 'cyan',
      lead: 'Rahul & Cultural Core',
      leadAvatar: '/images/mentor-arjun.jpg',
      leadYear: '2nd Year Mech & CSE',
      description: 'College is more than just grades and code. Our events team organizes late-night coding meetups, chai sessions, LAN tournaments, and our annual flagship festival: SalaahCon.',
      skills: ['Event Production', 'Hostel Outreach', 'Sponsorship Management', 'Discord Server Ops', 'Campus Photography'],
      flagshipProject: 'Chai-pe-Charcha — Weekly open coffee table discussions on life, tech & college hacks.',
      activeInitiatives: [
        'Bi-weekly weekend campus game nights (Valorant & Chess)',
        'SalaahCon 2026 Annual Peer Hackathon & Meetup',
        'Campus secret food map curation'
      ]
    }
  ];

  const [activeDeptId, setActiveDeptId] = useState('tech');
  const activeDept = departments.find(d => d.id === activeDeptId) || departments[0];

  return (
    <section className="section-spacing departments-section" id="departments">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Layers size={16} />
            <span>ORGANIZATIONAL STRUCTURE</span>
          </div>
          <h2>
            The Wings of Salaah: <br />
            <span className="gradient-text">6 Specialized Squads</span> Under One Roof.
          </h2>
          <p>
            Whether you want to build web apps, conquer competitive algorithms, make gorgeous UI, or just ensure your CGPA stays above 8.5 — there's a specialized wing with seniors ready to guide you.
          </p>
        </div>

        {/* Department Switcher Tabs */}
        <div className="dept-tabs-nav">
          {departments.map((dept) => {
            const isActive = dept.id === activeDeptId;
            return (
              <button
                key={dept.id}
                type="button"
                className={`dept-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveDeptId(dept.id)}
              >
                <span className="tab-icon">{dept.icon}</span>
                <span className="tab-label">{dept.name}</span>
                {isActive && <span className="tab-active-indicator" />}
              </button>
            );
          })}
        </div>

        {/* Active Department Spotlight Card */}
        <div className="dept-spotlight glass-card">
          <div className="spotlight-top-strip">
            <div className="spotlight-badge-row">
              <span className={`badge-chip pulse-${activeDept.colorClass}`}>
                <Sparkles size={14} />
                <span>WING SPOTLIGHT</span>
              </span>
              <span className="dept-tagline-text">{activeDept.tagline}</span>
            </div>
            
            <button 
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => onOpenBooking(`Joining ${activeDept.name}`)}
            >
              <span>Join this Wing</span>
              <ExternalLink size={14} />
            </button>
          </div>

          <div className="spotlight-content-grid">
            
            {/* Left Side: Overview & Project */}
            <div className="spotlight-main">
              <div className="spotlight-header-row">
                <div className="spotlight-icon-box">
                  {activeDept.icon}
                </div>
                <div>
                  <h3 className="spotlight-title">{activeDept.name}</h3>
                  <p className="spotlight-desc">{activeDept.description}</p>
                </div>
              </div>

              {/* Skills / Tech Stack Pills */}
              <div className="spotlight-skills-box">
                <span className="skills-heading">TOOLS & TECHNOLOGIES:</span>
                <div className="skills-pill-row">
                  {activeDept.skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Flagship Project Box */}
              <div className="flagship-project-box glass-card">
                <div className="flagship-header">
                  <Cpu size={16} className="text-cyan" />
                  <span>CURRENT ACTIVE INITIATIVE</span>
                </div>
                <p className="flagship-desc">{activeDept.flagshipProject}</p>
              </div>

            </div>

            {/* Right Side: Lead Info & Ongoing Activities */}
            <div className="spotlight-sidebar">
              
              {/* Lead Card */}
              <div className="wing-lead-card glass-card">
                <span className="lead-tag">WING LEAD & MENTOR</span>
                <div className="wing-lead-person">
                  <img 
                    src={activeDept.leadAvatar} 
                    alt={activeDept.lead} 
                    className="wing-lead-avatar" 
                  />
                  <div>
                    <h4 className="wing-lead-name">{activeDept.lead}</h4>
                    <span className="wing-lead-meta">{activeDept.leadYear}</span>
                  </div>
                </div>
                <button 
                  type="button"
                  className="btn btn-primary btn-sm btn-full-width"
                  onClick={() => onOpenBooking(`Chat with ${activeDept.lead} (${activeDept.name})`)}
                >
                  <span>Request 1:1 with Lead</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* What Happens This Semester */}
              <div className="initiatives-card glass-card">
                <h4 className="initiatives-title">What Happens Every Week:</h4>
                <ul className="initiatives-list">
                  {activeDept.activeInitiatives.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} className="text-emerald" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

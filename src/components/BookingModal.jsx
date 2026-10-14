import React, { useState } from 'react';
import { 
  X, 
  Coffee, 
  Calendar, 
  Clock, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  User,
  Mail,
  GraduationCap,
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, preselectedTopic }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rollNo: '',
    year: '1st Year Fresher',
    branch: 'CSE / IT',
    topic: preselectedTopic || 'DSA & Coding Roadmap',
    mentorPref: 'Assign Anyone Friendly & Available',
    meetingVibe: 'Gauri Cafe (Adrak Chai on us) ☕',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = 'SLH-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(randomTicket);
    setIsSubmitted(true);

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop-overlay" onClick={handleResetAndClose}>
      <div 
        className="booking-modal-window glass-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={handleResetAndClose}
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-badge-row">
                <span className="badge-chip pulse-cyan">
                  <Coffee size={14} />
                  <span>100% FREE PEER GUIDANCE</span>
                </span>
                <span className="modal-subtag">20-Minute Informal Chat</span>
              </div>
              <h2 id="modal-headline" className="modal-title">
                Book a Senior Mentorship Session
              </h2>
              <p className="modal-subtitle">
                No forms to get approved by professors. Just grab a 20-min spot with a senior ABESECian at Gauri Cafe or on Discord.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="booking-form">
              
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="student-name">Your Full Name *</label>
                  <div className="input-with-icon">
                    <User size={16} className="input-icon" />
                    <input 
                      id="student-name"
                      type="text" 
                      required 
                      placeholder="e.g. Rohan Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="student-email">College Email / WhatsApp No. *</label>
                  <div className="input-with-icon">
                    <Mail size={16} className="input-icon" />
                    <input 
                      id="student-email"
                      type="text" 
                      required 
                      placeholder="rohan.cs28@college.edu / 98765..."
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="student-year">Year of Study</label>
                  <select 
                    id="student-year"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: e.target.value})}
                  >
                    <option value="1st Year Fresher">1st Year Fresher (Batch '28)</option>
                    <option value="2nd Year Sophomore">2nd Year (Batch '27)</option>
                    <option value="3rd Year Junior">3rd Year (Batch '26)</option>
                    <option value="Prospective College Applicant">Prospective / School Student</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="student-branch">Your Branch / Department</label>
                  <select 
                    id="student-branch"
                    value={formData.branch}
                    onChange={(e) => setFormData({...formData, branch: e.target.value})}
                  >
                    <option value="CSE / IT">Computer Science / IT</option>
                    <option value="AI / Data Science">AI & Data Science</option>
                    <option value="ECE / Electrical">ECE & Electrical Engg</option>
                    <option value="Mechanical / Civil">Mechanical / Civil</option>
                    <option value="Other Science / Humanities">Other / Interdisciplinary</option>
                  </select>
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="guidance-topic">Primary Guidance Topic</label>
                  <select 
                    id="guidance-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  >
                    <option value="DSA & Coding Roadmap">DSA & LeetCode Roadmap from scratch</option>
                    <option value="End-Sem Exam & CGPA Salvage">End-Sem Exams & CGPA Salvage (PYQs)</option>
                    <option value="Web & Hackathon Project Setup">Web Dev & First Hackathon Team</option>
                    <option value="Resume Review & Placements">Resume Review & Off-Campus Secrets</option>
                    <option value="UI/UX & Portfolio Critique">UI/UX Design Portfolio Critique</option>
                    <option value="Hostel & General College Life">Hostel Survival & General College Life</option>
                    <option value="Core Branch to Tech Transition">Core Branch to Tech Transition</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mentor-preference">Preferred Mentor</label>
                  <select 
                    id="mentor-preference"
                    value={formData.mentorPref}
                    onChange={(e) => setFormData({...formData, mentorPref: e.target.value})}
                  >
                    <option value="Assign Anyone Friendly & Available">Assign Anyone Friendly & Available</option>
                    <option value="Arjun Mehta (2nd Yr CSE - Fullstack)">Arjun Mehta (2nd Yr CSE - Fullstack)</option>
                    <option value="Tanya Sen (3rd Yr AI - Placements)">Tanya Sen (3rd Yr AI - Placements)</option>
                    <option value="Kabir Singh (2nd Yr CSE - CP/DSA)">Kabir Singh (2nd Yr CSE - CP/DSA)</option>
                    <option value="Ananya Patel (2nd Yr Design - UI/UX)">Ananya Patel (2nd Yr Design - UI/UX)</option>
                    <option value="Devansh Sharma (2nd Yr ECE - 9.6 CGPA)">Devansh Sharma (2nd Yr ECE - 9.6 CGPA)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="meeting-location">Where would you prefer to meet?</label>
                <select 
                  id="meeting-location"
                  value={formData.meetingVibe}
                  onChange={(e) => setFormData({...formData, meetingVibe: e.target.value})}
                >
                  <option value="Gauri Cafe (Adrak Chai on us) ☕">Gauri Cafe (Table 4, Adrak Chai on us) ☕</option>
                  <option value="Central Library (2nd Floor Discussion Cubicle) 📚">Central Library (2nd Floor Discussion Cubicle) 📚</option>
                  <option value="Google Meet (Online) 💻">Google Meet (Online Video Call) 💻</option>
                  <option value="Discord Voice Stage (Audio only) 🎧">Discord Voice Stage (Audio only) 🎧</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="extra-notes">Specific Question or Doubt (Optional)</label>
                <textarea 
                  id="extra-notes"
                  rows="2"
                  placeholder="e.g. Stuck on pointers in C; or want tips on balancing attendance with hackathons..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-full-width submit-booking-btn">
                <Coffee size={18} />
                <span>Confirm Mentorship Request (Free)</span>
                <ArrowRight size={16} />
              </button>

              <div className="form-privacy-note">
                <span>🔒 Your contact details are only shared with your paired senior mentor. Zero spam.</span>
              </div>

            </form>
          </>
        ) : (
          /* Confirmation Success Card */
          <div className="modal-success-screen">
            <div className="success-icon-badge">
              <CheckCircle2 size={42} className="text-emerald" />
            </div>

            <span className="badge-chip pulse-emerald">REQUEST CONFIRMED! 🎉</span>
            <h2 className="success-title">You're All Set, {formData.name.split(' ')[0]}!</h2>
            <p className="success-desc">
              Your senior mentor request has been dispatched to the ABESECian Salaah coordination desk. 
              A mentor will ping you on WhatsApp or college email within a few hours to sync timing.
            </p>

            <div className="booking-pass-card glass-card">
              <div className="pass-header">
                <span className="pass-badge">SALAAH MENTORSHIP PASS</span>
                <span className="pass-code">{ticketId}</span>
              </div>
              <div className="pass-details-grid">
                <div className="pass-item">
                  <span className="pass-label">Topic</span>
                  <span className="pass-val">{formData.topic}</span>
                </div>
                <div className="pass-item">
                  <span className="pass-label">Location</span>
                  <span className="pass-val">{formData.meetingVibe}</span>
                </div>
                <div className="pass-item">
                  <span className="pass-label">Mentor Preference</span>
                  <span className="pass-val">{formData.mentorPref}</span>
                </div>
                <div className="pass-item">
                  <span className="pass-label">Refreshment</span>
                  <span className="pass-val text-amber">Free Ginger Chai Voucher Included ☕</span>
                </div>
              </div>
            </div>

            <div className="success-actions">
              <button 
                type="button" 
                className="btn btn-primary btn-full-width"
                onClick={handleResetAndClose}
              >
                <span>Awesome! Back to Home</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

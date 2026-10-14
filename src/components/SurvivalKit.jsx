import React, { useState } from 'react';
import { 
  Calculator, 
  BookOpen, 
  Dice5, 
  Download, 
  ExternalLink, 
  CheckCircle, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  FolderGit2,
  FileText,
  Flame
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SurvivalKit({ onOpenBooking }) {
  // CGPA Calculator State
  const [currentCgpa, setCurrentCgpa] = useState(7.2);
  const [semestersDone, setSemestersDone] = useState(2);
  const [targetCgpa, setTargetCgpa] = useState(8.5);

  // Senior Wisdom State
  const wisdomList = [
    "Never buy physical reference books in 1st semester. The library will have them, and our Google Drive has the exact solved examples.",
    "The 75% attendance rule has zero feelings. Calculate your 'bunk allowance' mathematically in Excel before turning off that 8 AM alarm.",
    "Form hackathon teams early. A good pitch deck and a polished UI often beat a 1,000-line backend that crashes during judging.",
    "Attend club auditions in 1st year even if you don't feel qualified. The free pizza coupons and network you make are 100% worth it.",
    "Start pushing code to GitHub from your very first C++ program. In 3rd year, when companies look at your contribution graph, you will look like an absolute veteran.",
    "If you fail a mid-sem quiz, talk to the professor during their cabin hours politely. Showing genuine interest almost always salvages internal marks.",
    "Your roommate doesn't have to be your coding partner. Find people across campus who genuinely want to build cool things."
  ];

  const [currentWisdom, setCurrentWisdom] = useState(wisdomList[0]);
  const [wisdomIndex, setWisdomIndex] = useState(0);

  const rollWisdom = () => {
    const nextIdx = (wisdomIndex + 1) % wisdomList.length;
    setWisdomIndex(nextIdx);
    setCurrentWisdom(wisdomList[nextIdx]);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 }
    });
  };

  // Calculate required SGPA
  const remainingSems = 8 - Number(semestersDone);
  const targetTotal = Number(targetCgpa) * 8;
  const currentTotal = Number(currentCgpa) * Number(semestersDone);
  const requiredSgpa = remainingSems > 0 ? ((targetTotal - currentTotal) / remainingSems).toFixed(2) : 0;

  const getVerdict = (sgpa) => {
    const num = parseFloat(sgpa);
    if (num <= 0) return { text: "You're already above your goal! Just keep coasting smoothly 🚀", color: "emerald" };
    if (num <= 7.5) return { text: "🟢 Cruise Mode: Very comfortable target. Submit assignments on time and you're good.", color: "emerald" };
    if (num <= 8.5) return { text: "🟡 Moderate Sprint: Very achievable! Target 8.5+ in high-credit subjects & labs.", color: "cyan" };
    if (num <= 9.3) return { text: "🟠 Intense Comeback: Time to lock in! Sit in the first three benches and clear all PYQs.", color: "amber" };
    if (num <= 10.0) return { text: "🔴 Legendary Anime Comeback: Mathematically possible! Aim for near-perfect 10 pointers.", color: "rose" };
    return { text: "⚠️ Mathematically exceeds 10.0 SGPA, but relax! Real-world tech jobs care 10x more about your GitHub portfolio than a 9+ CGPA.", color: "rose" };
  };

  const verdict = getVerdict(requiredSgpa);

  // Resources Data
  const resources = [
    {
      title: "1st & 2nd Year PYQ Master Vault",
      desc: "Solved previous year questions from 2019 to 2025 across CSE, ECE, Mech & Civil.",
      tag: "OVER 2.4 GB OF NOTES",
      fileType: "Drive Link",
      icon: <FolderGit2 className="text-cyan" size={20} />
    },
    {
      title: "The Salaah 75 DSA Cheat Sheet",
      desc: "Hand-picked beginner-to-intermediate coding questions with C++ & Python solutions.",
      tag: "FAANG & OA TESTED",
      fileType: "PDF Roadmap",
      icon: <FileText className="text-amber" size={20} />
    },
    {
      title: "Campus WiFi Proxy & Portal Setup",
      desc: "Step-by-step config to get high-speed internet in hostels without frequent disconnects.",
      tag: "SYSADMIN TRICK",
      fileType: "Config Script",
      icon: <Sparkles className="text-purple" size={20} />
    },
    {
      title: "Lab Viva Survial Quick Guide",
      desc: "100+ most common viva questions asked by external examiners in Chemistry, Physics, and OOPs.",
      tag: "GUARANTEED SAVIOR",
      fileType: "Revision Doc",
      icon: <BookOpen className="text-emerald" size={20} />
    }
  ];

  return (
    <section className="section-spacing survival-kit-section" id="survival-kit">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <Calculator size={16} />
            <span>THE FRESHMAN TOOLKIT</span>
          </div>
          <h2>
            The Campus Survival Kit. <br />
            <span className="gradient-text">Tools We Wish Someone Gave Us</span> in 1st Year.
          </h2>
          <p>
            Interactive utilities built by second-year students to help you calculate semester comebacks, 
            grab exam cheat codes, and receive unfiltered senior advice.
          </p>
        </div>

        {/* Dual Grid: CGPA Tool on Left, Senior Wisdom on Right */}
        <div className="toolkit-interactive-grid">
          
          {/* CGPA Calculator Card */}
          <div className="calculator-card glass-card">
            <div className="calc-header">
              <div className="calc-badge-row">
                <span className="badge-chip pulse-cyan">
                  <Calculator size={14} />
                  <span>INTERACTIVE CALCULATOR</span>
                </span>
                <span className="calc-subtitle">CGPA Comeback Planner</span>
              </div>
              <h3 className="calc-title">What SGPA do you need to graduate with your dream score?</h3>
            </div>

            <div className="calc-inputs-grid">
              
              {/* Current CGPA */}
              <div className="calc-field">
                <label htmlFor="current-cgpa-input">Current CGPA: <strong className="val-text">{currentCgpa}</strong></label>
                <input 
                  id="current-cgpa-input"
                  type="range" 
                  min="4.0" 
                  max="10.0" 
                  step="0.05"
                  value={currentCgpa}
                  onChange={(e) => setCurrentCgpa(e.target.value)}
                  className="calc-range-slider"
                />
                <div className="range-bounds">
                  <span>4.0</span>
                  <span>7.0</span>
                  <span>10.0</span>
                </div>
              </div>

              {/* Semesters Finished */}
              <div className="calc-field">
                <label htmlFor="semesters-done-select">Semesters Completed: <strong className="val-text">{semestersDone}</strong></label>
                <select 
                  id="semesters-done-select"
                  value={semestersDone}
                  onChange={(e) => setSemestersDone(e.target.value)}
                  className="calc-select"
                >
                  <option value="1">Semester 1 Finished (7 Remaining)</option>
                  <option value="2">Semester 2 Finished (6 Remaining)</option>
                  <option value="3">Semester 3 Finished (5 Remaining)</option>
                  <option value="4">Semester 4 Finished (4 Remaining)</option>
                  <option value="5">Semester 5 Finished (3 Remaining)</option>
                  <option value="6">Semester 6 Finished (2 Remaining)</option>
                  <option value="7">Semester 7 Finished (1 Remaining)</option>
                </select>
              </div>

              {/* Target CGPA */}
              <div className="calc-field">
                <label htmlFor="target-cgpa-input">Target Graduation CGPA: <strong className="val-text text-amber">{targetCgpa}</strong></label>
                <input 
                  id="target-cgpa-input"
                  type="range" 
                  min="6.0" 
                  max="10.0" 
                  step="0.05"
                  value={targetCgpa}
                  onChange={(e) => setTargetCgpa(e.target.value)}
                  className="calc-range-slider"
                />
                <div className="range-bounds">
                  <span>6.0</span>
                  <span>8.0</span>
                  <span>10.0</span>
                </div>
              </div>

            </div>

            {/* Calculated Result Display */}
            <div className="calc-result-box glass-card">
              <div className="result-metric">
                <span className="result-label">Required SGPA for remaining {remainingSems} semesters:</span>
                <span className={`result-number text-${verdict.color}`}>
                  {requiredSgpa}
                </span>
              </div>
              <p className="result-verdict">
                {verdict.text}
              </p>
              <div className="result-action">
                <button 
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => onOpenBooking(`Academic Comeback Plan (Current: ${currentCgpa}, Target: ${targetCgpa})`)}
                >
                  <span>Discuss Strategy with Academic Mentor</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Senior Wisdom Generator */}
          <div className="wisdom-card glass-card">
            
            <div className="wisdom-top">
              <span className="badge-chip pulse-amber">
                <Dice5 size={14} />
                <span>UNFILTERED ADVICE</span>
              </span>
              <span className="wisdom-counter">Tip #{wisdomIndex + 1} of {wisdomList.length}</span>
            </div>

            <h3 className="wisdom-title">Senior Wisdom Machine</h3>
            <p className="wisdom-subtitle">Real advice from senior ABESECians who learned it the hard way.</p>

            <div className="wisdom-quote-container glass-card">
              <span className="quote-mark">“</span>
              <p className="wisdom-quote-text">{currentWisdom}</p>
            </div>

            <button 
              type="button" 
              className="btn btn-primary btn-full-width roll-wisdom-btn"
              onClick={rollWisdom}
            >
              <Dice5 size={18} />
              <span>Roll Another Wisdom Nugget</span>
            </button>

            <div className="wisdom-footer-note">
              <span>☕ Have your own senior tip to submit? Drop it in our WhatsApp group!</span>
            </div>

          </div>

        </div>

        {/* Resource Vault Grid */}
        <div className="resource-vault-wrap">
          <div className="vault-header-row">
            <div className="vault-title-wrap">
              <BookOpen size={20} className="text-cyan" />
              <h3>The Campus Drive & Notes Vault</h3>
            </div>
            <span className="vault-badge">Updated for 2026 Academic Session</span>
          </div>

          <div className="resources-grid">
            {resources.map((item, idx) => (
              <div key={idx} className="resource-card glass-card">
                <div className="resource-top">
                  <div className="resource-icon-box">
                    {item.icon}
                  </div>
                  <span className="resource-tag-pill">{item.tag}</span>
                </div>
                <h4 className="resource-card-title">{item.title}</h4>
                <p className="resource-card-desc">{item.desc}</p>
                
                <button 
                  type="button"
                  className="btn btn-secondary btn-sm resource-btn"
                  onClick={() => onOpenBooking(`Requesting access to: ${item.title}`)}
                >
                  <Download size={14} />
                  <span>Get Free Access ({item.fileType})</span>
                </button>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  MessageSquare,
  Coffee
} from 'lucide-react';

export default function FAQ({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is Salaah genuinely free? Will anyone ask for paid subscriptions later?",
      answer: "100% free forever. We are a pure college peer mentorship club founded by ABESECians, not a commercial ed-tech company trying to sell you a ₹40,000 coding course. In fact, when we meet for 1:1s at Gauri Cafe, the ginger chai is on the club!"
    },
    {
      question: "I have zero coding experience. Can I still attend sessions or get a mentor?",
      answer: "That is literally why we started Salaah! Half of our ABESECian core team didn't know how to install VS Code or what a terminal was on Day 1 of college. We start from the absolute basics — variables, Git, logical thinking — without any judgment or complex jargon."
    },
    {
      question: "Where do 1:1 mentorship sessions happen? Offline or online?",
      answer: "You choose! Most offline chats happen at Gauri Cafe (Table 4), the Central Library 2nd floor discussion cubicles, or the Mech Canteen lawns. If you live off-campus or prefer your hostel room, we hop onto Google Meet or Salaah's Discord voice stages."
    },
    {
      question: "Can 1st years join the core team of Salaah?",
      answer: "Yes! Every semester we run our 'Fresher Shadow Program'. 1st years get paired with ABESECian wing leads in Tech, UI/UX Design, Outreach, and Events to organize hackathons and build campus apps. It's the best way to earn senior credentials early."
    },
    {
      question: "Do you guys give attendance proxies?",
      answer: "Nice try, Professor! No, we legally cannot give you attendance proxy (the Dean's office would shut us down in 10 minutes). But we DO give you the exact mathematical attendance calculator in our Survival Kit so you can optimize your schedule without getting debarred."
    },
    {
      question: "How do I access the handwritten notes & PYQ drive?",
      answer: "Head over to the 'Survival Kit' section right above this FAQ or drop a message to Devansh in the Academic Wing. All drive links are permanently public for all students in our college without annoying access request gates."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section-spacing faq-section" id="faq">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <HelpCircle size={16} />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2>
            Got Questions? <br />
            <span className="gradient-text">Here Are The Straight Answers.</span>
          </h2>
          <p>
            No sugar-coated corporate speak. Just real answers from ABESECians who were asking the exact same questions last year.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx} 
                className={`faq-item glass-card ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-box">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="faq-footer-banner glass-card">
          <div className="banner-left">
            <h4>Still have a burning question about college life or exams?</h4>
            <p>Our WhatsApp and Discord community channels are active 24/7. Don't hesitate!</p>
          </div>
          <div className="banner-right">
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => onOpenBooking('Have a specific query for seniors')}
            >
              <MessageSquare size={16} />
              <span>Ask in 1:1 Chat</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

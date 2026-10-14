import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Departments from './components/Departments';
import MentorMatchmaker from './components/MentorMatchmaker';
import Podcast from './components/Podcast';
import ProgramsEvents from './components/ProgramsEvents';
import SurvivalKit from './components/SurvivalKit';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import SocialCommunity from './components/SocialCommunity';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './App.css';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingTopic, setBookingTopic] = useState('');

  const handleOpenBooking = (topic = '') => {
    setBookingTopic(topic || '');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setBookingTopic('');
  };

  return (
    <div className="app-root">
      {/* Soothing Ambient Pattern Overlay */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Main Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Flow */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* About Salaah - The Mentor Community */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Community Wings / Departments */}
        <Departments onOpenBooking={handleOpenBooking} />

        {/* 1:1 Senior Mentor Matchmaker */}
        <MentorMatchmaker onOpenBooking={handleOpenBooking} />

        {/* Official Salaah Podcast Section */}
        <Podcast onOpenBooking={handleOpenBooking} />

        {/* Campus Programs & Events */}
        <ProgramsEvents onOpenBooking={handleOpenBooking} />

        {/* Freshman Survival Toolkit: CGPA Calculator & Wisdom */}
        <SurvivalKit onOpenBooking={handleOpenBooking} />

        {/* Student Testimonials & Confessions */}
        <Testimonials onOpenBooking={handleOpenBooking} />

        {/* Campus FAQ */}
        <FAQ onOpenBooking={handleOpenBooking} />

        {/* 24/7 Digital Hubs & Socials */}
        <SocialCommunity />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* 1:1 Senior Mentorship Booking Modal */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={handleCloseBooking} 
        preselectedTopic={bookingTopic} 
      />
    </div>
  );
}

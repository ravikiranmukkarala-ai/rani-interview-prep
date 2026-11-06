import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightStats } from './components/HighlightStats';
import { AboutRani } from './components/AboutRani';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { QuestionBankPreview } from './components/QuestionBankPreview';
import { ProfileSupport } from './components/ProfileSupport';
import { MockInterviewProcess } from './components/MockInterviewProcess';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { HowItWorks } from './components/HowItWorks';
import { CandidateEnquiryForm } from './components/CandidateEnquiryForm';
import { FreeConsultationBanner } from './components/FreeConsultationBanner';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { ServiceItem } from './data/services';

export const App: React.FC = () => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenConsultation = () => {
    setIsConsultationModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationModalOpen(false);
  };

  const handleExploreServices = () => {
    const servicesElement = document.querySelector('#services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onExploreServices={handleExploreServices}
        />

        {/* Highlight Pastel Cards (Matching Reference Screenshot Composition) */}
        <HighlightStats />

        {/* About Rani & 5-Step Methodology */}
        <AboutRani />

        {/* 7 Preparation Services */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Microsoft Technologies Focus */}
        <Technologies />

        {/* Question Bank Showcase with Category Filters & Sample Explanations */}
        <QuestionBankPreview onOpenConsultation={handleOpenConsultation} />

        {/* Resume & Profile Optimization */}
        <ProfileSupport onOpenConsultation={handleOpenConsultation} />

        {/* 4-Step Mock Interview Timeline */}
        <MockInterviewProcess onOpenConsultation={handleOpenConsultation} />

        {/* Performance Analysis Scorecard & Dashboard Showcase */}
        <PerformanceDashboard />

        {/* 5-Step How It Works Journey */}
        <HowItWorks onOpenConsultation={handleOpenConsultation} />

        {/* Candidate Enquiry Form with Validation */}
        <CandidateEnquiryForm />

        {/* Free Consultation Banner */}
        <FreeConsultationBanner onOpenConsultation={handleOpenConsultation} />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultation={handleOpenConsultation}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isConsultationModalOpen}
        onClose={handleCloseConsultation}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={() => {
          setSelectedService(null);
          handleOpenConsultation();
        }}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default App;

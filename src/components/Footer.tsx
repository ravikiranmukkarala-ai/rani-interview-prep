import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenPrivacy, onOpenTerms }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111216] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Info (2 columns) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-brand-500/20">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
                  Rani
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                </span>
                <span className="text-[11px] font-medium tracking-wide text-brand-300 uppercase">
                  Dynamics 365 CRM & Power Platform Interview Preparation
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Helping technology professionals prepare for technical interviews, improve conceptual clarity, optimize resumes and profiles, and approach IT career opportunities with confidence.
            </p>

            {/* Social Placeholders */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 block mb-2.5">
                Connect With Us (Placeholders)
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-brand-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  title="LinkedIn [Placeholder Profile]"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-brand-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  title="WhatsApp [Placeholder Profile]"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-xl bg-gray-800/80 hover:bg-brand-600 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                  title="Instagram [Placeholder Profile]"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Rani</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Preparation Services</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-white transition-colors">Technologies Covered</a>
              </li>
              <li>
                <a href="#questions" className="hover:text-white transition-colors">Question Bank</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Technical Mock Interviews</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interview Performance Analysis</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Resume Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">LinkedIn Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Naukri Optimization</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Interview Question Bank</a>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-300">
              Contact & Inquiries
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 block">Email Inquiries:</span>
                  <span className="text-gray-300">[contact@rani-prep.placeholder]</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 block">WhatsApp:</span>
                  <span className="text-gray-300">[Contact Placeholder]</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-gray-500 block">Location:</span>
                  <span className="text-gray-300">Online 1-on-1 Sessions (Global IST/UTC)</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs transition-colors text-center"
              >
                Book Free Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 Rani. All rights reserved. Dynamics 365 CRM & Power Platform Interview Preparation.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenPrivacy} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenTerms} className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-brand-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

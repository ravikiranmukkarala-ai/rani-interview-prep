import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Sparkles, Info } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [candidatePhone, setCandidatePhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (10:00 AM - 1:00 PM IST)');
  const [techFocus, setTechFocus] = useState('Dynamics 365 CRM');
  const [isBooked, setIsBooked] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || !candidateEmail.trim() || !candidatePhone.trim()) {
      alert('Please complete all required fields.');
      return;
    }
    setIsBooked(true);
  };

  const handleResetAndClose = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Subtle Purple Top Bar */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-gray-900">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Thank you, <span className="font-semibold text-gray-900">{candidateName}</span>. Your requested slot for <span className="font-semibold text-brand-700">{preferredTime}</span> has been registered.
              </p>
            </div>

            {/* Note on Booking Integration */}
            <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-xs text-brand-900 text-left space-y-1">
              <span className="font-bold">Next Steps:</span>
              <p className="text-gray-600">
                In production, connect this with your Calendly / Cal.com link or Google Calendar schedule so candidates can pick direct real-time calendar appointments.
              </p>
            </div>

            <button
              onClick={handleResetAndClose}
              className="py-3 px-8 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">
                  Book Free Consultation
                </h3>
                <p className="text-xs text-gray-500">
                  15-minute diagnostic call with Rani
                </p>
              </div>
            </div>

            {/* Booking Notice */}
            <div className="p-3.5 rounded-2xl bg-brand-50/60 border border-brand-100 text-xs text-brand-900 mb-6 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
              <span>
                Discuss your career goals, evaluate your target role requirements, and decide which preparation services match your current timeline.
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Nair"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. priya.nair@example.com"
                  value={candidateEmail}
                  onChange={(e) => setCandidateEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98765 12345"
                  value={candidatePhone}
                  onChange={(e) => setCandidatePhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Technology Focus
                  </label>
                  <select
                    value={techFocus}
                    onChange={(e) => setTechFocus(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  >
                    <option value="Dynamics 365 CRM">Dynamics 365 CRM</option>
                    <option value="Power Platform">Power Platform</option>
                    <option value="Both D365 & Power Platform">Both (D365 + Power Platform)</option>
                    <option value="Career Switcher">Career Switcher (.NET/Java)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM IST)">Morning (10:00 AM - 1:00 PM IST)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM IST)">Afternoon (2:00 PM - 5:00 PM IST)</option>
                    <option value="Evening (6:00 PM - 9:00 PM IST)">Evening (6:00 PM - 9:00 PM IST)</option>
                    <option value="Weekend Flexible">Weekend Flexible</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-600/25 transition-all"
                >
                  Confirm Free Consultation Request
                </button>
              </div>

              <div className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5 text-gray-400" />
                <span>Zero obligations. Confidential discussion.</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

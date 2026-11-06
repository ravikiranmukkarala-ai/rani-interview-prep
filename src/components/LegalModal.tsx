import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[85vh] overflow-y-auto">
        
        {/* Subtle Purple Top Bar */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-gray-900">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <p className="text-xs text-gray-500">
              Rani – Dynamics 365 CRM & Power Platform Interview Preparation
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                <strong>1. Information Collection:</strong> When you submit an enquiry or request a consultation, we collect your name, email address, WhatsApp number, and technical career preferences solely for the purpose of communicating about our preparation services.
              </p>
              <p>
                <strong>2. Confidentiality:</strong> We respect candidate privacy. Resumes, project descriptions, current company names, and mock interview performance analyses are kept strictly confidential and will never be shared with third parties or external recruiters without your explicit permission.
              </p>
              <p>
                <strong>3. Communications:</strong> We do not engage in spam. Your contact details will only be used to respond to your inquiries and coordinate your mock interview or consultation sessions.
              </p>
              <p>
                <strong>4. Data Retention:</strong> You may request deletion of your submitted resume or contact record at any time by contacting us directly.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Scope of Services:</strong> Rani provides technical mock interviews, resume guidance, profile optimization, and feedback coaching for educational and professional preparation purposes only.
              </p>
              <p>
                <strong>2. No Guarantee of Placement or Selection:</strong> We do not guarantee interview selection, job offers, or placement with any third-party employer. Hiring decisions are made solely by prospective employers based on their internal evaluation criteria.
              </p>
              <p>
                <strong>3. Academic Integrity & Ethics:</strong> Our services are designed for legitimate pre-interview practice and self-improvement. We strictly prohibit and do not provide live interview proxying, covert assessment assistance, or unauthorized sharing of confidential employer question databases.
              </p>
              <p>
                <strong>4. Trademark Notice:</strong> Microsoft Dynamics 365, Power Apps, Power Automate, Dataverse, and related terms are registered trademarks of Microsoft Corporation. This service is an independent preparation practice and is not endorsed or certified by Microsoft Corporation.
              </p>
            </>
          )}
        </div>

        <div className="mt-8 pt-4 border-t border-gray-100 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};

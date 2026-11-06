import React, { useState } from 'react';
import { MessageCircle, X, Info, Copy, Check } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // EDITABLE PLACEHOLDER: Set your verified WhatsApp phone number here (e.g. '919876543210')
  const WHATSAPP_NUMBER_CONFIG: string = ''; // Leave empty to indicate placeholder mode

  const PREFILLED_MESSAGE = 'Hello, I am interested in Dynamics 365 CRM and Power Platform interview preparation. I would like to know more about your services.';

  const handleOpenChat = () => {
    if (WHATSAPP_NUMBER_CONFIG) {
      const url = `https://wa.me/${WHATSAPP_NUMBER_CONFIG}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;
      window.open(url, '_blank');
    } else {
      setIsOpen(true);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(PREFILLED_MESSAGE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={handleOpenChat}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none"
          aria-label="Contact Rani via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
            Chat on WhatsApp
          </span>
          {/* Subtle Ping Dot */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200"></span>
          </span>
        </button>
      </div>

      {/* WhatsApp Modal for Unconfigured Placeholder or Message Preview */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-gray-100 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-7 h-7 fill-[#25D366]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  WhatsApp Direct Inquiry
                </h3>
                <p className="text-xs text-gray-500">
                  Dynamics 365 & Power Platform Preparation
                </p>
              </div>
            </div>

            {/* Notice / Placeholder Explanation */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 mb-5 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold">
                <Info className="w-4 h-4 text-amber-600" />
                <span>WhatsApp Number: Editable Placeholder</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                A verified WhatsApp phone number has not been configured yet. In production, setting the number in <code className="bg-white/80 px-1 py-0.5 rounded font-mono">WHATSAPP_NUMBER_CONFIG</code> will launch WhatsApp Web or the mobile app with the prefilled message below:
              </p>
            </div>

            {/* Prefilled Message Box */}
            <div className="mb-5">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-700 mb-1.5">
                <span>Prefilled Inquiry Message:</span>
                <button
                  onClick={handleCopyMessage}
                  className="text-brand-600 hover:text-brand-800 flex items-center gap-1 text-[11px]"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Text'}</span>
                </button>
              </div>
              <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-800 font-mono italic leading-relaxed">
                "{PREFILLED_MESSAGE}"
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  const contactEl = document.querySelector('#contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 py-3 px-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs transition-colors"
              >
                Use Candidate Web Form Instead
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="py-3 px-5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

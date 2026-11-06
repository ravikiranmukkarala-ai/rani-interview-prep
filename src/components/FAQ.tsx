import React, { useState } from 'react';
import { faqData } from '../data/faq';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Questions & Answers
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Transparent answers regarding our preparation scope, session structure, technologies covered, and ethical principles.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            const isLastQuestion = idx === faqData.length - 1; // Trust / Guarantee question

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-brand-300 bg-white shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                } ${isLastQuestion && isOpen ? 'ring-2 ring-brand-500/20' : ''}`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-3">
                    <span className="text-xs font-bold text-brand-600 bg-brand-50 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item.question}</span>
                  </span>

                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-brand-50 text-brand-600' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                    {isLastQuestion && (
                      <div className="mb-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
                        <ShieldCheck className="w-4 h-4 text-amber-600" />
                        <span>Ethical Preparation Standard</span>
                      </div>
                    )}
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

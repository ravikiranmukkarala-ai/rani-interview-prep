import React from 'react';
import { UserCheck, Compass } from 'lucide-react';
import { siteImages } from '../data/images';

export const AboutRani: React.FC = () => {
  const approachSteps = [
    {
      step: '01',
      title: 'Assess Current Technical Foundation',
      description: "Understand the candidate's current technical knowledge, practical background, and existing projects across Dynamics 365 and Power Platform."
    },
    {
      step: '02',
      title: 'Identify Interview Preparation Requirements',
      description: 'Pinpoint specific requirements for your target role — whether Developer, Senior Consultant, Solution Architect, or Power Platform Specialist.'
    },
    {
      step: '03',
      title: 'Practise Relevant Technical & Scenario Questions',
      description: 'Engage in structured question-and-answer drills covering core architectural patterns, execution pipelines, and real-world client scenarios.'
    },
    {
      step: '04',
      title: 'Improve Technical Concept & Project Storytelling',
      description: 'Refine how you explain complex architectures, custom plugin solutions, and client deliverables with clarity, structure, and impact.'
    },
    {
      step: '05',
      title: 'Provide Actionable Feedback & Improvement Plan',
      description: 'Deliver transparent, constructive recommendations with prioritized topics to revise and master before your live interview.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            About Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-tight">
            Helping Technology Professionals Move Forward
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Rani provides structured interview preparation and career support for professionals working towards opportunities in Dynamics 365 CRM and Microsoft Power Platform.
          </p>
        </div>

        {/* Two-Column Grid: Approach and Owner Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 5-Step Approach List */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-600" />
              <span>A Structured, Candidate-Centric Methodology</span>
            </h3>

            <div className="space-y-4">
              {approachSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:border-brand-200 hover:shadow-md transition-all duration-200 flex gap-4 sm:gap-5"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 text-brand-700 font-extrabold text-base flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editable Owner Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-xl shadow-brand-900/5 relative overflow-hidden">
              
              {/* Purple Accent Top Bar */}
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-500" />

              {/* Editable Placeholder Notice Pill */}
              <div className="mb-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold">
                  <UserCheck className="w-3.5 h-3.5" />
                  Owner Introduction Area
                </span>
                <span className="text-[11px] text-gray-600 font-medium bg-gray-100 px-2.5 py-1 rounded-md">
                  Editable Placeholder
                </span>
              </div>

              {/* Owner Visual Representation */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-200 shadow-md">
                  <img
                    src={siteImages.ownerPlaceholder}
                    alt="Rani - Business Owner Portrait Placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900">Meet Rani</h3>
                  <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide">
                    Business Owner & Technical Career Mentor
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Dynamics 365 CRM & Power Platform Specialist
                  </p>
                </div>
              </div>

              {/* Professional Biography Placeholder - Explicitly Editable without fabricated history */}
              <div className="space-y-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-5">
                <p>
                  Welcome! As the founder of this specialized preparation platform, my mission is to deliver focused, transparent, and practical interview guidance for engineers, consultants, and IT professionals working in Microsoft Dynamics 365 Customer Engagement and Power Platform.
                </p>
                <p>
                  Many capable professionals stumble during technical interviews not because they lack technical capability, but because they struggle to articulate architecture decisions, answer scenario-based questions effectively, or present their past project contributions in an ATS-friendly manner.
                </p>
                <p className="bg-brand-50/60 p-4 rounded-xl border border-brand-100/80 text-xs sm:text-sm text-brand-900 font-medium">
                  "Our preparation is built on real technical scenarios, honest diagnostics, and personalized coaching — helping you approach every interview round with confidence and clarity."
                </p>
              </div>

              {/* Trust Transparency Note */}
              <div className="mt-6 pt-4 border-t border-dashed border-gray-200 text-[11px] text-gray-600 space-y-1">
                <p className="font-semibold text-gray-700">About this introduction:</p>
                <p>
                  This owner biography area is designed as an easily editable placeholder until verified personal credentials, certifications, and background details are updated by the business owner.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

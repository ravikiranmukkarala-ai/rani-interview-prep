import React from 'react';
import { FileText, Linkedin, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProfileSupportProps {
  onOpenConsultation: () => void;
}

export const ProfileSupport: React.FC<ProfileSupportProps> = ({ onOpenConsultation }) => {
  const profileCards = [
    {
      icon: <FileText className="w-7 h-7 text-brand-600" />,
      title: 'Resume Preparation',
      subtitle: 'ATS-Friendly & Impact-Oriented',
      description: 'Present your experience, technical skills, and projects in a clear, structured, professional format.',
      highlights: [
        'ATS-compatible formatting and modern technical styling',
        'Concise categorization of D365 & Power Platform versions',
        'Translating daily tasks into quantifiable deliverables',
        'Eliminating generic filler words and outdated references'
      ]
    },
    {
      icon: <Linkedin className="w-7 h-7 text-[#0A66C2]" />,
      title: 'LinkedIn Optimization',
      subtitle: 'Attract Recruiter Search Inquiries',
      description: 'Communicate your professional strengths and technology expertise effectively.',
      highlights: [
        'Custom role-targeted headline & keyword indexing',
        'Engaging technical "About" summary that highlights your niche',
        'Showcasing Power Apps / CE solutions & contributions',
        'Optimizing for technical recruiter search algorithms'
      ]
    },
    {
      icon: <Briefcase className="w-7 h-7 text-indigo-600" />,
      title: 'Naukri Profile Optimization',
      subtitle: 'Enterprise IT Hiring Reach',
      description: 'Improve your professional profile with relevant technical skills and role-focused information.',
      highlights: [
        'High-density technical key-skills configuration',
        'Resume headline that stands out on recruiter dashboards',
        'Accurate employment role structuring and client domains',
        'Profile completeness optimization to maximize view frequency'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Career Positioning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Build a Professional Profile That Represents Your Skills
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Your technical expertise deserves to be seen. We ensure your resume and job portal profiles reflect the exact caliber of your Dynamics 365 and Power Platform capabilities.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl border border-gray-200 p-7 sm:p-8 flex flex-col justify-between hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-50 group-hover:border-brand-200 transition-all duration-200">
                  {card.icon}
                </div>

                <span className="text-[11px] font-bold text-brand-600 tracking-wider uppercase">
                  {card.subtitle}
                </span>

                <h3 className="text-xl font-extrabold text-gray-900 mt-1 mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                  {card.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-gray-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2.5 px-4 rounded-full bg-brand-50 hover:bg-brand-600 text-brand-700 hover:text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Request Profile Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

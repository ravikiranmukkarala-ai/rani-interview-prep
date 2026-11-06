import React from 'react';
import { ArrowRight, UserCheck, Video, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

interface MockInterviewProcessProps {
  onOpenConsultation: () => void;
}

export const MockInterviewProcess: React.FC<MockInterviewProcessProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      step: '01',
      title: 'Initial Assessment',
      icon: <UserCheck className="w-6 h-6 text-brand-600" />,
      description: 'Understand your current experience, technical knowledge, and target interview role.',
      details: ['Target job role & company tier', 'Review of past projects & tech stack', 'Identifying key anxiety triggers']
    },
    {
      step: '02',
      title: 'Mock Interview',
      icon: <Video className="w-6 h-6 text-brand-600" />,
      description: 'Practise technical and scenario-based interview questions under realistic simulation.',
      details: ['45-60 min live 1-on-1 session', 'Deep technical & architecture questions', 'Live scenario problem-solving']
    },
    {
      step: '03',
      title: 'Performance Analysis',
      icon: <BarChart3 className="w-6 h-6 text-brand-600" />,
      description: 'Review technical accuracy, concept clarity, problem-solving, and communication.',
      details: ['Multi-parameter diagnostic scorecard', 'Technical blind spots identified', 'Answer structure evaluation']
    },
    {
      step: '04',
      title: 'Improvement Plan',
      icon: <TrendingUp className="w-6 h-6 text-brand-600" />,
      description: 'Receive personalized recommendations and focus on the areas that need attention.',
      details: ['Topic-wise revision roadmap', 'Sample answer re-framing scripts', 'Follow-up readiness checklist']
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Simulated Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Practice. Improve. Perform Better.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Eliminate interview fear through structured practice. Experience what real hiring panels ask before you step into your live interview.
          </p>
        </div>

        {/* 4 Steps - Horizontal on Desktop, Vertical on Mobile */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 shadow-sm hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon Container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200">
                      <span className="group-hover:brightness-0 group-hover:invert transition-all">
                        {item.icon}
                      </span>
                    </div>
                    <span className="text-2xl font-black text-brand-200 group-hover:text-brand-600 transition-colors font-mono">
                      {item.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-extrabold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Details Pill Tags */}
                  <div className="space-y-2 pt-3 border-t border-gray-100">
                    {item.details.map((detail, dIdx) => (
                      <div key={dIdx} className="text-[11px] text-gray-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-100 text-center">
                  <span className="text-[11px] font-bold text-brand-700">
                    Step {idx + 1} of 4
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar below */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/25 transition-all"
          >
            <Sparkles className="w-4 h-4 text-brand-200" />
            <span>Schedule a Technical Mock Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { Target, Layers, PlayCircle, Award, Compass, ArrowRight, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenConsultation: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      num: '01',
      title: 'Share Your Career Goal',
      description: 'Tell us about your current technical experience, target company expectations, and upcoming interview timelines.',
      icon: <Target className="w-6 h-6 text-brand-600" />
    },
    {
      num: '02',
      title: 'Select Your Preparation Services',
      description: 'Pick the specific assistance you need: comprehensive coaching, mock interviews, question banks, or profile optimization.',
      icon: <Layers className="w-6 h-6 text-brand-600" />
    },
    {
      num: '03',
      title: 'Practise and Improve',
      description: 'Work through technical concept reviews, scenario-based architecture discussions, and realistic mock interview rounds.',
      icon: <PlayCircle className="w-6 h-6 text-brand-600" />
    },
    {
      num: '04',
      title: 'Receive Actionable Feedback',
      description: 'Get an objective diagnostic breakdown detailing your strengths, weak areas, and exact answer restructuring guidance.',
      icon: <Award className="w-6 h-6 text-brand-600" />
    },
    {
      num: '05',
      title: 'Prepare for Your Next Opportunity',
      description: 'Walk into your corporate technical rounds equipped with deep conceptual clarity, ATS-ready profiles, and self-confidence.',
      icon: <Compass className="w-6 h-6 text-brand-600" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Workflow Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Your Preparation Journey, Step by Step
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A clear, transparent roadmap from your initial assessment to confident interview readiness.
          </p>
        </div>

        {/* 5 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl border border-gray-200/90 p-6 flex flex-col justify-between hover:border-brand-300 hover:shadow-lg hover:shadow-brand-600/10 transition-all duration-300 group"
            >
              <div>
                {/* Step Top */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200">
                    <span className="group-hover:brightness-0 group-hover:invert transition-all">
                      {step.icon}
                    </span>
                  </div>
                  <span className="text-xl font-black text-brand-200 group-hover:text-brand-600 transition-colors font-mono">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                <span>Phase {idx + 1}</span>
                <span className="w-2 h-2 rounded-full bg-brand-500"></span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/25 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-brand-200" />
            <span>Start Your Preparation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { siteImages } from '../data/images';

export const HighlightStats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Our Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight">
            Focused Guidance. Tangible Career Growth.
          </h2>
          <p className="mt-3 text-base text-gray-600 leading-relaxed">
            Practical interview preparation structured to transform technical understanding into clear, confident articulation for high-demand Dynamics 365 and Power Platform roles.
          </p>
        </div>

        {/* 3 Pastel Cards Grid - Directly inspired by the reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Pastel Lavender */}
          <div className="rounded-3xl bg-[#F0E9FF] border border-[#DECFFD] p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="text-4xl lg:text-5xl font-black text-brand-900 tracking-tight">
                100%
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Practical Technical Focus</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Master the architecture, plugins, client scripting, and Dataverse relationships expected in technical rounds.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-brand-800 shadow-sm">
                  C# Plugins & Stages
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-brand-800 shadow-sm">
                  Dataverse Modeling
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-brand-800 shadow-sm">
                  Client Scripting API
                </span>
              </div>
            </div>

            {/* Bottom Graphic Portrait */}
            <div className="mt-8 pt-4 -mx-6 -mb-6 flex justify-center items-end overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden rounded-b-2xl">
                <img
                  src={siteImages.cardLavender}
                  alt="Practical Technical Focus Candidate"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F0E9FF] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>

          {/* Card 2: Pastel Peach */}
          <div className="rounded-3xl bg-[#FFF2E8] border border-[#FCD8C1] p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="text-4xl lg:text-5xl font-black text-[#8B3B0B] tracking-tight">
                1-on-1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Targeted Mock Interviews</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Realistic technical rounds with instant verbal and written diagnostic feedback on your concept clarity and answer structure.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-orange-900 shadow-sm">
                  Scenario-Based Questions
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-orange-900 shadow-sm">
                  Scorecard Evaluation
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-orange-900 shadow-sm">
                  Weak Spot Diagnosis
                </span>
              </div>
            </div>

            {/* Bottom Graphic Portrait */}
            <div className="mt-8 pt-4 -mx-6 -mb-6 flex justify-center items-end overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden rounded-b-2xl">
                <img
                  src={siteImages.cardPeach}
                  alt="Targeted Mock Interviews Group"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFF2E8] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>

          {/* Card 3: Pastel Cyan/Mint */}
          <div className="rounded-3xl bg-[#EBF6FF] border border-[#BAE0FD] p-6 lg:p-8 flex flex-col justify-between overflow-hidden relative group hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300">
            <div className="space-y-4 z-10">
              <div className="text-4xl lg:text-5xl font-black text-[#0B4A78] tracking-tight">
                360°
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Complete Profile Alignment</h3>
                <p className="text-xs text-gray-600 mt-1">
                  Optimize your ATS resume, LinkedIn presence, and Naukri profile to attract recruiter visibility for senior technical openings.
                </p>
              </div>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-sky-950 shadow-sm">
                  ATS-Friendly Resumes
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-sky-950 shadow-sm">
                  LinkedIn Optimization
                </span>
                <span className="px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-sky-950 shadow-sm">
                  Naukri Keywords
                </span>
              </div>
            </div>

            {/* Bottom Graphic Portrait */}
            <div className="mt-8 pt-4 -mx-6 -mb-6 flex justify-center items-end overflow-hidden">
              <div className="relative w-full h-56 overflow-hidden rounded-b-2xl">
                <img
                  src={siteImages.cardMint}
                  alt="Complete Profile Alignment Candidates"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#EBF6FF] via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

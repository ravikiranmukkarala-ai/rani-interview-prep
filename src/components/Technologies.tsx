import React from 'react';
import { technologiesData } from '../data/technologies';
import { Cpu, Info } from 'lucide-react';

export const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Technology Focus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Focused on the Microsoft Technologies That Matter
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            In-depth conceptual revision, architecture walk-throughs, and coding exercises tailored to high-demand enterprise roles.
          </p>
        </div>

        {/* 2 Prominent Technology Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {technologiesData.map((tech) => (
            <div
              key={tech.title}
              className="bg-white rounded-3xl border border-gray-200 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200">
                    {tech.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-600">
                    Enterprise Module
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
                  {tech.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {tech.description}
                </p>

                {/* Topics Grid */}
                <div className="space-y-4">
                  {tech.items.map((item, itemIdx) => (
                    <div
                      key={item.name}
                      className="p-4 rounded-2xl bg-gray-50/70 border border-gray-100 hover:bg-white hover:border-brand-200 hover:shadow-sm transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-gray-900">
                          {item.name}
                        </h4>
                        <span className="text-[10px] font-mono text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                          0{itemIdx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {item.keyConcepts.map((concept) => (
                          <span
                            key={concept}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-gray-600 border border-gray-200"
                          >
                            {concept}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-brand-600" />
                  <span>Covered in Mock & Question Bank</span>
                </span>
                <span className="font-semibold text-brand-700">
                  Role-Aligned Topics
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Notice explicitly avoiding implied Microsoft partnership */}
        <div className="mt-12 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex items-start gap-3.5 text-xs text-gray-600">
          <Info className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-gray-700">Notice on Brand References: </span>
            Microsoft Dynamics 365, Power Platform, Power Apps, Power Automate, Power BI, Dataverse, and related product names are registered trademarks of Microsoft Corporation. This website provides independent technical interview preparation and career mentorship services and is not affiliated with, sponsored by, or endorsed by Microsoft Corporation.
          </div>
        </div>

      </div>
    </section>
  );
};

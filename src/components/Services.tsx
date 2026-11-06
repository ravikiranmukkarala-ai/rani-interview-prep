import React, { useState } from 'react';
import { servicesData, ServiceItem } from '../data/services';
import {
  Code2,
  BookOpen,
  FileText,
  Linkedin,
  Briefcase,
  Video,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService, onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interview' | 'profile' | 'evaluation'>('all');

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeFilter);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-brand-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-brand-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-brand-600" />;
      case 'Linkedin':
        return <Linkedin className="w-6 h-6 text-brand-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-brand-600" />;
      case 'Video':
        return <Video className="w-6 h-6 text-brand-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-brand-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Everything You Need to Prepare Better
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Practical career preparation services designed around your technical interview goals.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Services (7)' },
              { id: 'interview', label: 'Technical Prep & Questions' },
              { id: 'profile', label: 'Resume & Profile Optimization' },
              { id: 'evaluation', label: 'Mock Interviews & Diagnostics' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === tab.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                    : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl border border-gray-200/90 bg-white p-7 sm:p-8 flex flex-col justify-between hover:border-brand-300 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-brand-50/30 to-white' : ''
              }`}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-200">
                    <span className="group-hover:brightness-0 group-hover:invert transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200/60">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-gray-100 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-bold text-brand-700 hover:text-brand-900 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                >
                  <span>Learn More Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 hover:bg-brand-50 hover:text-brand-700 text-gray-700 transition-colors"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-brand-50/60 border border-brand-200/70 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-gray-900">
              Need a Customized Preparation Combination?
            </h4>
            <p className="text-sm text-gray-600">
              Choose individual services or combine mock interviews with resume and profile optimization.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="flex-shrink-0 px-6 py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/25 transition-all"
          >
            Discuss Your Custom Plan
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star, Award } from 'lucide-react';
import { siteImages } from '../data/images';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-brand-50/40 via-white to-white">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-200/30 via-purple-100/40 to-pink-100/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 space-y-6 lg:pr-4 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-brand-50 border border-brand-200/60 shadow-sm">
              <div className="flex -space-x-1.5 items-center">
                <span className="w-5 h-5 rounded-full bg-brand-600 flex items-center justify-center text-white text-[10px] font-bold">
                  ★
                </span>
                <span className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[10px] font-bold">
                  ⚡
                </span>
                <span className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center text-white text-[10px] font-bold">
                  ✓
                </span>
              </div>
              <span className="text-xs font-bold tracking-wider text-brand-700 uppercase">
                TECHNICAL INTERVIEW PREPARATION
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-text-main leading-[1.12]">
              Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600">
                Technical Skills
              </span>{' '}
              Deserve the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-brand-600 to-indigo-700">
                Right Opportunity.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Prepare for your next technical interview with structured guidance, practical mock interviews, resume support, and personalized feedback for Dynamics 365 CRM and Power Platform professionals.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-base shadow-lg shadow-brand-600/30 hover:shadow-xl hover:shadow-brand-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-brand-50/60 text-gray-800 hover:text-brand-700 font-semibold text-base border border-gray-200 hover:border-brand-200 shadow-sm transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Book Free Consultation</span>
              </button>
            </div>

            {/* 3 Supporting Points */}
            <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-sm font-medium text-gray-700">
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Practical Technical Preparation</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Personalized Feedback</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Career-Focused Guidance</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Gradient Container & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* The Main Purple Gradient Container inspired directly by reference */}
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-[4/4.5] rounded-4xl bg-gradient-to-tr from-brand-600 via-brand-500 to-indigo-500 p-3 sm:p-4 shadow-2xl shadow-brand-600/25 overflow-hidden flex items-end justify-center">
              
              {/* Inner Decorative glow */}
              <div className="absolute inset-0 bg-radial-at-t from-white/20 via-transparent to-black/10 pointer-events-none" />

              {/* Main Professional Portrait */}
              <div className="relative w-full h-[90%] rounded-3xl overflow-hidden bg-brand-900/10">
                <img
                  src={siteImages.heroStudent}
                  alt="Professional preparing for Dynamics 365 and Power Platform technical interview"
                  className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.03]"
                  loading="eager"
                />
              </div>

              {/* Floating Pill Card: Top Left - Dedicated Preparation Rating */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 animate-float-slow hidden sm:flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  <span className="w-7 h-7 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center border-2 border-white">
                    D365
                  </span>
                  <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center border-2 border-white">
                    PP
                  </span>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 flex items-center gap-1">
                    Structured Guidance
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-[10px] text-gray-500 font-medium">1-on-1 Practice & Feedback</div>
                </div>
              </div>

              {/* Floating Pill Card: Middle Left - Mock Interviews */}
              <div className="absolute top-1/3 -left-2 sm:left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md border border-brand-100 text-xs font-semibold text-gray-800 flex items-center gap-2 animate-float-delayed">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-600 animate-pulse"></span>
                <span>Technical Mock Interviews</span>
              </div>

              {/* Floating Pill Card: Middle Right - Resume Optimization */}
              <div className="absolute top-1/4 -right-2 sm:right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full shadow-md border border-brand-100 text-xs font-semibold text-gray-800 flex items-center gap-2 animate-float-slow">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Resume Optimization</span>
              </div>

              {/* Floating Pill Card: Lower Right - Interview Preparation */}
              <div className="absolute bottom-20 -right-2 sm:right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-brand-100 text-xs font-semibold text-gray-800 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-500" />
                <span>Interview Preparation</span>
              </div>

              {/* Floating Pill Card: Lower Left - Personalized Feedback */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-brand-100 text-xs font-semibold text-brand-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Personalized Feedback</span>
              </div>

            </div>

          </div>

        </div>

        {/* Specialization Bar Below Hero */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-gray-600 mb-5">
            Specialized Preparation Across the Microsoft Business Applications Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              'Dynamics 365 CE',
              'Microsoft Dataverse',
              'Power Apps (Model & Canvas)',
              'Power Automate',
              'C# Plugins & Workflows',
              'JavaScript Client API',
              'Power Pages',
              'Power BI Integration'
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-gray-50 border border-gray-200/80 text-xs sm:text-sm font-semibold text-gray-700 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

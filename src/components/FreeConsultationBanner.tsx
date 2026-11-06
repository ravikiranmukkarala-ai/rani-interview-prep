import React from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface FreeConsultationBannerProps {
  onOpenConsultation: () => void;
}

export const FreeConsultationBanner: React.FC<FreeConsultationBannerProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Vibrant Purple Gradient */}
        <div className="rounded-4xl bg-gradient-to-r from-brand-600 via-brand-700 to-indigo-800 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-brand-600/30 relative overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Top Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-brand-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Complimentary 15-Min Diagnostic Discussion</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Not Sure Where to Start?
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto leading-relaxed">
              Tell us about your technical background and interview goals. Let's identify the preparation support that may be right for you.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-white hover:bg-brand-50 text-brand-900 font-extrabold text-base shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-brand-600" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-brand-600" />
              </button>
            </div>

            {/* Trust points */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-brand-100 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-300" />
                <span>15-Minute Zero Pressure Call</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Confidential Career Assessment</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Personalized Roadmap Advice</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

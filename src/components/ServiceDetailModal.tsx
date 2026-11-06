import React from 'react';
import { ServiceItem } from '../data/services';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Subtle Purple Top Bar */}
        <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 to-indigo-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            {service.badge || 'Service Overview'}
          </div>
          <h3 className="text-2xl font-extrabold text-gray-900">
            {service.title}
          </h3>
          <p className="text-sm text-brand-700 font-medium mt-1">
            {service.shortDescription}
          </p>
        </div>

        {/* Full Detailed Description */}
        <div className="text-sm text-gray-600 leading-relaxed mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-100">
          {service.fullDescription}
        </div>

        {/* Key Inclusions / Features */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
            What is Included in This Service:
          </h4>
          <div className="space-y-2">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="flex-1 py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-brand-600/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="py-3 px-6 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs sm:text-sm transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

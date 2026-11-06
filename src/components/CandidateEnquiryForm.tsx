import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  whatsappNumber: string;
  experienceLevel: string;
  technology: string;
  targetRole: string;
  servicesInterested: string[];
  expectedInterviewDate: string;
  additionalMessage: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  whatsappNumber?: string;
  experienceLevel?: string;
  technology?: string;
  targetRole?: string;
  servicesInterested?: string;
}

export const CandidateEnquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    whatsappNumber: '',
    experienceLevel: '',
    technology: '',
    targetRole: '',
    servicesInterested: ['Technical Interview Preparation', 'Mock Interview'],
    expectedInterviewDate: '',
    additionalMessage: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableServices = [
    'Technical Interview Preparation',
    'Interview Question Bank',
    'Resume Preparation',
    'LinkedIn Optimization',
    'Naukri Optimization',
    'Mock Interview',
    'Performance Analysis',
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp Number is required';
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(formData.whatsappNumber.replace(/[\s-]/g, ''))) {
      newErrors.whatsappNumber = 'Please enter a valid phone/WhatsApp number';
    }

    if (!formData.experienceLevel) {
      newErrors.experienceLevel = 'Please select your current experience level';
    }

    if (!formData.technology) {
      newErrors.technology = 'Please select your current technology specialization';
    }

    if (!formData.targetRole.trim()) {
      newErrors.targetRole = 'Target Role is required';
    }

    if (formData.servicesInterested.length === 0) {
      newErrors.servicesInterested = 'Please select at least one service of interest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesInterested.includes(service);
      const updated = exists
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service];
      return { ...prev, servicesInterested: updated };
    });
    if (errors.servicesInterested) {
      setErrors((prev) => ({ ...prev, servicesInterested: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate frontend validation response
    // Identified integration endpoint for production backend (e.g. Supabase, Webhook, Formspree)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F7F7F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Candidate Enquiry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Let's Understand Your Interview Preparation Goals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Fill out the details below to discuss your current experience, target roles, and personalized preparation requirements with Rani.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-4xl border border-gray-200/90 shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Subtle Purple Top Border */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-600" />

          {isSubmitted ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-gray-900">
                  Enquiry Form Validated Successfully!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Your details have been reviewed through client-side validation.
                </p>
              </div>

              {/* Backend Integration Architecture Note */}
              <div className="p-4 rounded-2xl bg-brand-50/70 border border-brand-200 text-left text-xs text-brand-900 max-w-lg mx-auto space-y-2">
                <div className="flex items-center gap-1.5 font-bold">
                  <Info className="w-4 h-4 text-brand-600" />
                  <span>Integration Status: Frontend UI Ready</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  All candidate fields (Experience: {formData.experienceLevel}, Specialization: {formData.technology}, Services: {formData.servicesInterested.length} selected) are verified. Connect this component's <code className="bg-white px-1 py-0.5 rounded text-brand-700 font-mono">handleSubmit</code> function to your preferred endpoint (e.g. Supabase table, Formspree, Resend email API, or WhatsApp automation).
                </p>
              </div>

              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: '',
                    email: '',
                    whatsappNumber: '',
                    experienceLevel: '',
                    technology: '',
                    targetRole: '',
                    servicesInterested: ['Technical Interview Preparation'],
                    expectedInterviewDate: '',
                    additionalMessage: '',
                  });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors"
              >
                <span>Submit Another Enquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              
              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="fullName"
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                          : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="e.g. rahul.sharma@example.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: WhatsApp & Target Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="whatsappNumber" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="whatsappNumber"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.whatsappNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, whatsappNumber: e.target.value });
                      if (errors.whatsappNumber) setErrors({ ...errors, whatsappNumber: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.whatsappNumber
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.whatsappNumber && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.whatsappNumber}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="targetRole" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Target Role <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="targetRole"
                    type="text"
                    placeholder="e.g. D365 Senior Developer / Power Platform Consultant"
                    value={formData.targetRole}
                    onChange={(e) => {
                      setFormData({ ...formData, targetRole: e.target.value });
                      if (errors.targetRole) setErrors({ ...errors, targetRole: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.targetRole
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                  {errors.targetRole && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.targetRole}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Current Experience & Current Technology Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="experienceLevel" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Current Experience Level <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={(e) => {
                      setFormData({ ...formData, experienceLevel: e.target.value });
                      if (errors.experienceLevel) setErrors({ ...errors, experienceLevel: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.experienceLevel
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  >
                    <option value="">Select Experience Level</option>
                    <option value="Fresher">Fresher / Graduate</option>
                    <option value="1–2 Years">1–2 Years</option>
                    <option value="3–5 Years">3–5 Years</option>
                    <option value="5+ Years">5+ Years (Senior)</option>
                  </select>
                  {errors.experienceLevel && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.experienceLevel}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="technology" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Current Technology Focus <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="technology"
                    value={formData.technology}
                    onChange={(e) => {
                      setFormData({ ...formData, technology: e.target.value });
                      if (errors.technology) setErrors({ ...errors, technology: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl border text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.technology
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-400'
                        : 'border-gray-200 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  >
                    <option value="">Select Technology Focus</option>
                    <option value="Dynamics 365 CRM">Dynamics 365 CRM / Customer Engagement</option>
                    <option value="Power Platform">Power Platform (Power Apps & Automate)</option>
                    <option value="Both">Both (D365 CE & Power Platform)</option>
                    <option value="Other">Other / Career Switcher (.NET, Java, etc.)</option>
                  </select>
                  {errors.technology && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.technology}
                    </p>
                  )}
                </div>
              </div>

              {/* Services Interested In (Multi-Select Checkboxes) */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Services Interested In <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableServices.map((service) => {
                    const isChecked = formData.servicesInterested.includes(service);
                    return (
                      <label
                        key={service}
                        className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer text-xs font-medium transition-all ${
                          isChecked
                            ? 'border-brand-300 bg-brand-50/50 text-brand-900 font-semibold'
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceToggle(service)}
                          className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 border-gray-300"
                        />
                        <span>{service}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.servicesInterested && (
                  <p className="text-xs text-rose-500 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.servicesInterested}
                  </p>
                )}
              </div>

              {/* Row 4: Expected Interview Date (Optional) */}
              <div>
                <label htmlFor="expectedInterviewDate" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Expected Interview Date <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  id="expectedInterviewDate"
                  type="date"
                  value={formData.expectedInterviewDate}
                  onChange={(e) => setFormData({ ...formData, expectedInterviewDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                />
              </div>

              {/* Row 5: Additional Message */}
              <div>
                <label htmlFor="additionalMessage" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Additional Details or Specific Questions <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <textarea
                  id="additionalMessage"
                  rows={3}
                  placeholder="Share any specific topics, recent interview experiences, or immediate target deadlines..."
                  value={formData.additionalMessage}
                  onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-brand-600 hover:bg-brand-700 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-brand-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Validating Details...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>

              {/* Honest note on backend / integration */}
              <div className="pt-2 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-gray-400" />
                <span>Frontend validation active. Configurable with your preferred email or database backend.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

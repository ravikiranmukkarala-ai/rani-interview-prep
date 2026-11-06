import React, { useState } from 'react';
import { sampleQuestionsData, questionCategories } from '../data/questions';
import { Check, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';

interface QuestionBankPreviewProps {
  onOpenConsultation: () => void;
}

export const QuestionBankPreview: React.FC<QuestionBankPreviewProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [expandedId, setExpandedId] = useState<string | null>('q1'); // default first sample open

  const filteredQuestions = selectedCategory === 'All Categories'
    ? sampleQuestionsData
    : sampleQuestionsData.filter((q) => q.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="questions" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Question Bank Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Don't Start Your Preparation from Zero
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Explore organized interview preparation topics and practise the concepts that matter for your target role.
          </p>

          {/* Category Tabs / Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {questionCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white shadow-sm'
                    : 'bg-gray-100 hover:bg-gray-200/80 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Notice on Sample Preparation Content */}
        <div className="mb-8 max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/70 text-xs font-medium text-brand-800">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Sample Interview Preparation Questions – Representative preview for conceptual revision</span>
          </span>
        </div>

        {/* Question Cards List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => {
              const isExpanded = expandedId === q.id;
              return (
                <div
                  key={q.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isExpanded
                      ? 'border-brand-300 bg-brand-50/20 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'
                  }`}
                >
                  {/* Card Header / Click to Expand */}
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-none"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                          {q.category}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                            q.difficulty === 'Beginner'
                              ? 'bg-emerald-50 text-emerald-700'
                              : q.difficulty === 'Intermediate'
                              ? 'bg-amber-50 text-amber-700'
                              : 'bg-rose-50 text-rose-700'
                          }`}
                        >
                          {q.difficulty}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-brand-600" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-gray-100 space-y-4">
                      {/* Scenario Context if present */}
                      {q.scenarioContext && (
                        <div className="text-xs text-brand-800 bg-brand-50/80 p-3 rounded-xl border border-brand-100">
                          <span className="font-bold">Interview Context: </span>
                          {q.scenarioContext}
                        </div>
                      )}

                      {/* Explanation Summary */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                          Sample Answer Structure:
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {q.sampleAnswerSummary}
                        </p>
                      </div>

                      {/* Key Points Bullet List */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                          Key Evaluation Points to Articulate:
                        </h4>
                        <div className="space-y-1.5">
                          {q.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                              <Check className="w-3.5 h-3.5 text-brand-600 flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-10 text-center bg-gray-50 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600">
                Additional questions for this category are part of our live 1-on-1 coaching question repository.
              </p>
              <button
                onClick={() => setSelectedCategory('All Categories')}
                className="mt-3 text-xs font-semibold text-brand-600 hover:underline"
              >
                View All Sample Questions
              </button>
            </div>
          )}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md shadow-brand-600/25 transition-all"
          >
            <span>Explore Complete Interview Preparation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-600 mt-2">
            Includes role-specific scenario questions, architectural whiteboarding drills, and live project explanations.
          </p>
        </div>

      </div>
    </section>
  );
};

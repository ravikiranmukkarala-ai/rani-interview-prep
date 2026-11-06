import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Info, Sparkles, Award } from 'lucide-react';

interface MetricCategory {
  name: string;
  score: number;
  ratingText: string;
  focusArea: string;
  notes: string;
}

export const PerformanceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'strengths' | 'roadmap'>('overview');

  const assessmentMetrics: MetricCategory[] = [
    {
      name: 'Technical Knowledge',
      score: 88,
      ratingText: 'Strong Foundation',
      focusArea: 'Dataverse & Plugins',
      notes: 'Excellent recall of plugin pipeline stages (10, 20, 40) and Dataverse relationship cascading rules.'
    },
    {
      name: 'Concept Clarity',
      score: 85,
      ratingText: 'Proficient',
      focusArea: 'Sync vs Async Workflows',
      notes: 'Clear architectural reasoning regarding when to deploy Power Automate vs C# plugins.'
    },
    {
      name: 'Problem Solving',
      score: 82,
      ratingText: 'Good Approach',
      focusArea: 'High-Volume Batch Integrations',
      notes: 'Suggested ExecuteMultiple with throttling safeguards, demonstrating realistic enterprise awareness.'
    },
    {
      name: 'Scenario Handling',
      score: 78,
      ratingText: 'Needs Practical Drill',
      focusArea: 'ALM Solution Conflicts',
      notes: 'Needs crisper articulation when resolving managed solution layering clashes across test environments.'
    },
    {
      name: 'Communication & Confidence',
      score: 90,
      ratingText: 'Very High',
      focusArea: 'Verbal Delivery',
      notes: 'Confident tone, professional tech vocabulary, and concise responses without filler words.'
    },
    {
      name: 'Answer Structure',
      score: 84,
      ratingText: 'Effective',
      focusArea: 'STAR Methodology',
      notes: 'Well-structured project storytelling utilizing Situation, Task, Action, Result framework.'
    }
  ];

  const overallAverage = Math.round(
    assessmentMetrics.reduce((acc, m) => acc + m.score, 0) / assessmentMetrics.length
  );

  return (
    <section className="py-20 md:py-28 bg-[#F7F7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-100 border border-brand-200 text-brand-700 text-xs font-bold tracking-wider uppercase mb-3">
            Diagnostic Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Know Where You Stand Before Your Next Interview
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Understand your preparation level and identify the topics that deserve more attention before your next interview.
          </p>

          {/* Prominent Demonstration Data Label */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
            <Info className="w-3.5 h-3.5 text-amber-600" />
            <span>Demonstration Data – Illustrative sample diagnostic indicators only</span>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white rounded-4xl border border-gray-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Dashboard Header Bar */}
          <div className="bg-gradient-to-r from-gray-900 via-brand-950 to-gray-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs uppercase tracking-wider font-bold text-brand-300">
                  Sample Candidate Diagnostic Scorecard
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Dynamics 365 CE & Power Platform Evaluation
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Evaluation target: Senior Technical Consultant / Specialist
              </p>
            </div>

            {/* Overall Score Badge */}
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15 flex items-center gap-4">
              <div>
                <div className="text-[10px] uppercase font-bold text-gray-300">Overall Readiness</div>
                <div className="text-3xl font-black text-white">{overallAverage}%</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-brand-500/30 flex items-center justify-center text-brand-300">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="border-b border-gray-100 bg-gray-50/50 px-6 sm:px-8 py-3 flex gap-2 sm:gap-4 text-xs font-bold">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-brand-700 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Assessment Categories (6)
            </button>
            <button
              onClick={() => setActiveTab('strengths')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'strengths'
                  ? 'bg-white text-brand-700 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Identified Strengths & Blind Spots
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-4 py-2 rounded-xl transition-all ${
                activeTab === 'roadmap'
                  ? 'bg-white text-brand-700 shadow-sm border border-gray-200'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Actionable Revision Roadmap
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {assessmentMetrics.map((metric) => (
                  <div
                    key={metric.name}
                    className="p-5 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-brand-200 hover:bg-white transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-gray-900">{metric.name}</span>
                      <span className="text-xs font-extrabold text-brand-700 px-2 py-0.5 rounded bg-brand-50 border border-brand-100">
                        {metric.score}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-brand-600 to-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="font-medium text-gray-700">{metric.ratingText}</span>
                      <span>Key Area: {metric.focusArea}</span>
                    </div>

                    <p className="text-xs text-gray-600 bg-white p-2.5 rounded-xl border border-gray-100 leading-relaxed">
                      {metric.notes}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'strengths' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Strengths */}
                <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Demonstrated Strengths</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0"></span>
                      <span>Clear grasp of synchronous vs asynchronous plugin lifecycles and transaction rollbacks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0"></span>
                      <span>Strong command of Dataverse 1:N, N:1, and native vs manual N:N relationship modeling.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0"></span>
                      <span>Natural, articulate communication style with structured point-by-point project delivery.</span>
                    </li>
                  </ul>
                </div>

                {/* Priority Focus Areas */}
                <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-200/80 space-y-4">
                  <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <span>Priority Focus & Revision Areas</span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                      <span>Practice answering ALM solution patching and environment deployment pipeline questions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                      <span>Review Power Automate concurrency control settings and Dataverse API rate-limiting caps.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                      <span>Reframe resume project explanations to emphasize business impact alongside code details.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'roadmap' && (
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-brand-50/60 border border-brand-200/80 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-brand-900">
                      Personalized 1-Week Mock Action Plan
                    </h4>
                    <p className="text-xs text-brand-800 mt-1">
                      Based on this sample diagnostic, candidate receives a 3-step actionable study roadmap before the next technical interview.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <span className="font-bold text-brand-600">Day 1 - 2: Architecture Deep-Dive</span>
                    <p className="text-gray-600 leading-relaxed">
                      Re-read Dataverse security models (Access vs Owner Teams) and review Azure Service Bus integration patterns.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <span className="font-bold text-brand-600">Day 3 - 4: Scenario Verbal Drills</span>
                    <p className="text-gray-600 leading-relaxed">
                      Practice answering 5 scenario-based questions aloud using the STAR format (Situation, Task, Action, Result).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-200 bg-white space-y-2">
                    <span className="font-bold text-brand-600">Day 5: Secondary Mock Check</span>
                    <p className="text-gray-600 leading-relaxed">
                      Follow-up 30-minute mini-mock focused strictly on the revised weak spots to verify improvement.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Transparency Notice */}
          <div className="bg-gray-50 border-t border-gray-100 p-4 sm:p-5 text-center text-xs text-gray-500">
            * Note: The scores and diagnostics shown above are sample indicators designed to illustrate our feedback format. Live candidate scorecards are generated individually after 1-on-1 mock interviews.
          </div>

        </div>

      </div>
    </section>
  );
};

export interface ServiceItem {
  id: string;
  title: string;
  category: 'interview' | 'profile' | 'evaluation';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  iconName: string;
  badge?: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'technical-interview-preparation',
    title: 'Technical Interview Preparation',
    category: 'interview',
    shortDescription: 'Prepare for Dynamics 365 CRM and Power Platform technical interviews with topic-based questions, concept explanations, and practical scenarios.',
    fullDescription: 'Get focused, 1-on-1 technical coaching targeted towards Microsoft Dynamics 365 Customer Engagement and Power Platform technical roles. We review core architectural patterns, out-of-the-box capabilities versus custom development tradeoffs, and practical problem-solving to help you articulate technical decisions confidently.',
    features: [
      'Technical question preparation & concept revision',
      'Real-world business scenario discussions',
      'Role-focused preparation (Developer, Consultant, Architect)',
      'Customization, plugin & automation architecture review'
    ],
    iconName: 'Code2',
    badge: 'Core Program'
  },
  {
    id: 'interview-question-bank',
    title: 'Interview Question Bank',
    category: 'interview',
    shortDescription: 'Access an organized collection of interview preparation questions to help you prepare systematically instead of starting from scratch.',
    fullDescription: 'Save dozens of hours of unorganized internet searching. Our curated question bank categorizes the most essential conceptual, code-level, and architectural questions across Dataverse, Plugins, Power Apps, and Automations with clear explanations.',
    features: [
      'Topic-wise organized technical questions',
      'Technology-specific deep dives (CE & Power Platform)',
      'Practical scenario-based questions with solutions',
      'Clear explanations, architectural diagrams & revision notes'
    ],
    iconName: 'BookOpen',
    badge: 'Study Material'
  },
  {
    id: 'resume-preparation-optimization',
    title: 'Resume Preparation & Optimization',
    category: 'profile',
    shortDescription: 'Present your technical skills, projects, responsibilities, and experience in a clear, high-impact and professional format.',
    fullDescription: 'Many qualified candidates are filtered out before reaching the technical round due to vague project summaries or poor keyword formatting. We help you structure your project contributions, technology versions, and quantifiable achievements in an ATS-friendly format.',
    features: [
      'ATS-friendly formatting and structure guidance',
      'Accurate technical skills categorization & highlighting',
      'Project contribution and responsibility storytelling',
      'Detailed resume review, feedback, and iterative polish'
    ],
    iconName: 'FileText',
    badge: 'High Impact'
  },
  {
    id: 'linkedin-profile-optimization',
    title: 'LinkedIn Profile Optimization',
    category: 'profile',
    shortDescription: 'Build a professional LinkedIn presence that clearly communicates your technical expertise and career goals to recruiters.',
    fullDescription: 'Recruiters and hiring managers actively search LinkedIn for specialized Dynamics 365 and Power Platform talent. We guide you on optimizing your headline, about section, featured projects, and skill endorsements to maximize profile visibility and recruiter reach outs.',
    features: [
      'Role-targeted professional headline crafting',
      'Engaging and authentic "About" summary drafting',
      'Skills and experience alignment for recruiter search filters',
      'Guidance on presenting key client deliverables & projects'
    ],
    iconName: 'Linkedin',
    badge: 'Recruiter Visibility'
  },
  {
    id: 'naukri-profile-optimization',
    title: 'Naukri Profile Optimization',
    category: 'profile',
    shortDescription: 'Improve your Naukri profile so your technical skills and professional experience are presented clearly for top IT employers.',
    fullDescription: 'Naukri remains one of the largest job portals in the IT services and enterprise ecosystem. We help you set up an optimized profile with high-ranking search keywords, proper role categories, and completeness to improve recruiter view rates.',
    features: [
      'Naukri profile setup & resume headline guidance',
      'Key technical keyword indexing (Dataverse, Plugins, Power Automate)',
      'Employment details, project scope, and client role structuring',
      'Profile completeness scoring and search ranking tips'
    ],
    iconName: 'Briefcase',
    badge: 'Portal Reach'
  },
  {
    id: 'technical-mock-interviews',
    title: 'Technical Mock Interviews',
    category: 'evaluation',
    shortDescription: 'Experience realistic practice interviews designed around your target role and technical experience level.',
    fullDescription: 'Simulate the exact environment of technical interview panels at leading MNCs, GSIs, and product organizations. Practice answering challenging scenario questions under friendly, realistic conditions and eliminate interview anxiety.',
    features: [
      'Realistic 45-60 min technical mock interview session',
      'Scenario-based problem solving & architectural discussions',
      'Live project walkthrough and experience articulation check',
      'Real-time answer structure and communication coaching'
    ],
    iconName: 'Video',
    badge: 'Most Popular'
  },
  {
    id: 'interview-performance-analysis',
    title: 'Interview Performance Analysis',
    category: 'evaluation',
    shortDescription: 'Understand your strengths and identify the areas that need improvement through structured, transparent feedback.',
    fullDescription: 'Receive a structured diagnostic breakdown following your mock interview. We evaluate your core concepts, scenario problem-solving, verbal clarity, and answer structure, giving you an actionable revision plan before your actual interviews.',
    features: [
      'Objective multi-factor evaluation scorecard',
      'Identification of technical blind spots & weak topics',
      'Practical improvement recommendations & answer reframing',
      'Personalized preparation roadmap tailored to your target role'
    ],
    iconName: 'BarChart3',
    badge: 'Diagnostic Report'
  }
];

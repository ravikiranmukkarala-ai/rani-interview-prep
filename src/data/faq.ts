export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    question: 'Who can use these interview preparation services?',
    answer: 'Our services are tailored for individuals pursuing or advancing technical careers in Microsoft Dynamics 365 CRM and Power Platform. This includes IT freshers seeking their initial technology roles, experienced developers and functional consultants aiming for senior positions, cross-technology professionals switching from .NET/Java/Salesforce to Microsoft Business Applications, and professionals re-entering the workforce.'
  },
  {
    question: 'Do you support freshers and experienced professionals?',
    answer: 'Yes, absolutely. For freshers, we focus heavily on foundational Dataverse concepts, standard CRM modules, basic Power Automate flows, model-driven apps, resume structure, and building confidence in answering core technical questions. For experienced professionals (1 to 5+ years), we focus on complex architectural trade-offs, custom plugin development, client scripting, enterprise integrations, ALM, performance tuning, and project storytelling.'
  },
  {
    question: 'Which technologies do you cover?',
    answer: 'We specialize exclusively in the Microsoft Business Applications ecosystem: Microsoft Dynamics 365 Customer Engagement (Sales, Customer Service, Field Service, Core CRM), Dataverse, Model-Driven Apps, Canvas Apps, Power Automate (Cloud & Desktop), Power BI integration basics, Power Pages (Portals), C# Plugins, JavaScript Client API, and custom connectors.'
  },
  {
    question: 'Do you provide technical mock interviews?',
    answer: 'Yes. Our mock interviews simulate real corporate technical interview rounds. We conduct 45-60 minute 1-on-1 sessions covering theoretical concepts, live coding/scripting walkthroughs, practical scenario discussions, and questions on your target resume projects. You receive immediate verbal feedback followed by a structured written performance summary.'
  },
  {
    question: 'Can you help improve my resume?',
    answer: 'Yes. We review your resume to make sure it is ATS-compliant, well-structured, and clearly highlights your relevant technical skills, project contributions, and certifications. We help you transform generic bullet points into compelling project descriptions that demonstrate your real technical involvement.'
  },
  {
    question: 'Do you help with LinkedIn and Naukri profiles?',
    answer: 'Yes. We provide comprehensive profile optimization for both LinkedIn and Naukri. This includes writing keyword-rich headlines and summaries, selecting the right skills and tags for recruiter visibility, formatting project descriptions, and ensuring your profile completeness ranks well in recruiter searches.'
  },
  {
    question: 'How does interview performance analysis work?',
    answer: 'Following a mock interview or technical diagnostic, we evaluate your performance across 6 core pillars: Technical Knowledge, Concept Clarity, Problem-Solving, Real-World Scenario Handling, Communication, and Answer Structure. You receive a diagnostic breakdown highlighting your strongest areas, specific blind spots, and a personalized revision roadmap.'
  },
  {
    question: 'Can I choose individual services?',
    answer: 'Yes. You have the flexibility to select only the specific services you need — whether that is a standalone resume review, a single mock interview, LinkedIn profile optimization, or our complete end-to-end interview preparation package. You can discuss your goals in a free consultation to identify the best fit.'
  },
  {
    question: 'Do you guarantee interview selection or job placement?',
    answer: 'No interview selection or job placement can be guaranteed. Our focus is on structured preparation, practical interview practice, professional profile improvement, and actionable feedback. We empower you with technical clarity, confidence, and polished presentation so you can approach real client and company interviews at your absolute best.'
  }
];

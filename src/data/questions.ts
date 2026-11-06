export interface QuestionItem {
  id: string;
  category: string;
  question: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  sampleAnswerSummary: string;
  keyPoints: string[];
  scenarioContext?: string;
}

export const questionCategories = [
  'All Categories',
  'Dynamics 365 CRM Fundamentals',
  'Dataverse',
  'Plugins',
  'JavaScript',
  'Workflows',
  'Security Roles',
  'Power Apps',
  'Power Automate',
  'Power BI',
  'Scenario-Based Questions'
] as const;

export const sampleQuestionsData: QuestionItem[] = [
  {
    id: 'q1',
    category: 'Plugins',
    question: 'What is the difference between synchronous and asynchronous plugins in Dynamics 365?',
    difficulty: 'Intermediate',
    sampleAnswerSummary: 'Synchronous plugins execute immediately within the database transaction pipeline, blocking the user interface until completed. If an unhandled exception occurs, the entire database transaction is rolled back. Asynchronous plugins, in contrast, are queued to the Asynchronous Service (CrmQueue) and execute in the background without blocking the caller, making them ideal for long-running integrations, external HTTP calls, or batch operations.',
    keyPoints: [
      'Execution Stage: Synchronous runs on Pre-Validation (10), Pre-Operation (20), or Post-Operation (40). Asynchronous only runs on Post-Operation (40).',
      'Transaction Rollback: Synchronous plugins can abort the core transaction if an InvalidPluginExecutionException is thrown. Asynchronous plugins cannot roll back the original database transaction.',
      'Execution Timeout: Synchronous plugins strictly enforce a 2-minute timeout limit before being aborted by the sandbox host.',
      'User Experience: Synchronous delays UI response; Asynchronous provides non-blocking, queued processing.'
    ],
    scenarioContext: 'Commonly asked when discussing payment gateway confirmations, external ERP syncing, or real-time validation checks.'
  },
  {
    id: 'q2',
    category: 'Dataverse',
    question: 'What are the different types of relationships in Dataverse?',
    difficulty: 'Beginner',
    sampleAnswerSummary: 'Dataverse supports three primary relationship types: One-to-Many (1:N), Many-to-One (N:1), and Many-to-Many (N:N). Relationships define how rows in one table associate with rows in another and govern cascading behaviors (such as Cascade Delete, Assign, Share, or Reparent).',
    keyPoints: [
      '1:N (One-to-Many): A single parent record relates to multiple child records (e.g., One Account has many Contacts). Creates a lookup column on the child table.',
      'N:1 (Many-to-One): Viewed from the child perspective looking up to the parent entity.',
      'N:N (Many-to-Many): Multiple records in one table relate to multiple records in another. Can be Native N:N (system manages intersect table automatically) or Manual N:N (custom intersect table with additional business columns).',
      'Cascading Behaviors: Configurable as Cascade All, Cascade Active, Cascade User-Owned, or Cascade None for actions like Assign, Delete, Share, and Merge.'
    ],
    scenarioContext: 'Interviewers often ask this to test your database modeling fundamentals and whether you know when to use manual intersect tables vs native N:N.'
  },
  {
    id: 'q3',
    category: 'Power Automate',
    question: 'How can Power Automate be used to automate a business process?',
    difficulty: 'Intermediate',
    sampleAnswerSummary: 'Power Automate automates multi-step business logic and cross-application workflows using triggers, actions, and conditional branching. Within the Microsoft ecosystem, it acts as the primary cloud-first orchestrator to replace legacy background workflows, handle multi-tier approvals, interact with third-party APIs via connectors, and synchronize data between Dataverse and external systems.',
    keyPoints: [
      'Trigger Types: Automated (e.g., When a row is added/modified in Dataverse), Instant/Button flows (triggered by users or Power Apps), and Scheduled recurring flows.',
      'Dataverse Connector: Uses the modern "Microsoft Dataverse" connector supporting change tracking, filter rows (OData queries), and run-time impersonation.',
      'Error Handling & Reliability: Utilizes "Scope" blocks configured with "Configure run after" conditions to emulate try-catch-finally exception handling.',
      'Business Process Approvals: Native modern Approval actions with timeout policies, adaptive cards in Microsoft Teams, and actionable email notifications.'
    ],
    scenarioContext: 'Frequently asked to evaluate how you transition legacy Dynamics workflows into modern Power Automate cloud flows without introducing throttling issues.'
  },
  {
    id: 'q4',
    category: 'JavaScript',
    question: 'How do you prevent a form save in Dynamics 365 Model-Driven Apps using the Client API?',
    difficulty: 'Intermediate',
    sampleAnswerSummary: 'In the OnSave event handler, you pass the executionContext as the first parameter. Retrieve the save event arguments using executionContext.getEventArgs() and call preventDefault(). This halts the save operation, allowing you to show an error notification via formContext.ui.setFormNotification().',
    keyPoints: [
      'Always check the "Pass execution context as first parameter" checkbox in the form event handler configuration.',
      'Call executionContext.getEventArgs().preventDefault() to cancel the save operation.',
      'Use executionContext.getEventArgs().getSaveMode() to determine if the save was triggered by AutoSave (70), Save & Close (2), or standard Save (1).',
      'Avoid deprecated window.alert() or confirm(); use Xrm.Navigation.openAlertDialog() instead.'
    ],
    scenarioContext: 'Tests your understanding of client-side event lifecycle and modern non-blocking UI conventions.'
  },
  {
    id: 'q5',
    category: 'Security Roles',
    question: 'What is the difference between Owner Teams and Access Teams in Dynamics 365?',
    difficulty: 'Advanced',
    sampleAnswerSummary: 'Owner Teams can own records directly and have assigned security roles that bestow privileges upon their members. Access Teams do not own records and cannot have security roles directly assigned; instead, they provide lightweight row-level sharing through an Access Team Template without generating heavy PrincipalObjectAccess (POA) table overhead.',
    keyPoints: [
      'Record Ownership: Owner Teams can own records; Access Teams cannot own records.',
      'Security Roles: Owner Teams have security roles; Access Teams do not.',
      'Performance / POA Table: Access Teams are much lighter on database resources and recommended for dynamic, cross-business-unit collaboration on individual records.',
      'Access Team Templates: Predefined permissions (Read, Write, Append, Append To, Assign, Share) applied automatically upon adding users.'
    ],
    scenarioContext: 'Evaluates enterprise architectural knowledge for high-volume collaborative environments.'
  },
  {
    id: 'q6',
    category: 'Scenario-Based Questions',
    question: 'Scenario: A client needs to update 50,000 records daily from an external ERP. Would you use a Plugin, Power Automate, or Azure Integration?',
    difficulty: 'Advanced',
    sampleAnswerSummary: 'For high-volume batch syncs (50,000 records), synchronous plugins and standard Power Automate cloud flows are inappropriate due to sandbox timeout limits (2 min) and Power Automate API throttling caps. The recommended architectural solution is an asynchronous integration utilizing Azure Functions or Azure Data Factory with the Dataverse Web API ExecuteMultiple or ExecuteTransaction requests, using bulk Upsert requests and Change Tracking.',
    keyPoints: [
      'Identify constraints: Plugin 2-minute sandbox limit; Power Automate daily API call limits & loop throttling.',
      'Architectural fit: Azure Function with C# SDK, or Azure Data Factory / SSIS with KingswaySoft.',
      'Batch optimization: Utilize ExecuteMultiple / batch requests with optimal concurrency (2-4 threads) to prevent Dataverse 429 Too Many Requests.',
      'Incremental updates: Enable Change Tracking on Dataverse tables to sync only delta changes rather than entire datasets.'
    ],
    scenarioContext: 'Tests enterprise scalability awareness and realistic consultancy decision-making.'
  }
];

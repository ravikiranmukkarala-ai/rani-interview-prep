export interface TechTopic {
  title: string;
  badge: string;
  description: string;
  accentColor: string;
  items: {
    name: string;
    description: string;
    keyConcepts: string[];
  }[];
}

export const technologiesData: TechTopic[] = [
  {
    title: 'Microsoft Dynamics 365 CRM / Customer Engagement',
    badge: 'Enterprise CRM Core',
    description: 'Deep architectural and practical interview preparation covering standard modules, custom development, business logic, and security frameworks in Dynamics 365 CE.',
    accentColor: 'brand',
    items: [
      {
        name: 'Dataverse & Data Modeling',
        description: 'Tables, Columns, Relationships (1:N, N:1, N:N), Keys, and Entity metadata architecture.',
        keyConcepts: ['Table Relationships', 'Calculated & Rollup Columns', 'Virtual Tables', 'Alternate Keys']
      },
      {
        name: 'Model-Driven Apps & Customization',
        description: 'Form types, views, dashboards, ribbon workbench customizations, and command bar actions.',
        keyConcepts: ['Modern Command Bar', 'Ribbon Workbench', 'Sub-grids & Views', 'Form Scripts']
      },
      {
        name: 'Plugins & Custom Workflow Activities',
        description: 'C# plugin development, execution pipeline, pre/post events, images, and sandboxed limitations.',
        keyConcepts: ['Execution Pipeline Stages (10, 20, 40)', 'Sync vs Async Execution', 'Pre & Post Images', 'Plugin Context']
      },
      {
        name: 'Client-side Scripting (JavaScript)',
        description: 'Client API object model, form events (OnLoad, OnSave, OnChange), Xrm.WebApi, and best practices.',
        keyConcepts: ['Form Context ExecutionContext', 'Xrm.WebApi CRUD & FetchXML', 'Event Handlers', 'Web Resources']
      },
      {
        name: 'Business Rules & Workflows',
        description: 'Declarative logic, client vs server scope, background asynchronous workflows, and modern alternatives.',
        keyConcepts: ['Business Rule Scopes', 'Real-time vs Background Workflows', 'Process Triggering', 'Transition to Power Automate']
      },
      {
        name: 'Security Roles & Privileges',
        description: 'Business Units, Roles, Privileges, Access Levels, Teams (Owner vs Access Teams), and Field Security.',
        keyConcepts: ['Security Privileges & Depth', 'Business Units Hierarchy', 'Field-level Security Profiles', 'Access Teams']
      },
      {
        name: 'Solutions & ALM',
        description: 'Managed vs unmanaged solutions, publisher configurations, patch management, and ALM deployment pipelines.',
        keyConcepts: ['Solution Layering', 'Patching & Upgrades', 'Environment Variables', 'Deployment Best Practices']
      },
      {
        name: 'Integrations & Webhooks',
        description: 'Dataverse Web API (OData v4), Azure Service Bus, Webhooks, Azure Logic Apps, and external service connectors.',
        keyConcepts: ['Web API (OData v4)', 'Azure Service Bus Listener', 'Webhook Registration', 'Batch Requests']
      }
    ]
  },
  {
    title: 'Microsoft Power Platform',
    badge: 'Low-Code Enterprise Suite',
    description: 'Comprehensive preparation for Power Apps, automated cloud workflows, enterprise reporting, modern web portals, and custom connectors.',
    accentColor: 'indigo',
    items: [
      {
        name: 'Power Apps (Canvas & Model-Driven)',
        description: 'Designing intuitive Canvas apps, responsive layouts, Power Fx expressions, and Model-Driven architectures.',
        keyConcepts: ['Power Fx Formulas & Collections', 'Responsive Containers', 'Component Libraries', 'Delegation Limits']
      },
      {
        name: 'Power Automate (Cloud & Desktop Flows)',
        description: 'Automated, scheduled, and instant flows, triggers, approvals, error handling (scope/run after), and Dataverse connector.',
        keyConcepts: ['Triggers & Actions', 'Scope & Try-Catch Error Handling', 'Dataverse (current environment) Connector', 'Batch processing & Concurrency']
      },
      {
        name: 'Power BI Integration',
        description: 'Connecting to Dataverse via TDS endpoint or direct query, building dashboards, and embedding visual analytics.',
        keyConcepts: ['DirectQuery vs Import', 'TDS Endpoint in Dataverse', 'DAX Calculations', 'Power BI Embedded in CE']
      },
      {
        name: 'Power Pages (Portals)',
        description: 'External customer-facing websites, Web roles, entity lists, forms, Liquid templates, and web API security.',
        keyConcepts: ['Web Roles & Table Permissions', 'Liquid Template Language', 'Portal Web API', 'Authentication Providers']
      },
      {
        name: 'Standard & Custom Connectors',
        description: 'Building custom connectors via OpenAPI (Swagger) specifications, authentication (OAuth 2.0), and policy templates.',
        keyConcepts: ['OpenAPI 2.0/3.0 Definition', 'OAuth 2.0 / API Key Auth', 'Connector Policies', 'On-Premises Data Gateway']
      },
      {
        name: 'Platform Architecture & Governance',
        description: 'Environment strategy (Dev, Test, Prod), Center of Excellence (CoE), DLP (Data Loss Prevention) policies, and licensing.',
        keyConcepts: ['DLP Policies', 'Environment Lifecycle', 'CoE Starter Kit', 'Capacity Management']
      }
    ]
  }
];

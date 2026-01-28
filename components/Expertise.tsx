export default function Expertise() {
  const aiChallenges = [
    { challenge: 'LLM Behavioral Instability', solution: 'State machine (FSM) with deterministic transitions' },
    { challenge: 'Lack of Testability', solution: 'Structured dialog flows, branch testing, regression suites' },
    { challenge: 'Compliance Requirements', solution: 'Audit trails, fact storage, PII masking, version control' },
    { challenge: 'High Cost of Changes', solution: 'Visual editors for non-developers, scenario versioning' },
    { challenge: 'Context Management', solution: 'Fact storage, artifact tracking, session profiles' },
    { challenge: 'Multi-model Orchestration', solution: 'Policy-based routing, fallback strategies, cost optimization' },
  ];

  const aiModels = [
    { model: 'Claude Opus 4', vendor: 'Anthropic', use: 'Complex reasoning, architecture, code review' },
    { model: 'Claude 3.5 Sonnet', vendor: 'Anthropic', use: 'Fast iteration, code generation, documentation' },
    { model: 'GPT-4 / GPT-4o', vendor: 'OpenAI', use: 'General purpose, API integrations, embeddings' },
    { model: 'Grok', vendor: 'xAI', use: 'Real-time information, unconventional perspectives' },
    { model: 'Gemini Pro', vendor: 'Google', use: 'Multimodal, long context' },
    { model: 'Llama 3.x', vendor: 'Meta', use: 'Self-hosted, privacy-sensitive' },
  ];

  const techStack = [
    { category: 'Languages', tech: 'Go, Rust, Python, TypeScript, C++, C#' },
    { category: 'Databases', tech: 'PostgreSQL, Cassandra, MongoDB, Redis, MySQL, Vector DBs (Pinecone, Weaviate, Qdrant)' },
    { category: 'LLM Providers', tech: 'OpenAI (GPT-4, Whisper), Claude (Opus, Sonnet), Gemini, Llama, Grok' },
    { category: 'AI Frameworks', tech: 'LangChain, LlamaIndex, Hugging Face, spaCy, NLTK' },
    { category: 'AI Orchestration', tech: 'n8n, Flowise, custom pipelines' },
    { category: 'AI Infrastructure', tech: 'RAG, embeddings, semantic search, fine-tuning, prompt engineering' },
    { category: 'Voice AI', tech: 'Retell AI, OpenAI Whisper, TTS/STT' },
    { category: 'Computer Vision', tech: 'OpenCV, image analysis' },
    { category: 'Frontend', tech: 'React, Next.js, Vue.js, Nuxt.js' },
    { category: 'Mobile', tech: 'Flutter, React Native, iOS native, Android native' },
    { category: 'Infrastructure', tech: 'Kubernetes, Docker, gRPC, Kafka, Ansible, Terraform' },
  ];

  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">AI Expertise</h2>

        {/* AI-Oriented: Creating AI Solutions */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">AI-Oriented: Creating AI Solutions</h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">ExoChat</h4>
              <p className="text-sm sm:text-base text-zinc-300">
                M2P (Machine-to-Person) dialog engine solving LLM instability, testing, and compliance. State machine architecture for predictable, testable AI conversations.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Stamina.chat</h4>
              <p className="text-sm sm:text-base text-zinc-300">
                AI psychologist mobile app using LLMs for mental health support. Production-grade reliability and user safety.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Ainsys</h4>
              <p className="text-sm sm:text-base text-zinc-300">
                AI-powered prospecting and outreach automation with LLM orchestration for client material analysis.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">AI Voice Support</h4>
              <p className="text-sm sm:text-base text-zinc-300">
                Production-ready voice assistants for VoIP with natural interruption handling, multilingual support (OpenAI API, Flowise, Retell AI).
              </p>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-white mb-3">Real-World AI Challenges We Solve</h4>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-zinc-300 border border-zinc-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800/80">
                  <th className="text-left p-3 text-white font-medium">Challenge</th>
                  <th className="text-left p-3 text-white font-medium">Our Solution</th>
                </tr>
              </thead>
              <tbody>
                {aiChallenges.map((row) => (
                  <tr key={row.challenge} className="border-t border-zinc-700">
                    <td className="p-3">{row.challenge}</td>
                    <td className="p-3">{row.solution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold text-white mb-3">AI Architecture Expertise</h4>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-300 mb-6">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">RAG:</span> Vector DBs, embeddings, semantic search, document chunking, context optimization
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">Fine-tuning:</span> Domain-specific training, dataset curation, evaluation metrics
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">Agentic Systems:</span> Multi-agent architectures, tool use, planning chains, human-in-the-loop
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">M2P:</span> Dialog state management, prompt orchestration, fact extraction, business integration
            </div>
          </div>
        </div>

        {/* AI-Powered: Leveraging AI for Development */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">AI-Powered: Leveraging AI for Development</h3>

          <h4 className="text-lg font-semibold text-white mb-3">Models I Work With</h4>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-zinc-300 border border-zinc-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-800/80">
                  <th className="text-left p-3 text-white font-medium">Model</th>
                  <th className="text-left p-3 text-white font-medium">Vendor</th>
                  <th className="text-left p-3 text-white font-medium">Use Cases</th>
                </tr>
              </thead>
              <tbody>
                {aiModels.map((row) => (
                  <tr key={row.model} className="border-t border-zinc-700">
                    <td className="p-3 font-medium">{row.model}</td>
                    <td className="p-3">{row.vendor}</td>
                    <td className="p-3">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="text-lg font-semibold text-white mb-3">AI-Powered Development Tools</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-zinc-300 mb-6">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">Code:</span> Cursor IDE, GitHub Copilot, Codex, Codeium
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">Design & Prototyping:</span> Lovable, v0 (Vercel), Bolt.new
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400">Workflow:</span> n8n, Flowise, LangChain, LlamaIndex
            </div>
          </div>

          <h4 className="text-lg font-semibold text-white mb-3">AI-Empowered Teams</h4>
          <p className="text-zinc-300 text-sm sm:text-base mb-4">
            Consistent AI integration across all roles — not just developers. We&apos;ve built a unified approach to AI tools for every team function:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Developers</div>
              <p className="text-xs text-zinc-400 mb-2">AI writes boilerplate, suggests fixes, and reviews PRs. Routine coding tasks take minutes instead of hours.</p>
              <div className="text-xs text-zinc-500">Cursor IDE • Copilot • Code Review</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">DevOps</div>
              <p className="text-xs text-zinc-400 mb-2">AI generates IaC configs and diagnoses cluster issues from logs. Infrastructure setup that took days now takes hours.</p>
              <div className="text-xs text-zinc-500">Ansible • Terraform • K8s Diagnostics</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Analysts</div>
              <p className="text-xs text-zinc-400 mb-2">AI maintains unified context across all docs and tickets. Requirements processing accelerates by an order of magnitude.</p>
              <div className="text-xs text-zinc-500">Confluence • Google Docs • Jira</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">QA/Testing</div>
              <p className="text-xs text-zinc-400 mb-2">AI generates test cases from specs and code analysis. Full test coverage achieved 3-5x faster than manual writing.</p>
              <div className="text-xs text-zinc-500">E2E • Load Tests • Test Generation</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Project Manager</div>
              <p className="text-xs text-zinc-400 mb-2">AI analyzes codebase complexity for estimates and drafts reports. Planning accuracy improves while admin work shrinks.</p>
              <div className="text-xs text-zinc-500">Estimation • Risk Analysis • Reports</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">SRE/Ops</div>
              <p className="text-xs text-zinc-400 mb-2">AI correlates alerts, suggests root causes, and drafts runbooks. Incident MTTR drops significantly with AI-assisted triage.</p>
              <div className="text-xs text-zinc-500">Monitoring • Incident Response</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Support</div>
              <p className="text-xs text-zinc-400 mb-2">AI drafts responses and keeps knowledge base current. First-response time and resolution quality both improve dramatically.</p>
              <div className="text-xs text-zinc-500">Ticket AI • Knowledge Base Sync</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Tech Writer</div>
              <p className="text-xs text-zinc-400 mb-2">AI drafts docs from code and generates changelogs from commits. Documentation stays in sync with code automatically.</p>
              <div className="text-xs text-zinc-500">Doc Gen • API Docs • Changelogs</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Security</div>
              <p className="text-xs text-zinc-400 mb-2">AI scans for vulnerabilities and checks compliance requirements. Security reviews cover more surface area with less manual effort.</p>
              <div className="text-xs text-zinc-500">Vuln Scan • Code Audit • Compliance</div>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">Data/BI</div>
              <p className="text-xs text-zinc-400 mb-2">AI generates SQL queries and builds dashboards from natural language. Ad-hoc analysis requests fulfilled in minutes, not days.</p>
              <div className="text-xs text-zinc-500">Reports • Analysis • Dashboards</div>
            </div>
          </div>
        </div>

        {/* Consistent AI Methodology */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">Consistent AI Methodology</h3>
          
          <p className="text-zinc-300 text-sm sm:text-base mb-6">
            We maintain a unified approach to AI usage across all projects and team members, ensuring consistency, quality, and knowledge sharing.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-sm text-zinc-300 mb-6">
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400 block mb-2">Shared Rule Base</span>
              <ul className="space-y-1 text-zinc-400">
                <li>• <code className="text-zinc-300">.cursor/rules</code> for IDE guidance</li>
                <li>• Project-specific context files</li>
                <li>• Common prompt templates</li>
                <li>• Coding standards in AI tools</li>
              </ul>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400 block mb-2">Documentation Procedures</span>
              <ul className="space-y-1 text-zinc-400">
                <li>• AI-assisted doc generation</li>
                <li>• Automatic consistency checks</li>
                <li>• Version-controlled knowledge base</li>
                <li>• Structured templates</li>
              </ul>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <span className="font-semibold text-blue-400 block mb-2">Review Guidelines</span>
              <ul className="space-y-1 text-zinc-400">
                <li>• Unified code review instructions</li>
                <li>• Team-wide review checklists</li>
                <li>• Security review protocols</li>
                <li>• Performance review criteria</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Training & Team Support */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-6">AI Training & Team Support</h3>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-white mb-3">AI Training Programs</h4>
              <p className="text-sm text-zinc-300 mb-3">
                Developed approaches for team onboarding to AI tools:
              </p>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• Structured training curricula for AI adoption</li>
                <li>• Hands-on workshops with real project scenarios</li>
                <li>• Progressive skill building (beginner → advanced)</li>
                <li>• Role-specific training paths (dev, analyst, QA, DevOps)</li>
              </ul>
              <p className="text-sm text-zinc-300 mt-3">
                <span className="text-zinc-500">Topics:</span> Prompt engineering, context management, tool selection, quality assessment, security, cost optimization.
              </p>
            </div>

            <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
              <h4 className="text-lg font-semibold text-white mb-3">Psychological Support</h4>
              <p className="text-sm text-zinc-300 mb-3">
                AI adoption creates fear and resistance. We address this through partnership with{' '}
                <a href="https://eantro.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">Eantro</a>
                {' '}— ICF-certified psychologists and coaches:
              </p>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• Addressing job security concerns openly</li>
                <li>• Reframing AI as augmentation, not replacement</li>
                <li>• Building confidence through guided practice</li>
                <li>• Creating safe space for questions and concerns</li>
                <li>• Career development planning with AI skills</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">35+</div>
            <div className="text-zinc-400 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">18+</div>
            <div className="text-zinc-400 text-sm">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
            <div className="text-zinc-400 text-sm">Specialists Hired</div>
          </div>
          <div className="text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
            <div className="text-3xl font-bold text-blue-400 mb-2">$10M+</div>
            <div className="text-zinc-400 text-sm">Project Budgets</div>
          </div>
        </div>

        {/* Technology Stack */}
        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Technology Stack</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
          {techStack.map((item) => (
            <div key={item.category} className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
              <div className="font-semibold text-blue-400 mb-2">{item.category}</div>
              <div className="text-zinc-300">{item.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

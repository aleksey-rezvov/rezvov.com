import { Cpu, Wrench, Users, BookOpen, Heart, Zap } from 'lucide-react';

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

  const teamRoles = [
    { role: 'Developers', desc: 'AI writes boilerplate, suggests fixes, reviews PRs.', tools: 'Cursor IDE • Copilot • Code Review' },
    { role: 'DevOps', desc: 'AI generates IaC configs and diagnoses cluster issues.', tools: 'Ansible • Terraform • K8s Diagnostics' },
    { role: 'Analysts', desc: 'AI maintains unified context across docs and tickets.', tools: 'Confluence • Google Docs • Jira' },
    { role: 'QA/Testing', desc: 'AI generates test cases from specs and code.', tools: 'E2E • Load Tests • Test Generation' },
    { role: 'Project Manager', desc: 'AI analyzes complexity for estimates and drafts reports.', tools: 'Estimation • Risk Analysis • Reports' },
    { role: 'SRE/Ops', desc: 'AI correlates alerts, suggests root causes, drafts runbooks.', tools: 'Monitoring • Incident Response' },
    { role: 'Support', desc: 'AI drafts responses and keeps knowledge base current.', tools: 'Ticket AI • Knowledge Base Sync' },
    { role: 'Tech Writer', desc: 'AI drafts docs from code and generates changelogs.', tools: 'Doc Gen • API Docs • Changelogs' },
    { role: 'Security', desc: 'AI scans for vulnerabilities and checks compliance.', tools: 'Vuln Scan • Code Audit • Compliance' },
    { role: 'Data/BI', desc: 'AI generates SQL and builds dashboards from natural language.', tools: 'Reports • Analysis • Dashboards' },
  ];

  const featuredProducts = [
    { name: 'ExoChat', desc: 'M2P dialog engine solving LLM instability, testing, and compliance. State machine architecture for predictable, testable AI conversations.' },
    { name: 'Stamina.chat', desc: 'AI psychologist mobile app using LLMs for mental health support. Production-grade reliability and user safety.' },
    { name: 'Ainsys', desc: 'AI-powered prospecting and outreach automation with LLM orchestration for client material analysis.' },
    { name: 'AI Voice Support', desc: 'Production-ready voice assistants for VoIP with natural interruption handling, multilingual support (OpenAI API, Flowise, Retell AI).' },
  ];

  const cardBase = 'glass-card glass-card-hover bento-card-hover rounded-xl border border-zinc-700/50';

  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">AI Expertise</h2>

        {/* Bento: AI-Oriented — Large card (Featured Products) + Medium (Architecture) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className={`lg:col-span-2 ${cardBase} p-5 sm:p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">AI-Oriented: Creating AI Solutions</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {featuredProducts.map((p) => (
                <div key={p.name} className="p-3 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                  <h4 className="font-semibold text-blue-400 mb-1">{p.name}</h4>
                  <p className="text-sm text-zinc-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${cardBase} p-5 sm:p-6`}>
            <h4 className="text-lg font-semibold text-white mb-3">AI Architecture Expertise</h4>
            <div className="space-y-3 text-sm text-zinc-300">
              <div><span className="font-semibold text-blue-400">RAG:</span> Vector DBs, embeddings, semantic search, chunking, context optimization</div>
              <div><span className="font-semibold text-blue-400">Fine-tuning:</span> Domain-specific training, dataset curation, evaluation metrics</div>
              <div><span className="font-semibold text-blue-400">Agentic:</span> Multi-agent architectures, tool use, planning chains, human-in-the-loop</div>
              <div><span className="font-semibold text-blue-400">M2P:</span> Dialog state, prompt orchestration, fact extraction, business integration</div>
            </div>
          </div>
        </div>

        {/* Bento: Real-World Challenges — interactive tiles */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Real-World AI Challenges We Solve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {aiChallenges.map((row) => (
              <div key={row.challenge} className={`${cardBase} p-4`}>
                <div className="font-medium text-blue-400 text-sm mb-1">{row.challenge}</div>
                <div className="text-xs text-zinc-400">{row.solution}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento: AI-Powered — Models + Tools wide */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className={`lg:col-span-2 ${cardBase} p-5 sm:p-6 overflow-x-auto`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400">AI-Powered: Models I Work With</h3>
            </div>
            <table className="w-full text-sm text-zinc-300 min-w-[320px]">
              <thead>
                <tr className="border-b border-zinc-600">
                  <th className="text-left py-2 pr-4 text-white font-medium">Model</th>
                  <th className="text-left py-2 pr-4 text-white font-medium">Vendor</th>
                  <th className="text-left py-2 text-white font-medium">Use Cases</th>
                </tr>
              </thead>
              <tbody>
                {aiModels.map((row) => (
                  <tr key={row.model} className="border-b border-zinc-700/50">
                    <td className="py-2 pr-4 font-medium">{row.model}</td>
                    <td className="py-2 pr-4">{row.vendor}</td>
                    <td className="py-2">{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`${cardBase} p-5 sm:p-6`}>
            <h4 className="text-lg font-semibold text-white mb-3">AI-Powered Development Tools</h4>
            <div className="space-y-3 text-sm text-zinc-400">
              <div><span className="font-semibold text-blue-400">Code:</span> Cursor IDE, GitHub Copilot, Codex, Codeium</div>
              <div><span className="font-semibold text-blue-400">Design & Prototyping:</span> Lovable, v0 (Vercel), Bolt.new</div>
              <div><span className="font-semibold text-blue-400">Workflow:</span> n8n, Flowise, LangChain, LlamaIndex</div>
            </div>
          </div>
        </div>

        {/* AI-Empowered Teams — role cards grid */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-blue-400">AI-Empowered Teams</h3>
          </div>
          <p className="text-zinc-300 text-sm mb-4 max-w-2xl">
            Consistent AI integration across all roles — not just developers. A unified approach to AI tools for every team function.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
            {teamRoles.map((r) => (
              <div key={r.role} className={`${cardBase} p-4`}>
                <div className="font-semibold text-blue-400 mb-1">{r.role}</div>
                <p className="text-xs text-zinc-400 mb-2">{r.desc}</p>
                <div className="text-xs text-zinc-500">{r.tools}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Consistent AI Methodology */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Consistent AI Methodology</h3>
          <p className="text-zinc-300 text-sm mb-4">Unified approach to AI usage across projects and team members.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className={`${cardBase} p-4`}>
              <span className="font-semibold text-blue-400 block mb-2">Shared Rule Base</span>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• <code className="text-zinc-300">.cursor/rules</code></li>
                <li>• Project context, prompt templates</li>
                <li>• Coding standards in AI tools</li>
              </ul>
            </div>
            <div className={`${cardBase} p-4`}>
              <span className="font-semibold text-blue-400 block mb-2">Documentation Procedures</span>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• AI-assisted doc generation</li>
                <li>• Consistency checks, versioned KB</li>
                <li>• Structured templates</li>
              </ul>
            </div>
            <div className={`${cardBase} p-4`}>
              <span className="font-semibold text-blue-400 block mb-2">Review Guidelines</span>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li>• Unified code review instructions</li>
                <li>• Security and performance protocols</li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Training & Team Support */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className={`${cardBase} p-5 sm:p-6`}>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">AI Training Programs</h4>
            </div>
            <p className="text-sm text-zinc-300 mb-2">Structured curricula, hands-on workshops, role-specific paths (dev, analyst, QA, DevOps).</p>
            <p className="text-sm text-zinc-400">Topics: prompt engineering, context management, tool selection, quality assessment, security, cost optimization.</p>
          </div>
          <div className={`${cardBase} p-5 sm:p-6`}>
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-blue-400" />
              <h4 className="text-lg font-semibold text-white">Psychological Support</h4>
            </div>
            <p className="text-sm text-zinc-300 mb-2">
              Partnership with <a href="https://eantro.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" aria-label="Eantro - ICF-certified psychologists and coaches (opens in new tab)">Eantro</a> — ICF-certified psychologists and coaches: addressing fears, reframing AI as augmentation, guided practice, safe space for concerns, career planning with AI skills.
            </p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {[
            { value: '35+', label: 'Projects Delivered' },
            { value: '18+', label: 'Years Experience' },
            { value: '1000+', label: 'Specialists Hired' },
            { value: '$10M+', label: 'Project Budgets' },
          ].map((m) => (
            <div key={m.label} className={`${cardBase} text-center p-4`}>
              <div className="text-3xl font-bold text-blue-400 mb-2">{m.value}</div>
              <div className="text-zinc-400 text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="flex items-center gap-3 mb-4">
          <Wrench className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-semibold text-white">Technology Stack</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {techStack.map((item) => (
            <div key={item.category} className={`${cardBase} p-4`}>
              <div className="font-semibold text-blue-400 mb-1">{item.category}</div>
              <div className="text-sm text-zinc-300">{item.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

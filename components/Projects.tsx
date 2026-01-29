import { ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      name: 'ForEach Partners',
      url: 'https://foreachpartners.com',
      description: 'Development Partnership Network',
      tech: 'Go, Rust, Python, TypeScript, React, Next.js, Vue.js, Flutter, PostgreSQL, Kubernetes, Docker, OpenAI API',
    },
    {
      name: 'ExoChat',
      url: 'https://exo-chat.com',
      description: 'M2P Dialog Framework for building controlled AI conversations',
      tech: 'LLM, FSM, Python, Rust',
    },
    {
      name: 'Stamina.chat',
      url: 'https://stamina.chat',
      description: 'AI Psychologist mobile application',
      tech: 'LLM, Flutter, Django',
    },
    {
      name: 'Oktend',
      url: 'https://oktend.com/en',
      description: 'Custom Software Development Team',
      tech: 'Go, Rust, Python, React, Vue',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center md:text-left">Projects & Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Main Portfolio CTA Card - High Visibility */}
          <div className="md:col-span-2 lg:col-span-1 glass-card rounded-xl p-6 border-2 border-blue-500/30 flex flex-col justify-between bg-gradient-to-br from-blue-600/10 to-transparent animate-pulse-glow">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Full Portfolio</h3>
              <p className="text-zinc-300 text-sm sm:text-base mb-6">
                Explore the complete list of 35+ delivered projects, case studies, and technical deep-dives.
              </p>
            </div>
            <a 
              href="https://foreachpartners.com/portfolio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group"
              aria-label="View full portfolio on foreachpartners.com (opens in new tab)"
            >
              View Full Portfolio
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Project Cards */}
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-card glass-card-hover bento-card-hover p-5 sm:p-6 rounded-xl border border-zinc-700/50 group"
              aria-label={`${project.name} - ${project.description} (opens in new tab)`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm text-zinc-300 mb-4">{project.description}</p>
              <p className="text-xs text-zinc-500 font-mono">{project.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

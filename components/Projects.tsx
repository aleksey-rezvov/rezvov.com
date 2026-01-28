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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Projects & Products</h2>
        <p className="text-zinc-300 mb-6 sm:mb-8">
          For full portfolio, see{' '}
          <a href="https://foreachpartners.com/portfolio" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline" aria-label="Full portfolio on foreachpartners.com (opens in new tab)">
            foreachpartners.com/portfolio
          </a>
        </p>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700 hover:border-blue-500 hover:bg-zinc-800/80 hover:scale-[1.01] transition-all duration-200 group"
              aria-label={`${project.name} - ${project.description} (opens in new tab)`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 mb-2 sm:mb-3">{project.description}</p>
              <p className="text-xs sm:text-sm text-zinc-500">{project.tech}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

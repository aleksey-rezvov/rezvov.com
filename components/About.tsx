export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">About</h2>
        <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-zinc-300 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Career Highlights</h3>
            <p>
              I&apos;m a technical leader with <strong className="text-white">18+ years</strong> of experience
              in software development, from computer vision and C++ to modern AI/LLM solutions.
            </p>
            <p>
              I&apos;ve led teams of up to <strong className="text-white">50 engineers</strong> (200+ people total including support and operations),
              managed projects with budgets exceeding <strong className="text-white">$10 million</strong>, conducted <strong className="text-white">2000+ interviews</strong>,
              hired <strong className="text-white">1000+ specialists</strong>, and architected <strong className="text-white">35+ projects</strong> across various industries.
            </p>
            <p>
              I founded <a href="https://foreachpartners.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline transition-colors"><strong>ForEach Partners</strong></a>, an alliance of 100+ specialists delivering complex software solutions with a developer-led partnership model.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Current Focus</h3>
            <ul className="space-y-2 list-none">
              <li>
                <strong className="text-blue-400">AI products:</strong> Architecting and building AI/LLM-based solutions (ExoChat, Stamina.chat, AI voice systems).
              </li>
              <li>
                <strong className="text-blue-400">AI-powered processes:</strong> Leveraging cutting-edge AI tools across the entire development lifecycle — from coding to DevOps to QA.
              </li>
              <li>
                <strong className="text-blue-400">Team formation (AI-empowered):</strong> Building high-performance teams from the ForEach Partners network; empowering client teams with AI-native cultures.
              </li>
              <li>
                <strong className="text-blue-400">Development process consulting:</strong> Process organization with consistent AI integration, training teams on AI tools, and establishing AI-driven documentation and review procedures.
              </li>
              <li>
                <strong className="text-blue-400">Product development partnership:</strong> Acting as a technical co-founder to build and scale AI-powered products from architecture to deployment.
              </li>
              <li>
                <strong className="text-blue-400">AI tooling consulting:</strong> Advising on the development of next-generation AI-powered developer tools.
              </li>
            </ul>
          </div>

          <p>
            I&apos;ve helped enterprise clients scale systems to handle <strong className="text-white">30x load surges</strong> and deliver mission-critical solutions across healthcare, fintech, telecommunications, e-commerce, logistics, and social media.
          </p>
        </div>
      </div>
    </section>
  );
}

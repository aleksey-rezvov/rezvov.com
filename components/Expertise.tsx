export default function Expertise() {
  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">AI/LLM Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">ExoChat</h3>
            <p className="text-sm sm:text-base text-zinc-300">
              Proprietary M2P (Machine-to-Person) dialog engine that solves LLM instability, testing, 
              and compliance issues. Enables predictable, testable AI conversations through state machine architecture.
            </p>
          </div>

          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">Stamina.chat</h3>
            <p className="text-sm sm:text-base text-zinc-300">
              AI psychologist mobile application using large language models to provide mental health support. 
              Built with production-grade reliability and user safety in mind.
            </p>
          </div>

          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">Ainsys</h3>
            <p className="text-sm sm:text-base text-zinc-300">
              AI-powered prospecting and outreach automation system that analyzes client materials and 
              automates customer interactions using advanced LLM orchestration.
            </p>
          </div>

          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-2 sm:mb-3">AI Voice Support Systems</h3>
            <p className="text-sm sm:text-base text-zinc-300">
              Built production-ready voice assistants for VoIP providers with natural interruption handling, 
              multilingual support, and seamless integration with OpenAI API, Flowise, and Retell AI.
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Core Services</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">35+</div>
              <div className="text-zinc-400">Projects Delivered</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">18+</div>
              <div className="text-zinc-400">Years Experience</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">1000+</div>
              <div className="text-zinc-400">Specialists Hired</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-400 mb-2">$10M+</div>
              <div className="text-zinc-400">Project Budgets</div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Technology Stack</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">Languages</div>
                <div className="text-zinc-300">Go, Rust, Python, TypeScript, C++, C#</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">Databases</div>
                <div className="text-zinc-300">PostgreSQL, Cassandra, MongoDB, Redis, MySQL</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">AI/ML</div>
                <div className="text-zinc-300">OpenAI API, Llama, Gemini, Computer Vision (OpenCV)</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">Frontend</div>
                <div className="text-zinc-300">React, Next.js, Vue.js, Nuxt.js</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">Mobile</div>
                <div className="text-zinc-300">Flutter, React Native, iOS native, Android native</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700">
                <div className="font-semibold text-blue-400 mb-2">Infrastructure</div>
                <div className="text-zinc-300">Kubernetes, Docker, gRPC, Kafka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

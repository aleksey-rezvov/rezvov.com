import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1e1b4b 30%, #0f172a 60%, #0a0a0a 100%)',
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-30 animate-gradient-drift"
        style={{
          background: 'linear-gradient(-45deg, #1e3a5f, #312e81, #1e3a5f, #0f172a)',
        }}
      />
      {/* Subtle grid / noise overlay for depth */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='1' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shimmer">
              Alex Rezvov
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400">
              CTO / Software Architect
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 italic">
              AI products. AI-powered processes.
            </p>
            <p className="text-base sm:text-lg text-zinc-500 max-w-xl">
              I architect and build AI/LLM solutions — and build high-performance cultures where AI is a teammate, not just a tool.
            </p>
            <p className="text-base sm:text-lg text-zinc-500">
              Based in Europe. Available globally.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 glow-blue hover:shadow-[0_0_32px_rgba(59,130,246,0.4)]"
                aria-label="Go to contact section to get in touch"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo with glassmorphism and pulse glow */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-card animate-pulse-glow border-2 border-zinc-700/50">
              <Image
                src="/images/arezvov.jpg"
                alt="Alex Rezvov - CTO and Software Architect portrait photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Beam effect leading to next section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none">
        <div
          className="w-full h-full bg-gradient-to-b from-blue-500/0 via-blue-400/60 to-blue-500/0 animate-beam"
          style={{ width: '2px' }}
        />
      </div>
    </section>
  );
}

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Alex Rezvov
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400">
              CTO / Software Architect
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 italic">
              Building AI-powered solutions that scale
            </p>
            <p className="text-base sm:text-lg text-zinc-500">
              Based in Europe. Available globally.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end order-first md:order-last">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
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
    </section>
  );
}

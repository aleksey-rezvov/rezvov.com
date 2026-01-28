import { Code2, Lightbulb, Handshake } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">Services</h2>

        {/* Bento grid: large left (2 cols), two smaller right (1 col stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          {/* Large card: Software Development with My Team */}
          <div className="lg:col-span-2 lg:row-span-2 glass-card glass-card-hover bento-card-hover rounded-xl p-5 sm:p-6 border border-zinc-700/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-400">Software Development with My Team</h3>
            </div>
            <p className="text-zinc-300 mb-4 text-sm sm:text-base">
              <a href="https://foreachpartners.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline font-medium" aria-label="ForEach Partners (opens in new tab)">ForEach Partners</a>
              {' '}— an alliance of 100+ well-coordinated specialists who have delivered dozens of successful projects.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-300">
              <div>
                <p className="font-medium text-white mb-1">Core offerings</p>
                <ul className="list-none space-y-0.5 text-zinc-400">
                  <li>• Full-cycle custom software development</li>
                  <li>• Financial systems, data aggregators, catalogs</li>
                  <li>• Business automation tools</li>
                  <li>• Mobile apps (cross-platform and native)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Team flexibility</p>
                <ul className="list-none space-y-0.5 text-zinc-400">
                  <li>• My team (ForEach Partners network)</li>
                  <li>• Your team under my leadership</li>
                  <li>• Hybrid augmentation</li>
                  <li>• Any stack via extensive network</li>
                </ul>
              </div>
            </div>
            <p className="font-medium text-white mt-3 mb-1 text-sm">What makes us different</p>
            <ul className="list-none space-y-0.5 text-sm text-zinc-400 mb-3">
              <li>• <strong className="text-zinc-300">Direct communication</strong> — no layers</li>
              <li>• <strong className="text-zinc-300">Partner-led</strong> — senior dev/architect per project</li>
              <li>• <strong className="text-zinc-300">Cost efficiency</strong> — 25th percentile pricing</li>
              <li>• <strong className="text-zinc-300">Innovation</strong> — Go, Rust, LLM, Telegram Mini Apps</li>
            </ul>
            <p className="text-zinc-500 text-sm">
              Budgets: from $5K USD; average ~$30K; largest managed to $400K; as subcontractor to $10M USD.
            </p>
          </div>

          {/* Small card: Development Process Consulting */}
          <div className="glass-card glass-card-hover bento-card-hover rounded-xl p-5 sm:p-6 border border-zinc-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Development Process Consulting</h3>
            </div>
            <ul className="list-none space-y-2 text-sm text-zinc-400">
              <li>• Time and cost estimation for product ideas</li>
              <li>• Team selection and formation (build, find, or hybrid)</li>
              <li>• Contractor relationship analysis</li>
              <li>• Process optimization when velocity lags team size</li>
            </ul>
          </div>

          {/* Small card: Product Development Partnership */}
          <div className="glass-card glass-card-hover bento-card-hover rounded-xl p-5 sm:p-6 border border-zinc-700/50">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-blue-400">Product Development Partnership</h3>
            </div>
            <p className="text-sm text-zinc-300 mb-2">
              Co-founder and partner in multiple products.
            </p>
            <ul className="list-none space-y-0.5 text-sm text-zinc-400 mb-2">
              <li>• I handle: development, deployment, tech support</li>
              <li>• Partner: business dev, marketing, operations</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Open to B2B product partnerships where you have the vision and need a technical co-founder.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

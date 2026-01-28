export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">Services</h2>

        <div className="space-y-8 sm:space-y-12">
          {/* Software Development with My Team */}
          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Software Development with My Team</h3>
            <p className="text-zinc-300 mb-4">
              <a href="https://foreachpartners.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 underline">ForEach Partners</a> — an alliance of 100+ well-coordinated specialists who have delivered dozens of successful projects.
            </p>
            <div className="space-y-2 text-sm sm:text-base text-zinc-300">
              <p className="font-medium text-white">Core offerings:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Full-cycle custom software development</li>
                <li>Financial systems, data aggregators, catalogs, parsers</li>
                <li>Business automation tools</li>
                <li>Mobile applications (cross-platform and native)</li>
              </ul>
              <p className="font-medium text-white mt-3">Team composition flexibility:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Development with my existing team (ForEach Partners network)</li>
                <li>Development with client&apos;s team under my leadership</li>
                <li>Hybrid approach: partial team augmentation</li>
                <li>Any technology stack assembly through extensive contact network</li>
              </ul>
              <p className="font-medium text-white mt-3">What makes us different:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><strong>Direct communication:</strong> No layers between client and development team</li>
                <li><strong>Partner-led projects:</strong> Senior developer/architect leads each project, personally invested in success</li>
                <li><strong>Cost efficiency:</strong> We fall into the 25th percentile of market pricing</li>
                <li><strong>Innovation focus:</strong> Go, Rust, LLM-based solutions, Telegram Mini Apps</li>
              </ul>
              <p className="text-zinc-400 mt-3 text-sm">
                Budgets: from $5,000 USD; average ~$30,000 USD; largest managed up to $400,000 USD; as subcontractor up to $10,000,000 USD.
              </p>
            </div>
          </div>

          {/* Development Process Consulting */}
          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Development Process Consulting</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Time and cost estimation for product ideas</li>
              <li>Team selection and formation (build from scratch, find existing, or hybrid)</li>
              <li>Contractor relationship analysis (when &quot;next week&quot; delivery stretches for months)</li>
              <li>Process optimization for established teams (when team size grows but velocity doesn&apos;t)</li>
            </ul>
          </div>

          {/* Product Development Partnership */}
          <div className="bg-zinc-800/50 p-4 sm:p-6 rounded-lg border border-zinc-700">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Product Development Partnership</h3>
            <p className="text-zinc-300 mb-2">
              Co-founder and partner in multiple products. Typical arrangement:
            </p>
            <ul className="list-disc list-inside space-y-1 text-zinc-300 mb-3">
              <li>I handle: development, deployment, technical support</li>
              <li>Partner handles: business development, marketing, operations</li>
            </ul>
            <p className="text-zinc-300">
              Open to partnerships for B2B product ideas where you have the vision but need technical co-founder capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

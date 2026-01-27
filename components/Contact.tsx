import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export default function Contact() {
  const links = [
    {
      name: 'Email',
      url: 'mailto:mail@rezvov.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/arezvov/',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aleksey-rezvov',
      icon: Github,
    },
    {
      name: 'Blog',
      url: 'https://blog.rezvov.com/',
      icon: FileText,
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">Contact</h2>
        <p className="text-base sm:text-lg text-zinc-300 mb-6 sm:mb-8">
          Let's discuss how I can help with your next project. Whether you need AI system architecture, 
          team leadership, or technical consulting, I'm here to help.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
          {links.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-zinc-800/50 rounded-lg border border-zinc-700 hover:border-blue-500 transition-colors group"
              >
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
                <span className="text-sm sm:text-base text-white group-hover:text-blue-400 transition-colors">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

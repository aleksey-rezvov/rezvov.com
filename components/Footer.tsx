export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0">
          <p className="text-zinc-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Alex Rezvov. All rights reserved.
          </p>
          <nav className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-zinc-400" aria-label="Footer links">
            <a
              href="https://foreachpartners.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="ForEach Partners (opens in new tab)"
            >
              ForEach Partners
            </a>
            <a
              href="https://oktend.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Oktend (opens in new tab)"
            >
              Oktend
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

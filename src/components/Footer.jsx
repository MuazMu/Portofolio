const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Portfolio', href: '#Portofolio' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <footer className="bg-dark-surface border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">Muaz</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Full Stack Engineer specializing in scalable web applications and cloud infrastructure.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm text-white/50">Available for opportunities</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-1">
              <h4 className="text-white font-semibold mb-4">Built With</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-white/80">React.js</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-white/80">Vite</span>
                <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-white/80">Tailwind</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 text-center">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Muaz Abdulkhafur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

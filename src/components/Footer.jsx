const Footer = () => {
  const navLinks = [
    { name: 'HOME', href: '#Home', code: '01' },
    { name: 'ABOUT', href: '#About', code: '02' },
    { name: 'PORTFOLIO', href: '#Portofolio', code: '03' },
    { name: 'CONTACT', href: '#Contact', code: '04' },
  ];

  return (
    <footer className="bg-cyber-black border-t border-neon/20 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="hud-element px-4 py-2 font-display text-xl mb-4 inline-block">
                <span className="neon-text font-bold tracking-wider">{`<Muaz/>`}</span>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-4">
                Full Stack Engineer specializing in scalable web applications and cloud infrastructure.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm animate-pulse-neon"></div>
                <span className="micro-detail">SYSTEM OPERATIONAL</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="data-bar w-12"></div>
                <span className="micro-detail">NAVIGATION</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="group flex items-center space-x-2 text-white/60 hover:text-neon transition-colors duration-300"
                  >
                    <span className="micro-detail opacity-40 group-hover:opacity-100">{link.code}</span>
                    <span className="text-sm font-light">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="data-bar w-12"></div>
                <span className="micro-detail">BUILT WITH</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="micro-detail border border-neon/30 px-2 py-1">REACT.JS</span>
                <span className="micro-detail border border-neon/30 px-2 py-1">VITE</span>
                <span className="micro-detail border border-neon/30 px-2 py-1">TAILWIND</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-neon/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-3">
                <span className="micro-detail">COPYRIGHT © {new Date().getFullYear()}</span>
                <div className="w-1 h-1 bg-neon/50 rounded-full"></div>
                <span className="text-white/60 font-light text-sm">MUAZ ABDULKHAFUR</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="micro-detail">VERSION 2.0.24</span>
                <div className="w-1 h-1 bg-neon/50 rounded-full"></div>
                <span className="micro-detail">ALL RIGHTS RESERVED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

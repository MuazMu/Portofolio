import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#Home', code: '01' },
    { name: 'About', href: '#About', code: '02' },
    { name: 'Portfolio', href: '#Portofolio', code: '03' },
    { name: 'Contact', href: '#Contact', code: '04' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-cyber-black/80 backdrop-blur-md border-b border-neon/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo - HUD Style */}
          <div className="flex items-center space-x-2">
            <div className="hud-element px-4 py-2 font-display text-xl md:text-2xl">
              <span className="neon-text font-bold tracking-wider">{`<Muaz/>`}</span>
            </div>
            <span className="micro-detail hidden md:block">V2.0.24</span>
          </div>

          {/* Desktop Menu - Technical Grid */}
          <ul className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative px-4 py-2 flex items-center space-x-2 transition-all duration-300"
                >
                  <span className="micro-detail opacity-40 group-hover:opacity-100 group-hover:text-neon transition-all">
                    {link.code}
                  </span>
                  <span className="text-white/60 group-hover:text-neon font-light tracking-wide transition-all duration-300">
                    {link.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon shadow-neon-sm group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Status Indicator */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-neon shadow-neon-sm animate-pulse-neon"></div>
              <span className="micro-detail">ONLINE</span>
            </div>
          </div>

          {/* Mobile Menu Button - HUD Style */}
          <button
            className="md:hidden wireframe p-2 transition-all duration-300 hover:border-neon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-[2px] bg-neon shadow-neon-sm transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`block h-[2px] bg-neon shadow-neon-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[2px] bg-neon shadow-neon-sm transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen HUD */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-cyber-black/95 backdrop-blur-lg border-t border-neon/20 z-40">
          <div className="container mx-auto px-4 py-8">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.name} className="border-b border-neon/10">
                  <a
                    href={link.href}
                    className="group flex items-center justify-between py-4 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="micro-detail text-neon/40 group-hover:text-neon">{link.code}</span>
                      <span className="text-xl text-white/60 group-hover:text-neon font-light tracking-wide transition-all">
                        {link.name}
                      </span>
                    </div>
                    <svg className="w-5 h-5 text-neon/40 group-hover:text-neon group-hover:translate-x-2 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Status */}
            <div className="mt-8 pt-6 border-t border-neon/10">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-neon shadow-neon-sm animate-pulse-neon"></div>
                <span className="micro-detail">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/60 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Eki Zulfar Rachman. All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a href="#Home" className="text-white/60 hover:text-white transition-colors duration-300">
              Home
            </a>
            <a href="#About" className="text-white/60 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#Portofolio" className="text-white/60 hover:text-white transition-colors duration-300">
              Portofolio
            </a>
            <a href="#Contact" className="text-white/60 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/40 text-sm">
            Built with ❤️ using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

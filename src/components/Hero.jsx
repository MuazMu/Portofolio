const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Eki Zulfar Rachman</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              Front-End Web Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Pengembang web front-end yang berfokus pada desain antarmuka modern, responsif, dan performa tinggi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#Portofolio"
              className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Lihat Portofolio
            </a>
            <a
              href="#Contact"
              className="px-8 py-4 glass rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

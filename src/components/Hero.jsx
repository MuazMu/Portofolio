const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cyber-black">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>

      {/* Wireframe Accents */}
      <div className="absolute top-20 left-10 w-32 h-32 wireframe opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 wireframe opacity-20"></div>

      {/* Neon Glow Effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* HUD Frame */}
          <div className="corner-accent p-8 md:p-12">
            {/* Coordinates/Version */}
            <div className="flex justify-between mb-8">
              <span className="micro-detail">LAT: 40.7128° N</span>
              <span className="micro-detail">LONG: 74.0060° W</span>
              <span className="micro-detail">UTC: {new Date().getHours().toString().padStart(2, '0')}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 md:space-y-6 mb-8">
              <div className="flex items-center space-x-3 mb-2">
                <div className="data-bar w-16"></div>
                <span className="micro-detail">SYSTEM.IDENTITY</span>
              </div>

              <h1 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-none tracking-tight">
                MUAZ
                <br />
                <span className="neon-text">ABDULKHAFUR</span>
              </h1>

              <div className="flex items-center space-x-3">
                <span className="micro-detail">ROLE:</span>
                <h2 className="text-xl md:text-3xl font-light text-white/80 tracking-widest">
                  FULL STACK ENGINEER
                </h2>
              </div>
            </div>

            {/* Description with Technical Frame */}
            <div className="cyber-panel p-6 md:p-8 mb-8 max-w-3xl">
              <div className="flex items-start space-x-4">
                <div className="w-1 h-full bg-neon/50"></div>
                <div>
                  <p className="text-base md:text-lg font-light text-white/70 leading-relaxed mb-4">
                    Architecting scalable digital solutions across the full technology stack.
                    Specialized in high-performance web applications, cloud infrastructure, and
                    cutting-edge development practices.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <span className="micro-detail border border-neon/30 px-3 py-1">REACT.JS</span>
                    <span className="micro-detail border border-neon/30 px-3 py-1">NODE.JS</span>
                    <span className="micro-detail border border-neon/30 px-3 py-1">CLOUD</span>
                    <span className="micro-detail border border-neon/30 px-3 py-1">DATABASE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Technical Style */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#Portofolio"
                className="group hud-element px-8 py-4 text-center transition-all duration-300 hover:shadow-neon"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="micro-detail">03</span>
                  <span className="font-light tracking-wider text-white group-hover:text-neon transition-colors">
                    VIEW PROJECTS
                  </span>
                  <svg className="w-4 h-4 text-neon group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>

              <a
                href="#Contact"
                className="group wireframe px-8 py-4 text-center transition-all duration-300 hover:border-neon hover:shadow-neon-sm"
              >
                <div className="flex items-center justify-center space-x-3">
                  <span className="micro-detail">04</span>
                  <span className="font-light tracking-wider text-white/80 group-hover:text-neon transition-colors">
                    ESTABLISH CONTACT
                  </span>
                </div>
              </a>
            </div>

            {/* Status Bar */}
            <div className="mt-12 pt-6 border-t border-neon/10 flex flex-wrap gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm animate-pulse-neon"></div>
                <span className="micro-detail">AVAILABLE FOR PROJECTS</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="micro-detail">RESPONSE TIME: &lt;24H</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Technical */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="micro-detail rotate-90">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neon to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;

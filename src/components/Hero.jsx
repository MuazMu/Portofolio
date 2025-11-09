const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-light/10 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Muaz Abdulkhafur
          </h1>

          <h2 className="text-2xl md:text-4xl text-accent font-semibold mb-8">
            Full Stack Engineer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Building scalable web applications and cloud infrastructure.
            Passionate about creating efficient, user-focused digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#Portofolio"
              className="px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow"
            >
              View Projects
            </a>

            <a
              href="#Contact"
              className="px-8 py-4 border-2 border-accent hover:bg-accent/10 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Status */}
          <div className="mt-12 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm text-white/50">Available for new opportunities</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

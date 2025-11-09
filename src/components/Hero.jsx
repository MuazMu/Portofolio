const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f10_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f10_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7]/20 to-[#3b82f6]/20 rounded-full blur-3xl animate-[pulse_6s_cubic-bezier(0.4,0,0.6,1)_infinite]" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Muaz Abdulkhafur</span>
          </h1>

          {/* Title/Role with Gradient */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              Full Stack Engineer
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building scalable web applications from frontend to backend with modern technologies. Specializing in full-stack development, cloud solutions, and innovative digital experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#Portofolio"
              className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full font-medium hover:scale-105 hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="#Contact"
              className="px-8 py-4 glass rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

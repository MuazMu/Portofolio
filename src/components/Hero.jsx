import { FaCode, FaReact, FaPalette, FaLightbulb } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>

      {/* Gradient Orbs with Float Animation */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Floating Icons */}
      <div className="absolute top-1/4 left-10 text-[#6366f1] text-4xl opacity-20 animate-float delay-100">
        <FaCode />
      </div>
      <div className="absolute top-1/3 right-16 text-[#a855f7] text-5xl opacity-20 animate-float-slow delay-300">
        <FaReact />
      </div>
      <div className="absolute bottom-1/4 left-20 text-[#3b82f6] text-3xl opacity-20 animate-bounce-slow delay-200">
        <FaPalette />
      </div>
      <div className="absolute bottom-1/3 right-10 text-[#6366f1] text-4xl opacity-20 animate-float delay-500">
        <FaLightbulb />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Heading - Slide from top */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-top">
            <span className="text-white">Eki Zulfar Rachman</span>
          </h1>

          {/* Animated Subtitle - Slide from bottom */}
          <h2 className="text-3xl md:text-5xl font-bold mb-8 animate-slide-bottom delay-200">
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              Front-End Web Developer
            </span>
          </h2>

          {/* Animated Description - Fade in up */}
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-400">
            Crafting modern, responsive, and high-performance web interfaces with a focus on exceptional user experiences.
          </p>

          {/* Animated Buttons - Scale in */}
          <div className="flex gap-4 justify-center flex-wrap animate-scale-in delay-700">
            <a
              href="#Portofolio"
              className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full font-medium hover:scale-110 hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 animate-glow"
            >
              View Portfolio
            </a>
            <a
              href="#Contact"
              className="px-8 py-4 glass rounded-full font-medium hover:scale-110 hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

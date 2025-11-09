import { useEffect, useRef, useState } from 'react';
import {
  FaCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { label: 'Total Projects', value: '10+', icon: FaBriefcase },
    { label: 'Technologies', value: '15+', icon: FaCode },
    { label: 'Years Experience', value: '3+', icon: FaGraduationCap },
  ];

  return (
    <section id="About" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Animated Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Profile Section */}
          <div className={`mb-16 ${isVisible ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Profile Image */}
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#3b82f6] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/20">
                    <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center">
                      <FaUser className="text-8xl text-white/30" />
                    </div>
                  </div>
                </div>

                {/* Bio Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                    Eki Zulfar Rachman
                  </h3>
                  <p className="text-xl text-[#6366f1] font-medium mb-4">Front-End Web Developer</p>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    Hello! I'm a passionate Front-End Web Developer dedicated to creating
                    engaging and responsive web experiences. I focus on modern interface design with
                    high performance and user-centric approaches.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    With experience in various modern technologies like React, Tailwind CSS, and Node.js,
                    I'm committed to delivering high-quality web solutions that meet user needs and exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-3xl text-[#6366f1] group-hover:text-[#a855f7] transition-colors duration-300" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

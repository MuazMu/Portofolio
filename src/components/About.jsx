import { useEffect, useRef, useState } from 'react';

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

  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'React Native', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Git/GitHub', level: 'Advanced' },
    { name: 'Vite', level: 'Advanced' },
  ];

  const stats = [
    { label: 'Total Projects', value: '10+', icon: '📦' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Years Experience', value: '3+', icon: '🚀' },
  ];

  return (
    <section id="About" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Animated Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bio Card - Slide from Left */}
            <div className={`glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-slide-left delay-200' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Who I Am
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Hello! I'm Eki Zulfar Rachman, a passionate Front-End Web Developer dedicated to creating
                engaging and responsive web experiences. I focus on modern interface design with
                high performance and user-centric approaches.
              </p>
              <p className="text-white/70 leading-relaxed">
                With experience in various modern technologies like React, Tailwind CSS, and Node.js,
                I'm committed to delivering high-quality web solutions that meet user needs and exceed expectations.
              </p>
            </div>

            {/* Skills Card - Slide from Right */}
            <div className={`glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-slide-right delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#6366f1]/50 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="font-medium text-white">{skill.name}</div>
                    <div className="text-xs text-white/60">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section - Fade in with stagger */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 animate-bounce-slow">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

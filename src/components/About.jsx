import { useEffect, useRef, useState } from 'react';
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaServer,
  FaDatabase,
  FaCloud
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
    { label: 'PROJECTS DEPLOYED', value: '10+', icon: FaBriefcase, code: 'STAT_01' },
    { label: 'TECH STACK', value: '15+', icon: FaCode, code: 'STAT_02' },
    { label: 'YRS EXPERIENCE', value: '3+', icon: FaGraduationCap, code: 'STAT_03' },
  ];

  const expertise = [
    { area: 'Frontend Architecture', icon: FaCode, level: 90 },
    { area: 'Backend Systems', icon: FaServer, level: 85 },
    { area: 'Database Design', icon: FaDatabase, level: 80 },
    { area: 'Cloud Infrastructure', icon: FaCloud, level: 75 },
  ];

  return (
    <section id="About" className="min-h-screen py-20 relative bg-cyber-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <div className="data-bar w-24"></div>
              <span className="micro-detail">SECTION.02</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white">
              ABOUT <span className="neon-text">PROFILE</span>
            </h2>
          </div>

          {/* Asymmetrical Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Main Bio - Takes 2 columns */}
            <div className="md:col-span-2 space-y-6">
              {/* Identity Panel */}
              <div className="cyber-panel p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="micro-detail">IDENTITY.INFO</span>
                  <span className="micro-detail">STATUS: ACTIVE</span>
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-2">
                  MUAZ ABDULKHAFUR
                </h3>
                <p className="text-neon text-lg font-mono mb-6">{'<Full Stack Engineer />'}</p>

                <div className="space-y-4 text-white/70 font-light leading-relaxed">
                  <p>
                    Specialized in architecting and deploying scalable web applications across the complete technology stack.
                    Focus on high-performance systems, clean architecture, and modern development methodologies.
                  </p>
                  <p>
                    Expertise spans from responsive frontend interfaces using React and TypeScript to robust backend
                    systems with Node.js, coupled with cloud infrastructure management and database optimization.
                  </p>
                </div>
              </div>

              {/* Expertise Bars */}
              <div className="cyber-panel p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="micro-detail">CORE.EXPERTISE</span>
                  <span className="micro-detail">PROFICIENCY_LEVELS</span>
                </div>

                <div className="space-y-6">
                  {expertise.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <item.icon className="text-neon" />
                          <span className="text-white font-light">{item.area}</span>
                        </div>
                        <span className="micro-detail">{item.level}%</span>
                      </div>
                      <div className="h-1 bg-cyber-light relative overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-neon shadow-neon-sm transition-all duration-1000"
                          style={{ width: isVisible ? `${item.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Column */}
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="hud-element p-6 group hover:shadow-neon transition-all duration-300"
                >
                  <span className="micro-detail block mb-3">{stat.code}</span>
                  <stat.icon className="text-4xl text-neon/50 mb-4 group-hover:text-neon transition-colors" />
                  <div className="text-4xl font-display font-bold neon-text mb-2">
                    {stat.value}
                  </div>
                  <div className="micro-detail text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack Overview */}
          <div className="wireframe p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="micro-detail">TECH.STACK_OVERVIEW</span>
              <span className="micro-detail flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm animate-pulse-neon"></div>
                <span>OPERATIONAL</span>
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['REACT.JS', 'NODE.JS', 'TYPESCRIPT', 'MONGODB', 'POSTGRESQL', 'AWS', 'DOCKER', 'GIT'].map((tech, index) => (
                <div
                  key={index}
                  className="border border-neon/20 p-3 text-center hover:border-neon hover:bg-neon/5 transition-all duration-300 cursor-default"
                >
                  <span className="micro-detail">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

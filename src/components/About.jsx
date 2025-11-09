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
    { label: 'Projects Deployed', value: '10+', icon: FaBriefcase },
    { label: 'Technologies', value: '15+', icon: FaCode },
    { label: 'Years Experience', value: '3+', icon: FaGraduationCap },
  ];

  const expertise = [
    { area: 'Frontend Development', icon: FaCode, level: 95 },
    { area: 'Backend Development', icon: FaServer, level: 90 },
    { area: 'Database Design', icon: FaDatabase, level: 90 },
    { area: 'Cloud Infrastructure', icon: FaCloud, level: 85 },
  ];

  return (
    <section id="About" className="min-h-screen py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bio Section */}
            <div className="md:col-span-2 space-y-8">
              {/* Intro */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Muaz Abdulkhafur
                </h3>
                <p className="text-accent text-lg mb-6">Full Stack Engineer</p>

                <div className="space-y-4 text-white/70 leading-relaxed">
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

              {/* Expertise */}
              <div className="card p-8">
                <h4 className="text-xl font-semibold text-white mb-6">Core Expertise</h4>

                <div className="space-y-6">
                  {expertise.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <item.icon className="text-accent" />
                          <span className="text-white">{item.area}</span>
                        </div>
                        <span className="text-sm text-white/50">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-accent rounded-full transition-all duration-1000"
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
                  className="card p-6 text-center hover:shadow-glow transition-all duration-300"
                >
                  <stat.icon className="text-4xl text-accent mb-4 mx-auto" />
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">
                    {stat.label}
                  </div>
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

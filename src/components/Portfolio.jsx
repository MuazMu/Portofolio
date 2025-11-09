import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaCoffee, FaRocket, FaCode, FaExternalLinkAlt, FaCertificate, FaAward } from 'react-icons/fa';
import {
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiHtml5, SiCss3,
  SiGit, SiVite, SiMongodb, SiFirebase, SiPython, SiTypescript,
  SiExpress, SiPostgresql, SiDocker, SiRedis
} from 'react-icons/si';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('projects');
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

  const projects = [
    {
      id: 1,
      title: 'AFRI.EVENTS',
      description: 'Event discovery and ticketing platform for the African continent with PWA capabilities and offline functionality.',
      icon: FaCalendarAlt,
      technologies: ['PWA', 'React', 'Node.js'],
      demo: 'https://afri.events/',
      status: 'DEPLOYED',
    },
    {
      id: 2,
      title: 'CHAFFEE COFFEE CO.',
      description: 'Modern, responsive website showcasing premium coffee products with elegant design.',
      icon: FaCoffee,
      technologies: ['React', 'Tailwind CSS'],
      demo: 'https://chaffeecofee.netlify.app/',
      status: 'LIVE',
    },
    {
      id: 3,
      title: 'DABLIE TECH',
      description: 'Startup Innovation Platform designed to support entrepreneurs and innovators.',
      icon: FaRocket,
      technologies: ['React', 'Next.js', 'Vercel'],
      demo: 'https://dablietechstartup.vercel.app/',
      status: 'ACTIVE',
    },
    {
      id: 4,
      title: 'PORTFOLIO.V2',
      description: 'Personal portfolio website with cyberpunk aesthetic and modern animations.',
      icon: FaCode,
      technologies: ['React', 'Vite', 'Tailwind'],
      demo: '#',
      status: 'CURRENT',
    },
  ];

  const certificates = [
    { id: 1, title: 'AWS CERTIFIED DEVELOPER', issuer: 'Amazon Web Services', date: '2024', icon: FaCertificate },
    { id: 2, title: 'FULL STACK WEB DEVELOPMENT', issuer: 'Udemy', date: '2023', icon: FaAward },
    { id: 3, title: 'REACT & REDUX PROFESSIONAL', issuer: 'Udemy', date: '2024', icon: FaCertificate },
    { id: 4, title: 'NODE.JS & MONGODB DEVELOPER', issuer: 'MongoDB University', date: '2023', icon: FaAward },
    { id: 5, title: 'JAVASCRIPT ALGORITHMS & DATA STRUCTURES', issuer: 'freeCodeCamp', date: '2023', icon: FaCertificate },
    { id: 6, title: 'DOCKER & KUBERNETES', issuer: 'Udemy', date: '2024', icon: FaAward },
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
    { name: 'Express', icon: SiExpress, color: '#000000', category: 'Backend' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', category: 'Database' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Backend' },
    { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
    { name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Tools' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Tools' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
  ];

  const tabs = [
    { id: 'projects', label: 'PROJECTS', code: '01' },
    { id: 'certificates', label: 'CERTIFICATES', code: '02' },
    { id: 'tech-stack', label: 'TECH STACK', code: '03' },
  ];

  return (
    <section id="Portofolio" className="min-h-screen py-20 relative bg-cyber-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <div className="data-bar w-24"></div>
              <span className="micro-detail">SECTION.03</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              PROJECT <span className="neon-text">ARCHIVE</span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`hud-element px-6 py-3 transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'shadow-neon'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="micro-detail">{tab.code}</span>
                  <span className={`text-sm tracking-wider ${activeTab === tab.id ? 'text-neon' : 'text-white'}`}>
                    {tab.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="cyber-panel p-6 hover:shadow-neon transition-all duration-500 group"
                >
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <project.icon className="text-3xl text-neon/50 group-hover:text-neon transition-colors" />
                      <div>
                        <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                        <span className="micro-detail text-neon/60">PROJECT_{index + 1 < 10 ? '0' + (index + 1) : index + 1}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm animate-pulse-neon"></div>
                      <span className="micro-detail">{project.status}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 font-light text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="micro-detail border border-neon/30 px-3 py-1 hover:border-neon hover:bg-neon/5 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wireframe w-full px-4 py-3 flex items-center justify-center space-x-2 hover:border-neon hover:shadow-neon-sm transition-all duration-300 group/btn"
                  >
                    <span className="text-sm text-white/80 group-hover/btn:text-neon transition-colors tracking-wider">
                      VISIT SITE
                    </span>
                    <FaExternalLinkAlt className="text-sm text-neon group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className="wireframe p-6 hover:border-neon hover:bg-neon/5 transition-all duration-500"
                >
                  <div className="flex items-start space-x-4">
                    <cert.icon className="text-3xl text-neon/50 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-display font-bold text-white">{cert.title}</h3>
                        <span className="micro-detail">CERT_{index + 1 < 10 ? '0' + (index + 1) : index + 1}</span>
                      </div>
                      <p className="text-white/70 font-light text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center space-x-2">
                        <div className="data-bar w-8"></div>
                        <span className="micro-detail">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech-stack' && (
            <div>
              {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => {
                const techs = techStack.filter(t => t.category === category);
                if (techs.length === 0) return null;

                return (
                  <div key={category} className="mb-12">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="data-bar w-16"></div>
                      <span className="micro-detail">{category.toUpperCase()}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                      {techs.map((tech) => (
                        <div
                          key={tech.name}
                          className="hud-element p-4 flex flex-col items-center justify-center space-y-3 hover:shadow-neon transition-all duration-300 group"
                        >
                          <tech.icon
                            className="text-4xl transition-all duration-300 group-hover:scale-110"
                            style={{ color: tech.color }}
                          />
                          <span className="micro-detail text-center">{tech.name.toUpperCase()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

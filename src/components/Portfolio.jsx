import { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaCoffee, FaRocket, FaCode, FaExternalLinkAlt, FaGithub, FaCertificate, FaAward } from 'react-icons/fa';
import {
  SiReact, SiJavascript, SiTailwindcss, SiNodedotjs, SiHtml5, SiCss3,
  SiGit, SiVite, SiMongodb, SiFirebase, SiPython, SiTypescript,
  SiExpress, SiPostgresql, SiDocker, SiRedis
} from 'react-icons/si';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('projects'); // certificates, projects, tech-stack
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
      title: 'Afri.events',
      description: 'Event discovery and ticketing platform for the African continent. Features include event browsing, online ticket purchasing, event creation tools for organizers, and PWA capabilities with offline functionality.',
      icon: FaCalendarAlt,
      color: 'from-purple-400 to-pink-600',
      technologies: ['PWA', 'Service Workers', 'React', 'Node.js'],
      github: 'https://github.com/MuazMu',
      demo: 'https://afri.events/',
    },
    {
      id: 2,
      title: 'Chaffee Coffee Co.',
      description: 'Modern, responsive website for Chaffee Coffee Co., showcasing their premium coffee products and brand story with an elegant design and smooth user experience.',
      icon: FaCoffee,
      color: 'from-amber-400 to-orange-600',
      technologies: ['React', 'Tailwind CSS', 'Netlify'],
      github: 'https://github.com/MuazMu',
      demo: 'https://chaffeecofee.netlify.app/',
    },
    {
      id: 3,
      title: 'Dablie Tech Startup',
      description: 'Startup Innovation Platform designed to support entrepreneurs and innovators. A comprehensive platform for the startup ecosystem with modern web technologies.',
      icon: FaRocket,
      color: 'from-blue-400 to-cyan-600',
      technologies: ['React', 'Next.js', 'Vercel', 'Tailwind CSS'],
      github: 'https://github.com/MuazMu',
      demo: 'https://dablietechstartup.vercel.app/',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and professional experience with modern animations and responsive design.',
      icon: FaCode,
      color: 'from-indigo-400 to-purple-600',
      technologies: ['React', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/MuazMu',
      demo: '#',
    },
  ];

  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024',
      icon: FaCertificate,
      color: 'from-orange-500 to-amber-600',
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: '2023',
      icon: FaAward,
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'React & Redux Professional',
      issuer: 'Udemy',
      date: '2024',
      icon: FaCertificate,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      id: 4,
      title: 'Node.js & MongoDB Developer',
      issuer: 'MongoDB University',
      date: '2023',
      icon: FaAward,
      color: 'from-green-500 to-emerald-600',
    },
    {
      id: 5,
      title: 'JavaScript Algorithms & Data Structures',
      issuer: 'freeCodeCamp',
      date: '2023',
      icon: FaCertificate,
      color: 'from-yellow-500 to-orange-600',
    },
    {
      id: 6,
      title: 'Docker & Kubernetes',
      issuer: 'Udemy',
      date: '2024',
      icon: FaAward,
      color: 'from-cyan-500 to-blue-600',
    },
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
    { id: 'certificates', label: 'Certificates', icon: FaCertificate },
    { id: 'projects', label: 'Projects', icon: FaRocket },
    { id: 'tech-stack', label: 'Tech Stack', icon: SiReact },
  ];

  return (
    <section id="Portofolio" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Animated Section Title */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Portfolio Showcase
          </span>
        </h2>
        <p className={`text-center text-white/60 mb-12 text-lg ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          Explore my work, certifications, and technical expertise
        </p>

        {/* Tab Navigation */}
        <div className={`flex justify-center gap-4 mb-12 flex-wrap ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg scale-110'
                  : 'glass text-white/70 hover:text-white hover:scale-105'
              }`}
            >
              <tab.icon className="text-lg" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={cert.id}
                  className={`glass rounded-2xl p-8 hover:scale-105 hover:shadow-2xl hover:shadow-[#6366f1]/20 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0`}>
                      <cert.icon className="text-3xl text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {cert.title}
                      </h3>
                      <p className="text-white/70 mb-2">
                        <span className="font-medium text-white/90">{cert.issuer}</span>
                      </p>
                      <p className="text-sm text-white/60">{cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`glass rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-[#6366f1]/20 transition-all duration-500 relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  {/* Project Icon Header */}
                  <div className={`h-52 bg-gradient-to-br ${project.color} overflow-hidden relative group`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float-slow">
                        <project.icon className="text-5xl text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 mb-4 line-clamp-3 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full border border-white/20 bg-white/5 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:scale-105 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg glass hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 hover:scale-105"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech-stack' && (
            <div>
              {['Frontend', 'Backend', 'Database', 'Tools'].map((category, catIndex) => {
                const techs = techStack.filter(t => t.category === category);
                if (techs.length === 0) return null;

                return (
                  <div key={category} className="mb-12">
                    <h3 className={`text-2xl font-bold mb-6 text-center bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                        style={{ animationDelay: `${0.4 + catIndex * 0.1}s` }}>
                      {category}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                      {techs.map((tech, index) => (
                        <div
                          key={tech.name}
                          className={`glass rounded-2xl p-6 hover:scale-110 hover:shadow-2xl transition-all duration-500 flex flex-col items-center justify-center gap-4 group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                          style={{
                            animationDelay: `${0.5 + catIndex * 0.1 + index * 0.05}s`,
                          }}
                        >
                          <div
                            className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                            style={{
                              backgroundColor: `${tech.color}20`,
                            }}
                          >
                            <tech.icon
                              className="text-4xl transition-all duration-300"
                              style={{ color: tech.color }}
                            />
                          </div>
                          <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 text-center">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* No Results Message (if needed) */}
        {((activeTab === 'certificates' && certificates.length === 0) ||
          (activeTab === 'projects' && projects.length === 0) ||
          (activeTab === 'tech-stack' && techStack.length === 0)) && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No content available in this section.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

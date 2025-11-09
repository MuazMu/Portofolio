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
      title: 'Afri.Events',
      description: 'Event discovery and ticketing platform for the African continent with PWA capabilities and offline functionality.',
      icon: FaCalendarAlt,
      technologies: ['PWA', 'React', 'Node.js'],
      demo: 'https://afri.events/',
    },
    {
      id: 2,
      title: 'Chaffee Coffee Co.',
      description: 'Modern, responsive website showcasing premium coffee products with elegant design.',
      icon: FaCoffee,
      technologies: ['React', 'Tailwind CSS'],
      demo: 'https://chaffeecofee.netlify.app/',
    },
    {
      id: 3,
      title: 'Dablie Tech',
      description: 'Startup Innovation Platform designed to support entrepreneurs and innovators.',
      icon: FaRocket,
      technologies: ['React', 'Next.js', 'Vercel'],
      demo: 'https://dablietechstartup.vercel.app/',
    },
    {
      id: 4,
      title: 'Portfolio V2',
      description: 'Personal portfolio website with modern design and smooth animations.',
      icon: FaCode,
      technologies: ['React', 'Vite', 'Tailwind'],
      demo: '#',
    },
  ];

  const certificates = [
    { id: 1, title: 'AWS Certified Developer', issuer: 'Amazon Web Services', date: '2024', icon: FaCertificate },
    { id: 2, title: 'Full Stack Web Development', issuer: 'Udemy', date: '2023', icon: FaAward },
    { id: 3, title: 'React & Redux Professional', issuer: 'Udemy', date: '2024', icon: FaCertificate },
    { id: 4, title: 'Node.js & MongoDB Developer', issuer: 'MongoDB University', date: '2023', icon: FaAward },
    { id: 5, title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', date: '2023', icon: FaCertificate },
    { id: 6, title: 'Docker & Kubernetes', issuer: 'Udemy', date: '2024', icon: FaAward },
  ];

  const techStack = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  ];

  const tabs = [
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'tech-stack', label: 'Tech Stack' },
  ];

  return (
    <section id="Portofolio" className="min-h-screen py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              My <span className="text-accent">Work</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-glow'
                    : 'bg-dark-surface text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card p-6 group hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <project.icon className="text-4xl text-accent flex-shrink-0" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/70 leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-accent hover:text-accent-light font-semibold transition-colors"
                  >
                    <span>Visit Site</span>
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="card p-6 hover:shadow-glow transition-all duration-300"
                >
                  <cert.icon className="text-4xl text-accent mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/60 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-white/40 text-sm">{cert.date}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech-stack' && (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="card p-4 flex flex-col items-center justify-center space-y-3 hover:shadow-glow transition-all duration-300 group"
                >
                  <tech.icon
                    className="text-4xl group-hover:scale-110 transition-transform"
                    style={{ color: tech.color }}
                  />
                  <span className="text-sm text-white/80 text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

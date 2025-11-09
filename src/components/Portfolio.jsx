import { useEffect, useRef, useState } from 'react';

const Portfolio = () => {
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform built with React and Node.js, complete with payment gateway integration and comprehensive admin dashboard.',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration features, notifications, and intuitive user interface.',
      image: '/projects/taskapp.jpg',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with smooth animations and modern design to showcase projects and professional experience.',
      image: '/projects/portfolio.jpg',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/EkiZR',
      demo: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with beautiful data visualizations and accurate weather predictions using API integration.',
      image: '/projects/weather.jpg',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#'
    },
  ];

  return (
    <section id="Portofolio" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Animated Section Title */}
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            My Portfolio
          </span>
        </h2>
        <p className={`text-center text-white/60 mb-12 text-lg ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
          Some of the projects I've worked on
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-[#6366f1]/20 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="h-52 bg-gradient-to-br from-[#6366f1]/20 via-[#a855f7]/20 to-[#3b82f6]/20 overflow-hidden relative group">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="text-6xl opacity-20 animate-float-slow">💼</div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full border border-white/20 bg-white/5 hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-[#6366f1] hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-[#a855f7] hover:scale-110 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

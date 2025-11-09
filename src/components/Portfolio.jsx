import { useEffect, useRef, useState } from 'react';
import { FaShoppingCart, FaTasks, FaUser, FaCloudSunRain, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
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
      category: 'Web App',
      icon: FaShoppingCart,
      color: 'from-green-400 to-emerald-600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration features, notifications, and intuitive user interface.',
      category: 'Web App',
      icon: FaTasks,
      color: 'from-blue-400 to-cyan-600',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Interactive portfolio website with smooth animations and modern design to showcase projects and professional experience.',
      category: 'Website',
      icon: FaUser,
      color: 'from-purple-400 to-pink-600',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/EkiZR',
      demo: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with beautiful data visualizations and accurate weather predictions using API integration.',
      category: 'Web App',
      icon: FaCloudSunRain,
      color: 'from-orange-400 to-red-600',
      technologies: ['React', 'API Integration', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com/EkiZR',
      demo: '#',
      featured: false
    },
  ];

  const filters = ['all', 'Web App', 'Website'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
          Explore my latest work and creative projects
        </p>

        {/* Filter Buttons */}
        <div className={`flex justify-center gap-4 mb-12 flex-wrap ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white shadow-lg scale-110'
                  : 'glass text-white/70 hover:text-white hover:scale-105'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl overflow-hidden group hover:scale-105 hover:shadow-2xl hover:shadow-[#6366f1]/20 transition-all duration-500 relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="glass px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-md">
                    <FaStar className="text-yellow-400 text-sm" />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                </div>
              )}

              {/* Project Icon Header */}
              <div className={`h-52 bg-gradient-to-br ${project.color} overflow-hidden relative group`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-float-slow">
                    <project.icon className="text-5xl text-white" />
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                {/* Hover overlay */}
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

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;

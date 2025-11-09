import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTelegram, FaTwitter, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork, SiFreelancer } from 'react-icons/si';

const Contact = () => {
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

  const socials = [
    {
      name: 'GITHUB',
      url: 'https://github.com/MuazMu',
      icon: FaGithub,
      code: 'LINK_01',
      description: 'CODE REPOSITORIES'
    },
    {
      name: 'LINKEDIN',
      url: 'https://www.linkedin.com/in/muaz-abdulkhafur/',
      icon: FaLinkedin,
      code: 'LINK_02',
      description: 'PROFESSIONAL NETWORK'
    },
    {
      name: 'UPWORK',
      url: 'https://www.upwork.com/freelancers/~0184077dc6e6acc93a?viewMode=1',
      icon: SiUpwork,
      code: 'LINK_03',
      description: 'FREELANCE PROFILE'
    },
    {
      name: 'EMAIL',
      url: 'mailto:muazabdulkhafur@gmail.com',
      icon: FaEnvelope,
      code: 'LINK_04',
      description: 'DIRECT CONTACT'
    },
    {
      name: 'TELEGRAM',
      url: 'https://t.me/',
      icon: FaTelegram,
      code: 'LINK_05',
      description: 'INSTANT MESSAGING'
    },
    {
      name: 'WHATSAPP',
      url: 'https://wa.me/',
      icon: FaWhatsapp,
      code: 'LINK_06',
      description: 'VOICE & TEXT'
    },
    {
      name: 'TWITTER',
      url: 'https://twitter.com/',
      icon: FaTwitter,
      code: 'LINK_07',
      description: 'SOCIAL UPDATES'
    },
    {
      name: 'INSTAGRAM',
      url: 'https://www.instagram.com/ekizr._/?hl=id',
      icon: FaInstagram,
      code: 'LINK_08',
      description: 'VISUAL CONTENT'
    },
    {
      name: 'FREELANCER',
      url: 'https://www.freelancer.com/',
      icon: SiFreelancer,
      code: 'LINK_09',
      description: 'PROJECT MARKETPLACE'
    }
  ];

  return (
    <section id="Contact" className="min-h-screen py-20 relative bg-cyber-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <div className="data-bar w-24"></div>
              <span className="micro-detail">SECTION.04</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
              COMMUNICATION <span className="neon-text">CHANNELS</span>
            </h2>
            <p className="text-white/60 font-light text-lg max-w-3xl">
              Available for freelance projects, collaborations, and full-time opportunities.
              Response time: &lt;24H. All communication channels operational.
            </p>
          </div>

          {/* Contact Grid - HUD Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hud-element p-6 hover:shadow-neon transition-all duration-500 group"
              >
                {/* Header with code */}
                <div className="flex items-center justify-between mb-4">
                  <span className="micro-detail">{social.code}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm"></div>
                    <span className="micro-detail">ACTIVE</span>
                  </div>
                </div>

                {/* Icon and Name */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 border border-neon/30 flex items-center justify-center group-hover:border-neon group-hover:bg-neon/5 transition-all duration-300">
                    <social.icon className="text-3xl text-neon/50 group-hover:text-neon transition-colors" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-neon transition-colors">
                    {social.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="flex items-center space-x-2">
                  <div className="data-bar w-8"></div>
                  <span className="micro-detail text-white/50">{social.description}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Status Panel */}
          <div className="cyber-panel p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <span className="micro-detail">STATUS.AVAILABILITY</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-neon rounded-full shadow-neon-sm animate-pulse-neon"></div>
                <span className="micro-detail">ACCEPTING PROJECTS</span>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">
              OPEN FOR <span className="neon-text">COLLABORATION</span>
            </h3>

            <div className="space-y-4 text-white/70 font-light leading-relaxed">
              <p>
                Currently accepting freelance projects, contract work, and full-time positions.
                Specialized in full-stack development, cloud infrastructure, and technical architecture.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="micro-detail border border-neon/30 px-3 py-1">FREELANCE</span>
                <span className="micro-detail border border-neon/30 px-3 py-1">CONTRACT</span>
                <span className="micro-detail border border-neon/30 px-3 py-1">FULL-TIME</span>
                <span className="micro-detail border border-neon/30 px-3 py-1">CONSULTING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

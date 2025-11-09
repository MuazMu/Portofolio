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
      name: 'GitHub',
      url: 'https://github.com/EkiZR',
      icon: FaGithub,
      gradient: 'from-[#333] to-gray-700',
      description: 'Check out my code'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ekizr/',
      icon: FaLinkedin,
      gradient: 'from-[#0A66C2] to-blue-700',
      description: 'Professional network'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/',
      icon: SiUpwork,
      gradient: 'from-[#6FDA44] to-green-600',
      description: 'Hire me on Upwork'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/',
      icon: FaTelegram,
      gradient: 'from-[#0088cc] to-[#0077b5]',
      description: 'Quick messaging'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ekizr._/?hl=id',
      icon: FaInstagram,
      gradient: 'from-[#833AB4] via-[#E4405F] to-[#FD1D1D]',
      description: 'Follow my journey'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: FaTwitter,
      gradient: 'from-[#1DA1F2] to-blue-600',
      description: 'Latest updates'
    },
    {
      name: 'Email',
      url: 'mailto:ekizr@example.com',
      icon: FaEnvelope,
      gradient: 'from-[#EA4335] to-red-600',
      description: 'Send me an email'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/',
      icon: FaWhatsapp,
      gradient: 'from-[#25D366] to-green-600',
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/',
      icon: SiFreelancer,
      gradient: 'from-[#29B2FE] to-blue-600',
      description: 'Freelance projects'
    }
  ];

  return (
    <section id="Contact" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Animated Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className={`text-center text-white/60 mb-16 text-lg max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Social Media Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socials.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-[#6366f1]/20 transition-all duration-500 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <social.icon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-[#6366f1] group-hover:to-[#a855f7] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {social.name}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  {social.description}
                </p>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Available for Opportunities
              </h3>
              <p className="text-white/70 leading-relaxed">
                I'm currently available for freelance work, collaborations, and full-time opportunities.
                Whether you have a question, a project proposal, or just want to say hi, I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

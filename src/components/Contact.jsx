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
      url: 'https://github.com/MuazMu',
      icon: FaGithub,
      description: 'Code repositories'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/muaz-abdulkhafur/',
      icon: FaLinkedin,
      description: 'Professional network'
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~0184077dc6e6acc93a?viewMode=1',
      icon: SiUpwork,
      description: 'Freelance profile'
    },
    {
      name: 'Email',
      url: 'mailto:muazabdulkhafur@gmail.com',
      icon: FaEnvelope,
      description: 'Direct contact'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/',
      icon: FaTelegram,
      description: 'Instant messaging'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/',
      icon: FaWhatsapp,
      description: 'Voice & text'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: FaTwitter,
      description: 'Social updates'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ekizr._/?hl=id',
      icon: FaInstagram,
      description: 'Visual content'
    },
    {
      name: 'Freelancer',
      url: 'https://www.freelancer.com/',
      icon: SiFreelancer,
      description: 'Project marketplace'
    }
  ];

  return (
    <section id="Contact" className="min-h-screen py-20" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Available for freelance projects, collaborations, and full-time opportunities.
              Let's build something great together!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group hover:shadow-glow transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  <social.icon className="text-4xl text-accent group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-white">{social.name}</h3>
                </div>
                <p className="text-sm text-white/60">{social.description}</p>
              </a>
            ))}
          </div>

          {/* Availability Card */}
          <div className="card p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Open for Collaboration
            </h3>
            <p className="text-white/70 mb-6">
              Currently accepting freelance projects, contract work, and full-time positions.
              Specialized in full-stack development and cloud infrastructure.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm text-white/60">Response time: &lt;24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

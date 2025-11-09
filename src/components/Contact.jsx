import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form data:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/EkiZR',
      icon: FaGithub,
      gradient: 'from-[#333] to-gray-600'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ekizr/',
      icon: FaLinkedin,
      gradient: 'from-[#0A66C2] to-blue-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ekizr._/?hl=id',
      icon: FaInstagram,
      gradient: 'from-[#833AB4] via-[#E4405F] to-[#FD1D1D]'
    }
  ];

  return (
    <section id="Contact" className="min-h-screen py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Animated Section Title */}
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className={`text-center text-white/60 mb-12 text-lg ${isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Let's discuss your next project
          </p>

          {/* Animated Form */}
          <div className={`glass rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#6366f1]/10 transition-all duration-500 ${isVisible ? 'animate-scale-in delay-300' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-white/80 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 focus:outline-none transition-all text-white placeholder:text-white/40"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 focus:outline-none transition-all text-white placeholder:text-white/40"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:ring-2 focus:ring-[#6366f1]/20 focus:outline-none transition-all resize-none text-white placeholder:text-white/40"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg font-medium transition-all duration-300 shadow-lg shadow-[#6366f1]/30 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 hover:shadow-xl hover:shadow-[#6366f1]/50'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium animate-fade-in-up flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully!
                </div>
              )}
            </form>
          </div>

          {/* Social Links with Animation */}
          <div className={`mt-12 ${isVisible ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
            <p className="text-center text-white/60 mb-6">Or connect with me on:</p>
            <div className="flex justify-center gap-6">
              {socials.map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-125 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-slow`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  title={social.name}
                >
                  <social.icon className="text-white text-2xl hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

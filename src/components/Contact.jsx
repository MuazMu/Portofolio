import { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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
    <section id="Contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Hubungi Saya
            </span>
          </h2>
          <p className="text-center text-white/60 mb-12 text-lg">
            Mari berdiskusi tentang project Anda
          </p>

          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-white/80 font-medium">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors text-white placeholder:text-white/40"
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
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors text-white placeholder:text-white/40"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80 font-medium">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors resize-none text-white placeholder:text-white/40"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg font-medium transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-center text-green-400 font-medium">
                  ✓ Pesan berhasil dikirim!
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <p className="text-center text-white/60 mb-6">Atau hubungi saya melalui:</p>
            <div className="flex justify-center gap-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg`}
                  title={social.name}
                >
                  <social.icon className="text-white text-2xl" />
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

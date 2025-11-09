const About = () => {
  const skills = [
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Advanced' },
    { name: 'React Native', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Git/GitHub', level: 'Advanced' },
    { name: 'Vite', level: 'Advanced' },
  ];

  const stats = [
    { label: 'Total Projects', value: '10+', icon: '📦' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Professional Skills', value: 'Validated', icon: '✓' },
  ];

  return (
    <section id="About" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Tentang Saya
              </h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Halo! Saya Eki Zulfar Rachman, seorang Front-End Web Developer yang passionate dalam menciptakan
                pengalaman web yang menarik dan responsif. Saya berfokus pada desain antarmuka modern dengan
                performa tinggi.
              </p>
              <p className="text-white/70 leading-relaxed">
                Dengan pengalaman dalam berbagai teknologi modern seperti React, Tailwind CSS, dan Node.js,
                saya berkomitmen untuk menghadirkan solusi web berkualitas tinggi yang memenuhi kebutuhan pengguna.
              </p>
            </div>

            <div className="glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-[#6366f1]/50 transition-colors duration-300"
                  >
                    <div className="font-medium text-white">{skill.name}</div>
                    <div className="text-xs text-white/60">{skill.level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

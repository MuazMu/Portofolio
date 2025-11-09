# Quick Start Guide: Duplicate Portfolio Website

## Setup Commands

### 1. Initialize Project
```bash
# Create new Vite + React project
npm create vite@latest . -- --template react

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 2. Configure Tailwind CSS

**tailwind.config.js:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#0a0a1a',
        accent: {
          DEFAULT: '#6366f1',
          purple: '#a855f7',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #4f4f4f10 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f10 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
}
```

**src/index.css:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #030014;
  color: #ffffff;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

/* Glassmorphism utility */
@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-strong {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
}
```

### 3. Update index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/png" href="/Photo.jpg" />

  <!-- Primary Meta Tags -->
  <title>Eki Zulfar Rachman – Front-End Web Developer</title>
  <meta name="title" content="Eki Zulfar Rachman – Front-End Web Developer" />
  <meta name="description" content="Saya Eki Zulfar Rachman, pengembang web front-end yang berfokus pada desain antarmuka modern, responsif, dan performa tinggi. Lihat portofolio dan kontak saya di sini." />
  <meta name="keywords" content="Eki, Eki Zulfar, Front-End Developer, Web Developer Indonesia, Portofolio Eki, ekizr" />
  <meta name="mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="theme-color" content="#030014" />
  <meta name="msapplication-navbutton-color" content="#030014" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://eki.my.id/" />
  <meta property="og:title" content="Eki Zulfar Rachman – Front-End Web Developer" />
  <meta property="og:description" content="Portofolio Eki Zulfar Rachman – pengembang web dengan fokus pada desain modern dan performa tinggi." />
  <meta property="og:image" content="https://eki.my.id/Meta.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://eki.my.id/" />
  <meta name="twitter:title" content="Eki Zulfar Rachman – Front-End Web Developer" />
  <meta name="twitter:description" content="Portofolio Eki Zulfar Rachman – pengembang web dengan fokus pada desain modern dan performa tinggi." />
  <meta name="twitter:image" content="https://eki.my.id/Meta.png" />

  <!-- Structured Data JSON-LD -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "name": "Home",
        "url": "https://www.eki.my.id/#Home"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "About",
        "url": "https://www.eki.my.id/#About"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Portofolio",
        "url": "https://www.eki.my.id/#Portofolio"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Contact",
        "url": "https://www.eki.my.id/#Contact"
      }
    ]
  }
  </script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
```

### 4. Create Component Structure

```bash
mkdir -p src/components src/assets/images src/assets/icons
```

---

## Component Templates

### Navbar Component

**src/components/Navbar.jsx:**
```jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Portofolio', href: '#Portofolio' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
          EZR
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass mt-4">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
```

### Hero Component

**src/components/Hero.jsx:**
```jsx
const Hero = () => {
  return (
    <section id="Home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-[#a855f7]/20 to-[#6366f1]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Eki Zulfar Rachman</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#3b82f6] bg-clip-text text-transparent">
              Front-End Web Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            Pengembang web front-end yang berfokus pada desain antarmuka modern, responsif, dan performa tinggi.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#Portofolio"
              className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Lihat Portofolio
            </a>
            <a
              href="#Contact"
              className="px-8 py-4 glass rounded-full font-medium hover:scale-105 transition-transform duration-300"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
```

### About Component

**src/components/About.jsx:**
```jsx
const About = () => {
  return (
    <section id="About" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Tentang Saya</h3>
              <p className="text-white/70 mb-4">
                [Add your about text here]
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {/* Add skill tags */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
```

### Portfolio Component

**src/components/Portfolio.jsx:**
```jsx
const Portfolio = () => {
  const projects = [
    // Add your projects here
    {
      id: 1,
      title: "Project Title",
      description: "Project description",
      image: "/project1.jpg",
      technologies: ["React", "Tailwind", "Vite"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="Portofolio" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
            Portfolio
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="h-52 bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 overflow-hidden">
                {/* Project image */}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full border border-white/20 bg-white/5">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-white/80 hover:text-white transition-colors">
                    GitHub
                  </a>
                  <a href={project.demo} className="text-white/80 hover:text-white transition-colors">
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
```

### Contact Component

**src/components/Contact.jsx:**
```jsx
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="Contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>

          <div className="glass rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-white/80">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-white/80">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#6366f1] focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-lg font-medium hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            {/* Add social media icons with gradient backgrounds */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```

### Footer Component

**src/components/Footer.jsx:**
```jsx
const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 text-center text-white/60">
        <p>&copy; {new Date().getFullYear()} Eki Zulfar Rachman. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
```

### Main App Component

**src/App.jsx:**
```jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
```

---

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Next Steps

1. **Inspect the live website** with browser DevTools to get exact:
   - Text content for each section
   - Project details
   - Skill lists
   - Social media links
   - Animation timings
   - Exact colors and spacing

2. **Take screenshots** of each section for reference

3. **Export assets**:
   - Profile photo
   - Project images
   - Icons
   - Background elements

4. **Add animations** using:
   - CSS transitions
   - Tailwind animation utilities
   - Framer Motion (optional)
   - Intersection Observer for scroll animations

5. **Test responsiveness** on:
   - Mobile (320px - 480px)
   - Tablet (768px - 1024px)
   - Desktop (1280px+)

6. **Optimize**:
   - Image compression
   - Lazy loading
   - Code splitting
   - SEO optimization

---

## Useful Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)
- [Gradient Generator](https://cssgradient.io/)
- [Color Palette](https://coolors.co/)

---

**Quick Reference Colors:**
- Primary BG: `#030014`
- Secondary BG: `#0a0a1a`
- Accent Indigo: `#6366f1`
- Accent Purple: `#a855f7`
- Accent Blue: `#3b82f6`

**Font:** Poppins (Google Fonts)

**Animation Pattern:** Pulse, bounce, scale on hover, gradient text

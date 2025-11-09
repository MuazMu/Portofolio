# Extracted Content from eki.my.id

## Confirmed Information from JavaScript Bundle

### Social Media Links
```
GitHub: https://github.com/EkiZR
LinkedIn: https://www.linkedin.com/in/ekizr/
Instagram: https://www.instagram.com/ekizr._/?hl=id
```

### Technologies/Skills Mentioned
Based on string extraction from the minified JavaScript:

1. **Frontend:**
   - React
   - Javascript
   - Tailwind
   - ReactNative (React Native)

2. **Backend/Runtime:**
   - Node.js

3. **Services/Libraries:**
   - React Router (routing library)
   - Supabase (backend as a service - likely for contact form or authentication)

### Text Content Strings Found

#### Navigation & Sections
- "About"
- "Projects"
- "Contact"
- "About Me"

#### Hero Section (likely)
- "Eki Zulfar Rachman"
- "Developer"
- "View Projects"

#### Portfolio Section (likely)
- "projects"
- "Total Projects"

#### Other
- "Professional skills validated"

### Platform Icons/Links
The website includes social media icons for:
- Github (gradient from #333)
- Instagram (gradient from #833AB4 via #E4405F)
- LinkedIn (gradient from #0A66C2)

---

## Additional Technical Details

### Backend Services
**Supabase Integration Detected:**
- The site appears to use Supabase (gotrue-js library found)
- Likely used for:
  - Contact form submissions
  - Email handling
  - Possibly authentication (though unlikely for a portfolio)

### Routing
**React Router:**
- The site uses React Router for navigation
- Hash-based routing (#Home, #About, etc.)
- Client-side routing for single-page experience

---

## Social Media Gradient Mapping

Based on CSS analysis and string extraction:

```jsx
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/EkiZR",
    gradient: "from-[#333] to-gray-600",
    icon: "github" // Use react-icons or similar
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ekizr/",
    gradient: "from-[#0A66C2] to-blue-600",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/ekizr._/?hl=id",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FD1D1D]",
    icon: "instagram"
  }
];
```

---

## Recommended Additional Libraries

Based on detected patterns and common portfolio site needs:

```bash
# Icons
npm install react-icons

# Animations (optional but recommended)
npm install framer-motion

# Form handling (if using Supabase)
npm install @supabase/supabase-js

# React Router (if you want routing)
npm install react-router-dom
```

---

## Implementation Notes

### Supabase Setup (Optional)
If you want to replicate the contact form functionality:

1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Create a table for contact form submissions
4. Get your Supabase URL and anon key
5. Set up environment variables

**.env:**
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

**Contact.jsx with Supabase:**
```jsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const handleSubmit = async (e) => {
  e.preventDefault();

  const { data, error } = await supabase
    .from('contacts')
    .insert([formData]);

  if (error) {
    console.error('Error:', error);
  } else {
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  }
};
```

### Social Links Component

**src/components/SocialLinks.jsx:**
```jsx
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
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
    <div className="flex gap-4 justify-center">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center hover:scale-110 transition-transform duration-300`}
        >
          <social.icon className="text-white text-xl" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
```

---

## Skills List (Inferred from detected technologies)

Based on the technologies found in the code:

```jsx
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "React Native", level: "Intermediate" },
      { name: "HTML/CSS", level: "Advanced" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Intermediate" },
    ]
  },
  {
    category: "Tools & Services",
    items: [
      { name: "Git/GitHub", level: "Advanced" },
      { name: "Supabase", level: "Intermediate" },
      { name: "Vite", level: "Advanced" },
    ]
  }
];
```

---

## Portfolio Metrics Section

The site appears to have a stats/metrics section with:
- "Total Projects" counter
- "Professional skills validated" indicator

**Stats Component:**
```jsx
const Stats = () => {
  const stats = [
    { label: "Total Projects", value: "10+", icon: "📦" },
    { label: "Technologies", value: "15+", icon: "⚡" },
    { label: "Professional Skills", value: "Validated", icon: "✓" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      {stats.map((stat, index) => (
        <div key={index} className="glass rounded-xl p-6 text-center">
          <div className="text-4xl mb-2">{stat.icon}</div>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-2">
            {stat.value}
          </div>
          <div className="text-white/60">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};
```

---

## Complete Social Links with Icons

```bash
# Install react-icons
npm install react-icons
```

Then use in components:
```jsx
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
```

---

## Content Placeholders

### Hero Section
```
Main Heading: "Eki Zulfar Rachman"
Subtitle: "Front-End Web Developer"
Description: "Pengembang web front-end yang berfokus pada desain antarmuka modern, responsif, dan performa tinggi."
CTA 1: "View Projects" → #About
CTA 2: "Contact" → #Contact
```

### About Section
```
Heading: "About Me"
Subheading: "Eki Zulfar Rachman"
[Add personal bio text from manual inspection]
```

### Portfolio Section
```
Heading: "Projects"
Metric: "Total Projects: [Number]"
[Project cards with images, titles, descriptions, tech stacks]
```

### Contact Section
```
Heading: "Contact"
Form Fields:
  - Name (text input)
  - Email (email input)
  - Message (textarea)
Button: "Send Message" or similar
Social Links: GitHub, LinkedIn, Instagram
```

---

## File Structure Summary

```
portfolio/
├── public/
│   ├── Photo.jpg (profile picture / favicon)
│   ├── Meta.png (OG image)
│   └── grid.svg (background pattern)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Stats.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── SocialLinks.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── images/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env (for Supabase credentials)
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## Next Steps for Perfect Duplication

1. **Visit the live site** and:
   - Screenshot each section
   - Copy exact text content
   - Note animation timings
   - Check project details
   - Inspect hover effects
   - Test mobile menu

2. **Collect Assets:**
   - Profile photo (Photo.jpg)
   - OG image (Meta.png)
   - Project screenshots
   - Any other images

3. **Fine-tune Styling:**
   - Exact spacing
   - Exact colors (use ColorZilla)
   - Font sizes
   - Animation durations

4. **Test Functionality:**
   - Contact form submission
   - Navigation smooth scrolling
   - Responsive design
   - Social links

---

**Last Updated:** 2025-11-09
**Source:** https://eki.my.id/
**Extracted via:** JavaScript bundle analysis

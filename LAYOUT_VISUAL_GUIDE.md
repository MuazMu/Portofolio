# Visual Layout Guide

This document provides visual representations of the page structure and components.

---

## Page Layout Overview

```
┌─────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                    │  ← Fixed/Sticky
│  [Logo/EZR]  [Home] [About] [Portfolio] [Contact]  │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                                                      │
│              🌟 HERO SECTION (#Home)                │
│                                                      │
│          [Gradient Orb]     [Gradient Orb]         │
│                                                      │
│             Eki Zulfar Rachman                      │
│         Front-End Web Developer                     │
│                                                      │
│      Description text in Indonesian...              │
│                                                      │
│      [View Projects] [Contact Me]                   │
│                                                      │
│              [Grid Pattern Background]              │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│              📝 ABOUT SECTION (#About)              │
│                                                      │
│                  About Me                           │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────┐        │
│  │  Personal Info   │  │     Skills       │        │
│  │  Glassmorphic    │  │   Glassmorphic   │        │
│  │     Card         │  │      Card        │        │
│  └──────────────────┘  └──────────────────┘        │
│                                                      │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │ Stat 1  │  │ Stat 2  │  │ Stat 3  │           │
│  │Projects │  │  Tech   │  │ Skills  │           │
│  └─────────┘  └─────────┘  └─────────┘           │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│           💼 PORTFOLIO SECTION (#Portofolio)        │
│                                                      │
│                   Projects                          │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐               │
│  │   [Image]    │  │   [Image]    │               │
│  │              │  │              │               │
│  │ Project 1    │  │ Project 2    │               │
│  │ Description  │  │ Description  │               │
│  │ [Tags]       │  │ [Tags]       │               │
│  │ GitHub Demo  │  │ GitHub Demo  │               │
│  └──────────────┘  └──────────────┘               │
│                                                      │
│  ┌──────────────┐  ┌──────────────┐               │
│  │   [Image]    │  │   [Image]    │               │
│  │              │  │              │               │
│  │ Project 3    │  │ Project 4    │               │
│  │ Description  │  │ Description  │               │
│  │ [Tags]       │  │ [Tags]       │               │
│  │ GitHub Demo  │  │ GitHub Demo  │               │
│  └──────────────┘  └──────────────┘               │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│            📧 CONTACT SECTION (#Contact)            │
│                                                      │
│                   Contact                           │
│                                                      │
│         ┌─────────────────────────────┐            │
│         │  Glassmorphic Contact Form  │            │
│         │                              │            │
│         │  [Name Field]                │            │
│         │  [Email Field]               │            │
│         │  [Message Textarea]          │            │
│         │                              │            │
│         │     [Send Message]           │            │
│         │                              │            │
│         └─────────────────────────────┘            │
│                                                      │
│          [GitHub] [LinkedIn] [Instagram]            │
│                                                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│                      FOOTER                          │
│         © 2024 Eki Zulfar Rachman                   │
└─────────────────────────────────────────────────────┘
```

---

## Component Breakdown

### 1. Navigation Bar

```
Desktop:
┌─────────────────────────────────────────────────────┐
│  [EZR]                    [Home] [About] [Portfolio] [Contact]  │
└─────────────────────────────────────────────────────┘

Mobile:
┌─────────────────────────────────────────────────────┐
│  [EZR]                                    [☰ Menu]  │
└─────────────────────────────────────────────────────┘
```

**States:**
- Default: Transparent background
- Scrolled: Glassmorphic background (backdrop-blur)
- Mobile: Hamburger menu → Full screen overlay

**Styling:**
```
Position: fixed
Z-index: 50
Padding: py-4 md:py-6
Background: Transparent → glass (on scroll)
Text Color: white/80 → white (hover)
Font Weight: medium
```

---

### 2. Hero Section

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│         💜 [Animated Gradient Orb]                  │
│                                                      │
│                                                      │
│          ┌─────────────────────────┐                │
│          │  Eki Zulfar Rachman     │ ← H1, Large   │
│          └─────────────────────────┘                │
│                                                      │
│          ┌─────────────────────────┐                │
│          │ Front-End Web Developer │ ← H2, Gradient│
│          └─────────────────────────┘                │
│                                                      │
│          Description text here...                   │
│          Multiple lines, centered                   │
│                                                      │
│       ┌──────────────┐  ┌──────────────┐          │
│       │View Projects │  │  Contact Me  │          │
│       └──────────────┘  └──────────────┘          │
│                                                      │
│                                  💙 [Gradient Orb]  │
│          [Grid Pattern in Background]               │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Elements:**
1. **Background Effects:**
   - Grid pattern (subtle, opacity 30%)
   - 2 animated gradient orbs (pulse animation)
   - Dark gradient overlay

2. **Main Content:**
   - H1: Name (text-5xl md:text-7xl, white)
   - H2: Title (text-3xl md:text-5xl, gradient indigo→purple→blue)
   - Description (text-lg md:text-xl, white/70)

3. **CTAs:**
   - Primary: Gradient background (indigo→purple), rounded-full
   - Secondary: Glassmorphic, rounded-full
   - Both: hover:scale-105

**Layout:**
```css
min-h-screen
flex items-center justify-center
relative overflow-hidden
```

---

### 3. About Section

```
┌─────────────────────────────────────────────────────┐
│                    About Me                          │ ← Gradient heading
│                    ────────                          │
│                                                      │
│  Desktop (2 columns):                               │
│  ┌──────────────────────┐  ┌──────────────────┐   │
│  │  📝 About Me Card    │  │  ⚡ Skills Card   │   │
│  │                      │  │                   │   │
│  │  Personal info,      │  │  Grid of skills   │   │
│  │  bio text, etc.      │  │  with icons/tags  │   │
│  │                      │  │                   │   │
│  │  Glassmorphic bg     │  │  Glassmorphic bg  │   │
│  └──────────────────────┘  └──────────────────┘   │
│                                                      │
│  Stats Section (3 columns):                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐           │
│  │   10+   │  │   15+   │  │   ✓     │           │
│  │Projects │  │  Tech   │  │ Skills  │           │
│  └─────────┘  └─────────┘  └─────────┘           │
│                                                      │
│  Mobile (1 column, stacked)                         │
└─────────────────────────────────────────────────────┘
```

**Card Structure:**
```
┌──────────────────────────────┐
│ Glass Card                    │
│ ┌──────────────────────────┐ │
│ │ Heading (text-2xl bold)   │ │
│ └──────────────────────────┘ │
│                               │
│ Content text (white/70)       │
│ Multiple paragraphs...        │
│                               │
│ Skills/Items:                 │
│ [Tag1] [Tag2] [Tag3]         │
│ [Tag4] [Tag5] [Tag6]         │
│                               │
└──────────────────────────────┘

Styling:
- glass class
- rounded-2xl
- p-8
- hover:scale-105 (optional)
```

**Stats Card:**
```
┌──────────────┐
│     📊       │ ← Icon/Emoji (text-4xl)
│              │
│     10+      │ ← Value (text-3xl bold, gradient)
│              │
│  Projects    │ ← Label (text-white/60)
└──────────────┘

Styling:
- glass
- rounded-xl
- p-6
- text-center
```

---

### 4. Portfolio Section

```
┌─────────────────────────────────────────────────────┐
│                    Projects                          │
│                    ────────                          │
│                                                      │
│  Project Grid (responsive):                         │
│                                                      │
│  ┌─────────────────────┐  ┌─────────────────────┐ │
│  │ ┌─────────────────┐ │  │ ┌─────────────────┐ │ │
│  │ │  Project Image  │ │  │ │  Project Image  │ │ │
│  │ │   (h-52)        │ │  │ │   (h-52)        │ │ │
│  │ └─────────────────┘ │  │ └─────────────────┘ │ │
│  │                     │  │                     │ │
│  │ Project Title       │  │ Project Title       │ │
│  │                     │  │                     │ │
│  │ Description text... │  │ Description text... │ │
│  │ (line-clamp-2)      │  │ (line-clamp-2)      │ │
│  │                     │  │                     │ │
│  │ [React] [Tailwind]  │  │ [Vue] [Node.js]     │ │
│  │                     │  │                     │ │
│  │ GitHub | Live Demo  │  │ GitHub | Live Demo  │ │
│  └─────────────────────┘  └─────────────────────┘ │
│                                                      │
│  (More project cards below...)                      │
└─────────────────────────────────────────────────────┘
```

**Project Card Structure:**
```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │ ← Image container
│ │                         │ │   (h-52, overflow-hidden)
│ │   Project Screenshot    │ │   Gradient overlay on hover
│ │                         │ │
│ └─────────────────────────┘ │
│                             │
│ ┌─────────────────────────┐ │ ← Content (p-6)
│ │ Project Name            │ │   (text-2xl font-bold mb-3)
│ │                         │ │
│ │ Description text that   │ │   (text-white/70 mb-4)
│ │ might be long...        │ │   (line-clamp-2)
│ │                         │ │
│ │ [Tech1] [Tech2] [Tech3] │ │   Tech tags
│ │                         │ │   (flex flex-wrap gap-2)
│ │ [GitHub] | [Live Demo]  │ │   Links
│ └─────────────────────────┘ │
└─────────────────────────────┘

Styling:
- glass
- rounded-2xl
- overflow-hidden
- group (for hover effects)
- hover:scale-105
- transition-transform duration-300
```

**Technology Tag:**
```
┌──────────┐
│  React   │
└──────────┘

Styling:
- px-3 py-1
- text-sm
- rounded-full
- border border-white/20
- bg-white/5
```

---

### 5. Contact Section

```
┌─────────────────────────────────────────────────────┐
│                    Contact                           │
│                    ───────                           │
│                                                      │
│         ┌─────────────────────────────┐            │
│         │  Glassmorphic Form Card     │            │
│         │                              │            │
│         │  ┌────────────────────────┐ │            │
│         │  │ Name                   │ │ ← Label    │
│         │  │ [Input Field........] │ │            │
│         │  └────────────────────────┘ │            │
│         │                              │            │
│         │  ┌────────────────────────┐ │            │
│         │  │ Email                  │ │            │
│         │  │ [Input Field........] │ │            │
│         │  └────────────────────────┘ │            │
│         │                              │            │
│         │  ┌────────────────────────┐ │            │
│         │  │ Message                │ │            │
│         │  │ [Textarea............] │ │            │
│         │  │ [....................] │ │            │
│         │  │ [....................] │ │            │
│         │  └────────────────────────┘ │            │
│         │                              │            │
│         │  ┌────────────────────────┐ │            │
│         │  │   Send Message         │ │ ← Gradient button
│         │  └────────────────────────┘ │            │
│         │                              │            │
│         └─────────────────────────────┘            │
│                                                      │
│                                                      │
│         Social Media Links:                         │
│         ┌────┐  ┌────┐  ┌────┐                    │
│         │ 🐙 │  │ 💼 │  │ 📷 │                    │
│         └────┘  └────┘  └────┘                    │
│         GitHub LinkedIn Instagram                   │
│                                                      │
└─────────────────────────────────────────────────────┘
```

**Form Input Field:**
```
┌─────────────────────────────────┐
│  Label                           │ ← block mb-2 text-white/80
│  ┌───────────────────────────┐  │
│  │ [User input here.......] │  │ ← Input field
│  └───────────────────────────┘  │
└─────────────────────────────────┘

Input Styling:
- w-full
- px-4 py-3
- rounded-lg
- bg-white/5
- border border-white/10
- focus:border-[#6366f1]
- focus:outline-none
- transition-colors
```

**Social Icon:**
```
┌────┐
│ 🐙 │ ← Icon (text-xl)
└────┘

Container Styling:
- w-12 h-12
- rounded-full
- bg-gradient-to-br {gradient}
- flex items-center justify-center
- hover:scale-110
- transition-transform duration-300
```

---

## Responsive Breakpoints

### Mobile (< 768px)
```
Navigation: Hamburger menu
Hero: Single column, smaller text
About: Single column, stacked cards
Portfolio: Single column
Contact: Full width form
Stats: Single column or 2 columns

Font Sizes:
- H1: text-5xl → text-4xl
- H2: text-3xl → text-2xl
- Body: text-lg → text-base
```

### Tablet (768px - 1024px)
```
Navigation: Full menu
About: 2 columns
Portfolio: 2 columns
Stats: 3 columns

Font Sizes:
- H1: text-6xl
- H2: text-4xl
- Body: text-lg
```

### Desktop (> 1024px)
```
Navigation: Full menu
All sections: Optimized for large screens
Max-width containers: 80rem (max-w-7xl)

Font Sizes:
- H1: text-7xl
- H2: text-5xl
- Body: text-xl
```

---

## Animation States

### Hover Effects

**Buttons/Links:**
```
Default → Hover → Active
Scale: 100% → 105% → 95%
Duration: 300ms
Easing: ease-in-out
```

**Cards:**
```
Default → Hover
Scale: 100% → 105%
Shadow: subtle → pronounced
Duration: 300ms
```

**Images:**
```
Default → Hover
Scale: 100% → 110%
Opacity: 100% → gradient overlay 20%
Duration: 300ms
```

### Page Load Animations

**Gradient Orbs:**
```
Animation: pulse
Duration: 6s
Easing: cubic-bezier(0.4, 0, 0.6, 1)
Iteration: infinite
Effect: Opacity 100% → 50% → 100%
```

**Elements Fade In (optional):**
```
Initial: opacity-0 translate-y-12
Animate: opacity-100 translate-y-0
Duration: 600ms
Delay: Staggered (100ms, 200ms, 300ms...)
```

---

## Color Usage Map

### Backgrounds
```
Page:           #030014 (primary)
Sections:       #0a0a1a (secondary, optional)
Cards:          white/10 (glassmorphic)
Overlays:       black/40, black/50
Inputs:         white/5
```

### Text
```
Primary:        white (100%)
Secondary:      white/80
Tertiary:       white/70
Muted:          white/60
```

### Accents
```
Primary:        #6366f1 (indigo)
Secondary:      #a855f7 (purple)
Tertiary:       #3b82f6 (blue)

Gradients:
- Indigo → Purple
- Purple → Blue
- Blue → Indigo
- Multi-color for social icons
```

### Borders
```
Subtle:         white/10
Default:        white/20
Focused:        #6366f1 (indigo)
```

---

## Z-Index Hierarchy

```
Background elements:    -50, -10
Base content:           0
Cards/Images:           10
Floating elements:      20
Navigation:             50
Modals/Overlays:        100
```

---

## Spacing System

### Section Padding
```
Vertical:   py-20 (5rem top & bottom)
Horizontal: px-4 md:px-6 (responsive)
```

### Card Padding
```
Small:      p-4 (1rem)
Medium:     p-6 (1.5rem)
Large:      p-8 (2rem)
```

### Gaps
```
Small:      gap-2, gap-3 (0.5rem, 0.75rem)
Medium:     gap-4, gap-6 (1rem, 1.5rem)
Large:      gap-8, gap-10 (2rem, 2.5rem)
```

### Margins
```
Bottom:     mb-2, mb-4, mb-6, mb-8, mb-12
Top:        mt-4, mt-6, mt-8, mt-10, mt-16
```

---

## Typography Hierarchy

```
H1 (Hero):
- Font: Poppins Bold (700-900)
- Size: text-5xl md:text-7xl (3rem → 4.5rem)
- Color: white
- Line height: leading-tight

H2 (Hero Subtitle):
- Font: Poppins Bold
- Size: text-3xl md:text-5xl (1.875rem → 3rem)
- Color: Gradient (indigo → purple → blue)
- Line height: leading-tight

H2 (Section Headers):
- Font: Poppins Bold
- Size: text-4xl md:text-5xl
- Color: Gradient (indigo → purple)
- Text align: center
- Margin bottom: mb-12

H3 (Card Headers):
- Font: Poppins Bold
- Size: text-2xl
- Color: white
- Margin bottom: mb-4

Body Text:
- Font: Poppins Regular (400)
- Size: text-base md:text-lg
- Color: white/70
- Line height: leading-relaxed

Small Text (Tags, Labels):
- Font: Poppins Regular
- Size: text-sm
- Color: white/60 or white/80
```

---

This visual guide should help you understand the layout structure and styling patterns used throughout the portfolio website!

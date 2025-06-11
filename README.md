# 🚀 OctalTask - Modern Landing Page (MPA)

<div align="center">
  <img src="logo.png" alt="OctalTask Logo" width="150" height="120">

  **Modern Task Management Landing Page**

  *Built with pure HTML, CSS, and JavaScript - No frameworks required*

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 📖 About

OctalTask is a modern landing page for a task management application, built entirely with **vanilla HTML, CSS, and JavaScript**. It is a university project at the **University of Information Technology – VNU-HCM**, showcasing the ability to create a professional web interface without relying on complex frameworks.

## ⚡ Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with modern features
- **JavaScript (ES6+)** - Interactive functionality
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **No Build Process** - Direct browser execution

## 🌟 Features

### ✨ **Core Functionality**
- 🌓 **Dark/Light Mode** - System preference detection with toggle
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **Smooth Scrolling** - Seamless section navigation
- 🎨 **Scroll Animations** - Elements animate on scroll into view
- 🍔 **Mobile Menu** - Collapsible navigation for mobile devices
- ❓ **Interactive FAQ** - Expandable accordion sections

### 🎨 **Modern UI Components**
- **Hero Section** - Gradient backgrounds with floating elements
- **Features Grid** - Icon-based feature showcase
- **How It Works** - Step-by-step process visualization
- **Team Members** - Beautiful gradient avatars with social links
- **Testimonials** - Customer reviews with star ratings
- **Call-to-Action** - Multiple conversion points throughout

### ⚡ **Performance Optimizations**
- **Image Preloading** - Faster perceived performance
- **Optimized Animations** - Hardware-accelerated CSS transitions
- **Debounced Scroll Events** - Efficient scroll performance
- **Custom CSS Properties** - Consistent theming system
- **Minimal JavaScript** - Lightweight interactive functionality

## 🚀 Quick Start

### Using Direct Browser
```bash
# Clone the repository
git clone <repository-url>
cd octaltask-mpa

# Open in browser
open index.html
```

Then visit `http://localhost:8000`

## 📁 Project Structure

```
octaltask-mpa/
├── index.html              # Main HTML file
├── styles.css              # Custom CSS styles & animations
├── script.js               # JavaScript functionality
├── tailwind-config.js      # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 🔧 Configuration

### Tailwind CSS Setup
The project uses Tailwind CSS via CDN with custom configuration:

```javascript
// tailwind-config.js
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { 500: '#3b82f6', 600: '#2563eb' }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-gentle': 'bounceGentle 2s infinite',
      }
    }
  }
}
```

### JavaScript Architecture
```javascript
// Main controller class
class LandingPageController {
  constructor() {
    this.initializeTheme();
    this.initializeNavigation();
    this.initializeScrollAnimations();
    this.initializeFAQ();
  }
}
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6) to Purple (#8b5cf6) gradients
- **Secondary**: Gray scale (#6b7280)
- **Accent**: Green (#10b981) for success states
- **Backgrounds**: Light (#f9fafb) / Dark (#111827)

### Typography
- **Font Family**: Inter (system fallback)
- **Scale**: Tailwind's default scale (xs to 6xl)
- **Weight**: 400 (normal) to 700 (bold)

### Components
- **Buttons**: Primary, secondary, outline variants
- **Cards**: Feature, testimonial, team member cards
- **Navigation**: Fixed header with mobile toggle
- **Sections**: Hero, features, how-it-works, about, testimonials, FAQ

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Mobile Chrome | 90+ |

## 🎯 Key Highlights

### 🏆 **Performance Benefits**
- ⚡ **Fast Loading** - No framework overhead
- 📦 **Small Bundle** - ~45KB total size
- 🚀 **Quick TTI** - Time to Interactive < 0.5s
- 💨 **Instant Navigation** - No build process needed

### 🛠️ **Developer Experience**
- 🔧 **Simple Setup** - No complex build tools
- 📝 **Clean Code** - Well-organized and commented
- 🎨 **Modern CSS** - Flexbox, Grid, Custom Properties
- 📱 **Mobile First** - Responsive design patterns

### 🌐 **SEO Friendly**
- 📄 **Semantic HTML** - Proper heading structure
- 🔍 **Meta Tags** - Optimized for search engines
- 🚀 **Fast Loading** - Better Core Web Vitals
- 📱 **Mobile Friendly** - Responsive and accessible

## 👥 Team Members

### Development Team
- **Vo Tran Phi** - Full-stack Developer - Team Leader / 22521081
- **Thai Kieu Phuong** - Frontend Developer / 22521170
- **Le Ngoc Duy Linh** - Full-stack Developer / 22520762
- **Tran Dong Truc Lam** - Frontend Developer / 22520746

### University Project
- **Institution**: University of Information Technology - VNUHCM
- **Course**: Web Development
- **Year**: 2025

## 🔄 Development Process

### Code Quality
- ✅ **Clean HTML** - Semantic and accessible markup
- ✅ **Organized CSS** - BEM-like naming conventions
- ✅ **Modern JavaScript** - ES6+ features with fallbacks
- ✅ **Responsive Design** - Mobile-first breakpoints
- ✅ **Performance Optimized** - Efficient animations and interactions

### Testing
- **Cross-browser** compatibility testing
- **Mobile device** responsiveness testing
- **Accessibility** compliance checking
- **Performance** metrics monitoring

## 📄 License

This project is created for educational purposes as part of a university course assignment.

## 🙏 Acknowledgments

- **Tailwind CSS** - For the utility-first CSS framework
- **MDN Web Docs** - For comprehensive web development documentation
- **Google Fonts** - For the Inter font family
- **Heroicons** - For the SVG icon set

---

<div align="center">

  **🎓 University of Information Technology - VNUHCM**

  **Web Development Course Project - 2025**

  **Made with ❤️ by UIT Students**

</div>

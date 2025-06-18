# 🚀 OctalTask - Multi-page Application (MPA)

<div align="center">
  <img src="./public/logo.png" alt="OctalTask Logo" width="150" height="120">

  **Modern Task Management Landing Page**

  *Built with pure HTML, CSS, and JavaScript - No frameworks required*

  [![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-success?style=for-the-badge)](https://jiraops.github.io/octaltask-mpa/)
  [![GitHub Pages](https://img.shields.io/badge/Deployed_on-GitHub_Pages-121013?style=for-the-badge&logo=github)](https://jiraops.github.io/octaltask-mpa/)

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 📖 About

This is a research project that compares the performance between **Single-Page Application (SPA)** and **Multi-Page Application (MPA)** by building a landing page for the task management application "OctalTask."

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

### 🌐 **Option 1: View Live Demo**
Visit the deployed website: **[https://jiraops.github.io/octaltask-mpa/](https://jiraops.github.io/octaltask-mpa/)**

### 💻 **Option 2: Run Locally**
```bash
# Clone the repository
git clone <repository-url>
cd octaltask-mpa

# Open in browser
open index.html
```

Or serve with a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
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
---

## 📈 Analysis Results

### 🏆 Key Findings

#### **MPA Advantages:**
- ✅ **Faster Initial Load** - Immediate content visibility
- ✅ **Better SEO** - Search engine friendly out-of-the-box
- ✅ **Simpler Architecture** - Easier to understand and maintain
- ✅ **Smaller Bundle** - Less JavaScript to download and parse
- ✅ **Better Core Web Vitals** - Superior performance metrics

#### **SPA Advantages:**
- ✅ **Rich Interactivity** - Complex state management
- ✅ **Developer Experience** - Modern tooling and debugging
- ✅ **Component Reusability** - Modular architecture
- ✅ **Instant Navigation** - No page reloads
- ✅ **Advanced Features** - Virtual DOM, lifecycle methods

### 🎯 Recommendations

| Use Case | Recommended Approach | Reason |
|----------|---------------------|---------|
| **Landing Pages** | MPA | Better SEO, faster load times |
| **Marketing Sites** | MPA | Content-focused, SEO critical |
| **Web Applications** | SPA | Rich interactivity needed |
| **E-commerce** | Hybrid | Product pages (MPA) + Cart (SPA) |
| **Blogs/News** | MPA | Content delivery focused |

---


## 🧪 Testing Methodology

### Performance Testing Tools
- **Lighthouse** - Web performance auditing
- **WebPageTest** - Real-world performance testing
- **Chrome DevTools** - Network and performance profiling
- **GTmetrix** - Detailed performance analysis

### Testing Scenarios
1. **Cold Load** - First-time visitor experience
2. **Warm Load** - Returning visitor with cache
3. **Slow 3G** - Mobile network simulation
4. **Fast 3G** - Improved mobile connection
5. **Desktop** - High-speed broadband

### Metrics Measured
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Total Blocking Time (TBT)

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| Mobile Safari | 14+ |
| Mobile Chrome | 90+ |


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

## 📄 License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## 🙏 Acknowledgments

- **Tailwind CSS** - For the utility-first CSS framework
- **MDN Web Docs** - For comprehensive web development documentation
- **Google Fonts** - For the Inter font family
- **Heroicons** - For the SVG icon set

---

<div align="center">

  **⭐ Star this project if it helped your research!**

  **Made with ❤️ by UIT-VNUHCM Students**

  **📊 [View Live Demo](https://jiraops.github.io/octaltask-mpa/) | 📊 [SPA Version](https://jiraops.github.io/octaltask/)**

</div>

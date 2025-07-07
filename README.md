# Chamudi Ransika - Electronics Engineering Portfolio

A modern, responsive portfolio website designed specifically for an Electronics Engineering undergraduate student. This portfolio showcases technical skills, projects, and achievements in the field of electronics engineering.

## 🚀 Features

### Design & User Experience
- **Modern & Elegant Design**: Clean, professional layout with a feminine touch
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **Custom Cursor**: Interactive custom cursor with hover effects
- **Circuit-themed Background**: Subtle circuit pattern animations
- **Glow Effects**: Electronics-themed glow effects on interactive elements

### Technical Features
- **Fast Loading**: Optimized for performance with minimal dependencies
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Cross-browser Compatible**: Works on modern browsers with legacy support
- **Mobile-first Approach**: Designed with mobile users in mind

### Content Sections
- **Hero Section**: Eye-catching introduction with typing animation
- **About Section**: Personal background and interests
- **Skills Section**: Technical skills with animated progress bars
- **Projects Section**: Showcase of electronics projects
- **Contact Section**: Contact form and social media links

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Tailwind CSS
- **JavaScript (ES6+)**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework
- **AOS Library**: Scroll animations
- **GSAP**: Advanced animations
- **Font Awesome**: Icons

### Design Elements
- **Color Scheme**: Rose and Teal gradient theme
- **Typography**: Poppins (body) and Playfair Display (headings)
- **Icons**: Font Awesome 6
- **Animations**: Custom CSS animations and GSAP

## 📁 Project Structure

```
electronics-portfolio/
├── index.html              # Main HTML file
├── main.js                 # Modern JavaScript (ES6+)
├── main.legacy.js          # Legacy JavaScript for older browsers
├── README.md               # Project documentation
└── resources/
    ├── img/                # Profile and default images
    ├── projects/           # Project images
    └── cv/                 # Resume/CV files
```

## 🎨 Design Improvements

### Color Scheme
- **Primary**: Rose (#f43f5e) - Represents energy and innovation
- **Secondary**: Teal (#14b8a6) - Represents technology and precision
- **Gradient**: Beautiful rose-to-teal gradient for modern appeal

### Typography
- **Headings**: Playfair Display - Elegant and sophisticated
- **Body**: Poppins - Clean and highly readable
- **Icons**: Font Awesome for consistent iconography

### Interactive Elements
- **Hover Effects**: Smooth transitions and glow effects
- **Circuit Patterns**: Subtle background animations
- **Custom Cursor**: Interactive cursor with electronics theme
- **Skill Bars**: Animated progress indicators

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Getting Started

1. **Clone or Download** the portfolio files
2. **Customize Content**:
   - Update personal information in `index.html`
   - Replace profile image in `resources/img/`
   - Add project images to `resources/projects/`
   - Update resume in `resources/cv/`
3. **Deploy**: Upload to any web hosting service

## 📝 Customization Guide

### Personal Information
Edit the following in `index.html`:
- Name and title
- About section content
- Contact information
- Social media links

### Projects
Update the projects array in `main.js`:
```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    short_description: "Project description",
    image: "./resources/projects/your-image.jpg",
    client: { type: "Project Type" },
    technologies_used: { tech_stack: ["Tech1", "Tech2"] }
  }
];
```

### Skills
Modify skill bars in `index.html`:
```html
<div class="mb-10">
  <div class="flex justify-between mb-2">
    <span class="font-medium">Your Skill</span>
    <span>85%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" style="width: 0%;" data-width="85%"></div>
  </div>
</div>
```

## 🌟 Key Features for Electronics Engineering

### Project Showcase
- **Smart Home IoT System**: ESP32, Arduino, MQTT
- **PCB Design**: KiCad, Analog Design, Audio Electronics
- **Solar Monitoring**: Raspberry Pi, Python, Data Visualization
- **Gesture Control Robot**: Arduino, OpenCV, Motor Control
- **Wireless Sensor Network**: LoRa, Mesh Networking, C++
- **DSP Module**: FPGA, VHDL, DSP Algorithms

### Technical Skills
- **Circuit Design**: 90%
- **Arduino Programming**: 85%
- **PCB Design**: 80%
- **C/C++**: 85%
- **Raspberry Pi**: 75%
- **IoT Development**: 70%
- **Python**: 80%
- **Signal Processing**: 65%

## 📞 Contact Information

- **Email**: chamudiransika@email.com
- **GitHub**: github.com/chamudiransika
- **LinkedIn**: linkedin.com/in/chamudiransika

## 📄 License

This portfolio template is created for educational and personal use. Feel free to customize and use for your own portfolio.

## 🙏 Acknowledgments

- **Tailwind CSS** for the utility-first CSS framework
- **AOS Library** for scroll animations
- **Font Awesome** for icons
- **Google Fonts** for typography

---

**Note**: This portfolio is specifically designed for a female electronics engineering student with a modern, elegant design that showcases technical skills while maintaining a professional appearance. 
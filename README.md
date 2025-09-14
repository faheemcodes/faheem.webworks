# Faheem WebWorks - Portfolio Website

A modern, responsive portfolio website showcasing my frontend development skills, featured projects, and contact information. Built with a custom dark theme and smooth animations.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with a custom dark theme
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Interactive Elements**: Typed.js for animated text, scroll animations, and hover effects
- **Contact Form**: Functional contact form powered by EmailJS
- **Mobile-Friendly**: Mobile sidebar navigation for smaller screens
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better SEO and accessibility
- **CSS3**: Custom properties, flexbox, grid, and animations
- **JavaScript**: Interactive functionality and form handling
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome**: Icons for visual enhancement
- **Google Fonts**: Poppins, National Park, and Winky Sans fonts
- **Typed.js**: Animated typing effect for hero section
- **EmailJS**: Contact form functionality without backend

## 📁 Project Structure

```
faheem.webworks/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── images/             # Image assets
│   ├── bg.png          # Background image
│   ├── profile.png     # Profile picture
│   ├── dailybloom.png  # Project screenshot
│   ├── buzzify.png     # Project screenshot
│   └── weatherSnap.png # Project screenshot
├── uploads/            # Additional files
│   └── Resume-v3.pdf   # Downloadable resume
└── README.md           # Project documentation
```

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Alternatively, deploy to any web hosting service

## 📧 Contact Form Setup

To enable the contact form functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Replace the EmailJS public key in the script section:
```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE");
```
3. Set up your email service and template in EmailJS
4. Update the service and template IDs in the sendForm method:
```javascript
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
```

## 📱 Sections

- **Home**: Introduction with animated typing effect
- **About**: Personal background and education timeline
- **Services**: Web development services offered
- **Skills**: Technical skills with progress bars
- **Projects**: Featured projects with links to live demos and code
- **Contact**: Contact information and form

## 🎨 Customization

To customize this portfolio:

1. Update personal information in the HTML file
2. Replace images in the images folder
3. Modify colors in the CSS custom properties (`:root` section)
4. Add or remove projects in the projects section
5. Update social media links in the footer

## 🌐 Live Demo

The portfolio is live at: [https://faheemcodes.github.io/faheem.webworks/](https://faheemcodes.github.io/faheem.webworks/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Faheem Ahmed  
Hyderabad, Sindh, Pakistan  
Email: faheem.webwork@gmail.com  
Phone: +92 337-8001160  
Website: https://faheemcodes.github.io/faheem.webworks/

## 🔗 Connect With Me

- GitHub: [https://github.com/faheemcodes](https://github.com/faheemcodes)
- LinkedIn: [https://www.linkedin.com/in/mr-faheem/](https://www.linkedin.com/in/mr-faheem/)
- Twitter: [https://x.com/faheemwebworks](https://x.com/faheemwebworks)
- Instagram: [https://www.instagram.com/faheem.webworks/](https://www.instagram.com/faheem.webworks/)
- Facebook: [https://www.facebook.com/faheem2005](https://www.facebook.com/faheem2005)
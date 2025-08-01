# Victor Maoya - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects and skills as a full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dual Theme Support**: Dark/Light mode toggle with system preference detection
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form integrated with Formspree
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Theme Persistence**: Theme preference saved in localStorage
- **Performance Optimized**: Fast loading with Vite build system
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS v4 with CSS custom properties
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons (FontAwesome 6)
- **Forms**: Formspree React
- **State Management**: React Context API for theme management
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify ready

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/victormaoya/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Get your Formspree form ID from [formspree.io](https://formspree.io)
   - Update the form ID in `src/pages/Contact.jsx`

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── notes-app-a.png
│   │   └── notes-app-b.png
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── victor.jpg
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── ThankYou.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Theme System

The portfolio features a dual-theme system with:

- **Dark Mode**: Purple accents with dark backgrounds
- **Light Mode**: Blue accents with light backgrounds
- **Auto Detection**: Respects system preference on first visit
- **Persistence**: Theme choice saved in localStorage

### Color Schemes

**Dark Theme:**

- Primary: `purple-600`
- Background: `gray-950/gray-900`
- Text: `white/gray-300`

**Light Theme:**

- Primary: `blue-600`
- Background: `white/gray-50`
- Text: `gray-900/gray-600`

### Content

Update the following files to personalize the portfolio:

- `src/pages/Home.jsx` - Hero section content
- `src/pages/About.jsx` - About me content and skills
- `src/pages/Projects.jsx` - Project showcase
- `src/pages/Contact.jsx` - Contact information
- `src/assets/victor.jpg` - Profile picture

### Theme Integration

To add theme support to new components:

```javascript
import { useTheme } from '../contexts/ThemeContext'

function MyComponent() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div
      className={`${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Your component content */}
    </div>
  )
}
```

### Projects

Add your projects to the `projects` array in `src/pages/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/project',
    live: 'https://project-demo.com',
    image: '/images/project-screenshot.png',
  },
]
```

## ✨ Key Features Breakdown

### 🌓 Theme System

- **Dual Theme Support**: Seamless switching between dark and light modes
- **Smart Detection**: Automatically detects and respects system preferences
- **Persistent Storage**: User preferences saved across sessions
- **Consistent Styling**: All components adapt to theme changes

### 🎯 Navigation

- **Clickable Logo**: Avatar and name navigate to home with hover effects
- **Active States**: Clear indication of current page
- **Mobile Responsive**: Collapsible hamburger menu for mobile devices
- **Smooth Transitions**: Animated page transitions and hover states

### 📱 Responsive Design

The portfolio is fully responsive with optimized layouts for:

- **Mobile**: `< 768px` - Stack layout, touch-friendly navigation
- **Tablet**: `768px - 1024px` - Balanced grid layouts
- **Desktop**: `> 1024px` - Full-width layouts with optimal spacing

### 🚀 Performance

- **Vite Build System**: Lightning-fast development and optimized production builds
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Properly sized and compressed images
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
3. Deploy automatically on every push to main branch

### Netlify

1. Connect your repository to Netlify
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18.x`
3. Enable automatic deploys from Git

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Victor Maoya - [@victormaoya](https://twitter.com/victormaoya) - victormaoya@gmail.com

Project Link: [https://github.com/victormaoya/portfolio](https://github.com/victormaoya/portfolio)

---

⭐ If you found this project helpful, please give it a star!

---

<div align="center">
  <p>Made with ❤️ by Victor Maoya • © 2025</p>
</div>

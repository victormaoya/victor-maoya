# Victor Maoya - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects and skills as a full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dual Theme Support**: Dark/Light mode toggle with instant theme switching
- **Dark Mode Default**: Loads in dark mode by default with zero flash
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form integrated with Formspree
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Theme Persistence**: Theme preference saved in localStorage
- **Error Handling**: Comprehensive error boundaries and 404 page with theme support
- **Performance Optimized**: Fast loading with Vite build system
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Professional Footer**: Branded footer with theme-aware styling

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
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Projects.jsx
│   │   └── ThankYou.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Theme System

The portfolio features a robust dual-theme system with:

- **Dark Mode Default**: Site instantly loads in dark mode (no flash)
- **Seamless Switching**: Real-time theme toggling with smooth transitions
- **HTML-Level Integration**: Theme applied at document level for instant rendering
- **Smart Persistence**: User preference automatically saved across sessions
- **Complete Coverage**: All components, error pages, and interactive elements themed

### Color Schemes

**Dark Theme (Default):**

- Primary: `purple-600` - Interactive elements and accents
- Background: `gray-950/gray-900` - Main and card backgrounds
- Text: `white/gray-300` - Primary and secondary text
- Border: `gray-800` - Subtle separations

**Light Theme:**

- Primary: `blue-600` - Interactive elements and accents
- Background: `white/gray-50` - Main and card backgrounds
- Text: `gray-900/gray-600` - Primary and secondary text
- Border: `gray-200` - Subtle separations

### Content Customization

Update the following files to personalize your portfolio:

- `src/pages/Home.jsx` - Hero section with your introduction
- `src/pages/About.jsx` - About me content, skills, and experience
- `src/pages/Projects.jsx` - Your project showcase with links
- `src/pages/Contact.jsx` - Contact form and social information
- `src/assets/victor.jpg` - Replace with your profile picture
- `public/favicon.ico` - Your custom favicon

### Theme Integration

To add theme support to new components:

```javascript
import { useTheme } from '../contexts/ThemeContext'

function MyComponent() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <div
      className={`transition-colors duration-300 ${
        isDark
          ? 'bg-gray-900 text-white border-gray-800'
          : 'bg-white text-gray-900 border-gray-200'
      }`}
    >
      {/* Your component content */}
    </div>
  )
}
```

### Adding Projects

Add your projects to the `projects` array in `src/pages/Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description of what the project does and its purpose',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project-repo',
    live: 'https://your-project-demo.com',
    image: '/images/project-screenshot.png',
  },
]
```

## ✨ Key Features Breakdown

### 🌓 Theme System

- **Dark Mode Default**: Site loads in dark mode instantly with zero flash
- **Dual Theme Support**: Seamless switching between dark and light modes
- **HTML-Level Integration**: Theme class set at HTML level for immediate rendering
- **Persistent Storage**: User preferences saved across sessions
- **Consistent Styling**: All components adapt to theme changes including error pages

### 🎯 Navigation & UX

- **Clickable Logo**: Avatar and name navigate to home with hover effects
- **Active States**: Clear indication of current page
- **Mobile Responsive**: Collapsible hamburger menu for mobile devices
- **Smooth Transitions**: Animated page transitions and hover states
- **Error Handling**: Theme-aware 404 and error boundary pages

### 🎨 Design System

- **Consistent Colors**: Purple accents for dark mode, blue for light mode
- **Professional Footer**: Branded footer with theme integration
- **Hover Effects**: Interactive elements with scale and color transitions
- **Typography**: Optimized text contrast for both themes

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

- `npm run dev` - Start development server with hot reload at `http://localhost:5173`
- `npm run build` - Build optimized production bundle with Vite
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks and formatting

## 🚀 Deployment

This portfolio is optimized for modern hosting platforms with zero-configuration deployment.

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
   - **Install command**: `npm install`
   - **Node.js version**: `18.x`
3. Deploy automatically on every push to main branch
4. Custom domain and SSL included

### Netlify

1. Connect your repository to Netlify
2. Set build configuration:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18.x`
3. Enable branch deploys and form handling
4. Custom domain and CDN acceleration included

### GitHub Pages

1. Install gh-pages dependency:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deployment script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Deploy with: `npm run deploy`
4. Enable GitHub Pages in repository settings

## 🔧 Technical Architecture

### Build System

- **Vite**: Modern build tool with instant HMR and optimized production builds
- **ESLint**: Code quality and consistency enforcement
- **React 19**: Latest React features and concurrent rendering

### State Management

- **Context API**: Theme state management with provider pattern
- **localStorage**: Theme preference persistence across sessions
- **HTML Integration**: Document-level theme application for flash prevention

### Routing & Performance

- **React Router DOM**: Client-side routing with lazy loading
- **Code Splitting**: Automatic route-based bundle splitting
- **Error Boundaries**: Graceful error handling with theme support

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

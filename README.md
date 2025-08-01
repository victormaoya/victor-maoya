# Victor Maoya - Portfolio Website

A modern, responsive portfolio website built with React, showcasing my projects and skills as a full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark Theme**: Elegant dark color scheme with purple accents
- **Interactive Elements**: Smooth animations using Framer Motion
- **Contact Form**: Functional contact form integrated with Formspree
- **Mobile Navigation**: Responsive hamburger menu for mobile devices
- **Error Handling**: Comprehensive error boundaries and 404 page
- **Performance Optimized**: Fast loading with Vite build system
- **Accessibility**: WCAG compliant with proper focus states and ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript ES6+
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Forms**: Formspree React
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
│   │   ├── LoadingSpinner.jsx
│   │   └── Navbar.jsx
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
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
The color scheme can be customized in `src/index.css` and throughout the components. The primary colors used are:
- Background: `gray-950`
- Accent: `purple-600`
- Text: `white/gray-300`

### Content
Update the following files to personalize the portfolio:
- `src/pages/Home.jsx` - Hero section content
- `src/pages/About.jsx` - About me content and skills
- `src/pages/Projects.jsx` - Project showcase
- `src/pages/Contact.jsx` - Contact information
- `src/assets/victor.jpg` - Profile picture

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
    image: '/images/project-screenshot.png'
  }
]
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy

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

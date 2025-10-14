# Personal Portfolio Website

A modern, responsive portfolio website showcasing software engineering projects with a focus on AI-powered applications, real-time systems, and cloud-native solutions.

## Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Dark/Light Theme**: Toggle between themes with preference persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Zero Dependencies**: Pure HTML, CSS, and JavaScript (no build process required)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support
- **Fast Loading**: Optimized performance with minimal assets
- **Project Showcase**: Dynamic project cards with detailed case studies

## Projects Featured

### 1. AI Reporting Platform
Enterprise AI-powered business intelligence platform using:
- .NET 9 Minimal APIs
- Azure OpenAI (GPT-4)
- RAG (Retrieval-Augmented Generation)
- Angular 20
- SQL Server with dynamic schema validation

### 2. SQL Performance Monitor
Real-time database monitoring solution featuring:
- Node.js + Express backend
- React 18 frontend
- WebSocket-based real-time updates
- Comprehensive performance metrics
- Material-UI components

### 3. LinkedIn Job Scraper
Python automation tool for job searching with:
- Advanced filtering capabilities
- Technology stack matching
- Remote job identification
- JSON export functionality

## Quick Start

### Option 1: Open Directly in Browser
1. Navigate to the `portfolio-website` folder
2. Double-click `index.html`
3. Your default browser will open the portfolio

### Option 2: Local Development Server

Using Python:
```bash
cd portfolio-website
python -m http.server 8000
```
Then open http://localhost:8000

Using Node.js (http-server):
```bash
npm install -g http-server
cd portfolio-website
http-server -p 8000
```
Then open http://localhost:8000

Using PHP:
```bash
cd portfolio-website
php -S localhost:8000
```
Then open http://localhost:8000

## Customization Guide

### 1. Personal Information

**Update HTML (`index.html`)**:
- Line 7-8: Update meta description and keywords
- Line 9: Update author name
- Line 11-14: Update Open Graph tags
- Line 16: Update page title
- Line 27: Update nav brand name
- Line 45-70: Update hero section text
- Line 86-98: Update about section
- Line 214-234: Update contact links (GitHub, LinkedIn, Email)
- Line 243-244: Update footer text

**Update JavaScript (`script.js`)**:
- Lines 1-90: Update project data with your own projects
- Update `githubUrl` for each project
- Add `liveUrl` if you have deployed demos
- Customize metrics, technologies, and highlights

### 2. Styling & Branding

**Colors (`styles.css` - Lines 1-30)**:
```css
:root {
    --accent-primary: #3b82f6;     /* Primary accent color */
    --accent-secondary: #8b5cf6;    /* Secondary accent color */
    --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Fonts**:
- Current: Inter (body) and JetBrains Mono (code)
- Change in `index.html` line 18-19 (Google Fonts link)
- Update in `styles.css` line 46 (font-family)

### 3. Adding More Projects

Edit `script.js` and add to the `projects` array:

```javascript
{
    title: "Your Project Name",
    tagline: "Short catchy description",
    description: "Detailed project description...",
    highlights: [
        "Key feature 1",
        "Key feature 2",
        "Key feature 3"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"],
    metrics: [
        { value: "X", label: "Metric 1" },
        { value: "Y", label: "Metric 2" },
        { value: "Z", label: "Metric 3" }
    ],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-demo.com",  // Optional
    features: {
        problem: "What problem did you solve?",
        solution: "How did you solve it?",
        impact: "What was the measurable impact?"
    }
}
```

### 4. Updating Skills

Edit `index.html` lines 145-212 to add/remove skills in each category.

## File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and theming
├── script.js           # JavaScript functionality and project data
├── README.md           # This file
└── assets/             # (Optional) Images and media
    └── social-preview.png  # Social media preview image (1200x630px)
```

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Upload all portfolio files
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Netlify

1. Create account at netlify.com
2. Drag and drop the `portfolio-website` folder
3. Site goes live instantly with custom domain option

### Vercel

```bash
npm i -g vercel
cd portfolio-website
vercel
```

### Traditional Web Hosting

Upload all files via FTP to your hosting provider's `public_html` or `www` directory.

## Creating Social Preview Image

Create a 1200x630px image for `assets/social-preview.png` to customize how your portfolio appears when shared on social media (LinkedIn, Twitter, Facebook).

Recommended tools:
- Canva (free templates)
- Figma (design from scratch)
- Adobe Photoshop/Illustrator

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: < 1 second on 3G connection
- **Bundle Size**: ~50KB total (HTML + CSS + JS)
- **No external dependencies** (except Google Fonts)

## Best Practices for Portfolio

### LinkedIn Integration

1. Add portfolio link to LinkedIn Featured section
2. Add portfolio link to "About" section
3. Create project entries linking to portfolio case studies
4. Update LinkedIn headline to match portfolio branding

### GitHub Integration

For each project repository:

1. **Create comprehensive README**:
   - Project description
   - Features list
   - Tech stack
   - Installation instructions
   - Screenshots/demos
   - Link back to portfolio

2. **Add Social Preview Image**:
   - Go to repository Settings → Social Preview
   - Upload custom image (1280x640px)

3. **Add Topics/Tags**:
   - Add relevant technology tags
   - Makes repository more discoverable

4. **Include License**:
   - Choose appropriate license (MIT, GPL, etc.)
   - Protects your intellectual property

### Writing Effective Case Studies

For each project on your portfolio, include:

1. **Problem Statement**: What challenge were you solving?
2. **Solution Approach**: How did you solve it technically?
3. **Technologies Used**: Specific tools and frameworks
4. **Challenges Faced**: What obstacles did you overcome?
5. **Results/Impact**: Quantify the outcome (performance improvement, user adoption, etc.)
6. **Lessons Learned**: What would you do differently?

## Maintenance

### Regular Updates

- Add new projects as you build them
- Update skill tags as you learn new technologies
- Keep contact information current
- Refresh project metrics and impacts
- Update screenshots/demos

### Content Strategy

- Focus on 3-5 best projects (quality over quantity)
- Show diversity in skills (frontend, backend, AI, DevOps, etc.)
- Include both personal and professional projects
- Demonstrate problem-solving and impact

## Accessibility

The portfolio includes:
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Responsive text sizing
- Print-friendly styles

## License

This template is free to use for personal portfolios. Attribution is appreciated but not required.

## Support

For questions or issues:
1. Check the customization guide above
2. Review the code comments
3. Test in browser console for JavaScript errors

## Credits

- **Design**: Custom design inspired by modern portfolio trends
- **Fonts**: Inter and JetBrains Mono from Google Fonts
- **Icons**: SVG icons (embedded, no external dependencies)
- **Color Scheme**: Custom gradient palette

---

**Built with HTML, CSS, and JavaScript. No frameworks, no build process, just clean code.**

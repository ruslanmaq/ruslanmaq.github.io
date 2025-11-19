// ===========================
// Project Data
// ===========================
const projects = [
    {
        title: "AI Reporting Platform",
        tagline: "Enterprise AI-Powered Business Intelligence",
        description: "A sophisticated reporting platform that transforms natural language queries into actionable insights using Azure OpenAI, RAG (Retrieval-Augmented Generation), and .NET 9 Minimal APIs.",
        highlights: [
            "Natural language to SQL query generation using GPT-4",
            "RAG integration with vector embeddings for schema-aware AI",
            "Dynamic SQL validation with database-driven correction rules",
            "Real-time chat interface with markdown-formatted responses",
            "Export capabilities (Excel, PDF, CSV) with rich visualizations",
            "Clean Architecture with API, Core, and Infrastructure layers"
        ],
        technologies: [
            ".NET 9",
            "C#",
            "Azure OpenAI",
            "RAG",
            "Angular 20",
            "SQL Server",
            "Entity Framework",
            "Dapper",
            "Docker",
            "TypeScript"
        ],
        metrics: [
            { value: "3", label: "Layers" },
            { value: "GPT-4", label: "AI Model" },
            { value: "Real-time", label: "Processing" }
        ],
        githubUrl: "https://github.com/ruslanmaq/AI.ReportingPlatform",
        liveUrl: null,
        features: {
            problem: "Business users struggled to query databases without SQL knowledge, creating bottlenecks and dependency on technical teams.",
            solution: "Built an AI-powered platform that translates natural language questions into accurate SQL queries, validated and corrected using database-driven rules.",
            impact: "Reduced query turnaround time from hours to seconds, enabling self-service analytics for non-technical users."
        }
    },
    {
        title: "SQL Performance Monitor",
        tagline: "Real-Time Database Performance Monitoring",
        description: "A comprehensive SQL Server monitoring solution similar to SolarWinds, featuring real-time WebSocket updates, performance analytics, and intelligent alerting.",
        highlights: [
            "Real-time CPU, memory, and disk usage tracking",
            "Active query performance analysis with execution plans",
            "Wait statistics categorization and trending",
            "Blocking chain detection and resolution",
            "Configurable thresholds with email alerting",
            "Dark theme UI optimized for operations centers"
        ],
        technologies: [
            "Material-UI",            
            "SQL Server",
            "Chart.js",
            "Recharts",
            "Docker"
        ],
        metrics: [
            { value: "Real-time", label: "Updates" },
            { value: "10+", label: "Metrics" },
            { value: "WebSocket", label: "Protocol" }
        ],
        githubUrl: "https://github.com/ruslanmaq/SQL-Performance-Monitor",
        liveUrl: null,
        features: {
            problem: "DBAs lacked affordable, real-time visibility into SQL Server performance metrics, relying on expensive enterprise tools.",
            solution: "Created a modern, responsive monitoring dashboard with WebSocket-based real-time updates and customizable alerting.",
            impact: "Provided enterprise-grade monitoring capabilities at zero licensing cost, with sub-second metric refresh rates."
        }
    },    
    {
        title: "MyShop E-Commerce Platform",
        tagline: "Enterprise Multi-Tenant Shopping Platform",
        description: "A comprehensive Angular-based e-commerce platform with MLM capabilities, featuring advanced promotions engine, wallet integration, Stripe payments, multi-language support, and subscription management.",
        highlights: [
            "JWT authentication with ASP.NET Core Identity for secure user management",
            "Advanced promotion engine with 10+ discount types (BOGO, bundles, flash sales)",
            "Digital wallet integration with MoMoney API for commission payments",
            "Stripe subscription system with automated recurring payments",
            "Multi-language support (6 languages) with i18n",
            "Multi-tenant architecture with admin, distributor, and customer portals",
            "Comprehensive security implementation with encryption and audit logging"
        ],
        technologies: [
            "Angular 20",
            "TypeScript",
            ".NET Core",
            "ASP.NET Identity",
            "JWT",
            "Material-UI",
            "Stripe API",
            "MoMoney API",
            "SQL Server",
            "Chart.js",
            "i18n",
            "Docker",
            "Nginx"
        ],
        metrics: [
            { value: "6", label: "Languages" },
            { value: "10+", label: "Promotion Types" },
            { value: "Multi-Tenant", label: "Architecture" }
        ],
        githubUrl: "https://github.com/ruslanmaq/MyShop",
        liveUrl: null,
        features: {
            problem: "MLM businesses needed a comprehensive e-commerce solution with commission tracking, flexible promotions, and automated subscription management.",
            solution: "Built a full-featured platform with digital wallet integration, sophisticated promotion rules, Stripe subscriptions, and multi-language support for global operations.",
            impact: "Enabled automated commission processing, recurring revenue streams, and complex promotional campaigns with enterprise-grade security and performance."
        }
    },
    {
        title: "HeavyIMS - Heavy Industry Management System",
        tagline: "Production-Ready DDD Enterprise Management Platform",
        description: "A comprehensive .NET backend solution demonstrating Domain-Driven Design architecture for managing work orders, technicians, inventory, and equipment maintenance in heavy industry facilities.",
        highlights: [
            "Domain-Driven Design with aggregate boundaries and domain events",
            "Multi-warehouse inventory management with automated low-stock alerts",
            "Real-time workload balancing and technician scheduling",
            "Value objects (Money, Address, EquipmentIdentifier, DateRange)",
            "Unit of Work pattern with transactional consistency",
            "Event-driven architecture for cross-aggregate communication",
            "56/57 passing tests with real SQL Server integration tests"
        ],
        technologies: [
            ".NET 9.0",
            "C# 13",
            "Entity Framework Core 9",
            "SQL Server",
            "Redis",
            "xUnit",
            "Moq",
            "FluentAssertions",
            "Docker",
            "GitHub Actions"
        ],
        metrics: [
            { value: "DDD", label: "Architecture" },
            { value: "4", label: "Layers" },
            { value: "56/57", label: "Tests Passing" }
        ],
        githubUrl: "https://github.com/ruslanmaq/HeavyIMS",
        liveUrl: null,
        features: {
            problem: "Heavy industry facilities faced technician shortages, inventory delays, manual paperwork, and inefficient scheduling causing costly equipment downtime.",
            solution: "Built a production-ready DDD platform with multi-warehouse inventory tracking, automated alerts, workload balancing, and digital workflows.",
            impact: "Enabled enterprise-grade work order management with domain events, value objects, and aggregate boundaries following DDD best practices."
        }
    }
];

// ===========================
// Theme Management
// ===========================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Load saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ===========================
// Mobile Menu
// ===========================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===========================
// Projects Rendering
// ===========================
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project);
        projectCard.classList.add('fade-in-up');
        projectCard.style.animationDelay = `${index * 0.1}s`;
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-tagline">${project.tagline}</p>
        </div>

        <div class="project-body">
            <p class="project-description">${project.description}</p>

            <div class="project-highlights">
                <h4>Key Features</h4>
                <ul>
                    ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                </ul>
            </div>

            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>

            <div class="project-links">
                <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                </a>
                ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7z"/>
                        </svg>
                        <span>Live Demo</span>
                    </a>
                ` : ''}
            </div>
        </div>

        <div class="project-metrics">
            ${project.metrics.map(metric => `
                <div class="metric">
                    <span class="metric-value">${metric.value}</span>
                    <span class="metric-label">${metric.label}</span>
                </div>
            `).join('')}
        </div>
    `;

    return card;
}

// ===========================
// Smooth Scroll Enhancement
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
});

// ===========================
// Navbar Scroll Effect
// ===========================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    console.log('%c Portfolio Loaded Successfully! ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 10px; font-size: 16px; font-weight: bold;');
    console.log('%c Built with HTML, CSS, and Vanilla JavaScript ', 'background: #f8f9fa; color: #2d3748; padding: 5px; font-size: 12px;');
});

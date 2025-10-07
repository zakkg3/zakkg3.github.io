// Language translations for Flag5 website
const translations = {
    en: {
        // Meta
        pageTitle: "Flag5 | Security & Infrastructure Consultancy",
        pageDescription: "Swiss-based cybersecurity and infrastructure consultancy. Red team pentesting, cloud architecture, and AI automation solutions.",

        // Navigation
        navHome: "Home",
        navServices: "Services",
        navProjects: "Projects",
        navContact: "Contact",
        navCTA: "Get in Touch",

        // Banner
        bannerSubtitle: "Security & Infrastructure Consultancy",
        bannerTitle: "Secure. Build. Automate.",
        bannerText: "Flag5 provides expert consultancy in cybersecurity, cloud infrastructure, and AI-driven automation. We help organizations build resilient, scalable systems with a focus on security and privacy.",
        bannerButton: "Get in Touch",

        // Services Section
        servicesTitle: "Services that protect and scale <br>your business",
        servicesSubtitle: "Expert consultancy for modern security challenges and infrastructure needs.",

        service1Title: "Cybersecurity",
        service1Text: "Red team penetration testing, blue team defense strategy, and rapid incident response to keep your systems secure.",

        service2Title: "Cloud & Infrastructure",
        service2Text: "Design and manage cloud and on-premises infrastructure that scales with your business needs.",

        service3Title: "AI Integration & Automation",
        service3Text: "Custom software development with AI integration and agentic automation to streamline operations.",

        // Projects Section
        projectsTitle: "Open Source Projects",
        projectsSubtitle: "We believe in giving back to the community through open source contributions.",

        project1Title: "ClusterSecret",
        project1Text: "Kubernetes operator for syncing secrets across namespaces and clusters. Used in production environments worldwide to simplify secret management.",

        project2Title: "RAID",
        project2Text: "Agentic AI automation security framework currently in development. Designed to bring security best practices to AI-driven automation workflows.",

        // Trust Section
        trustTitle: "Privacy & Compliance First",
        trustSubtitle: "Security and compliance at the core",
        trustText: "We prioritize data privacy and security in everything we build. Our expertise includes GDPR compliance, regulatory requirements, and implementing best practices to maintain the confidentiality and integrity of your systems.",

        // Contact Section
        contactTitle: "Get in touch",
        contactSubtitle: "Ready to secure and scale your infrastructure? Let's discuss how Flag5 can help.",
        contactLocation: "Location",
        contactLocationValue: "Zurich, Switzerland",
        contactEmail: "Email",
        contactGithub: "GitHub",

        // Footer
        footerServices: "Services",
        footerCybersecurity: "Cybersecurity",
        footerCloud: "Cloud & Infrastructure",
        footerAI: "AI Integration",
        footerContact: "Contact",
        footerProjects: "Projects",
        footerLocation: "Location",
        footerConnect: "Connect",
        footerCopyright: "© 2025 Flag5. All rights reserved."
    },
    de: {
        // Meta
        pageTitle: "Flag5 | Sicherheits- & Infrastrukturberatung",
        pageDescription: "Schweizer Cybersecurity- und Infrastrukturberatung. Red Team Pentesting, Cloud-Architektur und KI-Automatisierungslösungen.",

        // Navigation
        navHome: "Startseite",
        navServices: "Dienstleistungen",
        navProjects: "Projekte",
        navContact: "Kontakt",
        navCTA: "Kontakt aufnehmen",

        // Banner
        bannerSubtitle: "Sicherheits- & Infrastrukturberatung",
        bannerTitle: "Sichern. Aufbauen. Automatisieren.",
        bannerText: "Flag5 bietet fachkundige Beratung in den Bereichen Cybersicherheit, Cloud-Infrastruktur und KI-gesteuerte Automatisierung. Wir helfen Unternehmen, belastbare, skalierbare Systeme mit Fokus auf Sicherheit und Datenschutz aufzubauen.",
        bannerButton: "Kontakt aufnehmen",

        // Services Section
        servicesTitle: "Dienstleistungen, die Ihr Unternehmen <br>schützen und skalieren",
        servicesSubtitle: "Fachkundige Beratung für moderne Sicherheitsherausforderungen und Infrastrukturbedürfnisse.",

        service1Title: "Cybersicherheit",
        service1Text: "Red Team Penetrationstests, Blue Team Verteidigungsstrategie und schnelle Incident Response, um Ihre Systeme sicher zu halten.",

        service2Title: "Cloud & Infrastruktur",
        service2Text: "Entwerfen und verwalten Sie Cloud- und On-Premises-Infrastruktur, die mit Ihren Geschäftsanforderungen skaliert.",

        service3Title: "KI-Integration & Automatisierung",
        service3Text: "Individuelle Softwareentwicklung mit KI-Integration und agentischer Automatisierung zur Optimierung von Abläufen.",

        // Projects Section
        projectsTitle: "Open Source Projekte",
        projectsSubtitle: "Wir glauben daran, der Community durch Open-Source-Beiträge etwas zurückzugeben.",

        project1Title: "ClusterSecret",
        project1Text: "Kubernetes-Operator zum Synchronisieren von Secrets über Namespaces und Cluster hinweg. Wird weltweit in Produktionsumgebungen eingesetzt, um die Secret-Verwaltung zu vereinfachen.",

        project2Title: "RAID",
        project2Text: "Agentisches KI-Automatisierungs-Sicherheitsframework, das sich derzeit in der Entwicklung befindet. Entwickelt, um Best Practices für KI-gesteuerte Automatisierungs-Workflows zu bringen.",

        // Trust Section
        trustTitle: "Datenschutz & Compliance an erster Stelle",
        trustSubtitle: "Sicherheit und Compliance im Kern",
        trustText: "Wir priorisieren Datenschutz und Sicherheit in allem, was wir entwickeln. Unsere Expertise umfasst DSGVO-Compliance, regulatorische Anforderungen und die Implementierung von Best Practices zur Wahrung der Vertraulichkeit und Integrität Ihrer Systeme.",

        // Contact Section
        contactTitle: "Kontakt aufnehmen",
        contactSubtitle: "Bereit, Ihre Infrastruktur zu sichern und zu skalieren? Lassen Sie uns besprechen, wie Flag5 helfen kann.",
        contactLocation: "Standort",
        contactLocationValue: "Zürich, Schweiz",
        contactEmail: "E-Mail",
        contactGithub: "GitHub",

        // Footer
        footerServices: "Dienstleistungen",
        footerCybersecurity: "Cybersicherheit",
        footerCloud: "Cloud & Infrastruktur",
        footerAI: "KI-Integration",
        footerContact: "Kontakt",
        footerProjects: "Projekte",
        footerLocation: "Standort",
        footerConnect: "Verbinden",
        footerCopyright: "© 2025 Flag5. Alle Rechte vorbehalten."
    }
};

// Language detection and switching functionality
class LanguageManager {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.init();
    }

    detectLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('flag5-language');
        if (savedLang && (savedLang === 'en' || savedLang === 'de')) {
            return savedLang;
        }

        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('de')) {
            return 'de';
        }

        // Default to English
        return 'en';
    }

    init() {
        this.applyTranslations();
        this.updateLanguageSwitcher();
    }

    switchLanguage(lang) {
        if (lang !== 'en' && lang !== 'de') return;

        this.currentLang = lang;
        localStorage.setItem('flag5-language', lang);
        this.applyTranslations();
        this.updateLanguageSwitcher();
    }

    applyTranslations() {
        const trans = translations[this.currentLang];

        // Update meta tags
        document.title = trans.pageTitle;
        document.querySelector('meta[name="description"]')?.setAttribute('content', trans.pageDescription);
        document.documentElement.lang = this.currentLang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (trans[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = trans[key];
                } else {
                    element.innerHTML = trans[key];
                }
            }
        });
    }

    updateLanguageSwitcher() {
        // Update active state on language buttons
        document.querySelectorAll('.lang-dropdown button').forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update the toggle button flag
        const currentFlag = document.querySelector('.current-flag');
        if (currentFlag) {
            currentFlag.textContent = this.currentLang === 'de' ? '🇩🇪' : '🇬🇧';
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const langManager = new LanguageManager();
    const langSwitcher = document.querySelector('.lang-switcher');
    const langToggle = document.querySelector('.lang-switcher-toggle');

    // Toggle dropdown on click
    langToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        langSwitcher.classList.toggle('open');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('open');
        }
    });

    // Add click handlers to language switcher buttons
    document.querySelectorAll('.lang-dropdown button').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            langManager.switchLanguage(lang);
            langSwitcher.classList.remove('open');
        });
    });
});

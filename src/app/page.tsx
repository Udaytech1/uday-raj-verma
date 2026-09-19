  import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { TechBadge } from '../components/TechBadge';
import { Button } from '../components/Button';
import { EMAIL, LINKEDIN_URL, GITHUB_URL, PROJECT_LINKS, PHONE_NUMBER, WHATSAPP_URL, CODING_COMPANY_URL, SKYVIEW_ADS_URL } from '../constants';

import { Navbar } from '../components/Navbar';

export default function Home() {
  const projects = [
    {
      title: "Kurd Shopping",
      category: "Online Classified Marketplace",
      description: "A large-scale online classified marketplace serving users in Kurdistan and Iraq. Features include buying, selling, and discovering vehicles, properties, electronics, and furniture.",
      role: "App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "Android/ iOS",
      impact: "5 Lakh+ Downloads",
      icon: "/project/kurd-shopping-icon.webp",
      playStoreLink: PROJECT_LINKS.kurdShopping.playStore,
      appStoreLink: PROJECT_LINKS.kurdShopping.appStore
    },
    {
      title: "EvryVision",
      category: "VR & 360° Video Player",
      description: "A VR and 360° video player designed to deliver immersive virtual reality experiences on smartphones and Google Cardboard. Built as a white-label, multi-tenant platform.",
      role: "Solo Developer",
      technologies: ["Unity", "VR", "Android", "iOS"],
      platform: "Android / iOS",
      impact: "Solo Full Lifecycle",
      icon: "/project/evryvision-icon.webp",
      playStoreLink: PROJECT_LINKS.evryvision.playStore,
      appStoreLink: PROJECT_LINKS.evryvision.appStore
    },
    {
      title: "SEEYOU GPT",
      category: "AI Platform",
      description: "An AI-powered conversational platform similar to ChatGPT, built from scratch with real-time chat experience and GPT streaming.",
      role: "Developer",
      technologies: ["React Native", "AI APIs", "WebSockets"],
      platform: "Mobile",
      icon: "/project/seeyou-icon.avif",
      websiteLink: PROJECT_LINKS.seeYouGpt.website
    },
    {
      title: "FindQo App",
      category: "Property Sales & Rental",
      description: "A dynamic property sales and rental platform with property discovery, listings, search, filtering, and authentication.",
      role: "Mobile App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "iOS / Android",
      icon: "/project/findqo-icon.webp",
      playStoreLink: PROJECT_LINKS.findqo.playStore,
      appStoreLink: PROJECT_LINKS.findqo.appStore,
      websiteLink: PROJECT_LINKS.findqo.website
    },
    {
      title: "Daem POS",
      category: "Retail POS Application",
      description: "A point-of-sale application for retail shops with invoice generation and background syncing.",
      role: "Developer",
      technologies: ["Android", "Room DB"],
      platform: "Android",
      icon: "/project/daempos-icon.webp",
      playStoreLink: PROJECT_LINKS.daempos.playStore
    },
     {
      title: "Mate Dating App",
      category: "Dating & Social Application",
      description: "A privacy-focused dating and social application designed to help people connect, meet, and build meaningful relationships. Built from scratch with a co-developer.",
      role: "Co-Developer",
      technologies: ["React Native", "Firebase", "Node.js"],
      platform: "Google Play",
      impact: "10K+ Downloads",
      icon: "/project/mate-icon.webp",
      playStoreLink: PROJECT_LINKS.meetMate.playStore
    },
  ];

  return (
    <main>
      <Navbar />

      <Hero />

      <Section id="experience" title="Experience">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)', maxWidth: '800px' }}>
          
          <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
              <img src="/companies/coding%20company-icon.webp" alt="The Coding Company" style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <a href={CODING_COMPANY_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', textUnderlineOffset: '4px' }}>The Coding Company</a>
              </h3>
            </div>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Mobile App Developer • Lucknow, India • March 2023 – Present</p>
            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li>Mobile application development using React Native and Android</li>
              <li>API integration and application performance optimisation</li>
              <li>Testing, debugging, deployment and maintenance</li>
              <li>Collaboration with product, backend, and design teams</li>
            </ul>
          </div>

          <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: 'var(--spacing-lg)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.25rem' }}>
              <img src="/companies/skyview-icon.png" alt="Skyview Smart Solution" style={{ width: '48px', height: '48px', borderRadius: '8px', objectFit: 'contain', backgroundColor: '#fff' }} />
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                <a href={SKYVIEW_ADS_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit', textUnderlineOffset: '4px' }}>Skyview Smart Solution</a>
              </h3>
            </div>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Android Developer • Lucknow, India • March 2021 – February 2023</p>
            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li>Native Android application development using Java & Kotlin</li>
              <li>Android architecture and UI development</li>
              <li>API integration, testing, and debugging</li>
            </ul>
          </div>

        </div>
      </Section>

      <Section id="projects" title="Featured Projects">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Languages & Frameworks</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["TypeScript", "JavaScript", "React Native", "Android", "Java", "Kotlin", "Unity"].map(skill => <TechBadge key={skill} tech={skill} />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Architecture & Integrations</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Firebase", "REST APIs", "WebSockets", "Redux", "Jetpack Compose", "MVVM", "Room DB", "Hilt"].map(skill => <TechBadge key={skill} tech={skill} />)}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Tools & Deployment</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {["Android Studio", "Xcode", "Git", "GitHub", "Postman", "Google Play Store", "Apple App Store"].map(skill => <TechBadge key={skill} tech={skill} />)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="about" title="About">
        <div style={{ display: 'flex', gap: 'var(--spacing-xl)', flexWrap: 'wrap', alignItems: 'flex-start', maxWidth: '900px' }}>
          <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
            <img 
              src="/images/uraj.png" 
              alt="Uday Raj Verma" 
              style={{ width: '100%', borderRadius: '1rem', objectFit: 'cover' }} 
            />
          </div>
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'var(--muted)' }}>
              I am a motivated Mobile App Developer with 5+ years of experience working across the complete application lifecycle — from architecture, UI/UX and feature development to API integration, testing, performance optimisation, deployment, and maintenance.
            </p>
            <p style={{ fontSize: '1.125rem', lineHeight: 1.6, color: 'var(--muted)' }}>
              My work spans multiple product categories including React Native mobile applications, native Android development, Unity-based VR applications, AI conversational products, property platforms, classified marketplaces, and retail POS systems.
            </p>
          </div>
        </div>
      </Section>

      <Section id="contact" style={{ backgroundColor: 'var(--card-bg)' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', padding: 'var(--spacing-xl) 0' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: 'var(--spacing-md)', letterSpacing: '-0.03em' }}>
            Have a product in mind?<br/>Let's build it.
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted)', marginBottom: 'var(--spacing-lg)', lineHeight: 1.6 }}>
            Whether you are building a new mobile product, improving an existing application, or need help taking an app from development to production, let's talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href={`mailto:${EMAIL}`} variant="primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Email Me
            </Button>
            <Button href={WHATSAPP_URL} target="_blank" variant="primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              WhatsApp
            </Button>
            <Button href={`tel:${PHONE_NUMBER.replace(/\s+/g, '')}`} variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Call Me
            </Button>
            <Button href={LINKEDIN_URL} target="_blank" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </Button>
            <Button href={GITHUB_URL} target="_blank" variant="secondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </Button>
          </div>
        </div>
      </Section>
      
      <footer style={{ padding: 'var(--spacing-lg) 0', textAlign: 'center', borderTop: '1px solid var(--card-border)' }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.875rem' }}>
          © {new Date().getFullYear()} Uday Raj Verma. Mobile App Developer.
        </p>
      </footer>
    </main>
  );
}

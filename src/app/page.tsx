  import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { TechBadge } from '../components/TechBadge';
import { Button } from '../components/Button';

export default function Home() {
  const skills = [
    "TypeScript", "JavaScript", "React Native", "Android", "Java", "Kotlin", "Unity",
    "Firebase", "REST APIs", "WebSockets", "Redux", "Jetpack Compose", "MVVM"
  ];

  const projects = [
    {
      title: "Kurd Shopping",
      category: "Online Classified Marketplace",
      description: "A large-scale online classified marketplace serving users in Kurdistan and Iraq. Features include buying, selling, and discovering vehicles, properties, electronics, and furniture.",
      role: "App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "Android",
      impact: "5 Lakh+ Downloads",
      link: "#"
    },
    {
      title: "Mate Dating App",
      category: "Dating & Social Application",
      description: "A privacy-focused dating and social application designed to help people connect, meet, and build meaningful relationships. Built from scratch with a co-developer.",
      role: "Co-Developer",
      technologies: ["React Native", "Firebase", "Node.js"],
      platform: "Google Play",
      impact: "10K+ Downloads",
      link: "#"
    },
    {
      title: "EvryVision",
      category: "VR & 360° Video Player",
      description: "A VR and 360° video player designed to deliver immersive virtual reality experiences on smartphones and Google Cardboard. Built as a white-label, multi-tenant platform.",
      role: "Solo Developer",
      technologies: ["Unity", "VR", "Android", "iOS"],
      platform: "Android / iOS",
      impact: "Solo Full Lifecycle",
      link: "#"
    },
    {
      title: "SEEYOU GPT",
      category: "AI Platform",
      description: "An AI-powered conversational platform similar to ChatGPT, built from scratch with real-time chat experience and GPT streaming.",
      role: "Developer",
      technologies: ["React Native", "AI APIs", "WebSockets"],
      platform: "Mobile",
      link: "#"
    },
    {
      title: "FindQo App",
      category: "Property Sales & Rental",
      description: "A dynamic property sales and rental platform with property discovery, listings, search, filtering, and authentication.",
      role: "Mobile App Developer",
      technologies: ["React Native", "REST APIs"],
      platform: "iOS / Android",
      link: "#"
    },
    {
      title: "Daem POS",
      category: "Retail POS Application",
      description: "A point-of-sale application for retail shops with invoice generation and background syncing.",
      role: "Developer",
      technologies: ["Android", "Room DB"],
      platform: "Android",
      link: "#"
    }
  ];

  return (
    <main>
      <nav style={{ padding: '1.5rem 0', position: 'absolute', width: '100%', zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>URV.</span>
          <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <Hero />

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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'var(--spacing-md)' }}>
              {skills.map(skill => <TechBadge key={skill} tech={skill} />)}
            </div>
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

      <Section id="experience" title="Experience">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)', maxWidth: '800px' }}>
          
          <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: 'var(--spacing-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>The Coding Company</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Mobile App Developer • Lucknow, India • March 2023 – Present</p>
            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li>Mobile application development using React Native and Android</li>
              <li>API integration and application performance optimisation</li>
              <li>Testing, debugging, deployment and maintenance</li>
              <li>Collaboration with product, backend, and design teams</li>
            </ul>
          </div>

          <div style={{ borderLeft: '2px solid var(--card-border)', paddingLeft: 'var(--spacing-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>Skyview Smart Solution</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>Android Developer • Lucknow, India • March 2021 – February 2023</p>
            <ul style={{ color: 'var(--muted)', paddingLeft: '1.5rem', lineHeight: 1.6 }}>
              <li>Native Android application development using Java & Kotlin</li>
              <li>Android architecture and UI development</li>
              <li>API integration, testing, and debugging</li>
            </ul>
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
            <Button href="mailto:urajpatel12@gmail.com" variant="primary">Email Me</Button>
            <Button href="http://www.linkedin.com/in/uday-raj12" target="_blank" variant="secondary">LinkedIn</Button>
            <Button href="https://github.com/Udaytech1" target="_blank" variant="secondary">GitHub</Button>
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

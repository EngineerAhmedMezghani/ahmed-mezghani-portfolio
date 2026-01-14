import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import CursorFollower from '@/components/CursorFollower';
import Header from './Header';
import WelcomeSection from './WelcomeSection';  // << Import your new component here
import AboutSection from './AboutSection';
import InternshipSection from './InternshipSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import CertificationsSection from './CertificationsSection';
import ExperienceSection from './ExperienceSection';
import LanguagesSection from './LanguagesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'welcome',          // << add your welcome section id here for active highlight
        'about',
        'internships',
        'projects',
        'education',
        'certifications',
        'experience',
        'languages',
        'contact'
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-portfolio-bg">
        <CursorFollower />
        <Header activeSection={activeSection} />
        <main role="main" aria-label="Contenu principal du portfolio">
          <WelcomeSection />       {/* <<< Add here */}
          <AboutSection />
          <InternshipSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ExperienceSection />
          <LanguagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

import Image from "next/image";
import { Hero } from '@/components/portfolio/Hero';
import { AboutSection, Footer, ServicesSection } from '@/components/portfolio/Sections';
import { TechStackMarquee } from '@/components/portfolio/TechStack';
import { TrustedBy } from '@/components/portfolio/Clients';
import { ContactSection, FAQSection } from '@/components/portfolio/ContactFAQ';
import { LangProvider } from '@/components/portfolio/i18n';
import { ProjectsAdvancedWithModal } from '@/components/portfolio/Projects';
import { WhatsAppCTA } from '@/components/portfolio/WhatsAppCTA';

export default function Home() {
  const showClients = process.env.NEXT_PUBLIC_SHOW_CLIENTS !== 'false';
  const showStack = process.env.NEXT_PUBLIC_SHOW_STACK !== 'false';
  const showProjects = process.env.NEXT_PUBLIC_SHOW_PROJECTS !== 'false';

  return (
    <LangProvider>
      <div className="bg-gradient-to-b from-black to-neutral-900 text-white">
        <Hero />
        <AboutSection />
        <ServicesSection />
        {showStack && <TechStackMarquee />}
        {showClients && <TrustedBy />}
        {showProjects && <ProjectsAdvancedWithModal />}
        <FAQSection />
        <WhatsAppCTA />
        <ContactSection />
        <Footer />
      </div>
    </LangProvider>
  );
}

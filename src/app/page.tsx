import Image from "next/image";
import { Hero } from '@/components/portfolio/Hero';
import { AboutSection, Footer, ServicesSection } from '@/components/portfolio/Sections';
import { TechStackMarquee } from '@/components/portfolio/TechStack';
import { TrustedBy } from '@/components/portfolio/Clients';
import { ContactSection, FAQSection } from '@/components/portfolio/ContactFAQ';
import { LangProvider } from '@/components/portfolio/i18n';

export default function Home() {
  const showClients = process.env.NEXT_PUBLIC_SHOW_CLIENTS !== 'false';
  const showStack = process.env.NEXT_PUBLIC_SHOW_STACK !== 'false';

  return (
    <LangProvider>
      <div className="bg-gradient-to-b from-black to-neutral-900 text-white">
        <Hero />
        <AboutSection />
        <ServicesSection />
        {showStack && <TechStackMarquee />}
        {showClients && <TrustedBy />}
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </LangProvider>
  );
}

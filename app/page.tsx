import { AboutSection } from '@/components/AboutSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectSection } from '@/components/ProjectSection';

export default function Home() {
   return (
      <main className="mx-6 max-w-3xl sm:px-6 md:max-w-5xl lg:mx-auto">
         <HeroSection />
         <AboutSection />
         <ProjectSection />
      </main>
   );
}

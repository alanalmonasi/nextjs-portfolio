import { AboutSection } from '@/components/AboutSection';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
   return (
      <main className="mx-auto max-w-3xl sm:px-6 md:max-w-5xl">
         <HeroSection />
         <AboutSection />
      </main>
   );
}

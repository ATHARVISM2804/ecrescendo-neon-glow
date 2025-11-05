import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import Instructions from '@/components/Instructions';
import HowToApply from '@/components/HowToApply';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Timeline />
        <Instructions />
        <HowToApply />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;

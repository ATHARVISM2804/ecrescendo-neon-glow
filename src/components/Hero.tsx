import { Button } from '@/components/ui/button';
import { FileText, Edit, BookOpen } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll('.hero-animate'), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, []);

  const cards = [
    {
      icon: FileText,
      title: 'Register Here',
      description: 'Start your journey',
      href: '#contact',
    },
    {
      icon: Edit,
      title: 'Edit Form',
      description: 'Update details',
      href: '#contact',
    },
    {
      icon: BookOpen,
      title: 'Guidelines',
      description: 'Read instructions',
      href: '#instructions',
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={heroRef}>
        <div className="max-w-5xl mx-auto">
          {/* Centered Content */}
          <div className="space-y-8 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card hero-animate">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Registration Open Now</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight hero-animate">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent neon-glow">
                E-Crescendo
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground hero-animate max-w-3xl mx-auto">
              Join the most <span className="text-primary font-semibold">EXCITING</span> event of the year!
            </p>

            <p className="text-lg text-muted-foreground hero-animate">
              Organised by <span className="text-foreground font-semibold">E-Cell NIT Hamirpur</span>
            </p>

            <div className="flex flex-wrap gap-4 justify-center hero-animate">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 btn-glow"
                onClick={() => window.location.href = '#contact'}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => window.location.href = '#timeline'}
              >
                View Timeline
              </Button>
            </div>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 hero-animate max-w-4xl mx-auto">
              {cards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="glass-card-hover p-8 group cursor-pointer"
                >
                  <card.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


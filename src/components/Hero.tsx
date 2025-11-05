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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
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

            <p className="text-xl md:text-2xl text-muted-foreground hero-animate">
              Join the most <span className="text-primary font-semibold">EXCITING</span> event of the year!
            </p>

            <p className="text-lg text-muted-foreground hero-animate">
              Organised by <span className="text-foreground font-semibold">E-Cell NIT Hamirpur</span>
            </p>

            <div className="flex flex-wrap gap-4 hero-animate">
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 hero-animate">
              {cards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="glass-card-hover p-6 group cursor-pointer"
                >
                  <card.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative hero-animate">
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      NEXT-GEN
                    </span>
                  </h2>
                  <h2 className="text-4xl md:text-5xl font-bold text-center">
                    <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent neon-glow">
                      IS HERE
                    </span>
                  </h2>
                  
                  <div className="h-1 w-24 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
                  
                  <p className="text-center text-lg text-muted-foreground pt-4">
                    Power anything you can imagine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

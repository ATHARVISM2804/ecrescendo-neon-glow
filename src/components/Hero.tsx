import { Button } from '@/components/ui/button';
import { FileText, Edit, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const animatedWords = ['EXCITING', 'REMARKABLE', 'THRILLING', 'INNOVATIVE'];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: FileText,
      title: 'Register Here',
      description: 'Start your journey',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScF__FnO172vG27L3qatagzZcw1pereyR57aKHFRAxG_6rAgA/viewform?usp=publish-editor',
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
              Join the most{' '}
              <span className="inline-block min-w-[140px] text-left">
                <span 
                  key={currentWordIndex}
                  className="text-primary font-semibold animate-pulse inline-block
                    transition-all duration-500 ease-in-out transform"
                  style={{
                    animation: 'fadeInUp 0.5s ease-out'
                  }}
                >
                  {animatedWords[currentWordIndex]}
                </span>
              </span>
              {' '}event of the year!
            </p>

            <p className="text-lg text-muted-foreground hero-animate">
              Organised by <span className="text-foreground font-semibold">E-Cell NIT Hamirpur</span>
            </p>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-12 hero-animate max-w-4xl mx-auto">
              {cards.map((card, index) => (
                <a
                  key={index}
                  href={card.href}
                  className="relative p-6 sm:p-8 group cursor-pointer overflow-hidden
                    bg-gradient-to-br from-white/10 via-white/5 to-transparent
                    backdrop-blur-xl border border-white/20 rounded-xl
                    hover:border-primary/50 hover:bg-white/15
                    transition-all duration-500 ease-out
                    shadow-[0_8px_32px_rgba(0,0,0,0.12)]
                    hover:shadow-[0_16px_48px_rgba(30,184,255,0.15)]
                    before:absolute before:inset-0 before:bg-gradient-to-br 
                    before:from-transparent before:via-white/5 before:to-white/10
                    before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                >
                  <div className="relative z-10">
                    <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto drop-shadow-lg" />
                    <h3 className="text-base sm:text-lg font-semibold mb-2 text-white/90">{card.title}</h3>
                    <p className="text-xs sm:text-sm text-white/70">{card.description}</p>
                  </div>
                  {/* Reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
import { useEffect, useRef } from 'react';
import { UserPlus, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowToApply = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.apply-card');
      
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }
  }, []);

  const steps = [
    {
      icon: UserPlus,
      step: 'Step 1',
      title: 'Registration',
      description: 'Fill out the registration form with your team details, contact information, and project overview. Make sure all information is accurate and complete.',
      action: 'Start Registration',
      href: '#contact',
    },
    {
      icon: Send,
      step: 'Step 2',
      title: 'Project Submission',
      description: 'Submit your detailed project proposal including presentation, technical documentation, and funding requirements. Ensure all documents meet the specified guidelines.',
      action: 'Submit Project',
      href: '#contact',
    },
  ];

  return (
    <section id="apply" className="relative py-20 lg:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How to <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Apply</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to participate in E-Crescendo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="apply-card glass-card p-8 lg:p-10 relative overflow-hidden group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold">{step.step}</p>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 btn-glow"
                  onClick={() => window.location.href = step.href}
                >
                  {step.action}
                </Button>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToApply;

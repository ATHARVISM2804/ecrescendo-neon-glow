import { useEffect, useRef } from 'react';
import { Presentation, FileText, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Instructions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Instructions component mounted');
    
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.instruction-card');
      console.log('Found cards:', cards.length);
      
      // Ensure cards are visible by default
      gsap.set(cards, { opacity: 1, y: 0 });
      
      // Simple animation with better triggers
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          end: 'bottom 15%',
          toggleActions: 'play none none reverse',
          onEnter: () => console.log('Instructions animation triggered'),
        }
      });

      tl.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }
  }, []);

  const instructions = [
    {
      icon: Presentation,
      title: 'Presentation Format',
      items: [
        'Use clear and concise language.',
        'Include visuals, graphs, or prototypes.',
        'Highlight unique aspects of your project.',
      ],
    },
    {
      icon: FileText,
      title: 'Project Proposal',
      items: [
        'Clearly state the problem your project addresses.',
        'Define your target audience and market.',
        'Outline the solution and innovation.',
      ],
    },
    {
      icon: DollarSign,
      title: 'Funding Request',
      items: [
        'State the required funding (up to ₹30,000).',
        'Break down how funds will be utilized.',
        'Justify financial support needed.',
      ],
    },
  ];

  return (
    <section 
      id="instructions" 
      className="relative py-20 lg:py-32 bg-background/50 border-t border-border/30" 
      ref={sectionRef}
      style={{ minHeight: '80vh' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Instructions</span> & Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to prepare your submission
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructions.map((instruction, index) => (
            <div
              key={index}
              className="instruction-card glass-card-hover p-8 relative overflow-hidden group min-h-[300px] 
                         bg-card/80 border border-border/50 hover:border-primary/30
                         backdrop-blur-sm shadow-xl hover:shadow-2xl 
                         transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <instruction.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">{instruction.title}</h3>
                
                <ul className="space-y-3">
                  {instruction.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructions;

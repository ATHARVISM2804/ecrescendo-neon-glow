import { useEffect, useRef } from 'react';
import { Presentation, FileText, DollarSign } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Instructions = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.instruction-card');
      
      gsap.from(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }
  }, []);

  const instructions = [
    {
      icon: Presentation,
      title: 'Presentation Format',
      items: [
        'Clear and professional slides',
        'Maximum 15 minutes duration',
        'Include problem statement',
        'Demonstrate solution approach',
        'Show market potential',
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: FileText,
      title: 'Project Proposal',
      items: [
        'Detailed project description',
        'Technical architecture',
        'Implementation timeline',
        'Team member roles',
        'Expected outcomes',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: DollarSign,
      title: 'Funding Request',
      items: [
        'Itemized budget breakdown',
        'Justification for each expense',
        'Total amount required',
        'Resource allocation plan',
        'ROI projections',
      ],
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
  ];

  return (
    <section id="instructions" className="relative py-20 lg:py-32" ref={sectionRef}>
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
              className="instruction-card glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${instruction.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <instruction.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold">{instruction.title}</h3>
                
                <ul className="space-y-3">
                  {instruction.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
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

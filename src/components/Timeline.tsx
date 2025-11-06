import { useEffect, useRef } from 'react';
import { Calendar, Users, CheckCircle2, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }
  }, []);

  const events = [
    {
      icon: Calendar,
      title: 'Registration Begins',
      date: '7 November 2024',
      description: 'Open registration for all participants',
    },
    {
      icon: Users,
      title: 'Registration Ends',
      date: '13 November 2024',
      description: 'Last date to submit your application',
    },
    {
      icon: CheckCircle2,
      title: 'First Round',
      date: '13 Nov (5pm-7pm) & 14 Nov (10am-1pm)',
      description: 'Initial competition round',
    },
    {
      icon: Award,
      title: 'Internal Screening',
      date: '13 & 14 November',
      description: 'Evaluation and selection process',
    },
  ];

  return (
    <section id="timeline" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important dates and milestones for E-Crescendo
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`timeline-item relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div className="glass-card-hover p-6 relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <event.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-primary font-semibold mb-2">{event.date}</p>
                        <p className="text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4">
                  <div className="w-4 h-4 rounded-full bg-primary animate-glow-pulse" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import { Linkedin, Twitter, Instagram, Facebook, Mail} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:entrepreneurshipcellnith@gmail.com', label: 'Gmail' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/entrepreneurshipcellnith/posts/?feedView=all', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ecellnith?lang=en&mx=2', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/ecell_nith/?hl=en', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/eclubnith/', label: 'Facebook' },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Main Content with E-Cell logo on the left */}
          <div className="flex items-center space-x-8">
            {/* E-Cell Logo */}
            <img 
              src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762455352/ecell_xgdpga.webp"
              alt="E-Cell NITH Logo"
              className="w-24 h-24 object-contain"
            />
            
            {/* E-Crescendo Logo */}
            <div className="flex items-center space-x-2">
              <img 
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1762455353/logo_ztcqp4.webp"
                alt="E-Cell NITH Logo"
                className="w-10 h-10 rounded-lg object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                E-Crescendo
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center max-w-md">
            Creating Future Innovators
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>Powered by <span className="text-primary font-semibold">Team E-Cell NITH</span> © {currentYear}</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;
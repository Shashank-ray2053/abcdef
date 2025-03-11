
import { useEffect, useRef } from 'react';
import { Cloud, Server, Cpu, Database, ArrowRight, Globe, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);
  const techCirclesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation on load
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.classList.add('opacity-100', 'translate-y-0');
    }

    // Parallax effect for floating elements
    const handleMouseMove = (e: MouseEvent) => {
      if (!floatingElementsRef.current) return;
      
      const elements = floatingElementsRef.current.querySelectorAll('.floating-icon');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      elements.forEach((element, index) => {
        const factor = (index + 1) * 0.01;
        const transformValue = `translate(${x * 40 * factor}px, ${y * 40 * factor}px)`;
        (element as HTMLElement).style.transform = transformValue;
      });
    };

    // Rotate tech circles
    const handleScroll = () => {
      if (!techCirclesRef.current) return;
      
      const scrollPosition = window.scrollY;
      const circles = techCirclesRef.current.querySelectorAll('.tech-circle');
      
      circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.1;
        const rotation = scrollPosition * speed;
        (circle as HTMLElement).style.transform = `rotate(${rotation}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="home"
      ref={heroRef}
      className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden opacity-0 -translate-y-6 transition-all duration-1000 ease-elastic pt-20"
    >
      {/* Colorful background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-r from-neptech-purple/20 to-neptech-blue/20 blur-[100px] animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-l from-neptech-green/20 to-blue-300/20 blur-[100px] animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[40%] rounded-full bg-gradient-to-t from-purple-400/20 to-pink-300/20 blur-[100px] animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating tech circles for 3D effect */}
      <div
        ref={techCirclesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <div className="tech-circle absolute w-[300px] h-[300px] border-2 border-dashed border-neptech-blue/30 rounded-full left-[10%] top-[20%] animate-spin-slow"></div>
        <div className="tech-circle absolute w-[200px] h-[200px] border-2 border-dashed border-neptech-green/20 rounded-full right-[15%] top-[15%] animate-reverse-spin"></div>
        <div className="tech-circle absolute w-[400px] h-[400px] border-2 border-dashed border-purple-400/20 rounded-full left-[20%] bottom-[10%] animate-spin-slow" style={{animationDuration: '30s'}}></div>
      </div>

      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <Cloud className="floating-icon text-neptech-blue/20 w-20 h-20 top-1/4 left-1/4" style={{animationDelay: '0s'}} />
        <Server className="floating-icon text-neptech-blue/20 w-16 h-16 top-1/3 right-1/4" style={{animationDelay: '1.5s'}} />
        <Cpu className="floating-icon text-neptech-blue/20 w-24 h-24 bottom-1/4 left-1/3" style={{animationDelay: '0.5s'}} />
        <Database className="floating-icon text-neptech-blue/20 w-20 h-20 bottom-1/3 right-1/5" style={{animationDelay: '2s'}} />
        <Globe className="floating-icon text-neptech-green/20 w-28 h-28 top-1/5 right-1/3" style={{animationDelay: '1s'}} />
        <Shield className="floating-icon text-purple-400/20 w-24 h-24 bottom-1/5 right-1/4" style={{animationDelay: '2.5s'}} />
        <Zap className="floating-icon text-yellow-400/30 w-16 h-16 top-2/5 left-1/5" style={{animationDelay: '1.2s'}} />
      </div>

      {/* 3D Holographic ring */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none opacity-30 animate-rotate-slow">
        <div className="absolute inset-0 border-2 border-neptech-blue/30 rounded-full blur-[1px]"></div>
        <div className="absolute inset-2 border border-neptech-blue/20 rounded-full blur-[2px]"></div>
        <div className="absolute inset-4 border border-neptech-blue/10 rounded-full blur-[3px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="inline-block animate-blur-in opacity-0" style={{animationDelay: '0.3s'}}>
          <span className="bg-gradient-to-r from-neptech-blue to-neptech-purple text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide mb-8 inline-block shadow-lg">
            NEXT-GEN IT SOLUTIONS
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 mt-4 leading-tight tracking-tight animate-fade-in opacity-0" style={{animationDelay: '0.5s'}}>
          Empowering Business with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neptech-blue via-neptech-purple to-neptech-green">Next-Gen IT Solutions</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-neptech-dark/80 mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.7s'}}>
          NepTech delivers cutting-edge IT infrastructure and cloud solutions
          that transform how businesses operate in the digital landscape.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: '0.9s'}}>
          <a href="#services" className="button-primary group relative overflow-hidden">
            <span className="relative z-10">Explore Services</span>
            <ArrowRight className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10" size={18} />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a href="#contact" className="button-secondary group relative overflow-hidden">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-neptech-blue/10 to-neptech-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-8 text-neptech-dark/60 animate-fade-in opacity-0" style={{animationDelay: '1.1s'}}>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-neptech-blue to-blue-600">5+</span>
            <span className="text-sm">Years Experience</span>
          </div>
          <div className="h-10 w-px bg-neptech-dark/10 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-neptech-purple">100+</span>
            <span className="text-sm">Clients Served</span>
          </div>
          <div className="h-10 w-px bg-neptech-dark/10 hidden sm:block"></div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-neptech-green">99.9%</span>
            <span className="text-sm">Uptime Guarantee</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

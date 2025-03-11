
import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Code, CheckCircle2, LineChart, BarChart4, Award } from 'lucide-react';

const AboutSection = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const orbitsRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === textRef.current) {
              entry.target.classList.add('animate-fade-in-right');
            }
            if (entry.target === imageRef.current) {
              entry.target.classList.add('animate-fade-in-left');
            }
            if (entry.target === missionRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }
    if (missionRef.current) {
      observer.observe(missionRef.current);
    }

    // Animate orbital circles
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbitsRef.current) return;
      
      const rect = orbitsRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const angleX = (e.clientX - centerX) / 50;
      const angleY = (centerY - e.clientY) / 50;
      
      orbitsRef.current.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (missionRef.current) observer.unobserve(missionRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-neptech-blue/5 to-purple-400/5 -top-64 -right-64 blur-[50px]"></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-neptech-green/5 to-blue-300/5 bottom-20 -left-20 blur-[60px]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-yellow-300/5 to-red-300/5 top-40 left-[60%] blur-[70px]"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            ref={textRef} 
            className="opacity-0 order-2 lg:order-1"
          >
            <span className="bg-gradient-to-r from-neptech-blue to-neptech-purple text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide shadow-lg">
              ABOUT NEPTECH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
              Pioneering IT Solutions for <span className="bg-clip-text text-transparent bg-gradient-to-r from-neptech-blue to-neptech-purple">Forward-Thinking</span> Businesses
            </h2>
            
            <p className="text-neptech-dark/70 mb-6">
              Founded by Shashank Ray, NepTech emerged from a vision to bridge the gap between complex technology and business needs. We provide enterprise-grade IT solutions with a personal touch, ensuring that technology becomes an enabler rather than a barrier for your business growth.
            </p>
            
            <p className="text-neptech-dark/70 mb-8">
              Our team of certified IT professionals brings together decades of combined experience across various industry sectors, allowing us to deliver customized solutions that precisely match your operational requirements and strategic objectives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neptech-blue to-blue-600">
                  100%
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Client Satisfaction
                </span>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-neptech-purple">
                  24/7
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Technical Support
                </span>
              </div>
              
              <div className="flex flex-col items-center p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-neptech-green">
                  500+
                </span>
                <span className="text-sm text-neptech-dark/70">
                  Projects Completed
                </span>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-neptech-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neptech-dark">Cutting-Edge Technology</h4>
                  <p className="text-sm text-neptech-dark/70">We leverage the latest innovations to keep your business ahead of the curve.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-neptech-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neptech-dark">Personalized Approach</h4>
                  <p className="text-sm text-neptech-dark/70">Every business is unique, and our solutions are tailored to your specific needs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="text-neptech-green flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-medium text-neptech-dark">Dedicated Support</h4>
                  <p className="text-sm text-neptech-dark/70">Our team is always available to ensure your systems run smoothly.</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="button-primary relative overflow-hidden group">
              <span className="relative z-10">Learn Our Story</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neptech-blue to-neptech-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
          
          <div 
            ref={imageRef}
            className={cn(
              "relative order-1 lg:order-2 opacity-0",
              "perspective-1000"
            )}
          >
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]"
              style={{transformStyle: 'preserve-3d'}}
            >
              <div className="relative z-10 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e6109757-b182-4531-a4bb-4cd83be625a8.png" 
                  alt="Shashank Ray - Founder of NepTech" 
                  className="w-full h-auto object-cover rounded-2xl" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neptech-dark/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">Shashank Ray</h3>
                  <p className="text-white/80">Founder & CEO</p>
                </div>
              </div>
              
              {/* 3D orbiting elements */}
              <div ref={orbitsRef} className="absolute inset-0 pointer-events-none" style={{transformStyle: 'preserve-3d'}}>
                <div className="absolute top-[10%] left-[10%] p-3 rounded-lg transform" style={{transform: 'translateZ(40px)'}}>
                  <Code className="text-neptech-blue w-8 h-8 animate-pulse-subtle" />
                </div>
                
                <div className="absolute top-[20%] right-[15%] p-3 rounded-lg transform" style={{transform: 'translateZ(60px)'}}>
                  <LineChart className="text-neptech-green w-8 h-8 animate-pulse-subtle" style={{animationDelay: '0.5s'}} />
                </div>
                
                <div className="absolute bottom-[30%] left-[20%] p-3 rounded-lg transform" style={{transform: 'translateZ(50px)'}}>
                  <Award className="text-yellow-400 w-8 h-8 animate-pulse-subtle" style={{animationDelay: '1s'}} />
                </div>
                
                <div className="absolute bottom-[20%] right-[10%] p-3 rounded-lg transform" style={{transform: 'translateZ(70px)'}}>
                  <BarChart4 className="text-neptech-purple w-8 h-8 animate-pulse-subtle" style={{animationDelay: '1.5s'}} />
                </div>
              </div>
            </div>
            
            {/* Mission separate instead of on the image */}
            <div 
              ref={missionRef}
              className="opacity-0 mt-8 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg transform transition-all duration-500 hover:shadow-xl hover:scale-105"
            >
              <h3 className="text-xl font-bold text-neptech-dark mb-3 flex items-center">
                <Award className="text-neptech-blue mr-2" size={20} />
                Our Mission
              </h3>
              <p className="text-neptech-dark/70">
                To empower businesses through innovative IT solutions that accelerate growth, enhance productivity, and create sustainable competitive advantages in today's rapidly evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

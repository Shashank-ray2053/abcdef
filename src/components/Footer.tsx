
import { Linkedin, Twitter, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 3D Hover effect for social media icons
    const socialIcons = document.querySelectorAll('.social-icon-3d');
    
    socialIcons.forEach(icon => {
      icon.addEventListener('mousemove', (e) => {
        const rect = (icon as HTMLElement).getBoundingClientRect();
        const x = (e as MouseEvent).clientX - rect.left;
        const y = (e as MouseEvent).clientY - rect.top;
        
        (icon as HTMLElement).style.setProperty('--icon-mouse-x', `${x}px`);
        (icon as HTMLElement).style.setProperty('--icon-mouse-y', `${y}px`);
      });
    });

    return () => {
      socialIcons.forEach(icon => {
        icon.removeEventListener('mousemove', () => {});
      });
    };
  }, []);

  // Fixed href scroll function for footer links
  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer 
      ref={footerRef} 
      className="relative text-white pt-20 pb-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7303c0 100%)"
      }}
    >
      {/* Dynamic animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-400 opacity-15 blur-[100px] rounded-full animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-1/3 bg-purple-400 opacity-15 blur-[80px] rounded-full animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-pink-400 opacity-15 blur-[70px] rounded-full animate-pulse" style={{animationDuration: '10s', animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-1/4 h-1/4 bg-green-400 opacity-15 blur-[70px] rounded-full animate-pulse" style={{animationDuration: '9s', animationDelay: '0.5s'}}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105">
            <div className="card-3d-content">
              <div className="mb-6 flex items-center">
                <div className="relative mr-3">
                  <img 
                    src="/lovable-uploads/c4dad46c-99f2-4756-9567-b7f9ca14063d.png" 
                    alt="NepTech Logo" 
                    className="h-12 w-auto brightness-0 invert"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mix-blend-color-dodge opacity-50 rounded-full animate-pulse-subtle"></div>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-wide">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400">
                    NepTech
                  </span>
                </h2>
              </div>
              <div className="card-shine"></div>
              <p className="text-white/70 mb-6">
                Empowering businesses with next-generation IT solutions and services. Your trusted partner for all your technology needs.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Linkedin size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-blue-400 to-blue-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Twitter size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-sky-400 to-sky-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Facebook size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-indigo-400 to-indigo-600 hover:opacity-100"></div>
                </a>
                <a href="#" className="social-icon-3d w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-neptech-blue transition-colors duration-300 relative overflow-hidden">
                  <div className="relative z-10"><Instagram size={18} /></div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-pink-400 to-purple-600 hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li>
                  <a href="#home" onClick={(e) => scrollToSection('home', e)} className="text-white/70 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={(e) => scrollToSection('about', e)} className="text-white/70 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#team" onClick={(e) => scrollToSection('team', e)} className="text-white/70 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="text-white/70 hover:text-blue-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-green-300">Services</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-green-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    Remote IT Support
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-green-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    Cloud Services
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-green-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    IT Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-green-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    Data Backup & Recovery
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => scrollToSection('services', e)} className="text-white/70 hover:text-green-300 transition-colors duration-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    IT Consultancy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="card-3d p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transform transition-all duration-500 hover:scale-105">
            <div className="card-3d-content">
              <h3 className="text-lg font-semibold mb-6 text-purple-300">Contact Info</h3>
              <div className="card-shine"></div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-3 text-purple-400 flex-shrink-0" size={18} />
                  <span className="text-white/70">
                    Jadibuti, Kathmandu<br />
                    Nepal, 44600
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 text-purple-400 flex-shrink-0" size={18} />
                  <span className="text-white/70">+977-9844418804</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 text-purple-400 flex-shrink-0" size={18} />
                  <span className="text-white/70">info@neptech.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center relative">
          <div className="absolute left-0 right-0 -top-4 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} <span className="text-blue-300 font-medium">NepTech</span>. All rights reserved. Designed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

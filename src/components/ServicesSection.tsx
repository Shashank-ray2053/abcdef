import { useEffect, useRef, useState } from 'react';
import { Headset, Cloud, Server, Database, BarChart, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  detailedDescription: string;
  features: string[];
  onLearnMore: () => void;
  colorClass: string;
}

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    detailedDescription: string;
    features: string[];
    colorClass: string;
  } | null;
  onClose: () => void;
}

const services = [
  {
    title: 'Remote IT Support',
    description: 'Get immediate assistance for all your IT issues with our 24/7 remote support team.',
    icon: <Headset className="service-icon text-red-500" />,
    detailedDescription: "Our Remote IT Support service provides round-the-clock expert assistance for all your technology needs. Whether you're facing critical system failures or need help with everyday tech issues, our team of certified IT professionals is just a call away.",
    features: [
      '24/7 helpdesk accessibility',
      'Rapid response times (average 15 minutes)',
      'Secure remote troubleshooting',
      'Multiple support channels (phone, email, chat)',
      'Regular system health checks',
      'Detailed resolution reports'
    ],
    colorClass: 'from-red-500 to-red-600'
  },
  {
    title: 'Cloud Services',
    description: 'Securely store, access, and manage your data and applications in our optimized cloud environment.',
    icon: <Cloud className="service-icon" />,
    detailedDescription: "NepTech Cloud Services offers enterprise-grade cloud solutions that are scalable, secure, and cost-effective. We help businesses migrate to the cloud, optimize their cloud infrastructure, and manage their cloud resources efficiently.",
    features: [
      'Public, private, and hybrid cloud options',
      'Seamless migration from legacy systems',
      'Auto-scaling to match demand',
      'Built-in redundancy and disaster recovery',
      'Pay-as-you-go pricing model',
      'Comprehensive security protocols'
    ],
    colorClass: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'IT Infrastructure',
    description: 'Build a robust IT foundation with our custom infrastructure solutions designed for your business.',
    icon: <Server className="service-icon" />,
    detailedDescription: "Our IT Infrastructure services help businesses establish a robust technical foundation that supports growth and innovation. We design, implement, and maintain the hardware, software, networks, and services required for your business operations.",
    features: [
      'Custom network design and implementation',
      'Server configuration and management',
      'Storage solutions and optimization',
      'Enterprise hardware procurement',
      'Infrastructure security hardening',
      'Regular maintenance and updates'
    ],
    colorClass: 'from-green-500 to-teal-600'
  },
  {
    title: 'Data Backup & Recovery',
    description: 'Protect your business with automated backup systems and rapid recovery solutions.',
    icon: <Database className="service-icon" />,
    detailedDescription: "Our Data Backup & Recovery solutions ensure your critical business information is protected against data loss. We implement automated, secure backup systems with multiple redundancies and provide rapid recovery options to minimize downtime.",
    features: [
      'Automated multi-site backups',
      'Real-time data replication',
      'Point-in-time recovery options',
      'End-to-end encryption',
      'Regular backup verification',
      'Rapid recovery procedures'
    ],
    colorClass: 'from-orange-500 to-amber-600'
  },
  {
    title: 'IT Consultancy',
    description: 'Strategic guidance to align your IT investments with your business objectives for maximum ROI.',
    icon: <BarChart className="service-icon" />,
    detailedDescription: "NepTech's IT Consultancy services provide expert strategic guidance to help businesses make informed technology decisions. We analyze your current IT infrastructure, identify areas for improvement, and create roadmaps for technology implementation that aligns with your business goals.",
    features: [
      'Comprehensive IT assessments',
      'Strategic technology roadmapping',
      'Project planning and management',
      'Vendor selection assistance',
      'Cost optimization strategies',
      'Technology trend analysis'
    ],
    colorClass: 'from-pink-500 to-rose-600'
  },
];

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onClose }) => {
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailRef.current && !detailRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    // Add no-scroll to body
    document.body.classList.add('overflow-hidden');
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.classList.remove('overflow-hidden');
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        ref={detailRef}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
      >
        <div className="relative p-6 md:p-8">
          <button 
            onClick={onClose} 
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-neptech-gray/50 flex items-center justify-center text-neptech-dark hover:bg-neptech-gray transition-colors"
          >
            <X size={18} />
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${service.colorClass} flex items-center justify-center text-white`}>
              {service.icon}
            </div>
            <h3 className="text-2xl font-bold text-neptech-dark">{service.title}</h3>
          </div>
          
          <p className="text-neptech-dark/70 mb-6">{service.detailedDescription}</p>
          
          <h4 className="text-lg font-semibold text-neptech-dark mb-4">Key Features</h4>
          <ul className="space-y-3 mb-8">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.colorClass} flex-shrink-0 flex items-center justify-center mt-0.5 text-white`}>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-neptech-dark/80">{feature}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href="#contact" 
            onClick={onClose}
            className={`rounded-full text-white px-8 py-3 font-medium transition-all duration-300 ease-elastic shadow-lg hover:shadow-xl hover:translate-y-[-2px] w-full text-center bg-gradient-to-r ${service.colorClass}`}
          >
            Request a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  delay, 
  detailedDescription, 
  features, 
  onLearnMore,
  colorClass
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-scale-in');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  // 3D Card Effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      const content = card.querySelector('.card-3d-content') as HTMLElement;
      if (content) {
        content.style.transform = `translateZ(40px)`;
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      const content = card.querySelector('.card-3d-content') as HTMLElement;
      if (content) {
        content.style.transform = 'translateZ(0)';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "service-card card-3d p-8 opacity-0 relative overflow-hidden",
        "hover:shadow-lg transition-all duration-500 ease-elastic",
        "bg-white"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient background that appears on hover */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-10' : 'opacity-0'} bg-gradient-to-br ${colorClass}`}
      ></div>
      
      <div className="card-3d-content relative z-10">
        <div className={`service-icon-container mb-6 bg-gradient-to-br ${colorClass} text-white`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-neptech-dark">{title}</h3>
        <p className="text-neptech-dark/70">{description}</p>
        
        <button 
          onClick={onLearnMore}
          className={`inline-block mt-6 font-medium transition-colors duration-300 group flex items-center relative overflow-hidden`}
        >
          <span className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${colorClass}`}>Learn more</span>
          <span className={`inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1 bg-clip-text text-transparent bg-gradient-to-r ${colorClass}`}>→</span>
          
          {/* Animated underline effect */}
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${colorClass} transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100`}></span>
        </button>
      </div>
      <div className="card-shine"></div>
    </div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              entry.target.classList.add('animate-fade-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const handleLearnMore = (service: (typeof services)[0]) => {
    setSelectedService(service);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="section-padding bg-neptech-gray relative overflow-hidden"
    >
      {/* Background elements with more vibrant colors */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-400/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-green-400/10 to-transparent blur-[80px]"></div>
        <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 bg-gradient-to-bl from-purple-400/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-pink-400/10 to-transparent blur-[80px]"></div>
        <div className="absolute top-1/4 left-1/2 w-1/5 h-1/5 bg-gradient-to-r from-orange-400/10 to-transparent blur-[70px]"></div>
      </div>

      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <span className="bg-gradient-to-r from-neptech-blue to-neptech-purple text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide shadow-lg">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
            Comprehensive IT Solutions for Modern Businesses
          </h2>
          <p className="text-neptech-dark/70">
            Our range of services is designed to address all your IT needs with cutting-edge technology and expert support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 150}
              detailedDescription={service.detailedDescription}
              features={service.features}
              colorClass={service.colorClass}
              onLearnMore={() => handleLearnMore(service)}
            />
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetail 
          service={selectedService} 
          onClose={handleCloseDetail} 
        />
      )}
    </section>
  );
};

export default ServicesSection;

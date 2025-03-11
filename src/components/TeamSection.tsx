
import { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  position: string;
  image: string;
  delay: number;
}

const teamMembers = [
  {
    name: 'Shashank Ray',
    position: 'Founder & CEO',
    image: '/lovable-uploads/e6109757-b182-4531-a4bb-4cd83be625a8.png',
  },
  {
    name: 'Jane Cooper',
    position: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Robert Fox',
    position: 'Cloud Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Esther Howard',
    position: 'IT Security Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80',
  },
];

const TeamMember: React.FC<TeamMemberProps> = ({ name, position, image, delay }) => {
  const memberRef = useRef<HTMLDivElement>(null);

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

    if (memberRef.current) {
      observer.observe(memberRef.current);
    }

    return () => {
      if (memberRef.current) {
        observer.unobserve(memberRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={memberRef}
      className="team-card opacity-0 group"
    >
      <div className="relative overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[300px] object-cover object-center transition-transform duration-700 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neptech-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-neptech-blue transition-colors duration-300">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-neptech-blue transition-colors duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm text-white hover:bg-white hover:text-neptech-blue transition-colors duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neptech-dark">{name}</h3>
        <p className="text-neptech-dark/70">{position}</p>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

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

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div ref={titleRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0">
          <span className="bg-neptech-blue/10 text-neptech-blue px-4 py-1 rounded-full text-sm font-medium tracking-wide">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
            Meet the Experts Behind <span className="highlight-text">NepTech</span>
          </h2>
          <p className="text-neptech-dark/70">
            Our team of certified IT professionals brings decades of combined experience to deliver customized solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={member.name}
              name={member.name}
              position={member.position}
              image={member.image}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

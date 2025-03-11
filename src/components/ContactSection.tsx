
import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const mailtoLink = `mailto:info@neptech.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message and reset form
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Email client opened. Please send your message from your email application.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === formRef.current) {
              entry.target.classList.add('animate-fade-in-right');
            }
            if (entry.target === infoRef.current) {
              entry.target.classList.add('animate-fade-in-left');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
      if (infoRef.current) observer.unobserve(infoRef.current);
    };
  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section-padding bg-neptech-gray relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-neptech-blue/10 text-neptech-blue px-4 py-1 rounded-full text-sm font-medium tracking-wide">
            CONTACT US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-neptech-dark">
            Get in Touch with Our <span className="highlight-text">Team</span>
          </h2>
          <p className="text-neptech-dark/70">
            Have questions about our services? Ready to start your IT transformation? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            ref={formRef}
            className="bg-white rounded-2xl shadow-lg p-8 opacity-0"
          >
            <h3 className="text-2xl font-semibold mb-6 text-neptech-dark">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neptech-dark/80 mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neptech-dark/10 focus:border-neptech-blue focus:outline-none focus:ring-2 focus:ring-neptech-blue/20 transition-all duration-300"
                    placeholder="Enter your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neptech-dark/80 mb-2">
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-neptech-dark/10 focus:border-neptech-blue focus:outline-none focus:ring-2 focus:ring-neptech-blue/20 transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-neptech-dark/80 mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-neptech-dark/10 focus:border-neptech-blue focus:outline-none focus:ring-2 focus:ring-neptech-blue/20 transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neptech-dark/80 mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neptech-dark/10 focus:border-neptech-blue focus:outline-none focus:ring-2 focus:ring-neptech-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "button-primary w-full flex items-center justify-center",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2" size={18} />
                  </span>
                )}
              </button>
            </form>
          </div>
          
          <div 
            ref={infoRef}
            className="opacity-0"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-neptech-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neptech-blue/10 flex items-center justify-center mr-4">
                    <MapPin className="text-neptech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neptech-dark">Our Location</h4>
                    <p className="text-neptech-dark/70">
                      Jadibuti, Kahtmandu<br />
                      Nepal, 44600
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neptech-blue/10 flex items-center justify-center mr-4">
                    <Mail className="text-neptech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neptech-dark">Email Us</h4>
                    <p className="text-neptech-dark/70">
                      <a href="mailto:info@neptech.com" className="hover:text-neptech-blue transition-colors">info@neptech.com</a><br />
                      <a href="mailto:support@neptech.com" className="hover:text-neptech-blue transition-colors">support@neptech.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neptech-blue/10 flex items-center justify-center mr-4">
                    <Phone className="text-neptech-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-neptech-dark">Call Us</h4>
                    <p className="text-neptech-dark/70">
                      <a href="tel:+15551234567" className="hover:text-neptech-blue transition-colors">+977-9844418804</a><br />
                      <a href="tel:+15559876543" className="hover:text-neptech-blue transition-colors">+1 (555) 987-6543</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-neptech-dark">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-neptech-dark">Monday - Friday:</span>
                  <span className="text-neptech-dark/70">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neptech-dark">Saturday:</span>
                  <span className="text-neptech-dark/70">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neptech-dark">Sunday:</span>
                  <span className="text-neptech-dark/70">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-neptech-dark/10">
                <p className="text-neptech-blue font-medium">24/7 Emergency Support</p>
                <p className="text-neptech-dark/70">
                  Our technical support team is available 24/7 for urgent IT emergencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

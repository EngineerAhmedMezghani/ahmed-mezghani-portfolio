import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Download, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_id', // You'll need to set this up with EmailJS
        'template_id', // You'll need to set this up with EmailJS
        formData,
        'RmLkXHmpGPS04bGhB'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      name: "GitHub",
      href: "https://github.com/IngAhmedMezghani",
      icon: <Github className="h-5 w-5" />,
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/Ing-Ahmed-Mezghani",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:text-blue-600"
    },
    {
      name: "Download CV",
      href: "/api/placeholder/cv/Ahmed_Mezghani_eng.pdf",
      icon: <Download className="h-5 w-5" />,
      color: "hover:text-green-600",
      download: true
    }
  ];

  return (
    <section id="contact" className="portfolio-section bg-gradient-to-b from-muted/20 to-portfolio-bg">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold portfolio-gradient-text text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-card">
                <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                  Send me a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:border-transparent transition-colors resize-none"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="portfolio-button w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="portfolio-card">
                <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-portfolio-text-muted">Email</p>
                      <p className="text-portfolio-text">ahmed.mezghani@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-portfolio-text-muted">Phone</p>
                      <p className="text-portfolio-text">+216 XX XXX XXX</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-portfolio-text-muted">Location</p>
                      <p className="text-portfolio-text">Sfax, Tunisia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="portfolio-card">
                <h3 className="text-xl font-semibold text-portfolio-text mb-6">
                  Connect with me
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={link.download}
                      className={`flex items-center gap-2 px-4 py-2 bg-portfolio-accent/10 text-portfolio-accent rounded-lg hover:bg-portfolio-accent/20 transition-colors ${link.color}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
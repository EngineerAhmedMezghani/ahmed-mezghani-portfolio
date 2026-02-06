import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, Github, Linkedin, Download, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const USE_EMAILJS = import.meta.env.VITE_USE_EMAILJS === 'true';
  const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (USE_EMAILJS && EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      } catch (e) {
        console.warn('EmailJS init failed', e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const loadRecaptcha = (siteKey: string) => {
    return new Promise<void>((resolve, reject) => {
      if (typeof window === 'undefined') return reject(new Error('No window'));
      if ((window as any).grecaptcha) return resolve();
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load reCAPTCHA'));
      document.head.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // If configured to use EmailJS in-browser, send directly via EmailJS
    if (USE_EMAILJS) {
      if (!EMAILJS_SERVICE || !EMAILJS_TEMPLATE) {
        toast({ title: 'Error', description: 'EmailJS not configured (service/template).', variant: 'destructive' });
        setIsSubmitting(false);
        return;
      }

      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'amezghani5@gmail.com',
        } as Record<string, string>;

        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, templateParams);

        toast({ title: 'Success', description: 'Message sent successfully!' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('EmailJS send error', error);
        toast({ title: 'Error', description: 'Failed to send message via EmailJS.', variant: 'destructive' });
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    const API_BASE = import.meta.env.VITE_API_BASE_URL;
    const RECAPTCHA_SITE = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

    if (!API_BASE) {
      toast({ title: 'Error', description: 'API base URL is not configured.', variant: 'destructive' });
      setIsSubmitting(false);
      return;
    }

    try {
      // Ensure reCAPTCHA is loaded
      if (!RECAPTCHA_SITE) {
        throw new Error('reCAPTCHA site key is not configured.');
      }

      await loadRecaptcha(RECAPTCHA_SITE);

      const grecaptcha = (window as any).grecaptcha;
      const recaptchaToken = await grecaptcha.execute(RECAPTCHA_SITE, { action: 'contact' });

      // Request short-lived token from backend
      const tokenResp = await fetch(`${API_BASE}/request-email-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recaptchaToken }),
      });

      if (!tokenResp.ok) {
        const err = await tokenResp.json().catch(() => ({}));
        throw new Error(err.message || `Token request failed: ${tokenResp.status}`);
      }

      const { token } = await tokenResp.json();

      // Send email using short-lived token
      const API_URL = `${API_BASE}/send-email`;
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          to: 'amezghani5@gmail.com', // 👈 Replace with your own email address
          subject: `[Portfolio Contact] ${formData.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h3>Message from: ${formData.name}</h3>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Message:</strong></p>
              <div>${formData.message}</div>
            </div>
          `,
          text: `
            From: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}

            ${formData.message}
          `
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);

      toast({ title: 'Success', description: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An error occurred. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  const contactLinks = [
    {
      name: "GitHub",
      href: "https://github.com/EngineerAhmedMezghani",
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
      href: "/images/Ahmed-Mezghani.pdf",
      icon: <Download className="h-5 w-5" />,
      color: "hover:text-green-600",
      download: true,
      target: undefined,    // or just don't set target at all
      rel: undefined
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
            Contact Me
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
                      placeholder="Your name"
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
                      placeholder="Your email"
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
                      placeholder="Your message"
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
                        Send
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
                      <p className="text-portfolio-text">ahmed.mezghani@enis.tn</p>
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

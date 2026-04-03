import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, MapPin } from 'lucide-react';

export default function ContactSection() {
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
            Contact Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Information */}
            <motion.div
              className="portfolio-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text-muted">Email</p>
                    <p className="text-portfolio-text font-medium">ahmed.mezghani@enis.tn</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-portfolio-text-muted">Location</p>
                    <p className="text-portfolio-text font-medium">Sfax, Tunisia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Connect with me */}
            <motion.div
              className="portfolio-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-text mb-6">
                Connect with me
              </h3>

              <div className="flex flex-wrap gap-3">
                {contactLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target={link.download ? undefined : "_blank"}
                    rel={link.download ? undefined : "noopener noreferrer"}
                    download={link.download}
                    className={`flex items-center gap-2 px-4 py-2.5 bg-portfolio-accent/10 text-portfolio-accent rounded-lg hover:bg-portfolio-accent/20 transition-all duration-200 ${link.color}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, ExternalLink, FileText } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Data Science Introduction",
      provider: "365 Data Science",
      description: "Completed an introduction to data science, covering key concepts and practical skills.",
      certificateUrl: "/api/placeholder/certificate/data-science-intro.pdf",
      skills: ["Data Analysis", "Statistical Methods", "Data Visualization", "Python Basics"],
      issueDate: "2024",
      logo: "/api/placeholder/100/100"
    },
    {
      title: "Python Data Associate",
      provider: "DataCamp",
      description: "Advanced certification in Python programming for data science applications.",
      certificateUrl: "/api/placeholder/certificate/python-data-associate.pdf",
      skills: ["Python Programming", "Data Manipulation", "Pandas", "NumPy", "Data Visualization"],
      issueDate: "2024",
      logo: "/api/placeholder/100/100"
    }
  ];

  const openCertificate = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="certifications" className="portfolio-section">
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
            Certifications
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="portfolio-card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => openCertificate(cert.certificateUrl)}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                          {cert.title}
                        </h3>
                        <ExternalLink className="h-4 w-4 text-portfolio-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-portfolio-accent font-medium mb-2">
                        <strong>Provider:</strong> {cert.provider}
                      </p>
                      <p className="text-portfolio-text-muted mb-4">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-portfolio-accent/10 text-portfolio-accent text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-sm text-portfolio-text-muted">
                        Issued: {cert.issueDate}
                      </span>
                      <motion.button
                        className="flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent-hover transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          openCertificate(cert.certificateUrl);
                        }}
                      >
                        <FileText className="h-4 w-4" />
                        <span className="text-sm font-medium">View Certificate</span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
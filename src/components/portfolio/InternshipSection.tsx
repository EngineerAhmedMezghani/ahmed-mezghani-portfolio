import { motion } from 'framer-motion';
import { ExternalLink, Eye, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export default function InternshipSection() {
  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Person Detection",
      description: "Real-time detection with YOLOv8"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Crowd Tracking",
      description: "Tracking individuals within defined zones using DeepSORT"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Alert Generation",
      description: "Intelligent alert system for crowd management"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Visual Analytics",
      description: "Comprehensive analytics dashboard"
    }
  ];

  return (
    <section id="internships" className="portfolio-section bg-gradient-to-b from-portfolio-bg to-muted/20">
      <div className="portfolio-container">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-portfolio-accent mb-8 antialiased subpixel-antialiased"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Computer Vision Internship
          </motion.h2>

          <motion.div
            className="portfolio-card mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                Summer 2025,
              </p>
              <p>
                💼 I am currently an intern at{' '}
                <a
                  href="https://www.visshopai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-portfolio-accent hover:text-portfolio-accent-hover transition-colors inline-flex items-center gap-1"
                  aria-label="VisShop AI website (opens in a new tab)"
                >
                  VisShop AI
                  <ExternalLink className="h-4 w-4" />
                </a>
                ,
              </p>
              <p>
                working on the <span className="font-bold text-portfolio-accent">VisioTrack</span> project — an intelligent real-time crowd monitoring system using computer vision (YOLOv8, DeepSORT), FastAPI, and React.
              </p>
              <p>
                My contributions focus on person detection, zone-based tracking, alert generation, and visual analytics.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="portfolio-card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-portfolio-text mb-2">{feature.title}</h3>
                <p className="text-sm text-portfolio-text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

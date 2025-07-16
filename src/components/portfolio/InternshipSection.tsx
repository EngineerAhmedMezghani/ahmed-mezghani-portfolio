import { motion } from 'framer-motion';
import { ExternalLink, Eye, Users, AlertTriangle, TrendingUp } from 'lucide-react';

export default function InternshipSection() {
  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Détection de Personnes",
      description: "Détection en temps réel avec YOLOv8"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Suivi de Foule",
      description: "Suivi d'individus dans des zones définies avec DeepSORT"
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Génération d'Alertes",
      description: "Système d'alertes intelligent pour la gestion de foule"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Analytiques Visuels",
      description: "Tableau de bord d'analyse complet"
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
            className="text-4xl md:text-5xl font-bold portfolio-gradient-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Stage en Computer Vision
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
                Été 2025,
              </p>
              <p>
                💼 Je suis actuellement stagiaire chez{' '}
                <a 
                  href="https://www.visshopai.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-portfolio-accent hover:text-portfolio-accent-hover transition-colors inline-flex items-center gap-1"
                  aria-label="Site web de VisShop AI (ouvre dans un nouvel onglet)"
                >
                  VisShop AI
                  <ExternalLink className="h-4 w-4" />
                </a>
                ,
              </p>
              <p>
                travaillant sur le projet <span className="font-bold text-portfolio-accent">VisioTrack</span> — un système intelligent de surveillance de foule en temps réel utilisant la computer vision (YOLOv8, DeepSORT), FastAPI et React.
              </p>
              <p>
                Mes contributions se concentrent sur la détection de personnes, le suivi dans des zones définies, la génération d'alertes et l'analyse visuelle.
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
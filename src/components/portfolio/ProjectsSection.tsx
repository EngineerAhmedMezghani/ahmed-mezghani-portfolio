import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Application Android - Vente de Matériel Informatique",
      tech: ["Java", "Android Studio", "SQLite", "Material Design"],
      description: "Application mobile complète permettant la vente et l'achat de matériel informatique. Implémentation d'un catalogue de produits, système d'authentification sécurisé, gestion des commandes et panier d'achat. Interface utilisateur intuitive avec animations fluides et design responsive.",
      objectives: "Créer une plateforme mobile accessible pour démocratiser l'achat de matériel informatique",
      challenges: "Optimisation des performances pour les appareils bas de gamme, synchronisation des données offline/online",
      features: ["Catalogue de produits filtrable", "Système de panier", "Authentification sécurisée", "Notifications push", "Mode hors ligne"],
      image: "/api/placeholder/400/300",
      category: "Développement Mobile",
      github: "https://github.com/ahmed-mezghani/hardware-store-android",
      demo: null
    },
    {
      title: "Analyse de Matchs de Football avec Computer Vision",
      tech: ["Python", "YOLO", "OpenCV", "TensorFlow", "NumPy"],
      description: "Système d'analyse avancée de matchs de football utilisant des techniques de computer vision. Détection et suivi des joueurs avec YOLO, extraction automatique de statistiques de jeu et génération de rapports d'analyse pour entraîneurs et analystes sportifs.",
      objectives: "Fournir des insights précis et automatisés pour l'analyse tactique sportive",
      challenges: "Détection précise des joueurs en mouvement, gestion des occlusions, traitement temps réel",
      features: ["Détection de joueurs", "Suivi de trajectoires", "Calcul de statistiques", "Heatmaps de positions", "Export de rapports"],
      image: "/api/placeholder/400/300",
      category: "Intelligence Artificielle",
      github: "https://github.com/ahmed-mezghani/football-analysis-cv",
      demo: "https://football-analysis-demo.com"
    },
    {
      title: "Système de Réservation d'Événements",
      tech: ["HTML5", "CSS3", "JavaScript ES6", "PHP", "MySQL"],
      description: "Plateforme web complète de réservation d'événements avec interface responsive et backend robuste. Gestion des utilisateurs, réservation de places en temps réel, système de paiement intégré et tableau de bord administrateur pour la gestion des événements.",
      objectives: "Simplifier la réservation d'événements avec une expérience utilisateur optimale",
      challenges: "Gestion de la concurrence pour les réservations, intégration sécurisée des paiements",
      features: ["Calendrier interactif", "Réservation temps réel", "Paiement sécurisé", "Dashboard admin", "Notifications email"],
      image: "/api/placeholder/400/300",
      category: "Développement Web",
      github: "https://github.com/ahmed-mezghani/event-reservation",
      demo: "https://event-reservation-demo.com"
    },
    {
      title: "Portfolio Personnel Interactif",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      description: "Site web portfolio personnel moderne avec animations fluides et design responsive. Optimisé pour les performances et l'accessibilité, intégrant un système de thèmes sombre/clair et des micro-interactions engageantes.",
      objectives: "Créer une vitrine professionnelle reflétant mes compétences techniques et créatives",
      challenges: "Optimisation des performances, accessibilité totale, design cohérent multi-devices",
      features: ["Design responsive", "Mode sombre/clair", "Animations CSS", "SEO optimisé", "Performance optimisée"],
      image: "/api/placeholder/400/300",
      category: "Développement Web",
      github: "https://github.com/ahmed-mezghani/portfolio",
      demo: "https://ahmed-mezghani.dev"
    }
  ];

  return (
    <section id="projects" className="portfolio-section">
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
            Mes Projets
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="portfolio-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Voir le code source sur GitHub"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Voir la démo en ligne"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-portfolio-accent/90 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-portfolio-accent mb-2">Technologies utilisées :</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-portfolio-text-muted leading-relaxed text-sm">
                      {project.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-semibold text-portfolio-accent">Objectif :</span>
                        <p className="text-xs text-portfolio-text-muted mt-1">{project.objectives}</p>
                      </div>
                      
                      <div>
                        <span className="text-xs font-semibold text-portfolio-accent">Défis techniques :</span>
                        <p className="text-xs text-portfolio-text-muted mt-1">{project.challenges}</p>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-xs font-semibold text-portfolio-accent">Fonctionnalités clés :</span>
                      <ul className="mt-1 space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-portfolio-text-muted flex items-center">
                            <span className="w-1 h-1 bg-portfolio-accent rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-button-outline text-sm py-2 px-4"
                          aria-label="Voir le code source"
                        >
                          <Github className="h-4 w-4 mr-2 inline" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-button text-sm py-2 px-4"
                          aria-label="Voir la démo"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 inline" />
                          Démo
                        </a>
                      )}
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
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const educationItems = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Baccalauréat en Mathématiques",
      year: "2022",
      description: "Diplômé avec mention en Mathématiques, établissant une base solide en pensée analytique et résolution de problèmes. Cette formation m'a permis de développer une rigueur scientifique essentielle pour l'informatique."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Concours National d'Entrée aux Écoles d'Ingénieurs",
      year: "2024",
      description: "Admis avec succès au concours national d'entrée aux écoles d'ingénieurs, démontrant l'excellence académique et la capacité à relever des défis intellectuels exigeants."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Étudiant Ingénieur en Informatique - ENIS Sfax",
      year: "2024 - Présent",
      description: "Actuellement en cursus d'ingénieur en Informatique à l'École Nationale d'Ingénieurs de Sfax. Formation approfondie en algorithmes, structures de données, développement logiciel et intelligence artificielle."
    }
  ];

  return (
    <section id="education" className="portfolio-section bg-gradient-to-b from-muted/20 to-portfolio-bg">
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
            Formation
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {educationItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="portfolio-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-portfolio-text">
                          {item.title}
                        </h3>
                        <span className="text-portfolio-accent font-medium bg-portfolio-accent/10 px-3 py-1 rounded-full text-sm">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-portfolio-text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
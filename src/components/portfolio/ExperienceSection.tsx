import { motion } from 'framer-motion';
import { Users, Trophy } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Media Member",
      organization: "PYFAC-X",
      description: "Active member of the media team, contributing to content creation and community engagement.",
      type: "Organization",
      period: "2023 - Present"
    },
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Participant",
      organization: "Hello World 5.0",
      description: "Participated in competitive programming competition, demonstrating problem-solving skills and algorithmic thinking.",
      type: "Competition",
      period: "2024"
    }
  ];

  return (
    <section id="experience" className="portfolio-section bg-gradient-to-b from-portfolio-bg to-muted/20">
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
            Experience
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  className="portfolio-card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                      {experience.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-portfolio-text">
                            {experience.title}
                          </h3>
                          <p className="text-portfolio-accent font-medium">
                            {experience.organization}
                          </p>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <span className="text-portfolio-text-muted text-sm">
                            {experience.period}
                          </span>
                          <span className="text-portfolio-accent font-medium bg-portfolio-accent/10 px-3 py-1 rounded-full text-sm">
                            {experience.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-portfolio-text-muted leading-relaxed">
                        {experience.description}
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
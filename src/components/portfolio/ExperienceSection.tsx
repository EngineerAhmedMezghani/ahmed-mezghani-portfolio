import { motion } from 'framer-motion';
import { Users, Trophy } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
      {
        id: 'media-pyfac-x',
        icon: <Users className="h-6 w-6" />,
        title: "Media Member",
        organization: "PYFAC-X",
        description: "Contributed to visual media content and community engagement for the career-focused tech event.",
        type: "Organization",
        period: "2024"
      },
      {
        id: 'media-pyfac-xi',
        icon: <Users className="h-6 w-6" />,
        title: "Media Member",
        organization: "PYFAC-XI",
        description: "Continued as a media team member in the next edition, enhancing content quality and outreach strategies.",
        type: "Organization",
        period: "2025"
      },
      {
        id: 'participant-helloworld',
        icon: <Trophy className="h-6 w-6" />,
        title: "Participant",
        organization: "Hello World 5.0",
        description: "Participated in a competitive programming challenge, demonstrating strong algorithmic thinking.",
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
            // Applied consistent styling: removed gradient, added solid color, font smoothing, and extrabold
            className="text-4xl md:text-5xl font-extrabold text-portfolio-accent text-center mb-12 antialiased subpixel-antialiased"
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
                  key={experience.id} // Use the unique id as the key
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
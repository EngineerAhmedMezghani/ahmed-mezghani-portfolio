import { motion } from 'framer-motion';
import { Users, Trophy } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      id: 'ieee-member',
      icon: <Users className="h-6 w-6" />,
      title: "Member",
      organization: "IEEE",
      description: "Active member of the Institute of Electrical and Electronics Engineers, engaging in professional development and global networking.",
      type: "Organization",
      period: "Since 2024",
      href: "https://www.ieee.org/"
    },
    {
      id: 'ieee-cs-member',
      icon: <Users className="h-6 w-6" />,
      title: "Member",
      organization: "IEEE Computer Society",
      description: "Member of the IEEE Computer Society, participating in communities advancing computing and technology innovations.",
      type: "Organization",
      period: "Since 2024",
      href: "https://www.computer.org/"
    },
    {
      id: 'media-pyfac-x',
      icon: <Users className="h-6 w-6" />,
      title: "Media Member",
      organization: "PYFAC-X",
      description: "Contributed to visual media content and community engagement for the career-focused tech event.",
      type: "Organization",
      period: "2024",
      href: "https://www.facebook.com/PitchYourselfForACareer/?locale=fr_FR"
    },
    {
      id: 'media-pyfac-xi',
      icon: <Users className="h-6 w-6" />,
      title: "Media Member",
      organization: "PYFAC-XI",
      description: "Continued as a media team member in the next edition, enhancing content quality and outreach strategies.",
      type: "Organization",
      period: "2025",
      href: "https://www.facebook.com/PitchYourselfForACareer/?locale=fr_FR"
    },
    {
      id: 'participant-helloworld',
      icon: <Trophy className="h-6 w-6" />,
      title: "Participant",
      organization: "Hello World 5.0",
      description: "Participated in a competitive programming challenge, demonstrating strong algorithmic thinking.",
      type: "Competition",
      period: "2024",
      href: "https://www.facebook.com/profile.php?id=100091509070916"
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
            className="text-4xl md:text-5xl font-extrabold text-portfolio-accent text-center mb-12 antialiased subpixel-antialiased"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experiences.map((experience, index) => (
                <a
                  key={experience.id}
                  href={experience.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="portfolio-card hover:shadow-lg hover:scale-[1.01] transition-all duration-300 flex flex-col gap-4 p-4"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                        {experience.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-portfolio-text">
                          {experience.title}
                        </h3>
                        <p className="text-portfolio-accent font-medium">
                          {experience.organization}
                        </p>
                        <p className="text-portfolio-text-muted text-sm">
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-portfolio-text-muted leading-relaxed mt-2">
                      {experience.description}
                    </p>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


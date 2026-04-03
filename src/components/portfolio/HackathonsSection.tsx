import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, Award, Code2 } from 'lucide-react';

interface Hackathon {
  id: string;
  icon: React.ReactNode;
  name: string;
  role: string;
  description: string;
  date: string;
  location?: string;
  achievement?: string;
  technologies?: string[];
  href?: string;
}

export default function HackathonsSection() {
  const hackathons: Hackathon[] = [
    {
      id: 'hackathon-2',
      icon: <Trophy className="h-6 w-6" />,
      name: "Tech Resolve Challenge",
      role: "Participant",
      date: "2026",
      location: "Tunisia",
      achievement: "Top 10 Finalist",
      technologies: ["MQTT", "Eclipse Ditto", "XGBoost", "Isolation Forest"],
      description: "AI Enhanced IOT Digital Twin Platform for Smart Waste Management, Simulating waste bins to predict overflow and optimize collection routes."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hackathons" className="portfolio-section bg-gradient-to-b from-portfolio-bg to-muted/20">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-portfolio-accent text-center mb-4 antialiased subpixel-antialiased"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Hackathons
          </motion.h2>

          <motion.p
            className="text-portfolio-text-muted text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing my passion for innovation through competitive coding events and collaborative problem-solving.
          </motion.p>

          <motion.div
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hackathons.map((hackathon) => (
              <motion.div
                key={hackathon.id}
                className="portfolio-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
                variants={itemVariants}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                    {hackathon.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-portfolio-text">
                      {hackathon.name}
                    </h3>
                    <p className="text-portfolio-accent font-medium">
                      {hackathon.role}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-sm text-portfolio-text-muted">
                    <Calendar className="h-4 w-4" />
                    {hackathon.date}
                  </span>
                  {hackathon.location && (
                    <span className="inline-flex items-center gap-1 text-sm text-portfolio-text-muted">
                      <Users className="h-4 w-4" />
                      {hackathon.location}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-portfolio-text-muted leading-relaxed mb-4 flex-grow">
                  {hackathon.description}
                </p>

                {/* Achievement Badge */}
                {hackathon.achievement && (
                  <div className="flex items-center gap-2 mb-4 p-3 bg-portfolio-accent/5 rounded-lg border border-portfolio-accent/20">
                    <Award className="h-5 w-5 text-portfolio-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-portfolio-accent">
                      {hackathon.achievement}
                    </span>
                  </div>
                )}

                {/* Technologies */}
                {hackathon.technologies && hackathon.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-muted rounded-full text-portfolio-text"
                      >
                        <Code2 className="h-3 w-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Link */}
                {hackathon.href && (
                  <a
                    href={hackathon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 text-sm text-portfolio-accent hover:underline inline-flex items-center gap-1"
                  >
                    View Project
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

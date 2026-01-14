import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Trophy, X } from 'lucide-react';

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
      id: 'microsoft-tech-club-member',
      icon: <Users className="h-6 w-6" />,
      title: "Member",
      organization: "Microsoft Tech Club",
      description:
        "Active member of the Microsoft Tech Club, collaborating on innovative projects, tech talks, and student-led initiatives focused on Microsoft technologies.",
      type: "Organization",
      period: "Since 2025",
      href: "https://studentambassadors.microsoft.com/",
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
    },
    {
      id: 'participant-tsyp13',
      icon: <Trophy className="h-6 w-6" />,
      title: "Organizing Committee Member",
      organization: "TSYP13",
      description: "Participated in the organisation of the Tunisian Student and Young Professional Congress TSYP13.",
      type: "Competition",
      period: "2025",
      href: "https://www.facebook.com/ieee.tsyp?locale=fr_FR",
      website: "https://tsyp.ieee.tn/"
    }
  ];

  const [choiceModal, setChoiceModal] = useState<{ visible: boolean; title?: string; website?: string; facebook?: string }>({ visible: false });

  const openChoiceModal = (exp: any) => {
    setChoiceModal({ visible: true, title: exp.title, website: exp.website, facebook: exp.href });
  };

  const closeChoiceModal = () => setChoiceModal({ visible: false });

  const openExternal = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
    closeChoiceModal();
  };

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
              {experiences.map((experience, index) => {
                const card = (
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
                );

                // Special handling for TSYP13: open modal to choose Official Website or Facebook
                if (experience.id === 'participant-tsyp13') {
                  return (
                    <button
                      key={experience.id}
                      type="button"
                      onClick={() => openChoiceModal(experience)}
                      className="block text-left w-full"
                    >
                      {card}
                    </button>
                  );
                }

                // default: external link
                return (
                  <a
                    key={experience.id}
                    href={experience.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {card}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      {choiceModal.visible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeChoiceModal}
              aria-label="Close"
              className="absolute top-3 right-3 p-1 rounded hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-lg font-semibold mb-3">{choiceModal.title}</h3>
            <p className="text-sm text-portfolio-text-muted mb-4">Where would you like to go?</p>

            <div className="flex gap-3 justify-end">
              <button
                onClick={() => openExternal(choiceModal.website)}
                className="portfolio-button-outline text-sm py-2 px-4"
              >
                Official Website
              </button>
              <button
                onClick={() => openExternal(choiceModal.facebook)}
                className="portfolio-button text-sm py-2 px-4"
              >
                Facebook Page
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


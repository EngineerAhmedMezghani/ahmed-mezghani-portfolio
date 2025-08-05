import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section pt-32">
      <div className="portfolio-container">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Removed profile image */}

          <div className="space-y-10">
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold text-portfolio-accent antialiased subpixel-antialiased"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              About Me 
            </motion.h2>
            <motion.div
              className="space-y-4 text-base md:text-lg text-portfolio-text-muted leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p>
                I'm a{' '}
                <span className="font-semibold text-portfolio-accent">
                  Computer Science student at ENIS Sfax
                </span>
                , passionate about mobile development, computer vision, and full-stack
                web technologies.
              </p>
              <p>
                I’ve developed Android apps in{' '}
                <span className="font-semibold text-portfolio-accent">Java</span>,
                created intelligent systems using{' '}
                <span className="font-semibold text-portfolio-accent">
                  Python, YOLO, and Deep Learning
                </span>
                , and built interactive websites with{' '}
                <span className="font-semibold text-portfolio-accent">
                  HTML, CSS, JS, and PHP
                </span>
                .
              </p>
              <p>
                J'aime créer des solutions innovantes qui résolvent des problèmes
                concrets. Mon objectif est de contribuer à des projets ambitieux qui
                ont un impact positif sur la société.
              </p>
              <p>
                Ce portfolio est construit avec{' '}
                <span className="font-semibold text-portfolio-accent">React</span> et
                stylisé avec{' '}
                <span className="font-semibold text-portfolio-accent">
                  Tailwind CSS
                </span>
                . Il intègre un{' '}
                <span className="font-semibold text-portfolio-accent">
                  chatbot alimenté par l'IA
                </span>{' '}
                pour interagir en temps réel et un{' '}
                <span className="font-semibold text-portfolio-accent">
                  système d'envoi automatique d'e-mails
                </span>{' '}
                pour une communication fluide.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
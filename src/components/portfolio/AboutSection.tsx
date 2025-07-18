import { motion } from 'framer-motion';
// Removed the import statement for ahmedPhoto as it will be referenced directly from public folder
// import ahmedPhoto from '@/images/profile.jpg'; // This line is removed

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
          <div className="flex flex-col items-center gap-8">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-portfolio-accent to-primary-glow p-1">
                <img
                  // Changed src to directly reference the image from the public folder
                  src="/images/profile.jpg"
                  alt="Photo de profil d'Ahmed Mezghani, étudiant en informatique"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent to-primary-glow rounded-full blur opacity-20 animate-pulse-glow"></div>
            </motion.div>

            {/* Changed space-y-6 to space-y-8 for more margin */}
            <div className="space-y-10">
              <motion.h2
                // Removed portfolio-gradient-text, added text-portfolio-accent, antialiased, subpixel-antialiased, and changed to font-extrabold
                className="text-4xl md:text-5xl font-extrabold text-portfolio-accent antialiased subpixel-antialiased"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                À Propos de Moi
              </motion.h2>

              <motion.div
                /* Changed text-lg md:text-xl to text-base md:text-lg for smaller text */
                className="space-y-4 text-base md:text-lg text-portfolio-text-muted leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p>
                  I'm a <span className="font-semibold text-portfolio-accent">Computer Science student at ENIS Sfax</span>, passionate about mobile development, computer vision, and full-stack web technologies.
                </p>
                <p>
                  I’ve developed Android apps in <span className="font-semibold text-portfolio-accent">Java</span>, created intelligent systems using <span className="font-semibold text-portfolio-accent">Python, YOLO, and Deep Learning</span>, and built interactive websites with <span className="font-semibold text-portfolio-accent">HTML, CSS, JS, and PHP</span>.
                </p>
                <p>
                  J'aime créer des solutions innovantes qui résolvent des problèmes concrets. Mon objectif est de
                  contribuer à des projets ambitieux qui ont un impact positif sur la société.
                </p>
                <p>
                  Ce portfolio est construit avec <span className="font-semibold text-portfolio-accent">React</span> et stylisé avec <span className="font-semibold text-portfolio-accent">Tailwind CSS</span>. Il intègre un <span className="font-semibold text-portfolio-accent">chatbot alimenté par l'IA</span> pour interagir en temps réel et un <span className="font-semibold text-portfolio-accent">système d'envoi automatique d'e-mails</span> pour une communication fluide.
                </p>


              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
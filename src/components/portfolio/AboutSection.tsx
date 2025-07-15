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
                  src="/api/placeholder/200/200" 
                  alt="Ahmed Mezghani" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-portfolio-accent to-primary-glow rounded-full blur opacity-20 animate-pulse-glow"></div>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold portfolio-gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              
              <motion.div 
                className="space-y-4 text-lg md:text-xl text-portfolio-text-muted leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p>
                  I am a Computer Science student at <span className="font-semibold text-portfolio-accent">ENIS Sfax</span>,
                </p>
                <p>
                  passionately interested in <span className="font-semibold text-portfolio-accent">software development</span> and <span className="font-semibold text-portfolio-accent">artificial intelligence</span>.
                </p>
                <p>
                  I enjoy building impactful software solutions and exploring the latest advancements in AI.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
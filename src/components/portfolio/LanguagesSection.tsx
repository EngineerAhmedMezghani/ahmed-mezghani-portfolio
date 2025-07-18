import { motion } from 'framer-motion';
import { Globe, Star } from 'lucide-react';

export default function LanguagesSection() {
  const languages = [
    {
      name: "Arabic",
      level: "Native",
      proficiency: 100,
      flag: "🇹🇳",
      description: "Native speaker with full fluency in reading, writing, and speaking."
    },
    {
      name: "French",
      level: "Fluent",
      proficiency: 90,
      flag: "🇫🇷",
      description: "Fluent in French with strong academic and professional communication skills."
    },
    {
      name: "English",
      level: "Advanced",
      proficiency: 85,
      flag: "🇺🇸",
      description: "Advanced English proficiency with excellent technical communication abilities."
    }
  ];

  return (
    <section id="languages" className="portfolio-section">
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
            Languages
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="portfolio-card text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="text-4xl mb-2">{language.flag}</div>
                        <div className="absolute -top-2 -right-2 p-1 bg-portfolio-accent/10 rounded-full text-portfolio-accent">
                          <Globe className="h-3 w-3" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-text mb-1">
                        {language.name}
                      </h3>
                      <p className="text-portfolio-accent font-medium mb-2">
                        {language.level}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-center">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(language.proficiency / 20)
                                  ? 'text-portfolio-accent fill-current'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-portfolio-accent to-primary-glow h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${language.proficiency}%` }}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>

                    <p className="text-sm text-portfolio-text-muted leading-relaxed">
                      {language.description}
                    </p>
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
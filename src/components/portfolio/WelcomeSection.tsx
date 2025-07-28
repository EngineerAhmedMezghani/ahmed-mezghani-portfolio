import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] bg-gradient-to-br from-portfolio-accent/10 via-background to-background overflow-hidden p-6 gap-16"
    >
      {/* Text on the left */}
      <motion.div
        className="max-w-xl text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-portfolio-accent antialiased subpixel-antialiased"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Welcome
        </motion.h1>

        <p className="text-base md:text-lg leading-relaxed text-portfolio-text-muted dark:text-white">
          I’m{" "}
          <span className="font-semibold text-portfolio-accent">
            Ahmed Mezghani
          </span>
          , a computer science student passionate about mobile apps, computer vision, and full-stack web development.
        </p>
      </motion.div>

      {/* Bigger image on the right with blue shadow */}
      <motion.div
        className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-portfolio-accent to-primary-glow p-1 self-center mt-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ boxShadow: "8px 8px 15px rgba(59, 130, 246, 0.6)" }}
      >
        <img
          src="/images/AhmedMezghani.jpg"
          alt="Photo de profil d'Ahmed Mezghani, étudiant en informatique"
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>


    </section>
  );
}

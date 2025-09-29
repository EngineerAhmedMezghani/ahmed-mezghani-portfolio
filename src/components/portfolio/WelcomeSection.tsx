import { motion } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});

export default function WelcomeSection() {
  return (
    <section
      id="welcome"
      className="flex flex-col md:flex-row items-center justify-center min-h-[75vh] bg-gradient-to-br from-portfolio-accent/10 via-background to-background overflow-hidden px-6 md:px-12 py-16 gap-12 md:gap-20"
    >
      {/* Text on the left */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        variants={fadeInUp(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-portfolio-accent"
          variants={fadeInUp(0.5)}
        >
          Hi, I’m Ahmed Mezghani 👋
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg leading-relaxed text-portfolio-text-muted dark:text-white"
          variants={fadeInUp(0.7)}
        >
          A <span className="font-semibold text-portfolio-accent">Computer Engineering student </span> 
          passionate about <span className="underline decoration-portfolio-accent/50">computer vision</span>,{" "}
          <span className="underline decoration-portfolio-accent/50">full-stack web development</span>, and{" "}
          <span className="underline decoration-portfolio-accent/50">Agile methodologies (Scrum)</span>.
        </motion.p>
      </motion.div>

      {/* Profile image */}
      <motion.div
        className="relative group w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        {/* Glow effect behind the image */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-portfolio-accent to-primary-glow blur-3xl opacity-40 group-hover:opacity-60 transition duration-500" />

        {/* Image */}
        <img
          src="/images/AhmedMezghani.jpg"
          alt="Portrait of Ahmed Mezghani"
          className="relative w-full h-full rounded-full object-cover border-4 border-background"
        />
      </motion.div>
    </section>
  );
}

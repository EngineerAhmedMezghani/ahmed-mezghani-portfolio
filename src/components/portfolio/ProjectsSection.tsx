import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Android App for Selling Computer Hardware",
      tech: "Java, Android Studio",
      description: "Developed a full-featured mobile application for Browse and purchasing computer hardware. Implemented product catalog, user authentication, and order management. Enhanced user experience with intuitive UI and secure transactions.",
      image: "/api/placeholder/400/300",
      category: "Mobile Development"
    },
    {
      title: "Football Match Analysis with Computer Vision",
      tech: "Python, YOLO, Machine Learning",
      description: "Built a system to analyze football matches using computer vision techniques. Utilized YOLO for object detection and machine learning models to extract and interpret match statistics, providing valuable insights for coaches and analysts.",
      image: "/api/placeholder/400/300",
      category: "Computer Vision"
    },
    {
      title: "Event Reservation System",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      description: "Designed and implemented a web-based event reservation platform with a responsive front-end and robust back-end. Enabled users to browse events, reserve seats, and manage bookings efficiently.",
      image: "/api/placeholder/400/300",
      category: "Web Development"
    },
    {
      title: "Personal Portfolio Website",
      tech: "HTML, CSS, JavaScript",
      description: "Developed a personal portfolio website to showcase my projects and skills. Focused on responsive design and user-friendly navigation to enhance the overall user experience.",
      image: "/api/placeholder/400/300",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="portfolio-section">
      <div className="portfolio-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold portfolio-gradient-text text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="portfolio-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <motion.button
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="h-4 w-4 text-white" />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="h-4 w-4 text-white" />
                      </motion.button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-portfolio-accent/90 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-portfolio-accent">
                    <strong>Tech Stack:</strong> {project.tech}
                  </p>
                  <p className="text-portfolio-text-muted leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
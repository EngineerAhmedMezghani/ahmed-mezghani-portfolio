import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Android App - Computer Hardware Sales",
      tech: ["Java", "Android Studio", "SQLite", "Material Design"],
      description: "Complete mobile application for buying and selling computer hardware. Implementation of a product catalog, secure authentication system, order and shopping cart management. Intuitive user interface with smooth animations and responsive design.",
      objectives: "Create an accessible mobile platform to democratize computer hardware purchasing",
      challenges: "Performance optimization for low-end devices, offline/online data synchronization",
      features: ["Filterable product catalog", "Shopping cart system", "Secure authentication", "Push notifications", "Offline mode"],
      image: "/images/android-app.png",
      category: "Mobile Development",
      github: "https://github.com/EngineerAhmedMezghani/MyApplication8final/tree/main",
      demo: null
    },
    {
      title: "Football Match Analysis with Computer Vision",
      tech: ["Python", "YOLO", "OpenCV", "TensorFlow", "NumPy"],
      description: "Advanced football match analysis system using computer vision techniques. Player detection and tracking with YOLO, automatic extraction of game statistics, and report generation for coaches and sports analysts.",
      objectives: "Provide accurate and automated insights for tactical sports analysis",
      challenges: "Accurate detection of moving players, handling occlusions, real-time processing",
      features: ["Player detection", "Trajectory tracking", "Statistics calculation", "Position heatmaps", "Report export"],
      image: "images/computer-vision.png",
      category: "AI - Computer Vision",
      github: "https://github.com/EngineerAhmedMezghani/computer-vision-project-2",
      // demo: "https://football-analysis-demo.com"
    },
    {
      title: "Event Booking System",
      tech: ["HTML5", "CSS3", "JavaScript ES6", "PHP", "MySQL"],
      description: "Complete web platform for event booking with responsive interface and robust backend. User management, real-time seat reservation, integrated payment system, and admin dashboard for event management.",
      objectives: "Simplify event booking with an optimal user experience",
      challenges: "Handling booking concurrency, secure payment integration",
      features: ["Interactive calendar", "Real-time booking", "Secure payment", "Admin dashboard", "Email notifications"],
      image: "images/event-reservation.png",
      category: "Web Development",
      github: "https://github.com/ahmed-mezghani/event-reservation",
      // demo: "https://event-reservation-demo.com"
    },
    {
      title: "Interactive Personal Portfolio",
      tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "AI Chatbot", "Email Automation"],
      description: "Modern personal portfolio website with smooth animations and responsive design. Optimized for performance and accessibility, integrating a dark/light theme system and engaging micro-interactions.",
      objectives: "Create a professional showcase reflecting my technical and creative skills",
      challenges: "Performance optimization, full accessibility, consistent multi-device design",
      features: ["Responsive design", "Dark/light mode", "CSS animations", "SEO optimized", "Performance optimized"],
      image: "/images/Portfolio.png",
      category: "Full-Stack Web Development",
      github: "https://github.com/ahmed-mezghani/portfolio",
      demo: "https://ahmed-mezghani.dev"
    },
    {
      title: "VisioTrack – Real-Time Capacity Monitoring",
      tech: ["Python", "YOLOv8", "DeepSORT", "FastAPI", "React.js", "PostgreSQL", "Plotly.js", "Tailwind CSS"],
      description: "VisioTrack is an intelligent computer vision-based solution to monitor human traffic in real-time within critical areas of a store. It combines AI, video processing, and data visualization to improve safety, flow, and business performance.",
      objectives: "Ensure compliance with safety standards, optimize customer flow, and enhance shopping experience.",
      challenges: "Accurate counting in crowded environments, reliable multi-object tracking, real-time processing, and clear visualization.",
      features: [
        "Intelligent counting with YOLOv8 + DeepSORT",
        "Automatic bottleneck detection",
        "Interactive dashboard (heatmaps, peaks, real-time alerts)",
        "Manual ROI zone definition with capacity calculation",
        "Alert system (email, SMS, visual)"
      ],
      image: "/images/visiotrack-dashboard.png",
      category: "AI - Computer Vision",
      github: "https://github.com/ahmed-mezghani/visiotrack",
      demo: null
    },
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
            className="text-4xl md:text-5xl font-extrabold text-portfolio-accent text-center mb-12 antialiased subpixel-antialiased"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="portfolio-card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View source code on GitHub"
                        >
                          <Github className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="View live demo"
                        >
                          <ExternalLink className="h-4 w-4 text-white" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-3 py-1 bg-portfolio-accent/90 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-portfolio-text group-hover:text-portfolio-accent transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-portfolio-accent mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-portfolio-text-muted leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="space-y-2">
                      <div>
                        <span className="text-xs font-semibold text-portfolio-accent">Objective:</span>
                        <p className="text-xs text-portfolio-text-muted mt-1">{project.objectives}</p>
                      </div>

                      <div>
                        <span className="text-xs font-semibold text-portfolio-accent">Technical Challenges:</span>
                        <p className="text-xs text-portfolio-text-muted mt-1">{project.challenges}</p>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-portfolio-accent">Key Features:</span>
                      <ul className="mt-1 space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-portfolio-text-muted flex items-center">
                            <span className="w-1 h-1 bg-portfolio-accent rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-3 pt-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-button-outline text-sm py-2 px-4"
                          aria-label="View source code"
                        >
                          <Github className="h-4 w-4 mr-2 inline" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="portfolio-button text-sm py-2 px-4"
                          aria-label="View demo"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 inline" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

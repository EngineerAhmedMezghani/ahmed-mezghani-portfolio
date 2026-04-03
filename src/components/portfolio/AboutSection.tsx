// import { motion } from 'framer-motion';

// export default function AboutSection() {
//   return (
//     <section id="about" className="portfolio-section pt-32">
//       <div className="portfolio-container">
//         <motion.div
//           className="text-center max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <div className="space-y-10">
//             <motion.h2
//               className="text-4xl md:text-5xl font-extrabold text-portfolio-accent antialiased subpixel-antialiased"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               viewport={{ once: true }}
//             >
//               About Me
//             </motion.h2>

//             <motion.div
//               className="space-y-4 text-base md:text-lg text-portfolio-text-muted leading-relaxed"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <p>
//                 I'm a{' '}
//                 <span className="font-semibold text-portfolio-accent">
//                   Computer Engineering student at ENIS Sfax
//                 </span>
//                 , passionate about computer vision, full-stack web development, and Agile methodologies (Scrum). I enjoy building innovative solutions that combine AI, web technologies, and practical applications.
//               </p>
//               <p>
//                 During my studies and projects, I have:
//               </p>
//               <ul className="list-disc list-inside space-y-2">
//                 <li>
//                   Developed Android applications using{' '}
//                   <span className="font-semibold text-portfolio-accent">Java</span>.
//                 </li>
//                 <li>
//                   Built intelligent computer vision systems with{' '}
//                   <span className="font-semibold text-portfolio-accent">Python, YOLOv8, and Deep Learning</span>.
//                 </li>
//                 <li>
//                   Created interactive full-stack web applications with{' '}
//                   <span className="font-semibold text-portfolio-accent">
//                     HTML, CSS, JavaScript, PHP, and the MERN stack
//                   </span>.
//                 </li>
//                 <li>
//                   Applied Agile and Scrum practices to organize projects efficiently, manage sprints, and ensure delivery.
//                 </li>
//               </ul>
//               <p>
//                 This portfolio is built with{' '}
//                 <span className="font-semibold text-portfolio-accent">React</span> and styled using{' '}
//                 <span className="font-semibold text-portfolio-accent">Tailwind CSS</span>. It features an AI-powered chatbot for real-time interaction and an automated email system for smooth communication.
//               </p>
//               <p>
//                 I hold certifications in Python Data Analysis, Fullstack Web Development, and Scrum (fundamentals and DevOps), which reflect my technical and project management skills.
//               </p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="portfolio-section pt-32">
      <div className="portfolio-container">
        <motion.div
          className="text-center space-y-5 text-base md:text-lg text-portfolio-text-muted leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <span className="font-semibold text-portfolio-accent">
              Computer Engineering student at ENIS Sfax
            </span>{' '}
            specializing in AI-powered software solutions. I build{' '}
            <span className="font-semibold text-portfolio-accent">
              computer vision systems
            </span>{' '}
            (YOLOv8, DeepSORT, ViT),{' '}
            <span className="font-semibold text-portfolio-accent">
              full-stack web apps
            </span>{' '}
            (React, FastAPI), and{' '}
            <span className="font-semibold text-portfolio-accent">
              MLOps pipelines
            </span>{' '}
            (Docker, CI/CD, MLflow).
          </p>

          <p>
            Recently shipped a real-time retail analytics system at{' '}
            <span className="font-semibold text-portfolio-accent">VisShop AI</span> with 
            96% accuracy. Certified in{' '}
            <span className="font-semibold text-portfolio-accent">MLOps</span>,{' '}
            <span className="font-semibold text-portfolio-accent">Python Data Analysis</span>, and{' '}
            <span className="font-semibold text-portfolio-accent">Scrum</span>.
          </p>

          <p>
            This portfolio is built with{' '}
            <span className="font-semibold text-portfolio-accent">React</span> &{' '}
            <span className="font-semibold text-portfolio-accent">Tailwind CSS</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
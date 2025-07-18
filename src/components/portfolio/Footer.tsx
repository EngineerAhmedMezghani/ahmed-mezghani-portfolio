import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-portfolio-card border-t border-border/50 py-8">
      <div className="portfolio-container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 text-portfolio-text-muted">
            <span>&copy; {currentYear} Ahmed Mezghani. All rights reserved.</span>
            
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
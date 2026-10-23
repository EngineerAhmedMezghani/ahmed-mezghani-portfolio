import { motion } from 'framer-motion';
import {
  ExternalLink,
  BrainCircuit,
  Database,
  ChartNoAxesCombined,
  Eye,
  Users,
  Layers3,
  Workflow,
} from 'lucide-react';

const internships = [
  {
    role: 'R&D Deep Learning Intern',
    company: 'Cybiris Inc.',
    period: 'Summer 2026',
    category: 'Deep Learning & Model Evaluation',
    summary:
      'Working on lightweight human pose estimation, exploring model training, synthetic-data generation, and evaluation strategies.',
    contributions: [
      {
        icon: BrainCircuit,
        title: 'Lightweight Pose Estimation',
        description:
          'Developing a MobileNetV2-based model to predict 14 human keypoints from 256 × 256 RGB images.',
      },
      {
        icon: Database,
        title: 'Synthetic Data Generation',
        description:
          'Investigating real-to-synthetic dataset ratios and a pose-to-image pipeline using a Pix2Pix-like U-Net and PatchGAN.',
      },
      {
        icon: ChartNoAxesCombined,
        title: 'Experimental Evaluation',
        description:
          'Evaluating keypoint predictions using PCK metrics and experimenting with training strategies and loss functions.',
      },
    ],
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'MobileNetV2',
      'OpenCV',
      'U-Net',
      'NumPy',
    ],
  },
  {
    role: 'Computer Vision Intern',
    company: 'VisShop AI',
    period: 'Summer 2025',
    category: 'Computer Vision & Software Engineering',
    summary:
      'Contributed to VisioTrack, a retail video analytics system combining person detection, multi-object tracking, zone analytics, and an interactive dashboard.',
    contributions: [
      {
        icon: Eye,
        title: 'Person Detection',
        description:
          'Integrated YOLOv8 for detecting people in video streams.',
      },
      {
        icon: Users,
        title: 'Multi-Object Tracking',
        description:
          'Used DeepSORT to maintain object identities across frames and support zone-based analytics.',
      },
      {
        icon: Layers3,
        title: 'Classification',
        description:
          'Integrated ResNet-18 to help distinguish customers from employees.',
      },
      {
        icon: Workflow,
        title: 'Full-Stack Integration',
        description:
          'Connected the inference pipeline to a FastAPI backend and a React dashboard for monitoring and analytics.',
      },
    ],
    technologies: [
      'Python',
      'YOLOv8',
      'DeepSORT',
      'ResNet-18',
      'OpenCV',
      'FastAPI',
      'React',
    ],
    url: 'https://www.visshopai.com/',
  },
];

export default function InternshipSection() {
  return (
    <section
      id="internships"
      className="portfolio-section bg-gradient-to-b from-portfolio-bg to-muted/20"
    >
      <div className="portfolio-container">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-portfolio-accent mb-4">
            Professional Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-text mb-5">
            Internship Experience
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-portfolio-text-muted">
            Applying engineering principles to practical problems through
            model development, experimentation, and end-to-end software
            integration.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {internships.map((internship, index) => (
            <motion.article
              key={internship.company}
              className="portfolio-card p-6 md:p-9"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-medium text-portfolio-accent mb-2">
                    {internship.category}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-portfolio-text">
                    {internship.role}
                  </h3>

                  <p className="mt-2 text-lg text-portfolio-text-muted">
                    {internship.url ? (
                      <a
                        href={internship.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-portfolio-accent hover:text-portfolio-accent-hover transition-colors"
                      >
                        {internship.company}
                        <ExternalLink
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <span className="font-semibold text-portfolio-accent">
                        {internship.company}
                      </span>
                    )}
                  </p>
                </div>

                <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-portfolio-accent/20 bg-portfolio-accent/5 px-4 py-2 text-sm font-medium text-portfolio-accent">
                  {internship.period}
                </span>
              </div>

              <p className="text-base md:text-lg leading-relaxed text-portfolio-text-muted mb-8">
                {internship.summary}
              </p>

              <div
                className={`grid grid-cols-1 ${internship.contributions.length === 3
                  ? 'md:grid-cols-3'
                  : 'md:grid-cols-2'
                  } gap-4 mb-8`}
              >
                {internship.contributions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-xl border border-portfolio-accent/10 bg-portfolio-accent/[0.03] p-5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="rounded-lg bg-portfolio-accent/10 p-2 text-portfolio-accent">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <h4 className="font-semibold text-portfolio-text">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-sm leading-relaxed text-portfolio-text-muted">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-portfolio-accent/10 pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-portfolio-text-muted mb-3">
                  Technologies & Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-portfolio-accent/15 px-3 py-1.5 text-sm text-portfolio-text-muted"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import projects from '../data/projects';

const filters = ['All', 'Frontend', 'Full-Stack'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Portfolio</p>
          <h2 className="section-heading text-gray-900 dark:text-white">Featured <span className="text-gradient">Projects</span></h2>
          <p className="section-subheading">An showcase of my best work, spanning across frontend architecture and full-stack development.</p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 relative overflow-hidden group ${
                active === f
                  ? 'text-white'
                  : 'bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm'
              }`}
            >
              {active === f && (
                <motion.div 
                  layoutId="active-filter"
                  className="absolute inset-0 bg-violet-600"
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                whileHover={{ y: -12 }}
                className="card group overflow-hidden flex flex-col h-full bg-white dark:bg-gray-900 shadow-2xl shadow-black/5"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-xl shadow-black/20"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      target="_blank" rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-xl shadow-violet-500/30"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="badge shadow-lg shadow-black/10">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-[11px] font-black uppercase tracking-tighter bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg group-hover:bg-violet-500/10 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-500">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-all duration-300"
                      >
                        <FiGithub size={18} /> Codebase
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300 transition-all duration-300"
                      >
                        <FiExternalLink size={18} /> Live Experience
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;

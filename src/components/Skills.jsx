import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGithub, SiDocker, SiFigma,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import skills, { skillCategories } from '../data/skills';

const iconMap = {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase,
  SiGithub, SiDocker, SiFigma, VscVscode,
};

const categoryColors = {
  Frontend: 'from-violet-500 to-indigo-500',
  Backend:  'from-emerald-500 to-teal-500',
  Tools:    'from-orange-500 to-amber-500',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Skills = () => {
  const [active, setActive] = useState('Frontend');
  const filtered = skills.filter(s => s.category.toLowerCase() === active.toLowerCase());

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-950">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] rounded-full z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Expertise</p>
          <h2 className="section-heading text-gray-900 dark:text-white">Professional <span className="text-gradient">Skills</span></h2>
          <p className="section-subheading">A comprehensive overview of my technical stack and proficiency in modern development tools.</p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {skillCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-10 py-4 rounded-2xl text-sm font-black transition-all duration-500 relative overflow-hidden group tracking-widest ${
                active === cat
                  ? 'text-white'
                  : 'bg-white dark:bg-gray-900 text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 shadow-sm border border-gray-100 dark:border-gray-800'
              }`}
            >
              <AnimatePresence>
                {active === cat && (
                  <motion.div 
                    layoutId="active-tab"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-violet-600 shadow-xl shadow-violet-500/20"
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 uppercase">{cat}</span>
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((skill, i) => {
              const Icon = iconMap[skill.icon];
              const gradient = categoryColors[skill.category];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="card p-8 flex flex-col gap-8 group cursor-default h-full"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl shadow-black/10 transition-transform duration-700 group-hover:rotate-[15deg]`}>
                      {Icon && <Icon className="text-white" size={32} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-gray-900 dark:text-white text-lg mb-2 tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{skill.name}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Mastery</span>
                        <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                        <span className="text-xs font-black text-violet-600 dark:text-violet-400">{skill.level}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden p-[2px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: 0.1, ease: "circOut" }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full shadow-[0_0_10px_rgba(124,58,237,0.3)]`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;

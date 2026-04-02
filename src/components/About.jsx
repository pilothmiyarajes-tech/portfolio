import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiAward } from 'react-icons/fi';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '25+', label: 'Projects Done' },
  { value: '10+', label: 'Happy Clients' },
  { value: '5+', label: 'Open Source' },
];

const timeline = [
  {
    year: '2023 – Present',
    title: 'Full-Stack Developer',
    org: 'CreativeDigital Agency',
    desc: 'Leading development of SaaS products with React, Node.js, and cloud deployments on AWS.',
  },
  {
    year: '2022 – 2023',
    title: 'Junior Frontend Developer',
    org: 'TechWave Solutions',
    desc: 'Built responsive React applications, collaborated in Agile sprints, and optimized performance by 40%.',
  },
  {
    year: '2018 – 2022',
    title: 'B.Sc. in Computer Science',
    org: 'University of Technology',
    desc: 'Focused on software engineering and web technologies. Graduated with honors.',
  },
];

const interests = [
  '💻 Coding', '🎨 UI Design', '🚀 Open Source', '🎮 Gaming', 
  '📷 Photo', '✈️ Travel', '🎧 Music', '🤖 AI'
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Discovery</p>
          <h2 className="section-heading text-gray-900 dark:text-white">About <span className="text-gradient">Me</span></h2>
          <p className="section-subheading">A journey of passion, logic, and continuous learning in the world of software engineering.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* ── Left Column: Bio & Stats ── */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
                Passionately building the <span className="text-violet-600 dark:text-violet-400 underline decoration-violet-500/30 underline-offset-8">Future of Web</span>.
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm <strong className="text-gray-900 dark:text-white">R. Piloth Miya</strong>, a dedicated developer who specializes in creating
                interfaces that are not only functional but emotionally resonant. I believe in the power
                of clean code and pixel-perfect design to solve complex human problems.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span key={interest} className="badge shadow-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, borderColor: 'rgba(124, 58, 237, 0.4)' }}
                  className="p-6 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all duration-300"
                >
                  <p className="text-4xl font-black text-violet-600 dark:text-violet-400 mb-1">{stat.value}</p>
                  <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right Column: Timeline ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-4">
              <FiBookOpen className="text-violet-600" />
              Education & Experience
            </h3>
            
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-10 pb-12 last:pb-0 group"
                >
                  {/* Vertical Line */}
                  <div className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-gray-100 dark:bg-gray-800 group-last:bg-transparent" />
                  {/* Dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white dark:border-gray-950 bg-violet-600 z-10 shadow-lg shadow-violet-500/20" />
                  
                  <div className="card p-8 hover:border-violet-500/30">
                    <span className="text-violet-600 dark:text-violet-400 font-black text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-bold mb-3">{item.org}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;

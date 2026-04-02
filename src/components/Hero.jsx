import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter, FiBriefcase } from 'react-icons/fi';
import profileImg from '../assets/profile.png';

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com',    label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com',   label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com',    label: 'Twitter'  },
];

const roles = ['Full-Stack Developer', 'React Specialist', 'UI/UX Enthusiast', 'Open-Source Contributor'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(i => (i + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const nameLetters = "R. Piloth Miya".split("");

  const containerVariants = {
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (d = 0) => ({ opacity: 1, y: 0, transition: { delay: d, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } }),
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Premium background mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">

          {/* ── Text Column ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              custom={0.1} variants={fadeUp} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm font-bold tracking-wider uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Portfolio 2026
            </motion.div>

            <motion.h1
              variants={containerVariants} initial="hidden" animate="visible"
              className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 text-gray-900 dark:text-white tracking-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient inline-flex">
                {nameLetters.map((char, i) => (
                  <motion.span key={i} variants={letterVariants} className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              custom={0.4} variants={fadeUp} initial="hidden" animate="visible"
              className="h-10 mb-6 overflow-hidden"
            >
              <motion.p
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-semibold text-violet-600 dark:text-violet-400"
              >
                {roles[roleIndex]}
              </motion.p>
            </motion.div>

            <motion.p
              custom={0.5} variants={fadeUp} initial="hidden" animate="visible"
              className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              I craft high-performance, visually immersive web experiences. 
              Specializing in <span className="text-gray-900 dark:text-white font-bold">React</span> and <span className="text-gray-900 dark:text-white font-bold">Modern UI Design</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={0.6} variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-12"
            >
              <a href="/cv.pdf" download className="btn-primary">
                <FiDownload size={20} />
                Download CV
              </a>
              <a href="#contact" className="btn-outline">
                <FiMail size={20} />
                Let's Talk
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              custom={0.7} variants={fadeUp} initial="hidden" animate="visible"
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -4, backgroundColor: 'rgba(124, 58, 237, 0.1)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-violet-500/50 hover:text-violet-600 transition-all duration-300 shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Photo Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex-shrink-0 relative group"
          >
            {/* Animated Rings */}
            <div className="absolute inset-0 z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-20%] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] border border-violet-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-[-15%] rounded-[70%_30%_30%_70%/70%_70%_30%_30%] border border-indigo-500/20"
              />
            </div>

            <div className="relative z-10">
              {/* Main Image with 3D Effect */}
              <motion.div
                whileHover={{ rotateY: 15, rotateX: -10, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative overflow-hidden rounded-3xl w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] shadow-2xl shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow duration-500"
              >
                <img
                  src={profileImg}
                  alt="R. Piloth Miya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 -right-6 lg:-right-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/20 dark:border-gray-800 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-500/30">
                  <FiBriefcase size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 font-bold">Experience</p>
                  <p className="text-sm font-black text-gray-900 dark:text-white">3+ Years</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

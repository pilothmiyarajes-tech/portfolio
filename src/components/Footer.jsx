import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com',   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://linkedin.com',  label: 'LinkedIn' },
  { icon: FiTwitter,  href: 'https://twitter.com',   label: 'Twitter'  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight tracking-tight">
              R. Piloth <span className="text-violet-600">Miya</span>
            </h2>
            <p className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
              Digital Architect & Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -5, color: '#7c3aed' }}
                className="text-gray-400 dark:text-gray-500 hover:text-violet-600 transition-all duration-300"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(124, 58, 237, 0.1)' }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 rounded-2xl flex items-center justify-center border border-gray-100 dark:border-gray-800 text-violet-600 dark:text-violet-400 shadow-sm transition-all duration-300 group"
          >
            <FiArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-50 dark:border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} R. Piloth Miya. Built with Passion.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-violet-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiCheckCircle } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMail,    label: 'Email',    value: 'pilothmiya@gmail.com', link: 'mailto:pilothmiya@gmail.com' },
  { icon: FiMapPin,  label: 'Location', value: 'India 🇮🇳',            link: '#' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900/50">
      {/* Decorative background blur */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-violet-600 dark:text-violet-400 text-sm font-black uppercase tracking-[0.2em] mb-4">Contact</p>
          <h2 className="section-heading text-gray-900 dark:text-white">Get In <span className="text-gradient">Touch</span></h2>
          <p className="section-subheading">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* ── Left Column: Contact Info ── */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6">Let's build something <br /><span className="text-violet-600">extraordinary</span> together.</h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
                Whether you have a specific project in mind or just want to say hi, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group p-4 rounded-3xl hover:bg-white dark:hover:bg-gray-900 transition-colors duration-300 border border-transparent hover:border-violet-500/20 shadow-sm hover:shadow-xl hover:shadow-black/5"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 flex items-center justify-center text-violet-600 shadow-lg shadow-black/5 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors uppercase tracking-tight">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="card p-10 lg:p-12 relative overflow-hidden"
          >
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20"
                  >
                    <FiCheckCircle size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">Message Received!</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-bold mb-8">Thanks for reaching out. I'll get back to you shortly.</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-primary"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Name</label>
                  <input
                    type="text" name="name" required
                    value={formData.name} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 font-bold"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Email</label>
                  <input
                    type="email" name="email" required
                    value={formData.email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 font-bold"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Subject</label>
                <input
                  type="text" name="subject" required
                  value={formData.subject} onChange={handleChange}
                  placeholder="How can I help?"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 font-bold"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-1">Message</label>
                <textarea
                  name="message" required rows="5"
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 focus:border-violet-500 dark:focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/10 transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 font-bold resize-none"
                ></textarea>
              </div>
              <button
                type="submit" disabled={isLoading}
                className="w-full btn-primary justify-center group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Dispatching...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    Transmit Message
                    <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

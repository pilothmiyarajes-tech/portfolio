import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MouseAura = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Motion values for smooth tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for lag effect
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        left: smoothX,
        top: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
    >
      <div 
        className="w-[800px] h-[800px] rounded-full opacity-[0.15] dark:opacity-[0.25] blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, rgba(79, 70, 229, 0.1) 40%, transparent 70%)'
        }}
      />
    </motion.div>
  );
};

export default MouseAura;

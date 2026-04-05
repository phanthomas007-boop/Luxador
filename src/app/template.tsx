'use client';

import { motion } from 'framer-motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        className="page-wipe-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [1, 1, 0], transformOrigin: ['left', 'right', 'right'] }}
        transition={{ duration: 1.0, times: [0, 0.4, 1], ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: '50%',
          left: 0,
          right: 0,
          height: '2px',
          background: '#8B6F47', /* Kupfer-Akzent aus DESIGN.md */
          zIndex: 9999,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}

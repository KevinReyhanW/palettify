'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import './LeftSidebar.css';

export default function LeftSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className={`left-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            className="sidebar-content"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Content will be added later */}
            <div className="placeholder-content">
              <h2>Sidebar Content</h2>
              <p>Content will be added here later...</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button 
        className="left-sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close left sidebar' : 'Open left sidebar'}
      >
        {isOpen ? <ChevronLeftIcon className="w-6 h-6" /> : <ChevronRightIcon className="w-6 h-6" />}
      </button>
    </>
  );
}

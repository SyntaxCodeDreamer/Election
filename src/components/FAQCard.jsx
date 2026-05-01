import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQCard Component
 * 
 * An accordion-style card for displaying frequently asked questions.
 * 
 * @param {Object} props - Component props.
 * @param {string} props.q - The question text.
 * @param {string} props.a - The answer text.
 * @param {number} props.index - Index for staggered animation (optional).
 */
export default function FAQCard({ q, a, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`glass-card rounded-[2rem] overflow-hidden transition-all duration-500 ${isOpen ? 'border-primary/30 ring-4 ring-primary/5' : ''}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-7 text-left group"
      >
        <span className="text-sm font-black uppercase tracking-tight text-base-content/80 group-hover:text-primary transition-colors">
          {q}
        </span>
        <div className={`w-8 h-8 rounded-xl bg-base-300 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-8 pb-8">
              <div className="pt-4 border-t border-white/5">
                <p className="text-[13px] font-medium text-base-content/60 leading-relaxed">
                  {a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

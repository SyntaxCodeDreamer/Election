import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Checklist Component
 * 
 * Interactive list of items that users can check off. Progress is saved to localStorage.
 * 
 * @param {Object} props - Component props.
 * @param {Object[]} props.items - Array of checklist items {id, label}.
 */
export default function Checklist({ items }) {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem('ega-checklist');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('ega-checklist', JSON.stringify(checked));
  }, [checked]);

  const toggle = (id) => {
    setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <label 
          key={item.id} 
          className="glass-card flex items-center gap-4 p-5 rounded-[1.5rem] cursor-pointer hover:bg-primary/5 transition-all group"
        >
          <input 
            type="checkbox" 
            checked={!!checked[item.id]} 
            onChange={() => toggle(item.id)}
            className="checkbox checkbox-primary rounded-lg"
          />
          <span className={`text-[13px] font-bold transition-all ${checked[item.id] ? 'opacity-40 line-through' : 'opacity-80'}`}>
            {item.label}
          </span>
          {checked[item.id] && (
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="ml-auto text-success text-xs font-black uppercase">
              Done
            </motion.span>
          )}
        </label>
      ))}
    </div>
  );
}

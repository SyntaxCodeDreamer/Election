import { memo } from 'react';

/**
 * Centered card for displaying key highlights/features.
 */
const HighlightCard = ({ icon, label, text }) => (
  <div className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center text-center gap-5 hover:border-primary/40 hover:translate-y-[-4px] transition-all duration-500">
    <div className="w-16 h-16 rounded-[1.5rem] bg-primary/10 flex items-center justify-center text-3xl shadow-inner">
      {icon}
    </div>
    <div className="space-y-2">
      <h3 className="text-[11px] font-black text-base-content uppercase tracking-[0.2em] opacity-40">{label}</h3>
      <p className="text-[13px] font-bold text-base-content leading-relaxed">{text}</p>
    </div>
  </div>
);

export default memo(HighlightCard);

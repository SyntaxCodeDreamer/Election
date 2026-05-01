import { memo } from 'react';

/**
 * Small horizontal card for eligibility criteria list items.
 */
const CriteriaCard = ({ icon, label, text }) => (
  <div className="glass-card p-6 rounded-[1.5rem] flex items-center gap-6 group hover:translate-x-1 transition-all">
    <div className="w-14 h-14 rounded-2xl bg-base-300 flex items-center justify-center text-3xl shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-black uppercase tracking-tight">{label}</h3>
      <p className="text-[12px] font-medium text-base-content/50 leading-relaxed mt-1">{text}</p>
    </div>
  </div>
);

export default memo(CriteriaCard);

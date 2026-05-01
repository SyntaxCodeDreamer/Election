import { memo } from 'react';

/**
 * Step indicator component with a circular index and content card.
 */
const NumberedStep = ({ index, title, text }) => (
  <div className="flex gap-8 items-start group">
    <div className="shrink-0 w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-xl font-black shadow-2xl group-hover:scale-110 transition-transform duration-500">
      {index}
    </div>
    <div className="glass-card flex-1 p-8 rounded-[2rem] group-hover:border-primary/30 group-hover:translate-x-2 transition-all duration-500">
      <h3 className="text-base font-black text-base-content tracking-tight mb-3 uppercase">{title}</h3>
      <p className="text-[13px] font-medium text-base-content/60 leading-relaxed">{text}</p>
    </div>
  </div>
);

export default memo(NumberedStep);

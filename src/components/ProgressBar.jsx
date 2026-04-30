import { memo } from 'react';

const ProgressBar = memo(({ current, total }) => {
  const pct = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full space-y-3">
      <div className="flex justify-between items-end px-1">
        <div className="flex flex-col">
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-primary mb-0.5">Current Progress</span>
          <span className="text-lg font-black tracking-tighter text-base-content">{pct}%</span>
        </div>
        <div className="badge bg-primary/10 border-primary/20 text-primary text-[8px] font-black px-2 py-2 rounded-md uppercase tracking-widest">
          Step {current + 1} / {total}
        </div>
      </div>
      <div className="h-3 w-full bg-base-content/5 rounded-full overflow-hidden p-0.5 border border-base-content/5 backdrop-blur-sm">
        <div 
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient rounded-full shadow-[0_0_15px_rgba(var(--p),0.3)] transition-all duration-700 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
});

export default ProgressBar;

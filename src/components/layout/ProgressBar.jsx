import { memo } from 'react';

/**
 * Visual progress indicator for the overall guide.
 */
const ProgressBar = ({ current, totalSteps, progress }) => (
  <div className="space-y-4">
    <div className="flex justify-between items-end px-1">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-30">CURRENT PROGRESS</span>
        <span className="text-4xl font-black text-base-content leading-none mt-1">{progress}%</span>
      </div>
      <div className="px-3 py-1 rounded-lg bg-base-300 text-[10px] font-black uppercase tracking-widest opacity-60">
        STEP {current + 1} / {totalSteps}
      </div>
    </div>
    <div className="w-full bg-base-300/50 h-2.5 rounded-full overflow-hidden p-0.5">
      <div 
        className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

export default memo(ProgressBar);

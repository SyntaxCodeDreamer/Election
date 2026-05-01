import { memo } from 'react';

/**
 * Navigation buttons at the bottom of the main content area.
 */
const BottomNav = ({ current, totalSteps, onNext, onPrev, onRestart }) => (
  <div className="flex justify-between items-center py-10 border-t border-white/5">
    <button 
      disabled={current === 0} 
      onClick={onPrev}
      className="btn btn-ghost gap-3 font-black uppercase tracking-[0.2em] text-[11px] disabled:opacity-20 hover:bg-primary/5 transition-all"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
    <div className="hidden sm:flex items-center gap-1">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-primary w-4' : 'bg-base-300'}`} />
      ))}
    </div>
    <button 
      onClick={current < totalSteps - 1 ? onNext : onRestart}
      className="btn btn-primary px-10 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] shadow-2xl shadow-primary/30 group"
    >
      {current < totalSteps - 1 ? (
        <>Next <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg></>
      ) : (
        <>Restart <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></>
      )}
    </button>
  </div>
);

export default memo(BottomNav);

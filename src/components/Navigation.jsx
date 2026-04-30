// Navigation — DaisyUI btn variants with tooltip on Restart.
export default function Navigation({ current, total, onPrev, onNext, onRestart }) {
  const isFirst = current === 0;
  const isLast  = current === total - 1;

  return (
    <div
      className="flex flex-col sm:flex-row items-center gap-6 pt-10 border-t border-base-content/5"
      role="navigation"
      aria-label="Step navigation controls"
    >
      {/* Restart */}
      <button
        onClick={onRestart}
        className="btn btn-ghost btn-sm text-[8px] font-black uppercase tracking-[0.2em] text-base-content/40 hover:text-primary order-last sm:order-first"
        aria-label="Restart from step 1"
      >
        ↺ Restart Journey
      </button>

      <div className="flex-1" />

      {/* Previous */}
      <button
        onClick={onPrev}
        disabled={isFirst}
        className="btn btn-ghost btn-sm text-[8px] font-black uppercase tracking-[0.2em] px-4 rounded-lg border border-base-content/10 disabled:opacity-30"
      >
        ← Previous
      </button>

      {/* Next / Finish */}
      <button
        onClick={isLast ? onRestart : onNext}
        className="btn-premium h-10 min-w-[150px] text-[10px] font-black uppercase tracking-widest"
      >
        {isLast ? '🎉 Finish' : 'Next Step →'}
      </button>
    </div>
  );
}

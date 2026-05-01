/**
 * Timeline Component
 * 
 * Displays a vertical list of election events with status indicators.
 * 
 * @param {Object} props - Component props.
 * @param {Object[]} props.events - Array of event objects {date, event, color}.
 */
const STATUS = {
  done:    { badge: 'btn-success text-success', label: 'DONE', dot: 'bg-success ring-success/20' },
  current: { badge: 'btn-primary text-primary',  label: 'NOW',  dot: 'bg-primary ring-4 ring-primary/30' },
  upcoming:{ badge: 'btn-ghost opacity-40',      label: 'SOON', dot: 'bg-base-content/20' },
  key:     { badge: 'btn-error text-error',      label: 'KEY',  dot: 'bg-error ring-error/20' },
};

const COLOR_MAP = {
  green:  'done',
  blue:   'current',
  yellow: 'upcoming',
  red:    'key',
  gray:   'upcoming',
};

export default function Timeline({ events }) {
  return (
    <div className="relative pl-10 space-y-6 before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary before:to-base-300 before:opacity-10">
      {events.map((ev, i) => {
        const s = STATUS[COLOR_MAP[ev.color]] || STATUS.upcoming;
        const isCurrent = COLOR_MAP[ev.color] === 'current';
        
        return (
          <div key={i} className="relative group">
            {/* Timeline dot with current indicator glow */}
            <div className={`absolute -left-[2.1rem] top-7 w-4 h-4 rounded-full border-4 border-base-200 z-10 transition-all duration-500 ${s.dot} ${isCurrent ? 'scale-125' : ''}`} />

            <div className={`glass-card p-6 rounded-[1.5rem] flex items-center justify-between gap-6 transition-all duration-500 ${isCurrent ? 'border-primary/30 ring-4 ring-primary/5 bg-primary/[0.02]' : ''}`}>
              <div className="space-y-1">
                <h3 className="text-sm font-black text-base-content uppercase tracking-tight">{ev.event}</h3>
                <p className="text-[10px] font-black text-base-content/30 uppercase tracking-[0.2em]">{ev.date}</p>
              </div>
              <button className={`btn btn-xs rounded-lg font-black text-[9px] tracking-widest border-none bg-base-200/50 hover:bg-base-200 ${s.badge}`}>
                {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping mr-1.5" />}
                {s.label}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

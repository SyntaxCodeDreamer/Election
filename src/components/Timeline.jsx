// Timeline — DaisyUI-styled cards with color-coded status badges.
const STATUS = {
  done:    { badge: 'badge-success',   label: '✓ Done',     dot: 'bg-success'  },
  current: { badge: 'badge-info',      label: '▶ Now',      dot: 'bg-info ring-4 ring-info/25' },
  upcoming:{ badge: 'badge-warning',   label: '⏳ Soon',    dot: 'bg-warning'  },
  key:     { badge: 'badge-error',     label: '📌 Key Date',dot: 'bg-error'    },
  gray:    { badge: 'badge-ghost',     label: '○ Upcoming', dot: 'bg-base-content/30' },
};

const COLOR_STATUS = {
  green:  'done',
  blue:   'current',
  yellow: 'upcoming',
  red:    'key',
  gray:   'gray',
};

export default function Timeline({ events }) {
  return (
    <ol className="relative pl-8 space-y-6 timeline-line" aria-label="Election timeline">
      {events.map((ev, i) => {
        const s = STATUS[COLOR_STATUS[ev.color]] || STATUS.gray;
        return (
          <li key={i} className="relative">
            {/* Timeline dot */}
            <span className={`absolute -left-[1.9rem] top-5 w-4 h-4 rounded-full border-4 border-base-200 z-10 ${s.dot}`} />

            <div className="glass-card rounded-xl group">
              <div className="card-body flex-row items-center justify-between gap-4 py-3 px-5">
                <div>
                  <p className="font-black text-xs text-base-content uppercase tracking-tight">{ev.event}</p>
                  <p className="text-[9px] font-bold text-base-content/30 uppercase tracking-widest mt-0.5">{ev.date}</p>
                </div>
                <span className={`badge ${s.badge} border-none font-black text-[8px] uppercase tracking-widest px-2 py-2 rounded-md flex-shrink-0`}>
                  {s.label}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

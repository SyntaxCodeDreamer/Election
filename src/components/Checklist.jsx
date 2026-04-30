// Checklist — DaisyUI checkbox + progress bar + celebration alert.
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'ega-checklist';

export default function Checklist({ items }) {
  const [checked, setChecked] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  });

  // Persist to localStorage whenever checked state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  const toggle   = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const doneCount = items.filter(i => checked[i.id]).length;
  const allDone  = doneCount === items.length;

  return (
    <div className="space-y-4">
      {/* Mini progress */}
      <div className="flex items-center gap-3">
        <progress
          className="progress progress-success flex-1 h-2.5 transition-all duration-500"
          value={doneCount}
          max={items.length}
          aria-label={`${doneCount} of ${items.length} items checked`}
        />
        <span className="badge badge-success badge-sm font-semibold">
          {doneCount}/{items.length}
        </span>
      </div>

      {/* Checklist items */}
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <label className={`
              flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all duration-200
              ${checked[item.id]
                ? 'bg-success/5 border-success/20'
                : 'bg-base-100 border-base-300 hover:border-primary/40'}
            `}>
              <input
                type="checkbox"
                className="checkbox checkbox-success checkbox-xs"
                checked={!!checked[item.id]}
                onChange={() => toggle(item.id)}
              />
              <span className={`text-xs font-bold transition-all duration-200 ${
                checked[item.id] ? 'line-through text-base-content/30' : 'text-base-content'
              }`}>
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>

      {/* Completion banner */}
      {allDone && (
        <div className="alert alert-success shadow-xl animate-fade-in rounded-2xl py-3 px-4 flex gap-4 items-center">
          <span className="text-xl">🎉</span>
          <div>
            <h3 className="text-xs font-black uppercase tracking-tight">You're fully prepared!</h3>
            <p className="text-[10px] font-bold opacity-70">See you at the polls. Your voice matters!</p>
          </div>
        </div>
      )}
    </div>
  );
}

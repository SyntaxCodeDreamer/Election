import { useState, useEffect } from 'react';

/**
 * CountdownTimer Component
 * 
 * Displays a countdown to a specific date (Election Day).
 * 
 * @param {Object} props - Component props.
 * @param {string} props.targetDate - ISO date string for the countdown target.
 */
export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
          secs: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'D', value: timeLeft.days },
    { label: 'H', value: timeLeft.hours },
    { label: 'M', value: timeLeft.mins },
    { label: 'S', value: timeLeft.secs },
  ];

  return (
    <div className="p-6 rounded-[2rem] bg-base-200/50 border border-white/5 shadow-inner">
      <div className="flex justify-between items-center mb-4 px-1">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-30">Countdown</span>
        <div className="px-2 py-0.5 rounded-md bg-primary/10 text-[8px] font-black text-primary uppercase">June 3, 2026</div>
      </div>
      <div className="flex justify-between gap-2">
        {units.map((u, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <span className="text-xl font-black text-base-content tracking-tighter leading-none">
              {u.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] font-black opacity-20 uppercase mt-1 tracking-widest">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

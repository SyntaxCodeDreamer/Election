import { useState, useEffect, useCallback } from 'react';

export default function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-xl font-black text-primary tabular-nums">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-[8px] uppercase tracking-widest font-bold opacity-40">{interval}</span>
      </div>
    );
  });

  return (
    <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-lg">⌛</span>
          <h3 className="text-[10px] font-black uppercase tracking-wider text-primary/80">Election Countdown</h3>
        </div>
        <span className="badge badge-primary badge-xs font-bold ">June 3, 2026</span>
      </div>

      <div className="flex justify-between px-2">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="text-xs font-bold text-success uppercase">Election is live! 🗳️</span>
        )}
      </div>
    </div>
  );
}

import { memo } from 'react';

/**
 * Detailed card for candidate profiles with image and focus areas.
 */
const CandidateCard = ({ name, party, role, motto, image, focus }) => (
  <div className="glass-card overflow-hidden rounded-[2.5rem] group hover:border-primary/50 transition-all duration-500 p-8">
    <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
      <div className="relative shrink-0">
        <div className="w-32 h-32 rounded-[2rem] overflow-hidden shadow-2xl ring-8 ring-primary/5 group-hover:ring-primary/10 transition-all duration-700">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary text-[9px] font-black text-white px-4 py-1.5 rounded-full uppercase shadow-2xl whitespace-nowrap z-10">
          {party}
        </div>
      </div>
      <div className="flex-1 text-center sm:text-left space-y-5">
        <div>
          <h3 className="text-2xl font-black text-base-content tracking-tighter leading-none">{name}</h3>
          <p className="text-[11px] font-black text-primary uppercase tracking-[0.2em] mt-2">{role}</p>
        </div>
        <p className="text-sm font-medium text-base-content/60 italic">"{motto}"</p>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 pt-1">
          {focus.map((f, i) => (
            <span key={i} className="px-3 py-1.5 rounded-xl bg-base-300 text-[10px] font-black text-base-content/40 uppercase tracking-wider">
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default memo(CandidateCard);

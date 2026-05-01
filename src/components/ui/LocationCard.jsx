import { memo } from 'react';

/**
 * Card for displaying polling locations and wait times.
 */
const LocationCard = ({ name, address, type, wait }) => (
  <div className="glass-card p-6 rounded-[2rem] flex items-center justify-between group hover:bg-primary/5 transition-all duration-500">
    <div className="flex items-center gap-6">
      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500">
        📍
      </div>
      <div>
        <h3 className="text-[15px] font-black text-base-content uppercase tracking-tight">{name}</h3>
        <p className="text-[12px] font-medium text-base-content/40 mt-1">{address}</p>
        <div className="badge badge-outline badge-sm mt-3 text-[10px] font-black opacity-30 uppercase tracking-widest px-3">{type}</div>
      </div>
    </div>
    <div className="text-right px-4">
      <span className="text-[10px] font-black text-base-content/20 uppercase block mb-1 tracking-[0.2em]">Est. Wait</span>
      <span className="text-lg font-black text-primary">{wait}</span>
    </div>
  </div>
);

export default memo(LocationCard);

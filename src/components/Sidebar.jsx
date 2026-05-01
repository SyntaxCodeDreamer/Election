import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

/**
 * Sidebar Component
 * 
 * Main navigation sidebar. Contains step links, a search bar, and external resources.
 * 
 * @param {Object} props - Component props.
 * @param {Object[]} props.steps - Array of step data objects.
 * @param {number} props.currentStep - Index of the currently active step.
 * @param {Function} props.onNavigate - Callback for step navigation.
 * @param {boolean} props.isOpen - Mobile drawer visibility state.
 * @param {Function} props.onClose - Callback to close mobile drawer.
 */
export default function Sidebar({ steps, currentStep, onNavigate, isOpen, onClose }) {
  const [search, setSearch] = useState('');

  const filteredSteps = steps.filter(s => s.title.toLowerCase().includes(search.toLowerCase()));

  // External links and resources
  const resources = [
    { label: 'Register to Vote', url: 'https://vote.gov', icon: '🌐' },
    { label: 'Official Handbook', url: '#', icon: '📖' },
  ];

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden" onClick={onClose} />}
      
      <aside className={`
        fixed top-0 left-0 h-full w-80 z-50 flex flex-col bg-base-100/60 backdrop-blur-3xl border-r border-white/5
        transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:sticky lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full shadow-2xl'}
      `}>
        {/* Sidebar Header */}
        <div className="p-8 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-black shadow-2xl shadow-primary/30">
              E
            </div>
            <div className="flex flex-col">
              <span className="font-black tracking-widest text-lg leading-none">Assistant</span>
            </div>
          </div>
        </div>

        {/* Search Bar - Matching Reference */}
        <div className="px-6 py-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search steps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-sm w-full bg-base-200/50 border-none focus:ring-2 focus:ring-primary/20 pl-10 rounded-xl text-xs font-bold transition-all placeholder:opacity-30"
            />
            <svg className="h-4 w-4 absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 custom-scrollbar space-y-8 pt-2">
          {/* Navigation List */}
          <ul className="space-y-1.5">
            {filteredSteps.map((step) => {
              const idx = steps.findIndex(s => s.id === step.id);
              const isActive = idx === currentStep;
              const isDone = idx < currentStep;
              
              return (
                <li key={step.id}>
                  <button
                    onClick={() => { onNavigate(idx); onClose(); }}
                    className={`
                      w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all text-left group
                      ${isActive 
                        ? 'bg-primary/10 text-primary font-black shadow-none' 
                        : 'hover:bg-primary/5 text-base-content/50 hover:text-primary'}
                    `}
                  >
                    <div className={`
                      w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black transition-all
                      ${isActive ? 'bg-primary text-white' : isDone ? 'bg-success/10 text-success' : 'bg-base-300'}
                    `}>
                      {isDone ? '✓' : idx + 1}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] font-black uppercase tracking-tight truncate">{step.title}</span>
                      <span className={`text-[8px] uppercase tracking-widest opacity-40 font-bold ${isActive ? 'text-primary/60' : ''}`}>{step.key}</span>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="px-4 space-y-6">
            {/* Find Your Poll Internal Link */}
            <div className="space-y-4">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 px-1">Interactive Features</h3>
               <button 
                onClick={() => onNavigate(7)}
                className="w-full flex items-center gap-3 p-2 rounded-xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all group"
               >
                 <span className="text-sm grayscale group-hover:grayscale-0 transition-all">📍</span>
                 <span className="text-[10px] font-bold text-primary">Find My Poll Station</span>
               </button>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20 px-1">Quick Links</h3>
              <div className="grid gap-2">
                {resources.map((res, i) => (
                  <a key={i} href={res.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-xl hover:bg-base-300/50 transition-all group">
                    <span className="text-sm grayscale group-hover:grayscale-0 transition-all">{res.icon}</span>
                    <span className="text-[10px] font-bold opacity-50 group-hover:opacity-100 transition-all">{res.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Sidebar Footer - Matching Reference */}
        <div className="p-6 space-y-4 bg-base-100/40 backdrop-blur-xl border-t border-white/5">
          <CountdownTimer targetDate="2026-06-03T07:00:00" />
          
          <div className="p-5 rounded-[1.5rem] bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
            <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em] mb-2 block">Pro Tip</span>
            <p className="text-[11px] font-medium opacity-70 leading-relaxed text-base-content">
              Your voice is your power. Every single vote shapes the future of your community.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

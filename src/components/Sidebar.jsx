import { useState } from 'react';
import CountdownTimer from './CountdownTimer';

export default function Sidebar({ steps, currentStep, onNavigate, isOpen, onClose }) {
  const [search, setSearch] = useState('');

  const filteredSteps = steps.filter(step => 
    step.title.toLowerCase().includes(search.toLowerCase()) ||
    step.key.toLowerCase().includes(search.toLowerCase())
  );

  const resources = [
    { label: 'Register to Vote', url: 'https://vote.gov', icon: '🌐' },
    { label: 'Find Your Poll', url: 'https://www.vote.org/polling-place-locator/', icon: '📍' },
    { label: 'Official Handbook', url: '#', icon: '📖' },
  ];

  return (
    <>
      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        id="sidebar-nav"
        aria-label="Step navigation"
        className={`
          fixed top-0 left-0 h-full w-80 z-30 flex flex-col
          bg-base-100/60 backdrop-blur-2xl border-r border-white/10
          shadow-[20px_0_40px_rgba(0,0,0,0.03)]
          transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shadow-none lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Brand header */}
        <div className="px-8 pt-8 pb-4 flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="text-lg font-black">E</span>
            </div>
            <div>
              <h1 className="text-base font-black tracking-tight text-base-content leading-none uppercase">Assistant</h1>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4">
          <div className="relative group">
            <input
              type="text"
              placeholder="Search steps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input input-sm w-full bg-base-200/50 border-none focus:ring-1 focus:ring-primary/30 pl-8 rounded-xl text-xs font-bold transition-all"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 group-focus-within:text-primary transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 pb-4 custom-scrollbar">
          <ul className="menu menu-vertical gap-1.5 p-0">
            {filteredSteps.length > 0 ? (
              filteredSteps.map((step) => {
                const idx = steps.findIndex(s => s.id === step.id);
                const isActive = idx === currentStep;
                const isDone = idx < currentStep;
                return (
                  <li key={step.id}>
                    <button
                      onClick={() => { onNavigate(idx); onClose(); }}
                      className={`
                        group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300
                        ${isActive
                          ? 'bg-primary text-primary-content shadow-xl shadow-primary/20 font-bold'
                          : 'hover:bg-primary/5 text-base-content/60 hover:text-primary'}
                      `}
                      aria-current={isActive ? 'step' : undefined}
                    >
                      <div className={`
                        w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-black transition-all duration-300
                        ${isActive
                          ? 'bg-white/20 text-white'
                          : isDone
                            ? 'bg-success/20 text-success'
                            : 'bg-base-200 text-base-content/40 group-hover:bg-primary/10 group-hover:text-primary'}
                      `}>
                        {isDone ? '✓' : idx + 1}
                      </div>
                      <div className="flex flex-col min-w-0 text-left">
                        <span className="text-xs font-bold tracking-tight truncate">{step.title}</span>
                        <span className={`text-[9px] uppercase tracking-wider opacity-60 mt-0.5 font-bold ${isActive ? 'text-white/70' : ''}`}>
                          {step.key}
                        </span>
                      </div>
                    </button>
                  </li>
                );
              })
            ) : (
              <div className="px-4 py-8 text-center opacity-30">
                <span className="text-2xl mb-2 block">🔍</span>
                <p className="text-[10px] font-bold uppercase tracking-widest">No steps found</p>
              </div>
            )}
          </ul>

          <div className="divider opacity-5 px-4 my-2"></div>

          {/* Quick Resources */}
          <div className="px-4 py-2">
            <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-base-content/30 mb-4 px-1">Quick Resources</h3>
            <ul className="space-y-2">
              {resources.map((res, i) => (
                <li key={i}>
                  <a 
                    href={res.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-1 py-1 group hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-sm grayscale group-hover:grayscale-0 transition-all">{res.icon}</span>
                    <span className="text-[10px] font-bold text-base-content/60 group-hover:text-primary transition-colors">{res.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Footer Area */}
        <div className="p-6 space-y-4">
          <CountdownTimer targetDate="2026-06-03T07:00:00" />
          
          <div className="p-5 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Pro Tip</p>
            <p className="text-[11px] font-medium text-base-content/70 leading-relaxed">
              Your voice is your power. Every single vote shapes the future of your community.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

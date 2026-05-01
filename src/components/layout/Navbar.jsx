import { memo } from 'react';

/**
 * Top navigation bar with theme toggle and current step info.
 */
const Navbar = ({ step, current, totalSteps, darkMode, setDarkMode, onMenuClick }) => (
  <header className="navbar sticky top-0 z-20 px-6 sm:px-12 bg-base-100/40 backdrop-blur-xl border-b border-white/5 h-20">
    <div className="navbar-start">
      <button className="btn btn-ghost btn-circle lg:hidden" onClick={onMenuClick}>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div className="navbar-center flex flex-col items-center gap-0.5">
      <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 text-base-content/30">ELECTION ASSISTANT</span>
      <div className="flex items-center gap-2">
        <span className="text-lg">{step.icon}</span>
        <h1 className="text-sm font-black uppercase tracking-tight text-base-content">{step.title}</h1>
      </div>
    </div>
    <div className="navbar-end gap-4">
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="text-[10px] font-black text-primary uppercase">{current + 1} / {totalSteps}</span>
      </div>
      <label className="swap swap-rotate btn btn-ghost btn-sm btn-circle">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        <svg className="swap-on fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        <svg className="swap-off fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
      </label>
    </div>
  </header>
);

export default memo(Navbar);

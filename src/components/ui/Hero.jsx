import { memo } from 'react';

/**
 * Hero component for step introduction banners.
 */
const Hero = ({ emoji, id, title, body }) => (
  <div className="rounded-[2.5rem] p-10 text-white relative overflow-hidden mb-12 shadow-2xl bg-gradient-to-br from-[#2563eb] to-[#7c3aed]">
    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
      <div className="w-28 h-28 rounded-[2rem] bg-[#2563eb] flex items-center justify-center text-6xl shadow-2xl animate-bounce-slow shrink-0 ring-8 ring-white/10">
        {emoji}
      </div>
      <div className="text-center md:text-left space-y-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.5em] opacity-70 mb-2 block">Instruction {id + 1}</span>
          <h2 className="text-4xl font-black tracking-tight leading-[0.9]">{title}</h2>
        </div>
        <p className="text-[15px] font-medium opacity-80 max-w-2xl leading-relaxed">{body}</p>
      </div>
    </div>
    {/* Decorative blur elements */}
    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-black/10 rounded-full blur-[80px]" />
  </div>
);

export default memo(Hero);

// FAQCard — uses DaisyUI collapse (accordion) component.
import { useState } from 'react';

export default function FAQCard({ q, a, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`collapse collapse-arrow border border-base-300 bg-base-100 rounded-xl
        transition-shadow duration-200 ${open ? 'shadow-md border-primary/40' : 'hover:shadow-sm'}`}
    >
      <input
        type="checkbox"
        id={`faq-${index}`}
        checked={open}
        onChange={() => setOpen(o => !o)}
        className="peer hidden"
        aria-controls={`faq-answer-${index}`}
        aria-expanded={open}
      />
      <label
        htmlFor={`faq-${index}`}
        className="collapse-title flex items-center gap-3 cursor-pointer select-none py-3 px-4 min-h-0"
      >
        <span className={`
          w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-colors duration-200
          ${open ? 'bg-primary text-primary-content' : 'bg-base-300 text-base-content/70'}
        `}>
          {index + 1}
        </span>
        <span className={`text-xs font-bold transition-colors duration-200 ${open ? 'text-primary' : 'text-base-content'}`}>
          {q}
        </span>
      </label>

      <div
        id={`faq-answer-${index}`}
        className="collapse-content text-xs text-base-content/60 leading-relaxed"
      >
        <p className="pt-0 pb-3">{a}</p>
      </div>
    </div>
  );
}

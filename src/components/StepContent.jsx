import { memo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Timeline  from './Timeline';
import FAQCard   from './FAQCard';
import Checklist from './Checklist';
import EligibilityQuiz from './EligibilityQuiz';

// ── Page transition variants ──────────────────────────────────────────────────
const pageVariants = {
  initial:  { opacity: 0, x: 24 },
  animate:  { opacity: 1, x: 0,  transition: { duration: 0.35, ease: 'easeOut' } },
  exit:     { opacity: 0, x: -24, transition: { duration: 0.2,  ease: 'easeIn' } },
};

// ── Sub-components ────────────────────────────────────────────────────────────

const HighlightCard = memo(({ icon, label, text }) => {
  return (
    <div className="glass-card p-4 rounded-3xl flex flex-col items-center text-center gap-3 hover:border-primary/40">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl shadow-inner shadow-primary/5">
        {icon}
      </div>
      <div>
        <h3 className="text-[10px] font-black text-base-content uppercase tracking-wider mb-1">{label}</h3>
        <p className="text-[11px] font-medium text-base-content/60 leading-relaxed">{text}</p>
      </div>
    </div>
  );
});

const CriteriaCard = memo(({ icon, label, text }) => {
  return (
    <div className="glass-card p-4 rounded-xl flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-base-200 flex items-center justify-center text-xl">
        {icon}
      </div>
      <div>
        <h3 className="text-xs font-bold text-base-content uppercase tracking-tight">{label}</h3>
        <p className="text-[11px] font-medium text-base-content/50">{text}</p>
      </div>
    </div>
  );
});

const CandidateCard = memo(({ name, party, role, motto, image, focus }) => {
  return (
    <div className="glass-card overflow-hidden rounded-3xl group hover:border-primary/50 transition-all duration-500">
      <div className="flex flex-col sm:flex-row gap-6 p-6">
        <div className="relative">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
            <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-[8px] font-black text-white px-2 py-1 rounded-md uppercase shadow-lg">
            {party}
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-black text-base-content tracking-tight">{name}</h3>
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{role}</p>
          </div>
          <p className="text-xs font-medium text-base-content/60 italic">"{motto}"</p>
          <div className="flex flex-wrap gap-2">
            {focus.map((f, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full bg-base-200 text-[9px] font-black text-base-content/40 uppercase">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const LocationCard = memo(({ name, address, type, wait }) => {
  return (
    <div className="glass-card p-5 rounded-2xl flex items-center justify-between group hover:bg-primary/5">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-xl text-secondary group-hover:scale-110 transition-transform">
          📍
        </div>
        <div>
          <h3 className="text-sm font-black text-base-content uppercase tracking-tight">{name}</h3>
          <p className="text-[11px] font-medium text-base-content/40">{address}</p>
          <div className="badge badge-outline badge-xs mt-1 text-[8px] font-black opacity-40 uppercase">{type}</div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[9px] font-black text-base-content/30 uppercase block mb-0.5">Est. Wait</span>
        <span className="text-xs font-black text-primary">{wait}</span>
      </div>
    </div>
  );
});

const NumberedStep = memo(({ step, title, text }) => {
  return (
    <div className="flex gap-5 items-start group">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-sm font-black shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
        {step}
      </div>
      <div className="glass-card flex-1 p-5 rounded-2xl group-hover:border-primary/30">
        <h3 className="text-sm font-black text-base-content tracking-tight mb-1 uppercase">{title}</h3>
        <p className="text-xs font-medium text-base-content/60 leading-relaxed">{text}</p>
      </div>
    </div>
  );
});

// ── Main StepContent ──────────────────────────────────────────────────────────

export default function StepContent({ step }) {
  const { content } = step;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="space-y-8"
      >
        {/* Hero banner */}
        <div className="step-hero rounded-3xl relative">
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-5xl shadow-2xl animate-bounce-slow">
              {step.emoji}
            </div>
            <div className="text-center md:text-left">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-90 mb-1 block">Instruction {step.id + 1}</span>
              <h2 className="text-2xl font-black tracking-tighter leading-none mb-3">{content.heading}</h2>
              <p className="text-sm font-medium opacity-80 max-w-xl leading-relaxed">{content.body}</p>
            </div>
          </div>
        </div>

        {/* Dynamic sections based on step key */}
        <div className="space-y-6">
          {/* Overview Section */}
          {step.key === 'overview' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.highlights.map((h, i) => <HighlightCard key={i} {...h} />)}
            </div>
          )}

          {/* Timeline Section */}
          {step.key === 'timeline' && <Timeline events={content.timeline} />}

          {/* Eligibility Section */}
          {step.key === 'eligibility' && (
            <div className="space-y-10 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 gap-4">
                {content.criteria.map((c, i) => <CriteriaCard key={i} {...c} />)}
              </div>
              
              <div className="divider opacity-5">OR CHECK INSTANTLY</div>

              <EligibilityQuiz />
            </div>
          )}

          {/* Steps Section */}
          {(step.key === 'registration' || step.key === 'voting') && (
            <div className="space-y-8 max-w-2xl mx-auto">
              {content.steps.map((s, i) => <NumberedStep key={i} {...s} />)}
            </div>
          )}

          {/* FAQs Section */}
          {step.key === 'faqs' && (
            <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
              {content.faqs.map((faq, i) => (
                <FAQCard key={i} q={faq.q} a={faq.a} index={i} />
              ))}
            </div>
          )}

          {/* Candidates Section */}
          {step.key === 'candidates' && (
            <div className="space-y-6 max-w-2xl mx-auto">
              {content.candidates.map((c, i) => <CandidateCard key={i} {...c} />)}
            </div>
          )}

          {/* Locations Section */}
          {step.key === 'locations' && (
            <div className="space-y-4 max-w-2xl mx-auto">
              {content.locations.map((l, i) => <LocationCard key={i} {...l} />)}
            </div>
          )}

          {/* Checklist Section */}
          {step.key === 'checklist' && (
            <div className="max-w-xl mx-auto">
              <Checklist items={content.items} />
            </div>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

import { AnimatePresence, motion } from 'framer-motion';
import Timeline from './Timeline';
import FAQCard from './FAQCard';
import Checklist from './Checklist';
import EligibilityQuiz from './EligibilityQuiz';
import PollFinder from './PollFinder';

// UI Components
import Hero from './ui/Hero';
import HighlightCard from './ui/HighlightCard';
import CandidateCard from './ui/CandidateCard';
import LocationCard from './ui/LocationCard';
import NumberedStep from './ui/NumberedStep';
import CriteriaCard from './ui/CriteriaCard';

const pageVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
};

/**
 * Main content router for the election guide steps.
 */
export default function StepContent({ step }) {
  const { content } = step;

  const renderContent = () => {
    switch (step.key) {
      case 'overview':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.highlights.map((h, i) => (
              <HighlightCard key={i} {...h} />
            ))}
          </div>
        );

      case 'timeline':
        return <Timeline events={content.timeline} />;

      case 'eligibility':
        return (
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-4">
              {content.criteria.map((c, i) => (
                <CriteriaCard key={i} {...c} />
              ))}
            </div>
            <div className="divider opacity-5 font-black text-[11px] uppercase tracking-[0.5em]">Eligibility Check</div>
            <EligibilityQuiz />
          </div>
        );

      case 'registration':
      case 'voting':
        return (
          <div className="space-y-10">
            {content.steps.map((s, i) => (
              <NumberedStep key={i} index={i + 1} title={s.title} text={s.text} />
            ))}
          </div>
        );

      case 'faqs':
        return (
          <div className="grid grid-cols-1 gap-5">
            {content.faqs.map((faq, i) => (
              <FAQCard key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        );

      case 'candidates':
        return (
          <div className="space-y-8">
            {content.candidates.map((c, i) => (
              <CandidateCard key={i} {...c} />
            ))}
          </div>
        );

      case 'locations':
        return <PollFinder locations={content.locations} />;

      case 'checklist':
        return (
          <div className="max-w-2xl mx-auto">
             <Checklist items={content.items} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step.id}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="space-y-12"
      >
        <Hero emoji={step.emoji} id={step.id} title={content.heading} body={content.body} />
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

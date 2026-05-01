import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * EligibilityQuiz Component
 * 
 * A simple interactive quiz to help users determine their eligibility to vote.
 */
export default function EligibilityQuiz() {
  const [step, setStep] = useState(0);
  const [results, setResults] = useState([]);

  const questions = [
    { q: 'Are you a citizen of the country?', icon: '🌐' },
    { q: 'Will you be 18 or older by Election Day?', icon: '🎂' },
    { q: 'Are you a resident of your constituency?', icon: '🏠' },
  ];

  const handleAnswer = (ans) => {
    const newResults = [...results, ans];
    if (step < questions.length - 1) {
      setResults(newResults);
      setStep(step + 1);
    } else {
      setResults(newResults);
      setStep(questions.length);
    }
  };

  const isEligible = results.every(r => r === true);

  return (
    <div className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden border-primary/10">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div key="q" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-5xl">{questions[step].icon}</div>
              <h3 className="text-xl font-black uppercase tracking-tight">{questions[step].q}</h3>
            </div>
            <div className="flex gap-4">
              <button onClick={() => handleAnswer(true)} className="btn btn-primary flex-1 rounded-2xl font-black uppercase tracking-widest text-[10px]">Yes, I am</button>
              <button onClick={() => handleAnswer(false)} className="btn btn-ghost bg-base-300 flex-1 rounded-2xl font-black uppercase tracking-widest text-[10px]">No, I am not</button>
            </div>
            <div className="flex justify-center gap-2">
              {questions.map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${i === step ? 'bg-primary' : 'bg-base-300'}`} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6 py-4">
            <div className={`text-6xl mb-4 ${isEligible ? 'text-success' : 'text-error'}`}>
              {isEligible ? '🎉' : '⚠️'}
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase tracking-tight">
                {isEligible ? 'You are Eligible!' : 'Check Local Laws'}
              </h3>
              <p className="text-sm opacity-60 mt-2 font-medium">
                {isEligible 
                  ? 'Great news! You meet the basic requirements to participate in the upcoming election.' 
                  : 'Based on your answers, you might not meet all requirements. We recommend contacting your local election office.'}
              </p>
            </div>
            <button onClick={() => { setStep(0); setResults([]); }} className="btn btn-ghost btn-sm uppercase tracking-widest text-[9px] font-black opacity-40 hover:opacity-100">Retake Quiz</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

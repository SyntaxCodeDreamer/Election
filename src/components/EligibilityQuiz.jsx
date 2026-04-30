import { useState } from 'react';

const questions = [
  { id: 'age', text: 'Are you 18 years of age or older?', icon: '🎂' },
  { id: 'citizenship', text: 'Are you a citizen of the country?', icon: '🌐' },
  { id: 'residency', text: 'Are you a resident of your constituency?', icon: '🏠' },
];

export default function EligibilityQuiz() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleAnswer = (id, value) => {
    const newAnswers = { ...answers, [id]: value };
    setAnswers(newAnswers);

    if (Object.keys(newAnswers).length === questions.length) {
      const isEligible = Object.values(newAnswers).every(v => v === true);
      setResult(isEligible ? 'eligible' : 'ineligible');
    }
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
  };

  if (result) {
    return (
      <div className={`p-6 rounded-3xl border animate-fade-in ${
        result === 'eligible' 
          ? 'bg-success/5 border-success/20 text-success' 
          : 'bg-error/5 border-error/20 text-error'
      }`}>
        <div className="text-center space-y-4">
          <span className="text-4xl block">{result === 'eligible' ? '✅' : '❌'}</span>
          <h3 className="text-lg font-black uppercase tracking-tight">
            {result === 'eligible' ? 'You are likely eligible!' : 'You may not be eligible.'}
          </h3>
          <p className="text-xs font-bold opacity-70 leading-relaxed max-w-xs mx-auto text-base-content/60">
            {result === 'eligible' 
              ? 'Based on your answers, you meet the basic requirements. Proceed to registration!'
              : 'Please check with your local election office for specific details regarding your situation.'}
          </p>
          <button onClick={reset} className="btn btn-ghost btn-xs font-black uppercase tracking-widest opacity-40 hover:opacity-100">
            Start Over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-base-content/40">Eligibility Quick-Check</h3>
      </div>

      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="glass-card p-4 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{q.icon}</span>
              <span className="text-xs font-bold text-base-content">{q.text}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => handleAnswer(q.id, true)}
                className={`btn btn-square btn-sm rounded-xl transition-all ${answers[q.id] === true ? 'btn-success' : 'btn-ghost bg-base-200'}`}
              >
                Yes
              </button>
              <button 
                onClick={() => handleAnswer(q.id, false)}
                className={`btn btn-square btn-sm rounded-xl transition-all ${answers[q.id] === false ? 'btn-error' : 'btn-ghost bg-base-200'}`}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

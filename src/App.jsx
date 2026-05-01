import { useState, useEffect, useMemo } from 'react';
import { steps } from './data/steps';

// Components
import Sidebar from './components/Sidebar';
import StepContent from './components/StepContent';

// Layout Components
import Navbar from './components/layout/Navbar';
import ProgressBar from './components/layout/ProgressBar';
import BottomNav from './components/layout/BottomNav';
import Footer from './components/layout/Footer';

/**
 * Root Application component.
 * Manages global state: current step, sidebar visibility, and theme mode.
 */
export default function App() {
  // ── State ───────────────────────────────────────────────────────────────────
  
  const [current, setCurrent] = useState(() => {
    const saved = parseInt(localStorage.getItem('ega-step'), 10);
    return (!isNaN(saved) && saved >= 0 && saved < steps.length) ? saved : 0;
  });
  
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('ega-dark');
    return saved !== null ? saved === 'true' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // ── Effects (Persistence & Theme) ──────────────────────────────────────────
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('ega-dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('ega-step', current);
  }, [current]);

  // ── Derived Data ────────────────────────────────────────────────────────────
  
  const step = useMemo(() => steps[current], [current]);
  const progress = useMemo(() => Math.round(((current + 1) / steps.length) * 100), [current]);
  const totalSteps = steps.length;

  // ── Handlers ────────────────────────────────────────────────────────────────
  
  const handleNext = () => setCurrent(c => Math.min(c + 1, totalSteps - 1));
  const handlePrev = () => setCurrent(c => Math.max(c - 1, 0));
  const handleRestart = () => setCurrent(0);
  const handleNavigate = (index) => {
    setCurrent(index);
    setSidebarOpen(false);
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-base-200 selection:bg-primary selection:text-white">
      <Sidebar 
        steps={steps} 
        currentStep={current} 
        onNavigate={handleNavigate} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />

      <div className="flex-1 flex flex-col min-h-screen relative overflow-hidden">
        <Navbar 
          step={step}
          current={current}
          totalSteps={totalSteps}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 p-6 sm:p-12 max-w-5xl mx-auto w-full space-y-12">
          <ProgressBar 
            current={current}
            totalSteps={totalSteps}
            progress={progress}
          />

          <StepContent step={step} />

          <BottomNav 
            current={current}
            totalSteps={totalSteps}
            onNext={handleNext}
            onPrev={handlePrev}
            onRestart={handleRestart}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}

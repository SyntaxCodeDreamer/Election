import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LocationCard from './ui/LocationCard';

/**
 * PollFinder Component
 * 
 * Provides an interactive interface for users to search for their assigned polling station.
 * Simulates a lookup process with animations and displays a map-like visual for results.
 * 
 * @param {Object[]} locations - Array of polling station objects from step data.
 */
export default function PollFinder({ locations }) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  /**
   * Handles the search form submission.
   * Validates input and simulates an API call to find a matching location.
   */
  const handleSearch = (e) => {
    e.preventDefault();
    
    // Validation: Ensure the query is not empty
    if (!query.trim()) {
      setError('Please enter an address or zip code');
      return;
    }

    setError('');
    setIsSearching(true);
    setResult(null);

    // Simulate network latency for a more realistic "searching" feel
    setTimeout(() => {
      // Logic: Pick a random location to simulate a search match
      if (locations && locations.length > 0) {
        const match = locations[Math.floor(Math.random() * locations.length)];
        setResult(match);
      } else {
        setError('No polling stations found in your area.');
      }
      setIsSearching(false);
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      {/* Search Input Section */}
      <form onSubmit={handleSearch} className="space-y-2">
        <div className="relative group">
          <input
            type="text"
            placeholder="Enter your Zip Code or Address..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (error) setError('');
            }}
            className={`input input-lg w-full bg-base-100/40 backdrop-blur-xl border-white/5 focus:border-primary/30 rounded-[2rem] px-8 text-sm font-bold shadow-2xl transition-all ${error ? 'border-error/50' : ''}`}
          />
          <button 
            type="submit"
            disabled={isSearching}
            className="absolute right-3 top-1/2 -translate-y-1/2 btn btn-primary rounded-2xl px-6 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 disabled:opacity-50"
          >
            {isSearching ? <span className="loading loading-spinner loading-xs" /> : 'Find My Poll'}
          </button>
        </div>
        {/* Error Feedback */}
        <AnimatePresence>
          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-[10px] font-black text-error uppercase tracking-widest px-6"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      {/* Dynamic Content: Search Status & Results */}
      <AnimatePresence mode="wait">
        {/* Loading State */}
        {isSearching && (
          <motion.div 
            key="searching"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-12 space-y-4"
          >
            <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30">Locating your polling station...</p>
          </motion.div>
        )}

        {/* Success Result State */}
        {result && !isSearching && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Match Found</span>
              <h3 className="text-xl font-black uppercase tracking-tight">Your Designated Polling Station</h3>
            </div>
            
            <div className="relative">
              <LocationCard {...result} />
              <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-success flex items-center justify-center text-white shadow-lg animate-bounce">
                ✓
              </div>
            </div>

            {/* Visual Context: Map Representation */}
            <div className="rounded-[2.5rem] bg-base-300 h-48 relative overflow-hidden group border border-white/5 shadow-inner">
              <div className="absolute inset-0 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i14!2i8413!3i5468!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i4111425')] opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-base-300 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center animate-ping">
                   <div className="w-4 h-4 rounded-full bg-primary" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                 {result.address}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secondary Content: Browse fallback */}
      {!result && !isSearching && (
        <div className="space-y-6 pt-4">
          <div className="divider opacity-5 font-black text-[9px] uppercase tracking-[0.4em]">Browse Nearby Stations</div>
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <LocationCard key={i} {...loc} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

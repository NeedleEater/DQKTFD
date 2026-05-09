import { useState, useEffect } from 'react';
import { Sun, Moon, ExternalLink } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sync the class on both html and body for maximum compatibility
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-6 gap-4 transition-all duration-500">
      <div className="flex items-center gap-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-2 border-slate-100 dark:border-white/10 p-2 rounded-[2rem] shadow-2xl shadow-sky-900/10 transition-all duration-300">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-all text-slate-800 dark:text-white active:scale-95"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-orange-400 fill-orange-400" />
          ) : (
            <Moon className="w-6 h-6 text-sky-600 fill-sky-600" />
          )}
        </button>
        
        <div className="w-px h-8 bg-slate-200 dark:bg-white/20" />
        
        <a
          id="website-link"
          href="https://www.kidstowndental.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-400 text-white text-sm font-black transition-all shadow-xl shadow-orange-500/20 active:scale-95"
        >
          <span className="hidden sm:inline">Visit</span> Website
          <ExternalLink className="w-4 h-4 stroke-[3]" />
        </a>
      </div>
    </nav>
  );
}

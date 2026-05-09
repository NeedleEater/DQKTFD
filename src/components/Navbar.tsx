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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end items-center px-6 py-4 gap-4 transition-all duration-500">
      <div className="flex items-center gap-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-white/10 p-1.5 rounded-full shadow-lg transition-all duration-300">
        <button
          id="theme-toggle"
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-900 dark:text-white"
          aria-label="Toggle Theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-indigo-600" />
          )}
        </button>
        
        <div className="w-px h-6 bg-slate-200 dark:bg-white/20" />
        
        <a
          id="website-link"
          href="https://www.kidstowndental.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold transition-all shadow-md hover:shadow-blue-600/20"
        >
          <span className="hidden sm:inline">Visit</span> Website
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </nav>
  );
}
